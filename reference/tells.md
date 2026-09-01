# rav tells

The specific strings, labels, strips, and decorations that mark a page as AI-built. These came out of real generated-landing-page tests. Treat them as hard bans unless the brief explicitly calls for one. Run this list as the last filter before delivering, and as the checklist in critique mode.

## The three clusters

AI interfaces converge on three looks regardless of subject. Any of them is legitimate when the brief asks. Landing on one when the aesthetic was free means the self-check failed.

1. Warm cream ground, high-contrast serif display, terracotta or signal-red accent.
2. Near-black, one neon accent, glowing edges.
3. Broadsheet-editorial hairlines, italic display serif, small tracked mono labels.

Self-check: if someone could guess the aesthetic from the category alone, or from category-plus-avoidance, rework it.

## Palette bans

**Premium-consumer family (cookware, wellness, artisan, luxury, heritage craft, DTC home goods).** The default reach is warm beige plus brass plus espresso, and it makes every such brand invisible. Banned as a default:

- Grounds: `#f5f1ea`, `#f7f5f1`, `#fbf8f1`, `#efeae0`, `#ece6db`, `#faf7f1`, `#e8dfcb`
- Accents: `#b08947`, `#b6553a`, `#9a2436`, `#9c6e2a`, `#bc7c3a`, `#7d5621`
- Ink: `#1a1714`, `#1a1814`, `#1b1814`

Rotate instead, and never ship the same family twice in a row: cold luxury (silver-grey, chrome, smoke) / forest (deep green, bone, amber) / black and tan (true off-black, warm tan, sharp contrast, no beige) / cobalt and cream / terracotta and slate / olive, brick, paper / pure monochrome with one saturated pop.

Override only when the brief names those colors, or the identity is genuinely vintage warm-craft AND you can say why this palette fits this brand.

**Also banned as defaults:** AI-purple and violet glow gradients, generic SaaS blue `#3B82F6` as the accent, neon-on-dark-mesh, pure `#000` and `#fff`, oversaturated accents above 80% saturation, warm and cool grays mixed in one project.

## Font bans

- **Inter as the display face.** Fine for body.
- Serif anywhere in a dashboard or software UI.
- One family doing everything on a brand surface. Pair display plus body plus mono.
- Mixed-family emphasis inside a headline. Use italic or bold of the same face.

## Hero and top of page

- Version labels as eyebrows: `V0.6`, `v2.0`, `BETA`, `INVITE-ONLY PREVIEW`, `EARLY ACCESS`, `ALPHA`. Only when the brief is literally about launch status.
- Brand micro-meta sub-eyebrows: `Marrow . No. 01 . The 6-quart`.
- A decoration text strip at the hero bottom: `BRAND. MOTION. SPATIAL.`, `TYPE / FORM / MOTION`, `ESTD. 2018 . LISBON`. Allowed only when the strip carries real navigable links or real status.
- Scroll cues: `Scroll`, `down-arrow scroll`, `Scroll to explore`, animated mouse-wheel icons. The visitor knows what scroll is.
- Div-based fake product UI: fake task lists, fake terminals, fake dashboards built from styled divs. The single loudest tell. Use a real screenshot, a generated image, a real mini component, or nothing.
- Fake version footers inside fake screenshots: `v0.6.2-rc.1`, `last sync 4s ago . main`.
- A trust micro-strip, pricing teaser, or logo wall stuffed into the hero row.

## Labels, numbering, separators

- Section-number eyebrows: `00 / INDEX`, `001 . Capabilities`, `06 . how it works`, `05 . The honest table`.
- `01 / 4` pagination on images or bento tiles. If the visitor can count, the label is noise.
- Range labels as eyebrows: `Index of Work, 2018 - 2026`. Say what the section is.
- Generic step labels: `Stage 1 / Stage 2`, `Step 1 / Step 2`, `Phase 01 / Phase 02`, `Pass One / Pass Two`. The step content is the label. Use the verb: Install, Configure, Ship.
- `LABEL // YEAR` formatting: `SYSTEM // 2024`, `METRICS // 2025`.
- The middle dot as the default separator. Max one per metadata line. Prefer line breaks, hairlines, or columns.
- Decorative colored status dots before nav links, list rows, or badges. Zero by default. Only for real semantic state, sparingly.
- Micro-meta sentences under a heading: *"Each of these is a feature we ship today, not a roadmap promise."* Eyebrow plus headline plus body is enough.
- Pills, tags, or labels overlaid on images: `Brand . 02`, `PLATE . BRAND`, `Field notes - journal`. Let the image speak, or caption below it.
- Photo-credit captions as decoration: `Field study no. 12 . Ines Caetano`, `Frame XII . 35mm`. Credit is for a real photographer of a real photo. Otherwise a one-line functional caption or none.
- Version footers on marketing pages: `v1.4.2`, `Build 0048`.
- Live-stock counters as decoration: `Reservation 412 of 800`, unless the brief is a real limited run.

## Typography flourishes

- **Em-dash, anywhere visible, in any element.** Headlines, eyebrows, pills, body, quotes, attribution, captions, buttons, alt text. Also en-dash used as a separator; date and number ranges take a hyphen. There is no sparing-use allowance. One visible `—` fails the output.
- `<br>`-broken-and-italicized headlines as a design move: `for thirty<br><i>years.</i>`.
- Vertical rotated text. Agency-portfolio cliche unless the brief is explicitly experimental AND it serves the composition.
- Crosshair and hairline grid lines drawn purely to make the page feel designed. Only when they organize real content.
- Gradient text on large headers.

## Copy tells

- `Quietly in use at`, `Quietly trusted by`. Say `Trusted by`, `Used at`, or let the logos speak.
- Performative-craftsman labels: `From the field`, `Field notes`, `Currently on the bench`, `On our desks`, `Loose plates`. Use plain functional labels or none.
- Mock-humble industry references: `We respect the French ones`.
- Locale, city, time, and weather strips: `Lisbon 14:23 . 18C`, `1200-690 Lisbon, Portugal` in the nav or hero. Allowed only for a genuinely distributed studio, a travel brand, or a real physical venue. A contact address in the footer is fine; an atmospheric locale strip is not.
- Filler words: elevate, seamless, unleash, next-gen, game-changer, delve, powerful, leverage, amazing, revolutionize.
- Placeholder identities: John Doe, Sarah Chan, Acme, Nexus, SmartFlow, Lorem Ipsum. Invent contextual names and realistic details instead.
- Round fake numbers: `99.99%`, `50%`, `1234567`. And fake-precise ones: `92%`, `4.1x`, `48k`, `5.8 mm` unless real or explicitly labeled mock.
- Invented dashboards of invented data: `SYSTEM PERFORMANCE METRICS`, `KEY STATISTICS`, `BY THE NUMBERS` filled with numbers nobody gave you. Use `[metric]` placeholders instead.
- Two CTAs with the same intent on one page.
- Cute AI copy generally: forced metaphors, passive-aggressive humility, mock-poetic micro-meta. Boring and functional beats cute and wrong.

## Layout tells

- Three equal feature cards. Six white-on-white bento tiles with only type inside.
- A bento grid with an empty cell in the middle or at the end.
- Three or more consecutive image-plus-text zigzag sections.
- Left big headline plus small right explainer paragraph as the section header.
- A small explainer paragraph floating in the top-right corner of a section header, aligned to nothing.
- `border-t` AND `border-b` on every row of a long list. Pick one, use it sparsely, or move to a different component entirely.
- A ten-row spec table with a hairline under each row. Group into three clusters, or go card-per-spec, or feature three and collapse the rest.
- Twenty-row data tables, thirty-row award lists, and full pricing matrices on a marketing page.
- A two-line desktop nav, or a nav taller than 80px.
- Two horizontal marquees on one page.
- Centered hero on dark mesh as the default. Narrow container forcing an H1 to five lines.
- Sections that flip theme mid-page.
- `h-screen` on a full-height section.

## Assets and dependencies

- Broken Unsplash hotlinks. Use `picsum.photos` with a descriptive seed, a generated image, or a real asset.
- Plain text wordmarks in a logo wall. Use Simple Icons, devicon, or a generated monogram SVG.
- Category labels printed under logos in a logo wall.
- Hand-rolled decorative SVG illustrations as a default. Library icons are fine; a single simple geometric mark is fine; freehand illustration is not.
- shadcn/ui shipped in its default state. Customize radii, color, and shadow to the project.
- Two design systems in one tree.
- Emoji in code, markup, headings, alt text, or output.
