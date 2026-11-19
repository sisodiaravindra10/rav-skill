# rav

A personal design skill for Claude Code. It catches the defaults you were about to ship.

Three registers, sixteen scoped moves, and a sixty-six item production-tell list that
runs as the last filter before anything ships.

<!-- tell count: grep -c '^- ' reference/tells.md, minus the 3 hex-value bullets under Palette bans -->

```bash
git clone https://github.com/sisodiaravindra10/rav-skill ~/.claude/skills/rav
```

Then `/rav` in Claude Code, or just ask for something to be built, designed, critiqued
or polished.

## What it is

Most design output from a model is not bad so much as *predictable*. It converges on the
same handful of looks whatever the subject: cream ground with a serif display, near-black
with one neon accent, broadsheet hairlines with tracked mono labels. This skill exists to
notice that happening and stop it.

It is a taste layer, not a component library. It ships no CSS. It decides.

## How it decides

Every run opens with the same block, before a single visual choice is made:

```
RAV_PREFLIGHT
mode:     build | generate | critique | <move>
register: brand | kinetic | product
visitor:  persuade | operate | read | experience
read:     <page kind, audience, vibe, system pick>
material: <what the surface is made of>
color:    <restrained | committed | full-palette | drenched>
hero:     <archetype>
dials:    variance=N/10 motion=N/10 density=N/10
```

**Register** picks the visual world. **Visitor mode** picks what may never be sacrificed
for it. They are orthogonal: a dev tool's landing page is `product` company but `persuade`
visitor, and gets designed accordingly.

## The three laws

1. **The brief wins.** A pinned aesthetic, font or palette beats every default in the
   skill. Redirecting a clear brief toward the model's taste is failure.
2. **Refinement preserves, redesign replaces.** Never split the difference into polish on
   a look already discarded.
3. **Visual authority is evidence, not a filename.** A missing DESIGN.md does not make a
   project greenfield. A coherent identity already in the code is the world.

## The moves

Sixteen scoped verbs. Name one and the work stays inside it.

| group | verbs |
|---|---|
| refine | `polish` `bolder` `quieter` `distill` `harden` `onboard` |
| enhance | `animate` `colorize` `typeset` `layout` `delight` `overdrive` |
| fix | `clarify` `adapt` `optimize` |
| evaluate | `review-motion` |

## The composition reference

`reference/layouts.md` holds worked recipes for six hero archetypes and eight section
archetypes, each read off a real page: the shape with real proportions, the load-bearing
part, when to reach for it, and what kills it.

It also ranks its own sources, which matters more than the recipes do. Shipped work is
safe to study whole. Two of the references have strong structure and placeholder content,
one with a Logoipsum logo wall and one with a typo in its hero badge, so nothing about
their proof is instructive. Three are marketplace templates worth exactly one move each,
and they ship card fans, invented stat grids and lime-on-electric-blue, all of which the
tell list already bans. A reference file that treats every source as equally good teaches
the skill to ship a template.

## The checker

The mechanical half of the craft floor is executable, because a floor you only read stops
firing.

```bash
node scripts/verify.mjs --source src            # static scan, exit 2 on findings
node scripts/verify.mjs --emit-browser          # prints a probe to run in the page
```

The source scan covers em dashes, enumerated section labels, `h-screen`, competing height
utilities, scroll listeners, reveal gates, un-guarded CDN scripts, blanket reduced-motion
kills, `theme()` in plain CSS, and a `var()` colour in the Tailwind config (which makes it
emit no utility at all, silently).

The browser probe measures what only the rendered page knows: contrast composited through
alpha and ancestor opacity, touch targets that account for pseudo-element hit areas,
overflow, dead links, keyboard-unreachable scroll regions, focusables inside hidden
containers, browser surfaces, and content still gated at opacity 0. Run it about two
seconds after load so entrance animations have settled.

`rav-verify-ignore` on a line exempts it, for code that quotes a banned pattern as evidence.

## Layout

```
SKILL.md                      the decision spine, always loaded
reference/craft-floor.md      mechanical quality floor, loaded before editing UI
reference/tells.md            66 production tells, the last filter before delivery
reference/world.md            visual-world derivation and the design-system map
reference/moves.md            the sixteen move playbooks
reference/modes.md            build / generate / critique output shapes and scoring
reference/redesign.md         redesign protocol
reference/mobile-aesthetics.md  seven consumer-app lanes
reference/layouts.md          hero and section composition recipes, sources ranked
reference/fonts.md            a checked Google Fonts roster by job, pairings, loading rules
reference/voice.md            eighteen machine-copy sentence shapes and the pass that removes them
reference/micro.md            the control-scale motion floor: press, hover, popovers, tooltips
reference/intake.md           read the project first, then one round of questions before designing
reference/process.md          how Ravindra actually works, in his own words; outranks the borrowed rules
scripts/verify.mjs            the craft floor, made executable
```

Progressive disclosure: the spine stays under 500 lines and the playbooks load only when
the work needs them.

## What it delegates

The skill is the taste layer and defers the rest rather than reinventing it:

- **Motion judgment** goes to the Emil Kowalski skills (`animate`, `apple-design`,
  `choreograph`, `gestures`, `review-animations` and friends). Their control-scale floor
  is distilled into `reference/micro.md` so it applies on every build.
- **Motion technique** goes to the GSAP skills.
- **Award-level builds** go to `awwwards`, with `jury` for scoring.
- **Copy** goes to `copywriting`, and `humanizer` for rewriting a machine-sounding draft.
- **Image references** use whatever image generation tool the environment has.

The ordering rule that matters: **decide with Emil, build with GSAP**, never the reverse.

## Distilled from

`impeccable`, `design-taste-frontend`, `taste-skill`, `gpt-taste`, `taste-design`,
`high-end-visual-design`, `minimalist`, `bencium`, plus a personal DNA layer that only
fires on its author's own surfaces and stays out of client work.

## A note on the gate

The skill opens with a password prompt. It is a soft gate, the password sits in plaintext
in `SKILL.md`, and it exists because its author wanted one. Remove the "Access gate"
section if you would rather it did not.

## Licence

MIT.
