# rav mode protocols

Output shape plus process for each core mode. Load this when executing a `build`, `generate`, or `critique` task. Assumes SKILL.md's rules (three laws, registers, visitor modes, color, type, layout, imagery, motion) are already in context. Move verbs live in [moves.md](moves.md).

Always emit the `RAV_PREFLIGHT` block first, then follow the mode's template exactly. The "Where the skill fired" trailer is optional in single-block outputs and required when the user is iterating on the skill itself.

---

## build, produces production code

**Output shape**
```
RAV_PREFLIGHT block

Intent: <one line: "Building <thing> for <where>, <one key choice>.">

<code, real and working, no TODOs beyond labelled image slots>

Where the skill fired:
- <3 to 6 bullets, each pointing at a rule in this skill>
```

**Process**

0. **Run intake** from [intake.md](intake.md) unless it was already done or a skip applies.
1. **Classify the work.** New surface or replacement world, whole surface inside an established world, or a local addition. Only the first runs [world.md](world.md). A local addition inherits its surface and changes nothing else.
2. **Pick the foundation honestly.** One design system per project, from the map in world.md. Verify every dependency exists in `package.json` before importing, and print the install command when it does not. Never reinvent CSS for something with an official package.
3. **Scaffold the world.** Pick type from [fonts.md](fonts.md). Color strategy and palette, type roles, spacing scale, radius system, all locked before any component. Theme lock, color lock, shape lock stated once and obeyed everywhere.
4. **Compose.** State the idea in one sentence before any markup; if it reads as a description rather than an idea, stop and find one. Then the hero archetype. Build the hero to a finished state and show it before composing anything below it (The profile comes first, SKILL.md); then the section families. Count the layout families as you go: eight sections need at least four. Bento cells equal content items exactly.
5. **Source the visuals** in the priority order from SKILL.md's Imagery section. Generate before hand-rolling. Never a div-based fake screenshot. Product UI is a capture of the running app or the real component, shown large.
6. **Choreograph.** Load [micro.md](micro.md) for the control-scale floor. Decide with `animate` (or `animate-expo`, or `apple-design` for anything gestural or physical), then build with the relevant GSAP skill. One authored moment, custom easing, staggered entry where the content is genuinely a list, reduced-motion path. If `register=brand|kinetic` and the brief invokes a physical thing, run the Cinematic hero protocol.
7. **Load [craft-floor.md](craft-floor.md)** immediately before writing the UI and build against it silently.
8. **Write the copy with [voice.md](voice.md) open,** then run its pass on every string.
9. **Ship real working code.** No placeholder copy, no `TODO` beyond a labelled image slot, no half-finished sections, no fabricated metrics.
10. **Verify in bounded passes.** Build fully, inspect once batched (desktop and mobile, both themes, real content, the states that exist), fix everything that round showed in one batch, confirm with at most one more round, stop.
11. **Run [tells.md](tells.md)** as the final filter, then the SKILL.md pre-output checklist.

---

## generate, produces image references

**Output shape**
```
RAV_PREFLIGHT block

Palette (consistent across all images):
- Surface . Ink . Accent 1 . Accent 2 . Texture

Image set, one per section, never compressed:
1. <Name (WxH)> - <one-paragraph brief>
2. ...

Where the skill fired:
- <3 to 4 bullets>
```

**Process.** Use whatever image generation tool the environment offers. The steps below are the whole method; no separate imagegen skill is installed.

1. **Commit to a section count out loud,** then one horizontal image per section. Never compress multiple sections into one frame. With no count given: hero = 1, landing = 6, full site = 8, mobile flow = one screen per frame. Label each "Section X of N: <name>".
2. **Lock one palette, one type system, one hero scale** (giant, mid, mini) before describing any image. State surface, ink, accent, texture upfront and hold it across the whole set.
3. **Pick a narrative spine** (artifact, journey, tool, living-system, stage, archive) and thread it through every frame. This is the concept, not decoration.
4. **Vary composition per section.** Pull anchors from the hero archetypes and beyond: centered-low, bottom-left-over-image, off-grid, stacked-center, image-as-canvas. Hard caps: the same anchor at most twice in a row, the same background mode at most three in a row. Do not open on the AI-default left-text-right-image.
5. **One deliberate second-read moment** across the whole set: an oversized numeral, a single material switch, a side-rail note. Once, not per section.
6. **Subject-specific imagery.** The actual stadium, the actual terrain, the actual object. No category stand-ins.
7. **Continuity.** Every frame reads as one brand: same palette, type scale, CTA family, radius language, image grade. Variation lives in anchor, background mode, and section size, never in identity.
8. No text or wordmarks on banner-style images. They sit alongside the H1, not compete with it.
9. **Mobile.** Frame app screens in a subtle phone mockup, keep tap targets and caption sizes readable.

---

## critique, audits existing UI

Two passes, kept isolated from each other until synthesis, so the mechanical findings do not anchor the design judgment.

- **Pass A, design review.** Read the source and inspect the live page in a browser when one is available. Judge design specificity, hierarchy, IA, composition, type, color, states, copy, edge cases, cognitive load, and the emotional arc. Form the specificity verdict BEFORE looking at any scan output.
- **Pass B, mechanical evidence.** Contrast values, computed spacing, responsive behavior at real breakpoints, console errors, network and image loading, keyboard path, focus order, reduced-motion path, and a sweep against [tells.md](tells.md) with file and line for each hit. When the surface has meaningful motion, run `review-animations` as part of this pass and fold its findings in.

Never claim a check ran that did not. If browser inspection was unavailable, say so in one line rather than implying it happened.

**Output shape**
```
RAV_PREFLIGHT block

Design Health: NN/40 (or NN/32 with n/a heuristics noted) - <band>
Specificity verdict: <authored for this product | category-interchangeable> + one line of evidence

What's working: <2 to 3 specifics, and why they work>

Must fix (P0 blocking, P1 major):
- [P?] <file:line> - <what> - <why it matters to the visitor> - <the fix, concrete>

Should fix (P2):
- [P?] <file:line> - <what> - <fix>

Could fix (P3):
- <file:line> - <nit>

Persona red flags: <2 to 3 personas, named failures only>

Questions to consider: <2 to 3 that could unlock a better solution>

Where the skill fired hardest: <one sentence>
```

### Scoring

Score the ten heuristics 0 to 4. Be honest: a 4 means genuinely excellent, and most real interfaces land between 20 and 32 out of 40.

1. Visibility of system status
2. Match between system and the real world
3. User control and freedom
4. Consistency and standards
5. Error prevention
6. Recognition rather than recall
7. Flexibility and efficiency of use
8. Aesthetic and minimalist design
9. Error recovery
10. Help and documentation

Heuristics 7 and 10 may be `n/a` on persuade and experience surfaces, as may any heuristic that genuinely cannot apply. Write `n/a` with a one-line reason and renormalize the total (24/32 is 75%, which is Good).

| Band | Out of 40 | Meaning |
|---|---|---|
| Excellent | 36-40 (90%+) | minor polish only |
| Good | 28-35 (70%+) | solid foundation, address the weak areas |
| Acceptable | 20-27 (50%+) | significant work before visitors are happy |
| Poor | 12-19 (30%+) | major overhaul, core experience broken |
| Critical | 0-11 | redesign needed |

### Severity

| P | Name | Meaning | Action |
|---|---|---|---|
| P0 | Blocking | prevents task completion | fix immediately |
| P1 | Major | significant difficulty, or a WCAG AA violation | fix before release |
| P2 | Minor | annoyance with a workaround | next pass |
| P3 | Polish | no real impact | if time permits |

Unsure between two levels: would a visitor contact support about this? If yes, it is at least P1.

Anything SKILL.md marks as banned rather than as a default, and every hit from [tells.md](tells.md), is at minimum P1.

### Cognitive load

Check these eight. Zero or one failure is low load, two or three is moderate, four or more is a critical fix.

- **Single focus:** can the primary task be completed without competing elements pulling away?
- **Chunking:** is information grouped in digestible sets, roughly four items or fewer?
- **Grouping:** are related items visually together through proximity rather than boxes?
- **Hierarchy:** is the most important thing on screen immediately obvious?
- **One thing at a time:** can one decision be made before the next arrives?
- **Minimal choices:** four or fewer visible options at any decision point?
- **Working memory:** does acting here require remembering something from a previous screen?
- **Progressive disclosure:** is complexity revealed only when needed?

**The working memory rule.** People hold about four items at once. At any decision point, count the distinct options a visitor must weigh: four or fewer is fine, five to seven pushes the boundary, eight or more means they will skip, misclick, or leave. In practice: one primary action plus one or two secondary and the rest in a menu; five or fewer top-level nav items; one decision per screen on a gallery index.

**The eight common violations,** and their fixes: the wall of options (group, recommend, disclose), the memory bridge (keep context visible where it is needed), hidden navigation (always show current location), the jargon barrier (plain language, define inline), the visual noise floor (one primary, two or three secondary, everything else muted), the inconsistent pattern (same action type, same UI), the multi-task demand (sequence the steps), and the context switch (co-locate what a decision needs).

### Personas

Pick two or three by interface type and walk the primary action as each. Report named failures, never generic descriptions.

| Interface | Personas |
|---|---|
| Landing or marketing | Jordan, Riley, Casey |
| Dashboard or admin | Alex, Sam |
| Commerce or checkout | Casey, Riley, Jordan |
| Onboarding flow | Jordan, Casey |
| Data-heavy or analytics | Alex, Sam |
| Form-heavy or wizard | Jordan, Sam, Casey |

- **Alex, impatient power user.** Expert with similar products, skips onboarding, hunts for shortcuts, wants bulk actions, leaves if anything feels slow or patronizing. Red flags: unskippable tutorials, no keyboard path, no Esc on modals, one-at-a-time flows where batch is natural, redundant confirmations.
- **Jordan, confused first-timer.** Never used this kind of product, needs guidance at every step, abandons rather than figures it out. Red flags: icon-only navigation, jargon in errors, no visible help, unlabeled state.
- **Sam, accessibility-dependent.** Screen reader, keyboard-only, possibly low vision or motor differences. Red flags: missing names, illogical tab order, invisible focus, color-only meaning, tiny targets, motion that blocks reading.
- **Riley, deliberate stress tester.** Pushes past the happy path, tries weird inputs, probes gaps. Red flags: no empty state, no error recovery, breakage on long or missing content, double-submit.
- **Casey, distracted mobile user.** One-handed, interrupted, slow connection. Red flags: reach-unfriendly targets, horizontal overflow, heavy first load, state lost on backgrounding.

When the project has real audience context, derive one or two project-specific personas from it. Do not invent audience details when none exist.

### Rules for the report

Be direct and specific. Name the submit button, not "some elements". Say what is wrong AND why it matters to a visitor. Give the concrete fix, and cut "consider exploring" entirely. Prioritize ruthlessly: if everything is important, nothing is. Highlight what genuinely works, with the reason. Do not soften.

If asked to apply the fixes, do them in place, only what the audit flagged. Do not rewrite working code for taste alone.
