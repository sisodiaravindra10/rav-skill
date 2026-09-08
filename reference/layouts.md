# rav layouts

Worked composition recipes. Load in build mode before scaffolding a brand or marketing page, and in critique mode when the finding is that the structure is generic. SKILL.md picks the *shape* of the first fold; this file gives each shape a recipe with real proportions, plus the section archetypes for everything below it.

Read off screenshots of shipped sites and templates. The recipe is the load-bearing part. The specific colors are disposable.

## How to use

Pick one hero archetype and three to five section archetypes before writing markup. Name them in one line under the preflight, not as a new preflight field:

```
composition: hero=asymmetric-split / sections=logo-band, two-tone-statement, color-bar-accordion, bento-proof, close
```

Two picks from the same archetype means the layout-family repetition ban failed before the page was built.

## The sources, ranked

Craft is not evenly distributed. Reading these as equally good is how a template signature ends up in his work.

**Shipped, study whole.** Dub (dub.co), Auxia, Slite (slite.com), The Software House (tsh.io), Valley. Real customers, real content, every decision paid for.

**Strong composition, unshipped.** A reasoning-model page shipped as "Crucible", and a YC-badged automation page with an unnamed mark. Copy their structure, learn nothing from their content: Crucible's logo wall is Logoipsum placeholders, and the automation page's hero badge reads `Backend by Y-Combinator`, a typo for "Backed by" that survived to a published mock. Both are exactly what the copy self-audit catches.

**One move each, then stop.** Aeline (the bento stat grid), Payno (the pale-gradient product hero), Flowfi (the tab-switched panel). These three also ship fanned card clusters, invented stat blocks, and lime-on-electric-blue, all already banned in [tells.md](tells.md). Lifting one whole produces an AI page.

## Hero archetypes, worked

Names match the `hero:` enum in SKILL.md.

### centered-display (Dub, Crucible, Valley)

**Shape.** Announcement pill only if there is an announcement, H1 centered at 2 lines, subhead at 45-60ch over 2 lines, CTA pair 12px apart, then the artifact beginning around 55% down the fold and deliberately cut by it.

**Load-bearing.** The artifact. Everything above it is four elements of type that any competitor could write. Dub crops a real product screen at legible scale. Crucible puts the product's own prompt box there. Valley runs a painted landscape behind the whole fold and hangs the diagram off the bottom.

**Reach for it when** the product is one thing and one action.

**Kills it.** A full-page screenshot shrunk until nothing is readable. A floating rounded rectangle with a drop shadow and nothing inside it.

**Variance note.** SKILL.md avoids centered heroes above `variance=4`. These three earn the exception by putting a real artifact directly under the CTA pair, carrying the variance the type gave up. Without the artifact the rule holds.

### asymmetric-split (Auxia, the automation page, Fusion)

**Shape.** 45/55 or 40/60. Left column caps around 520px: eyebrow or nothing, left-aligned H1 at 2-3 lines, optional hairline, subhead, CTA pair. Right column starts above the headline's cap height and bleeds off the right edge.

**Load-bearing.** The right column having internal detail worth the width it took. Auxia routes three real UI fragments (a push notification, a creative card, a checkout) along a connector. Fusion clips a masonry of mixed photo and stat cards at the viewport edge so it reads as a surface that continues.

**Reach for it when** the artifact has parts that need reading, or the fold must carry a claim and its proof at once.

**Kills it.** One centered device mock on a gradient filling the right half. That is the split done as decoration.

### live-input (Crucible, Slite, Valley)

**Shape.** The first interactive element on the page is the product's real entry action, at hero scale. Crucible: a working prompt box with three suggestion chips beneath it. Slite and Valley: an email field with the CTA fused to its right edge as a single pill.

**Load-bearing.** It works, or it goes to the real next step. A decorative input is worse than a button, because it invites a keystroke and then eats it.

**Reach for it when** there is one entry action and no education needed first.

**Kills it.** A fake search bar. That is div-based fake product UI wearing a different hat.

### full-bleed-photo (Valley, Aeline, Payno)

**Shape.** Image behind the entire fold, type in the top third where the image is quietest, and an explicit handoff into the page ground. Valley feathers a painting into a dotted white field. Payno dissolves a sky gradient into white.

**Load-bearing.** The handoff, and the image having its own quiet zone. Valley works because it is a painting whose sky is low-contrast exactly where the headline sits. That is a choice, not luck.

**Reach for it when** brand or kinetic register with a real image, per the Imagery section.

**Kills it.** Stock under a flat black scrim. A hard horizontal cut where the image stops.

### flow-diagram (Auxia, Valley)

**Shape.** Real UI fragments as nodes, connected by 1px routed lines with square corners, each connector interrupted by a small mono uppercase pill sitting on the line. Auxia runs it left to right as a customer journey. Valley runs five source labels inward to a central logo tile.

**Load-bearing.** The labels sit *on* the connectors rather than floating near them, and the nodes are real interface rather than icons in circles.

**Reach for it when** the product's value is the routing, the orchestration, or the aggregation.

**Kills it.** Boxes and arrows with generic nouns inside. If the nodes could belong to any product, it is an architecture diagram, not a hero.

### image-with-overlay

No example among these references. Its recipe stays as SKILL.md states it.

## Section archetypes

### Logo band, four variants

- **Bordered grid** (TSH): 1px dividers between cells, marks optically centered. Reads as a directory. Best above eight logos.
- **Full-bleed marquee** (Auxia): one row running past both edges under a short label. Best when the names carry themselves.
- **Two-row static grid** (Dub): five across, two down, with one `CASE STUDY` kicker under the strongest name. That kicker is the only under-logo label [tells.md](tells.md) permits, because it is a link and not a taxonomy.
- **Pill chips with marks** (Fusion): each logo inside a bordered pill. Friendlier, and it hides mismatched mark weights. Best when the logos are weak.

All four scale to equal *visual mass*, never equal width: a wide wordmark set to a square mark's width dwarfs it. One optical weight, all mono-tone or all brand-color, never mixed.

### Two-tone statement (Auxia, Dub)

One sentence at display scale over 2-3 lines, where a color or weight change carries the turn. Auxia sets "Marketing didn't get harder." in mid-grey and "It got stuck." in white. The split lands on the pivot, never mid-clause. If the sentence has no turn, this is the wrong archetype. Gradient text on a large header stays banned regardless.

### Color-bar accordion (TSH)

Full-width stacked bars, one open with a paragraph and an arrow affordance, the rest collapsed to roughly 40px strips in their own hues. Categorical color, one bar per real offering.

Take the structure, drop TSH's `01` prefix: enumerated section labels are banned. Drop the inline emoji tiles they run in the paragraph above it too.

### Bento proof grid (Aeline)

Four to six unequal cells mixing one photo, one quote with real faces, one large numeral, one label-only cell in the accent. Unequal spans, dense flow, cell count equal to content count.

This is the only move to take from Aeline. Its figures (`120+`, `100%`, `520k+`, `20+`) are precisely the invented-metric block SKILL.md bans. Every numeral here is real or the grid holds something else.

### Feature quad on hairlines (the automation page)

Four columns, each carrying a thin icon, a title in the display face at body-plus scale, and two lines of copy, separated by 1px vertical rules rather than cards. Rules stop short of the section padding. This is how to ship four features without four boxes. Above six items SKILL.md sends you to a different component entirely.

### Caption bar over the artifact (Dub)

A dark rounded bar overlapping the bottom edge of the product shot: title, one line of description, one ghost button pushed right. It gives a screenshot a job and a link without spending a section on it. One bar, at the bottom edge, overlapping by about a third of its own height. Two of them is a carousel pretending otherwise.

### Tab-switched artifact (Dub, Flowfi)

Three to five pills above the artifact, each with its own mark and color, switching what the artifact shows. Dub sets the active pill on white with a colored icon and flattens the rest. Real state, real content per tab, keyboard reachable, and the container height fixed to the tallest tab so switching never jumps the page.

### Document collage (Crucible, Fusion)

Real artifacts (PDFs, spreadsheets, chat fragments, cards) overlapped at slight rotations around a focal element, with a chip row underneath naming the types. It works because the fragments stay legible at that scale. Rotations under 6 degrees, removed below 768px.

## Proportions that hold across all of them

- **First fold:** the type block owns the top 30-40%, the artifact starts at 55-60% and is deliberately cut by the fold. Nothing important sits vertically centered.
- **Display:** 56-88px desktop, inside SKILL.md's 6rem cap. Subhead 17-20px, 45-60ch, two lines.
- **CTA pair:** one filled primary plus one ghost or outline secondary, 12px apart. Never two filled buttons. The secondary carries a small leading icon (play, arrow) or nothing at all.
- **Section rhythm:** 96-160px vertical padding. Consecutive sections sharing a ground take the larger value.
- **Ground:** four of the five shipped references use bone or cream (`#faf7f2` to `#f7f4ef`) rather than white, with near-black type. This is not the banned premium-consumer beige, which is beige *plus brass plus espresso* as a complete palette. Bone with a blue, black, or single bright accent is a different move and a good one.
- **Accent:** appears two or three times across the first two folds, then rests.
- **Micro-labels:** mono, uppercase, 10-11px, 0.16-0.2em tracking, sitting on a connector, an edge, or a chip. Floating in open space they are decoration.

## What these references do not license

- The announcement pill when there is no announcement.
- Fanned or scattered UI cards on a gradient (Aeline, Flowfi). The shipped references position fragments along a *route*; the templates fan them for texture.
- A stat bento of numbers nobody supplied.
- **The hero trust strip.** Valley runs one directly under its CTA and survives it because it names a real customer and a real result. The ban in SKILL.md stands as the default. Break it only with a named claim you can source.
- Emoji as inline highlights in body copy (TSH).
- Enumerated section prefixes (TSH's `01`).
- Lime-on-electric-blue, sky-gradient fintech, and the card-fan hero: three template signatures already listed in [tells.md](tells.md).
