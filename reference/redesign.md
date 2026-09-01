# rav redesign protocol

Misclassifying the mode is the single biggest source of bad redesign output. Detect it first, out loud.

## 1. Detect the mode

- **Greenfield.** No existing site, or a full overhaul already approved. Dials from the SKILL.md baseline, world derivation runs.
- **Redesign, preserve.** Modernise without breaking the brand. Audit first, extract the brand tokens, evolve.
- **Redesign, overhaul.** New visual language over existing content. Treat visuals as greenfield; preserve content, IA, and product truth.

If genuinely ambiguous, ask once: *"Should this preserve the existing brand, or are we starting visually from scratch?"*

Never split the difference. Polishing a look you already decided to discard is the failure mode this protocol exists to prevent.

## 2. Audit before touching anything

Document the current state and show it before proposing changes.

- **Brand tokens.** Primary and accent colors, type stack, logo treatment, radius system, spacing scale.
- **Information architecture.** Page tree, primary nav, key conversion paths, anchor IDs.
- **Content blocks.** What exists, what is doing work, what is filler.
- **Patterns to preserve.** Signature interactions, the recognizable hero, the copy voice, anything customers navigate by muscle memory.
- **Patterns to retire.** Tells from [tells.md](tells.md), broken layouts, dead links, generic stock, performance traps.
- **Dial reading of the existing site.** Infer its current variance, motion, and density. That reading is the starting point, not the baseline.
- **SEO baseline.** Ranking pages, meta titles, structured data, OG cards. SEO migration is the number one redesign risk.
- **Accessibility wins already in place.** Note them so they survive.

## 3. Preservation rules

- Do not change information architecture unless asked. Keep slugs, anchor IDs, and primary nav labels stable.
- Extract the brand colors before applying any palette rule. A brand that is already purple stays purple.
- Preserve the copy voice. Visual modernisation is not a content rewrite. Ask before changing factual claims.
- Do not regress focus states, alt text, keyboard navigation, or contrast.
- Do not rename buttons, form fields, or section IDs that analytics depends on.

## 4. Modernisation levers, in priority order

Stop as soon as the brief is satisfied.

1. **Typography refresh.** The biggest visual lift per unit of risk.
2. **Spacing and rhythm.** Section padding, vertical rhythm, grouping.
3. **Color recalibration.** Desaturate, unify neutrals, keep the brand accent, tint the grays.
4. **Motion layer.** Dial-appropriate micro-interactions on existing components.
5. **Hero and key-section recomposition.** Restructure the top of the funnel.
6. **Full block replacement.** Only when a block is unsalvageable.

## 5. Targeted evolution or full redesign

- IA, content, and SEO are sound: **targeted evolution**, levers 1 to 4. Roughly 70% of the value at 40% of the risk.
- Visual debt is structural (broken IA, no system, broken mobile): **full redesign** with strict content preservation.
- The brand itself is changing: **greenfield**, and the world derivation runs.

## 6. Never changes silently

Explicit approval required for all of these:

- URL structure and route slugs
- Primary nav labels
- Form field names or order (breaks analytics and autofill)
- The logo or wordmark
- Legal, consent, and cookie copy
- Any factual claim, price, or customer name

## 7. Deliver

Present the audit, the classification, the levers applied, and what was deliberately left alone. Then run the standard verification protocol from SKILL.md: build fully, one batched inspection round, one fix batch, at most one confirming round, stop.
