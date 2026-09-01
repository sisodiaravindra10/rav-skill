# rav - App aesthetic lanes (consumer mobile)

A library of consumer-mobile-product aesthetics, distilled from a study of ten best-in-class app screens (a warm wellness home, a notes board + long-form editor, a maximalist activities + clean health set, a bold reading tracker, a playful mood check-in, a dark morning brief, an iridescent bubble onboarding, a premium chrome-sphere product page, a conversational digest, a warm journaling app).

These extend the `product` register toward consumer polish. Where `product` chrome gets out of the way (admin, dashboards, CRUD), these lanes give a mobile app a personality without turning it into a marketing page. Pick a lane in the preflight `lane:` line when `register=product` and the surface is a consumer app.

Material-first still holds. The "material" of a mobile hero is usually a rendered object (an aura orb, a soap bubble, a chrome sphere, a flat character) or the type itself. Name it before you pick colors.

## The transferable design sense (applies across every lane)

1. **Color encodes state or emotion, never decoration.** A pastel card means a category. A bright value means active. A dim one means handled. Tie every hue to a meaning before you place it.
2. **Type weight and brightness IS the hierarchy.** A single sentence where the bright/bold words carry the signal and the dim words connect reads faster than five boxed widgets.
3. **One confident hero per screen.** A big number, a rendered material object, a flat character, or one sentence. Everything else recedes. Never a wall of equal cards.
4. **Generous first fold.** One focus, then progressive disclosure. Crowding the top is the fastest way to look like every other app.
5. **Soft, tinted, rounded cards** (16-24px) with soft tinted shadows for consumer warmth. Sharp corners only in the editorial-bold lane. Pick one radius system per screen and hold it.
6. **A rendered material beats a flat abstract panel.** An orb, bubble, chrome sphere, or flat character carries more than a gradient rectangle.
7. **Pills, chips, stickers, segmented tabs** are the consumer component vocabulary. Use them instead of plain rows where personality helps.
8. **Floating rounded bottom nav** (4-5 icons) is the app-chrome default. One accent FAB is allowed; six items or mystery icons are not.
9. **Numbers are display type.** Streaks, counts, scores, and percentages can be the largest thing on the screen.
10. **Motion is gentle and CSS-first.** Entrance = translateY 12-16px + opacity. A breathing or idle pulse on the hero object. Soft spring on press. For anything beyond transitions, follow SKILL.md's Delegating motion section: decide with `animate-expo` or `animate`, build with GSAP.

## The seven lanes

### 1. soft-wellness
- **When:** health, wellness, calm AI, mindful finance, anything that should feel like a deep breath.
- **Surface:** warm off-white or near-white with a soft peach or aurora radial glow at the top. Tinted neutrals, never flat grey.
- **Type:** clean geometric sans (Plus Jakarta Sans, Inter, SF Pro). Headings large and LIGHT weight (300-400), relaxed line-height. Numbers can go big.
- **Signature:** a soft gradient "aura" orb (radial blend, slightly blurred, glossy) as the agent avatar; rounded 20-28px cards with soft tinted shadows; a trophy or streak pill; a floating rounded bottom nav.
- **Motion:** slow breathe on the orb (scale 1 to 1.06), gentle fade-up on cards, soft count-ups.
- **Watch out:** keep it calm, one accent hue, do not crowd the first fold.

### 2. bold-playful
- **When:** mood, social, gen-z consumer, a single-question check-in, onboarding that needs personality.
- **Surface:** saturated full-bleed color (one screen, one bold color), often a two-tone vertical split.
- **Type:** heavy CONDENSED display (Anton, Archivo Black, Druk) all-caps for the hero line; clean sans for controls.
- **Signature:** flat-vector characters from simple shapes (big white eyes, one clear expression); a 2x3 grid of soft pills with one solid-fill selected state; a small circular grid-menu button.
- **Motion:** idle eye-blink, a gentle character sway, a pop on pill select.
- **Watch out:** one idea per screen, the character carries it. Flat is the point - no gradients or shadows on the character.

### 3. editorial-max
- **When:** events, culture, reading, bold in-app marketing, a "front page" feel.
- **Surface:** lavender, cream, or yellow grounds; high-contrast black ink.
- **Type:** huge heavy black grotesk (or Archivo), mixed roman + italic, tight leading. Big numerals as a graphic element.
- **Signature:** rotated "sticker" shapes (starburst, squircle, circle) carrying a label + date; a translucent glass shelf with a reflection; count-badged segmented tabs ("All 23 / Design 10").
- **Motion:** stickers settle with a slight rotate; tabs swap with a quick slide.
- **Watch out:** type does the work, keep color blocks few and confident. Sharp or minimal radius, not squircle.

### 4. clean-data
- **When:** fitness, health, consumer analytics, anything with stats and charts that must stay friendly.
- **Surface:** white, with PASTEL category cards (mint, lavender, peach, rose) where each pastel marks a category.
- **Type:** clean sans; numbers semibold and prominent; small labels for units.
- **Signature:** a macro-stat row (label + big value); ring and smooth line charts; 16-20px rounded cards; a 5-icon floating bottom nav with one filled accent.
- **Motion:** rings fill, bars grow, numbers count up on enter.
- **Watch out:** pastel is meaning not decoration; one chart style; never cards-inside-cards.

### 5. material-hero
- **When:** premium product, launch, hardware, a "calm is a material" statement. This is material-first in a mobile key.
- **Surface:** vast whitespace (or near-black for OLED-premium). The screen is mostly empty.
- **Type:** restrained; a tiny wide-tracked mono label up top; one bold but not huge headline; a black pill CTA.
- **Signature:** ONE rendered material object as hero - an iridescent soap bubble (layered radial + conic sheen + rim light), a polished chrome sphere (gradient bands + a horizon reflection), a glass orb. Side objects peek in, blurred.
- **Motion:** a slow drift or shine sweep on the object; it breathes; everything else holds still.
- **Watch out:** the object must read as a real material, not a flat circle. One object, one CTA, huge negative space.

### 6. conversational
- **When:** AI assistants, digests, briefs, messaging, anything where the AI speaks. The lane closest to the Leo morning command center.
- **Surface:** near-black (cool-tinted) or clean white; text-forward.
- **Type:** the paragraph IS the UI. Bright or bold words carry the signal, dim grey words connect. A serif voice for the AI, sans for the interface, mono for metadata.
- **Signature:** a greeting or summary paragraph with inline avatars and small colored glyphs; a rising rounded bottom sheet or a fanned stack of message cards; dotted-hairline list rows.
- **Motion:** words and lines reveal in sequence; the sheet rises; cards settle from a fan.
- **Watch out:** weight and brightness are the hierarchy, so resist boxing everything. Tint the dark, never flat grey-on-grey.

### 7. warm-journal
- **When:** journaling, habits, kids, soft consumer, a forgiving editor.
- **Surface:** cream or warm off-white; colorful but soft.
- **Type:** friendly rounded sans (Poppins, Plus Jakarta, Nunito); approachable medium weights.
- **Signature:** flat spot illustrations (sun, hills, weather); a horizontal day strip with one filled accent day; soft category cards (pink, lavender); emotion or mood BAR charts; a single round accent FAB (often orange) in the bottom nav.
- **Motion:** bars grow to height, cards fade-up, a soft press on the FAB.
- **Watch out:** warmth not childishness; keep illustration simple and flat; one accent.

## Combining lanes

Lanes are starting points, not silos. Pick one primary and borrow at most one secondary. A calm AI assistant might be `conversational` on the home and `clean-data` on a detail screen. The Leo morning command center fuses `conversational` (the brief), `soft-wellness` (the calm shell), and a `material-hero` orb.

## Anti-slop for these lanes (on top of [craft-floor.md](craft-floor.md) and [tells.md](tells.md))

- No flat circle pretending to be an orb, bubble, or chrome. Render the material (layered gradients, a sheen, a reflection) or drop it.
- No pastel-as-decoration. If a card is mint, mint must mean something.
- No mixed corner-radius systems on one screen. Squircle (consumer) or sharp (editorial), held throughout.
- No identical stat cards in a 3-up grid (the SaaS hero-metric cliche). Vary size; let one number be the hero.
- No bottom nav with 6+ items or unlabeled mystery icons.
- A single sentence and a big number beat a wall of widgets. If a consumer screen reads as a dashboard, it failed.
