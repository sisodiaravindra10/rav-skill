# rav moves

**Refine:** [polish](#polish) . [bolder](#bolder) . [quieter](#quieter) . [distill](#distill) . [harden](#harden) . [onboard](#onboard)
**Enhance:** [animate](#animate) . [colorize](#colorize) . [typeset](#typeset) . [layout](#layout) . [delight](#delight) . [overdrive](#overdrive)
**Fix:** [clarify](#clarify) . [adapt](#adapt) . [optimize](#optimize)
**Evaluate:** [review-motion](#review-motion)

Scoped refinements of a surface that already shipped. Each one is a `mode:` value in the preflight. Every move that changes code ends by handing off to `polish`; `review-motion` only reports, and `overdrive` waits for the user to pick a direction before it starts.

**Scope is sovereign in all of them.** "Everything else stays" is a literal instruction. Touch only the named target. Do not restyle neighbors, migrate the page to a new idea, or add a color, font, radius, shadow, or primitive the surface does not already own. If the existing system genuinely cannot express the direction, stop and ask, naming the exact addition and the job it would do.

---

## polish

Refinement, never a concealed redesign. If the concept itself is wrong, say so and recommend a redesign instead of smuggling one in.

1. **Establish the system.** Read the tokens, shared components, patterns, and neighboring flows. Classify each drift before fixing it: a missing token (the system needs a reusable value), a one-off implementation (a shared component should replace it), a conceptual mismatch (the flow or hierarchy differs from comparable areas), or a local defect. Fix the cause at the narrowest correct level.
2. **Use the thing yourself** at desktop and mobile, with real content, real states, real input methods.
3. **Triage in order:** broken or blocked tasks and data loss first; then missing loading, empty, error, success, disabled, and permission states; then flow, hierarchy, responsive, and system drift; then visual and motion inconsistency; then code and asset cleanup. Do not perfect one corner while the rest sits below the bar.
4. **Polish the whole path.** Arrival, transition, empty, and recovery connect instead of behaving as isolated screens. Optical alignment as well as mathematical. Same-role typography identical everywhere. Semantic color tokens with stable meanings across themes. One icon family, one stroke. No layout shift on images.
5. **Finish with a source diff.** Remove accidental churn, dead code, orphaned styles, debug output, and polish-created duplication.

Do not add animation just to make the polish visible.

---

## bolder

An amplification, almost always scoped to something that already exists. The reflex answer, more effects, is the opposite of bold. Reject it first.

A section reads flat because it quietly opted out of the system's own strongest moves. Look at what its neighbors do that it does not: display type at full strength, the structural devices that carry meaning, the signature motif, the density and pacing. The most reliable pass brings the target up to the level its neighbors already reach, in the system's own vocabulary.

- Amplify what the system already owns. The bolder version should look more like the same brand, not less.
- Commit, then clarify. Make one decisive move completely, then quiet everything around it so the move is legible. If every element got louder, the section got flatter.
- Give it its own rhythm: a peak in the scroll, a shift in density or pace.
- **Skeleton test.** Strip the copy out and study the bare structure. If it only works once the words return, the boldness is in the text size, not the design.

---

## quieter

Quiet is harder than loud. Subtlety needs precision; quiet without intent collapses to generic. Think luxury, not laziness.

Find the intensity source first: saturation, contrast extremes, too many heavy elements competing, motion excess, decorative complexity, or everything large with no hierarchy.

- Color: drop saturation to roughly 70-85%, cut the number of colors, let tinted neutrals do more work, keep high contrast only where it matters.
- Weight: reduce font weights a step or two, build hierarchy from weight, size, and space rather than color and boldness, increase breathing room, thin or remove borders.
- Simplify: remove gradients, shadows, patterns, and layers that serve nothing. Reduce radius extremes.
- Motion: shorter distances (10-20px, not 40), gentler ease-out, remove flourishes, keep functional feedback. Never bounce or elastic.
- Composition: smaller scale jumps, rogue elements back on the grid, even rhythm.

Never: everything the same weight, grayscale as a substitute for restraint, personality erased, affordances weakened.

On operate and read surfaces, quieter means less visual noise so the tool disappears into the task. On persuade and experience surfaces, drama is reduced, not eliminated: the point of view survives.

---

## distill

Remove what does not earn its place. Simplicity is not fewer features, it is fewer obstacles between the visitor and the goal.

Find the essence: what is the ONE thing this should accomplish, what is truly necessary, what can be hidden until needed, what is the 20% that delivers 80%.

- **IA:** one primary action, few secondary, everything else tertiary or disclosed. Merge similar controls. Say each thing once.
- **Visual:** one or two colors plus neutrals, one family and 3-4 sizes, remove borders and boxes that serve no hierarchy, flatten nesting, never nest cards.
- **Layout:** linear flow where a grid was decorative, generous space, consistent alignment.
- **Interaction:** smart defaults, inline over modal, one fewer step, one obvious next action.
- **Content:** cut every sentence in half, then again. Active voice. Plain language. No header restating the intro.
- **Code:** dead CSS, unused components, twelve variants where three cover 90%.

Never oversimplify a genuinely complex domain, remove information needed to decide, or make it so simple it is unclear. Mystery is not minimalism.

---

## harden

Designs that only work with perfect data are not production-ready.

**Extreme inputs.** Very long names and titles, empty and single-character values, emoji, RTL text, accents, millions and billions, 1000-item lists, no data at all. Fix with `min-width: 0` on flex and grid children, `overflow-wrap`, line-clamp where truncation is honest, and containers that expand with content rather than fixed widths.

**Errors.** Offline, slow, timeout, 400, 401, 403, 404, 500, validation, permission, rate limit, concurrent edits. Every one gets a state that names what failed and how to recover. Never surface an internal code as the primary message.

**i18n.** Budget 30-40% text expansion (German is the usual worst case). Logical properties (`margin-inline-start`, `padding-inline`, `border-inline-end`) so RTL works. Complete translatable messages, never concatenated fragments. `Intl` for dates, numbers, and currency. CJK and emoji tested.

**Scaling.** 16px body floor on mobile (iOS Safari force-zooms focused inputs under 16px and breaks the layout). Browser zoom to 200%. Platform text scaling.

---

## onboard

First-run flows, empty states, activation. The empty state distinguishes first use, no results, active filters, missing permission, and failure, and each version says what happened plus the next useful action. Teach through action rather than a wall of text. Make the next step clear before adding personality. Onboarding is skippable.

---

## animate

Load `animate` first (or `animate-expo` on React Native). It carries the decision order that decides whether motion feels right, and rav does not restate it. What follows is the taste layer on top.

Motion explains state, relationship, and hierarchy, or creates one authored moment the surface earned. Decoration without purpose is animation debt.

**Write the thesis before implementing:** the focal moment (the one sequence that deserves authorship, if any), the continuity (state, layout, or navigation changes that need explaining), the feedback (controls and outcomes needing acknowledgment), and the budget (which effects are expensive and how often they run).

The focal moment comes from this product and this surface concept. A generic fade-and-rise, hover lift, parallax layer, or scroll reveal is not a thesis.

**Choose the property by meaning:** shared-element and FLIP and view transitions for continuity; bounded blur, filter, and shadow for focus and depth; mask and clip-path for reveal; color, gradient position, and distortion for material energy; the smallest possible change for feedback.

For gesture-driven work, springs, sheets, momentum, or anything with physical weight, load `apple-design` too. Timing, easing, reduced motion, scroll technique, and both handoffs live in SKILL.md's Delegating motion section. Do not add a dependency for an effect the existing stack expresses cleanly. Do not stack techniques for spectacle.

---

## review-motion

Critique motion that already ships, rather than adding any. Load `review-animations` for a component or a screen, `improve-animations` for a whole codebase, and `find-animation-opportunities` when the complaint is that a surface feels dead rather than that it moves badly.

rav adds three checks those skills do not own:

- **Register fit.** Product chrome that takes 800ms is broken even if the curve is beautiful. Brand and kinetic moments that snap in 200ms have thrown away the material.
- **The one-authored-moment rule.** Count the animated moments on the surface. More than one competing focal sequence means none of them lands.
- **The reveal trap.** Any element whose resting state is invisible pending JS is a defect before it is a motion question. Check that first.

Report findings in the critique format from [modes.md](modes.md), P0 to P3 with file and line.

---

## colorize

Color as hierarchy, meaning, and atmosphere. Preserve confirmed brand and semantic conventions. If a new identity is actually required, this is the wrong move: run the world derivation.

Audit first: which colors are confirmed brand commitments, what roles exist now, where grayscale is hiding hierarchy or state, which contrast pairs fail, what color-only communication exists.

Then build roles, not a bag of swatches: canvas and elevated surfaces, primary and secondary text, action and focus and selection, borders, semantic states, and data categories where needed. Name the emotional temperature, dominant relationship, contrast range, and dosage before editing.

Let the strongest color own a deliberate region or role instead of scattering accents. Do not spend the primary action's color on decoration. Derive secondary text on colored surfaces from the foreground or surface hue. For data, encode with lightness, chroma, shape, label, or pattern too, never color alone.

---

## typeset

Improve typography inside the established world. If replacing the type would create a new identity, that is a world decision, not this move.

Assess with evidence, answering each with a file, selector, or computed value: which faces and roles are established and whether they are examined choices or defaults; whether heading, body, label, metadata, and data roles are distinguishable at a glance; whether there is a deliberate role scale or a pile of arbitrary values; whether prose sits in a comfortable measure with leading tuned to the actual face and width; what happens under long headings, localization, zoom, narrow containers, and missing weights; whether only used assets load with metric-compatible fallbacks.

Then use the fewest roles and families that make hierarchy unmistakable. Combine size, weight, space, and tone rather than asking size to do all the work. Name tokens by purpose. Use paragraph spacing OR first-line indent, not both.

---

## layout

Diagnose the structural problem before moving boxes.

Assess: **reading order** (squint test, does the primary, secondary, and group order still resolve), **grouping** (are containers compensating for weak proximity), **rhythm** (deliberate cadence or one spacing value repeated), **structure** (does the topology match the content, or are repeated cards a framework default), **density** (does information per region fit use frequency and decision complexity), **adaptation** (what reorders, collapses, wraps, or stays fixed at every size, and does focus order still match visual order), **extremes** (long content, empty states, overlays, sticky elements, safe areas).

Then name the spatial thesis: the primary path, what belongs together and what must separate, which element leads, the intended density, and how the structure changes across containers and content extremes. Group by meaning before adding containers. A 4-unit spacing base gives the useful middle steps an 8-only scale misses. Use `gap` for sibling rhythm. Container-aware components when the same component appears in different contexts.

---

## delight

Product character revealed through a useful interaction, a humane response, or an unexpectedly considered detail. Not a layer of generic whimsy.

Find a moment that earns it: effort worth acknowledging, waiting that can become informative, a first-use state that can orient, a recovery moment that needs empathy, an interaction whose physical response could express the brand, a capability people would enjoy discovering. Do not manufacture a celebration for an ordinary click.

State one delight thesis in a sentence: what the visitor should feel and why that feeling belongs to this product. Then pick the smallest system that delivers it, derived from the product's mechanism and visual world rather than a stock catalog.

Match the response to the effort and consequence. Truthful progress, never faked work. Errors lead with the problem and the recovery; warmth may reduce stress, jokes must not trivialize loss, money, privacy, or blocked work. It must still satisfy on the hundredth use.

Verify: a neighboring product could not use this moment unchanged, and the interface stays fast and obvious without it.

---

## clarify

Rewrite unclear interface text. Preserve factual meaning, product terminology, and brand voice. Read the whole path, not isolated strings.

For each state decide, in order: the one fact the visitor needs now, the action available next, the supporting context that changes the decision, and the tone this moment deserves. Say each idea once; if the heading already explains the state, the intro adds new information or disappears.

- **Actions:** specific verb plus object, describing the outcome rather than the gesture. Same noun and verb for the same concept everywhere. Destructive actions name the object and the consequence; prefer undo over confirmation when recovery is safe; never `Yes` / `No` / `OK` / `Submit` on a consequential confirm.
- **Forms:** persistent labels, never placeholder-as-label. Requirements before submission. Validation says what needs attention and how to fix it without blaming.
- **Errors:** what failed, why when known and useful, how to recover. Never promise a cause the system cannot know.
- **Loading, empty, success:** name the real operation, distinguish the empty-state causes, keep routine success brief.
- **Help:** answer the implicit question instead of restating the control.

Voice stays constant, tone adapts. Do not vary words for literary effect in an interface.

---

## adapt

Fix a specific device or breakpoint class. Responsive behavior is structural: reorder, collapse, reflow, or reveal based on what stays important, not fluid type doing all the work. Verify DOM and focus order still agree with visual order at every size. Touch targets stay usable when the visible mark is small. Safe areas and insets on native and notched devices. On iOS and Android, follow the platform's own navigation and adaptation rules rather than porting web breakpoints.

---

## optimize

Diagnose before fixing. Measure on a target device, not the dev machine.

Common causes in order of frequency: layout thrashing (reading and writing layout properties in a loop), casually animated layout properties, unbounded blur and filter and shadow, `will-change` left on at rest, unoptimized and unlazy images, unnecessary re-renders and missing memoization, perpetual animation re-rendering a parent, heavy work on the main thread, and bundle weight that should have been lazy.

Targets: 60fps, LCP under 2.5s, INP under 200ms, CLS under 0.1. Simplify the effect when it drops below 50fps rather than shipping jank.

---

## overdrive

Push past conventional limits. Highest potential to misfire, so it has a gate.

**Propose first, and wait.** Think through two or three directions at different levels of ambition and technique. Describe what each would look and feel like, with its trade-offs (browser support, performance cost, complexity). Get the user's pick before writing any code. Skipping this builds something that gets thrown away.

Context decides what extraordinary means. A particle system on a creative portfolio is impressive; on a settings page it is embarrassing. But a settings page with instant optimistic saves and animated state transitions is extraordinary too. For visual surfaces the wow is sensory. For functional UI it is how it feels: a dialog morphing from its trigger, 100k rows at 60fps, streaming validation. For performance-critical UI it is invisible: the interface simply never hesitates.

**Toolkit by intent.** View Transitions and `@starting-style` and spring physics for cinematic transitions. CSS `animation-timeline: scroll()` for scroll-linked motion. WebGL, WebGPU, Canvas and OffscreenCanvas, and SVG filter chains for rendering past CSS. Virtual scrolling and GPU-accelerated charts for data. `@property` and the Web Animations API for complex interpolation and choreography. Web Workers and WASM for headroom.

**Discipline.** Progressive enhancement is not optional: `@supports` and capability checks, with a fallback that still looks good. One extraordinary moment per page; layered competing ones become noise. The gap between "works" and "extraordinary" is the last 20%: the easing curve, the timing offset, the secondary motion that makes it feel physical. Iterate visually in the browser rather than assuming the effect landed.

**Verify.** The wow test (does someone react), the removal test (does taking it away diminish the experience), the device test (a phone, a tablet, a mid-range laptop), the context test (does this make sense for THIS brand and audience).
