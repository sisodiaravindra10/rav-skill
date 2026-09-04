#!/usr/bin/env node
// rav verify: the craft floor, made executable.
//
// The floor in reference/craft-floor.md is readable but not checkable, so it
// degrades into a document you nod at. These are the subset of its rules a
// machine can decide.
//
//   node verify.mjs --source <paths...>   scan source, no browser needed
//   node verify.mjs --emit-browser        print a probe to run in the page
//   node verify.mjs --source <p> --json   machine-readable
//
// Exit 0 clean, 2 findings, 1 usage error. Matches impeccable's detect.mjs.

import { readFileSync, statSync, readdirSync } from "node:fs";
import { join, extname } from "node:path";

const SCANNABLE = new Set([".html", ".htm", ".jsx", ".tsx", ".js", ".ts", ".css", ".vue", ".svelte", ".astro"]);
const SKIP_DIR = new Set(["node_modules", "dist", "build", ".git", ".next", "out", "coverage"]);

// ---------------------------------------------------------------- source rules

const RULES = [
  { id: "em-dash", severity: "error",
    why: "Zero em dashes and zero en-dash separators anywhere visible. Hyphen only.",
    test: (l) => /[—]|\s[–]\s/.test(l) },

  { id: "h-screen", severity: "error",
    why: "h-screen jumps on iOS Safari. Use a dvh rule with a vh fallback.",
    test: (l) => /\bh-screen\b/.test(l) },

  { id: "competing-height-utilities", severity: "error",
    why: "Two height utilities on one element: the winner depends on generated order, not authoring order.",
    test: (l) => {
      const m = l.match(/class(?:Name)?=["'`]([^"'`]+)/);
      if (!m) return false;
      const h = m[1].split(/\s+/).filter((c) => /^h-(?!full$|auto$)\S+/.test(c) && !/^h-\[?\d+(px|rem)?\]?$/.test(c));
      return h.length > 1;
    } },

  { id: "scroll-listener", severity: "error",
    why: "Scroll listeners run every frame. Use IntersectionObserver, ScrollTrigger, useScroll or animation-timeline.",
    test: (l) => /addEventListener\(\s*["'`]scroll["'`]/.test(l) },

  { id: "enumerated-section-label", severity: "error",
    why: "Its position on the page already says which section it is. The number is decoration.",
    test: (l) => /\b(section|step|phase|stage|pass)\s*[-_ ]?\d{1,2}\s*(\/|·|:|<)/i.test(l)
               || /["'>]\s*\d{2}\s*\/\s*[A-Za-z]{3,}/.test(l) },

  { id: "scroll-cue", severity: "error",
    why: "If the visitor has not scrolled yet they are looking at the hero. They know what scroll is.",
    test: (l) => /scroll (to explore|down|to walk)|↓\s*scroll|>\s*scroll\s*</i.test(l) },

  { id: "blanket-reduced-motion-kill", severity: "error",
    why: "A global 0.01ms kill destroys feedback along with decoration. Give reduced motion an intentional path.",
    test: (l) => /animation-duration:\s*0?\.0+\d*m?s\s*!important/.test(l) },

  { id: "theme-fn-in-plain-css", severity: "error",
    why: "theme() in plain CSS couples to Tailwind config load order and goes stale. Use a CSS custom property.",
    test: (l, f) => f.endsWith(".css") && /\btheme\(["']/.test(l) },

  { id: "tailwind-colour-as-var", severity: "error",
    why: "A var() colour in the Tailwind config makes it emit no utility at all, silently. Use a literal.",
    test: (l, f) => /tailwind\.config/.test(f) && /^\s*[\w-]+:\s*["']var\(--/.test(l) },

  { id: "reveal-gate", severity: "error",
    why: "A class that hides content by default needs a path that reveals it when the script never arrives.",
    test: (l) => /^\s*\.[\w-]+\s*\{[^}]*opacity:\s*0\s*[;}]/.test(l) },

  { id: "cdn-without-fallback", severity: "warning",
    why: "A render-critical script from a CDN needs an onerror path, or the page ships blank when it fails.",
    test: (l) => /<script[^>]+src=["']https?:\/\/(cdn|unpkg|cdnjs)/.test(l) && !/onerror=/.test(l) },

  { id: "low-alpha-text", severity: "warning",
    why: "White at 40% or less on a dark ground lands under 4.5:1. Measure it, do not eyeball it.",
    test: (l) => /\btext-(white|black)\/(?:[0-9]|[1-3][0-9]|4[0-4])\b/.test(l) },

  { id: "banned-copy", severity: "warning",
    why: "Filler words. Use a concrete verb.",
    test: (l) => /\b(elevate|seamless|unleash|next-gen|game-changer|delve|revolutioni[sz]e)\b/i.test(l) },

  { id: "placeholder-identity", severity: "warning",
    why: "Invent contextual names, not Acme and John Doe.",
    test: (l) => /\b(John Doe|Jane Doe|Acme|Lorem ipsum)\b/i.test(l) },

  { id: "invented-metrics-block", severity: "warning",
    why: "Figures with no source. Label them mock or cut them.",
    test: (l) => /by the numbers|key statistics|system performance metrics/i.test(l)
               || /\b99\.9{1,2}%|\buptime sla\b/i.test(l) },

  { id: "emoji", severity: "warning",
    why: "Icons are drawn, from one library at one stroke weight.",
    test: (l) => /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(l) },
];

function walk(p, out = []) {
  let st;
  try { st = statSync(p); } catch { return out; }
  if (st.isDirectory()) {
    for (const e of readdirSync(p)) if (!SKIP_DIR.has(e)) walk(join(p, e), out);
  } else if (SCANNABLE.has(extname(p))) out.push(p);
  return out;
}

function scan(paths) {
  const findings = [];
  for (const file of paths.flatMap((p) => walk(p))) {
    let lines;
    try { lines = readFileSync(file, "utf8").split("\n"); } catch { continue; }
    lines.forEach((line, i) => {
      // a rule that names the thing it bans is documentation, not a violation
      if (/verify\.mjs|tells\.md|craft-floor\.md/.test(file)) return;
      // an inline pragma, for a line that quotes a banned pattern as evidence
      if (/rav-verify-ignore/.test(line)) return;
      for (const r of RULES) {
        if (r.test(line, file)) {
          findings.push({ rule: r.id, severity: r.severity, why: r.why, file, line: i + 1, snippet: line.trim().slice(0, 110) });
        }
      }
    });
  }
  return findings;
}

// --------------------------------------------------------------- browser probe

const BROWSER_PROBE = String.raw`
(() => {
  const num = s => (String(s).match(/[\d.]+/g) || []).map(Number);
  const lum = ([r,g,b]) => { const f = x => { x/=255; return x<=0.03928 ? x/12.92 : Math.pow((x+0.055)/1.055, 2.4); };
    return 0.2126*f(r) + 0.7152*f(g) + 0.0722*f(b); };
  const over = (fg, a, bg) => fg.map((c,i) => c*a + bg[i]*(1-a));

  // the page's own ground, composited from html/body rather than assumed
  const groundOf = () => {
    let bg = [255,255,255];
    for (const n of [document.documentElement, document.body]) {
      const c = num(getComputedStyle(n).backgroundColor);
      if (c.length >= 3) { const a = c.length > 3 ? c[3] : 1; if (a > 0) bg = over(c.slice(0,3), a, bg); }
    }
    return bg;
  };
  const GROUND = groundOf();

  // every ancestor background down to and including the element itself
  const bgOf = (el) => {
    const chain = []; let n = el;
    while (n && n !== document.documentElement) { chain.push(n); n = n.parentElement; }
    let bg = GROUND;
    for (const nd of chain.reverse()) {
      const c = num(getComputedStyle(nd).backgroundColor);
      if (c.length >= 3) { const a = c.length > 3 ? c[3] : 1; if (a > 0) bg = over(c.slice(0,3), a, bg); }
    }
    return bg;
  };
  // ancestor opacity dims text AND its own background together, so apply it to both
  const opacityChain = (el) => { let a = 1, n = el;
    while (n && n !== document.body && n) { a *= parseFloat(getComputedStyle(n).opacity) || 1; n = n.parentElement; } return a; };

  const ratio = (a, b) => { const L1 = lum(a), L2 = lum(b);
    return +(((Math.max(L1,L2)+0.05)/(Math.min(L1,L2)+0.05)).toFixed(2)); };

  const hasHitOverlay = (el) => ["::before","::after"].some(p => {
    const s = getComputedStyle(el, p);
    return s.content !== "none" && s.position === "absolute";
  });

  // Run this AFTER entrance animations settle (about 2s past load). An element
  // caught mid-fade reads as script-gated content and is a false positive.
  const out = { url: location.href, viewport: document.documentElement.clientWidth + "x" + document.documentElement.clientHeight, findings: [] };
  const add = (rule, detail, el) => out.findings.push({ rule, detail,
    at: el ? (el.tagName.toLowerCase() + (el.className && typeof el.className === "string" ? "." + el.className.split(" ").filter(Boolean).slice(0,2).join(".") : "")) : null,
    text: el ? (el.textContent || "").trim().slice(0, 40) : null });

  // 1. contrast, with alpha and composited backgrounds
  for (const el of document.querySelectorAll("body *")) {
    if (!el.childNodes.length) continue;
    const own = [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim());
    if (!own) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === "hidden" || cs.display === "none") continue;
    const size = parseFloat(cs.fontSize);
    const weight = parseInt(cs.fontWeight, 10) || 400;
    const large = size >= 24 || (size >= 18.66 && weight >= 700);
    const need = large ? 3 : 4.5;
    const bg = bgOf(el);
    const c = num(cs.color);
    const alpha = (c.length > 3 ? c[3] : 1) * opacityChain(el);
    const fg = over(c.slice(0,3), alpha, bg);
    const r = ratio(fg, bg);
    if (r < need) add("contrast", r + ":1 at " + Math.round(size) + "px, needs " + need, el);
  }

  // 2. touch targets, allowing an absolutely positioned pseudo-element to extend the hit area
  for (const el of document.querySelectorAll("a, button, [role=slider], input, select, summary")) {
    const r = el.getBoundingClientRect();
    if (r.height === 0 || r.width === 0) continue;
    if (r.height < 44 && !hasHitOverlay(el)) add("touch-target", Math.round(r.height) + "px tall, needs 44", el);
  }

  // 3. horizontal overflow
  const d = document.documentElement;
  if (d.scrollWidth > d.clientWidth + 1) {
    add("horizontal-overflow", d.scrollWidth + "px in a " + d.clientWidth + "px viewport", null);
    for (const el of [...document.querySelectorAll("body *")].filter(e => e.getBoundingClientRect().right > d.clientWidth + 1).slice(0, 5))
      add("overflow-offender", Math.round(el.getBoundingClientRect().width) + "px wide", el);
  }

  // 4. links that go nowhere
  for (const a of document.querySelectorAll('a[href="#"], a:not([href])'))
    add("dead-link", "href is # or absent", a);

  // 5. a scroll region a keyboard cannot reach
  for (const el of document.querySelectorAll("pre, code, [class*=overflow-x], [class*=overflow-y]"))
    if (el.scrollWidth > el.clientWidth + 1 && !el.hasAttribute("tabindex")) add("unreachable-scroll", "scrolls but is not focusable", el);

  // 6. focusable content inside something visually hidden
  for (const box of document.querySelectorAll("[aria-hidden=true], [hidden]"))
    if (box.querySelector("a[href], button, input, select, textarea, [tabindex]:not([tabindex='-1'])"))
      add("focusable-in-hidden", "hidden container still holds focusable children", box);

  // 7. browser surfaces the design should own
  if (!document.querySelector('meta[name="theme-color"]')) add("no-theme-color", "mobile browser chrome will not match", null);
  if (!document.querySelector('link[rel~="icon"]')) add("no-favicon", "tab shows the default icon", null);
  const og = document.querySelector('meta[property="og:image"]');
  if (og && og.content && !/^https?:/i.test(og.content)) add("relative-og-image", "link previews need an absolute URL", null);

  // 8. images with no alt decision
  for (const img of document.querySelectorAll("img:not([alt])")) add("img-no-alt", "no alt attribute at all", img);

  // 9. em dashes in what actually renders
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node, dashes = 0;
  while ((node = walker.nextNode())) if (/[—]/.test(node.textContent)) dashes++;
  if (dashes) add("em-dash-rendered", dashes + " text node(s) contain an em dash", null);

  // 10. content that only exists once script runs
  // a deliberately closed overlay is not a broken reveal gate: it declares itself
  const deliberatelyHidden = (e) => e.closest("[inert], [aria-hidden=true], [hidden], dialog:not([open])");
  const gated = [...document.querySelectorAll("body *")].filter(e => {
    const cs = getComputedStyle(e);
    return cs.opacity === "0" && (e.textContent || "").trim().length > 12 && !deliberatelyHidden(e);
  });
  if (gated.length) add("script-gated-content", gated.length + " element(s) hold text at opacity 0", null);

  out.counts = out.findings.reduce((a, f) => (a[f.rule] = (a[f.rule] || 0) + 1, a), {});
  out.total = out.findings.length;
  return JSON.stringify(out, null, 1);
})()
`;

// ------------------------------------------------------------------------ cli

const argv = process.argv.slice(2);
const json = argv.includes("--json");

if (argv.includes("--emit-browser")) {
  process.stdout.write(BROWSER_PROBE);
  process.exit(0);
}

const si = argv.indexOf("--source");
if (si === -1) {
  console.error("usage: verify.mjs --source <paths...> [--json]");
  console.error("       verify.mjs --emit-browser        (run the output in the page)");
  process.exit(1);
}
const paths = argv.slice(si + 1).filter((a) => !a.startsWith("--"));
if (!paths.length) { console.error("no paths given"); process.exit(1); }

const findings = scan(paths);

if (json) {
  console.log(JSON.stringify({ total: findings.length, findings }, null, 1));
} else if (!findings.length) {
  console.log("rav verify: source clean");
} else {
  const byRule = {};
  for (const f of findings) (byRule[f.rule] ||= []).push(f);
  const order = ["error", "warning"];
  console.log(`rav verify: ${findings.length} finding(s)\n`);
  for (const sev of order) {
    for (const [rule, list] of Object.entries(byRule)) {
      if (list[0].severity !== sev) continue;
      console.log(`  ${sev === "error" ? "ERROR  " : "warning"} ${rule}  x${list.length}`);
      console.log(`          ${list[0].why}`);
      for (const f of list.slice(0, 4)) console.log(`          ${f.file}:${f.line}  ${f.snippet}`);
      if (list.length > 4) console.log(`          ...and ${list.length - 4} more`);
      console.log("");
    }
  }
}
process.exit(findings.length ? 2 : 0);
