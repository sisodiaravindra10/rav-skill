# rav craft floor

Load this after the direction is settled and immediately before editing UI. Build against it without announcing it as a checklist. A pinned brief or the committed world overrides anything here; your own habit does not. The floor holds the mechanics, it never picks the direction.

## Run the checker first

Before reading the rest of this file, run the part of it a machine can decide. Reading a
floor is how it stops firing; the rules below were all present the day each of them was
broken.

```bash
node <skill-dir>/scripts/verify.mjs --source <paths>
```

Then, on the running page, roughly two seconds after load so entrance animations have
settled, evaluate what `node <skill-dir>/scripts/verify.mjs --emit-browser` prints. It
returns JSON: composited contrast with alpha and ancestor opacity, touch targets that
account for pseudo-element hit areas, overflow, dead links, unreachable scroll regions,
focusables inside hidden containers, browser surfaces, and script-gated content.

Exit 0 is clean, exit 2 means findings. A line that quotes a banned pattern as evidence
rather than committing it can carry `rav-verify-ignore`.

The checker owns the mechanical half. Everything below is the half it cannot decide.

## Verify (checks on the built result, not on the intention)

Run them together in one batched inspection round. They share a single render.

- **Contrast.** Body and placeholder text 4.5:1, large text and controls and focus rings 3:1. On colored surfaces tint secondary text from that hue or the foreground. Never flat gray. Check both themes, every interactive state, text over images, disabled content.
- **Depth.** Shadows carry an offset and a soft blur, tinted to the background hue. A zero-offset colored halo is decoration. A zero-blur hard offset shadow is a costume unless the world is actually neobrutalist.
- **Spacing.** Tight groups, generous separation, more space above a heading than below it. Read the computed values rather than trusting the classnames.
- **Type.** Prose measure 65-75ch, display max 6rem, tracking floor -0.04em, balanced headings, obvious scale and weight steps. Run the real copy at every breakpoint and fix what overflows. Light text on dark needs slightly more leading, a touch more tracking, and one more weight step.
- **Motion.** One authored moment, not scattered effects and not one identical entrance on every section. Exponential ease-out from an already-visible default. Blur, backdrop-filter, clip-path, mask, and shadow belong to the palette when they stay smooth.
- **States.** Hover, focus, active, disabled, loading, error, empty, selected. Plus real content, working controls, responsive composition, visible keyboard focus, logical tab order.
- **Browser surfaces.** The parts you did not draw still carry the design: text selection, the caret, custom scrollbars, focus rings, underline offset, and tabular numerals all ship with browser defaults that belong to no design system. Theme them from the palette. This is the cheapest signal that a page was built rather than assembled, and the one models skip most reliably.
- **Copy.** The product's own language. Controls name their action, errors name the problem and the recovery.
- **Coverage.** Every brief requirement present and findable within seconds.

## Refuse (the category's defaults, not bans; the brief's own words can earn any of them)

Reaching for one when the axis is free means you were not deciding. Recognizing that means rewriting the element, not softening it.

**Page scaffolds**
- Same-size cards of icon plus heading plus text as the page structure. Cards are the lazy container. Nested cards are always wrong.
- The hero-metric template: big number, small label, supporting stats, accent.
- Section numbers (01 / 02 / 03) unless the sequence itself carries information the reader needs.
- Three equal feature cards. A symmetric 3-col Bootstrap grid.
- A modal for a task that needs neither interruption nor protected focus.

**Surface habits**
- Gradient text. Emphasis comes from weight or size.
- Glass and blur as decoration rather than as a specific effect. Navbars and modal overlays only; never on cards or scrolling content.
- A colored `border-left` or `border-right` above 1px on cards, list items, callouts, or alerts.
- Sparklines, progress rings, and soft-shadowed rounded rectangles standing in for content.
- Filled background tracks on comparison bars. A number plus a small mark reads better on a marketing page.
- Monospace as a costume for "technical" rather than for code, data, or measurement.
- A system display face (Impact, Arial Black, the platform sans) as the display voice of an own-world page. Source and self-host a face whose character matches the approved lettering. The closest installed font is a failure, not a fallback.
- Unicode glyphs or emoji standing in for an icon system. Icons are drawn, from one real library or authored SVG, at one consistent stroke and weight.
- Geometric masks standing in for organic contours. A circle, polygon, or radial-gradient cutout approximating a photographic subject's edge is the cheap version and reads worse than omitting it. Derive an alpha matte from the real image or produce a cut-out asset.
- Light or dark picked by category. Pick it from the use scene: who, where, under what ambient light.
- Neon or outer glows by default. Use inner borders or tinted shadows.
- Custom mouse cursors. Outdated, and they cost accessibility.
- Arbitrary `z-50` and `z-10`. Z-index is for systemic layers only: sticky nav, modal, overlay, grain. Document the scale.

## Performance guardrails

- Animate `transform` and `opacity` by default. Never casually animate `top`, `left`, `width`, `height`, or margins. Use FLIP, transforms, or grid techniques for layout change.
- `will-change` only during known animation, never at rest, never broadly.
- Grain and noise filters live on a fixed `pointer-events: none` pseudo-element. Never on a scrolling container: continuous GPU repaints destroy mobile FPS.
- Bound blur, filter, shadow, canvas, and shader work to isolated regions. Lazy-init heavy resources (WebGL contexts, WASM) near viewport. Pause offscreen rendering.
- Isolate CPU-heavy or perpetual motion in its own memoized client-leaf component. Never re-render the parent layout.
- Targets: LCP under 2.5s (hero image preloaded or priority), INP under 200ms, CLS under 0.1, 60fps on a mid-range device. Reserve space for images, fonts, and embeds.
- Bundle awareness: Motion is not tiny, Three.js is large. Lazy-load anything below the fold. Verify a dependency exists in `package.json` before importing it, and print the install command if it does not.

## Accessibility floor

- Semantic HTML first: real headings in order, landmarks, buttons that are buttons.
- Every interactive element has an accessible name; icon-only controls carry one explicitly. Link text makes sense out of context.
- Visible keyboard focus everywhere, logical tab order, no keyboard traps, Esc dismisses overlays.
- Touch targets 44px even when the visible mark is smaller.
- Alt text conveys the image's information; decorative images get empty alt.
- Information carried by color is also carried by text, shape, icon, or position.
- `prefers-reduced-motion` gets an intentional alternative that keeps state feedback legible. A blanket `0.01ms` kill is a defect, not compliance.
- Nothing flashes above threshold. No autoplaying sound. Non-essential loops stop when hidden.
- Text scales: browser zoom to 200%, user font settings, and platform text scaling all survive.

## Native platforms

On iOS, Android, or adaptive targets, platform conventions outrank this file's web mechanics: follow the platform's own navigation, insets, touch targets, type scaling, and Reduce Motion behavior. Verify on the shipped device classes rather than a single simulator size.
