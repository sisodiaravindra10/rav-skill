# rav micro-interactions

The small motion on the things people touch: presses, hovers, popovers, tooltips, toggles, toasts, tabs. Load this in build mode before writing any interactive component, in the `animate`, `delight` and `polish` moves, and in critique mode when a page looks right and feels dead.

These rules are distilled from Emil Kowalski's `emil-design-eng` skill and rewritten as rav defaults, so the floor applies on every build without a second skill load. For anything beyond the floor (a new animation from scratch, a gesture, a sequence) load the skill named at the end of each section. Emil decides; this file is the part that is always on.

SKILL.md sets the taste for motion at page scale. This file works at the scale of one control. No single item here gets noticed; together they are why an interface feels built by a person.

## First question: should it move at all

Decide by how often the person will see it.

| how often | decision |
|---|---|
| Hundreds of times a day: keyboard shortcuts, a command palette, tab switching by key | No animation |
| Tens of times a day: hover states, moving through a list | Remove it or make it barely there |
| Now and then: modals, drawers, toasts, dropdowns | Standard motion |
| Rare or first time: onboarding, a success moment, an empty state filling for the first time | Room for delight |

Anything started from the keyboard gets no animation. The hand has already moved on.

Every animation answers "why does this move" with one of five reasons: it shows where something came from or went, it shows a state changed, it explains how something works, it confirms the interface heard the input, or it stops a change from being jarring. "It looks good" is a reason only on a rare surface.

## Curves and durations at control scale

```css
:root {
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);      /* entering, exiting, press */
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);  /* moving or morphing on screen */
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);   /* sheets and drawers */
}
```

- **Entering or exiting:** ease-out. It moves first and settles, so it feels like a response.
- **Moving or morphing while staying on screen:** ease-in-out.
- **Hover and color changes:** plain `ease` is fine.
- **Constant motion** (a marquee, a progress bar, a hold-to-confirm fill): linear. This is the one place linear belongs.
- **Never ease-in on interface motion.** It hesitates at the exact moment the person is watching.
- The built-in keywords are too soft. Use the custom curves.

| element | duration |
|---|---|
| Press feedback | 100-160ms |
| Tooltip, small popover | 125-200ms |
| Dropdown, select | 150-250ms |
| Modal, drawer, sheet | 200-500ms |
| Toast | about 400ms |

Interface motion stays under 300ms outside the last two rows. These sit inside SKILL.md's wider duration bands. The cinematic hero protocol is a different job and keeps its own 2 to 4 seconds.

## The floor, every build

**Pressables respond.** Every button, card-as-button, chip and row that can be pressed scales to `0.97` on `:active`, over 160ms on `--ease-out`. Stay between `0.95` and `0.98`. A press with no response reads as a dead control.

```css
.btn { transition: transform 160ms var(--ease-out); }
.btn:active { transform: scale(0.97); }
```

**Hover is for devices that hover.** Wrap hover motion in `@media (hover: hover) and (pointer: fine)`. On a phone an unguarded hover state sticks after the tap.

**Nothing enters from nothing.** No `scale(0)`. Start from `scale(0.95)` or higher with `opacity: 0`. Things in the world do not appear out of a point.

**Popovers grow from what opened them.** Menus, dropdowns, popovers and tooltips set `transform-origin` to the trigger's side, not the center. Radix and Base UI expose it as a variable; use it. Modals are the exception: they belong to the viewport, so they scale from center.

**Tooltips wait once.** A delay before the first tooltip stops accidental ones. While one is open, the neighbours open at once with no delay and no animation, so sweeping a toolbar feels instant.

**Reversible things use transitions.** A CSS transition can be interrupted and retargeted halfway. A keyframe animation restarts from zero. Anything a person can toggle, stack or cancel quickly (toasts, toggles, accordions, hover cards) uses a transition, or a spring.

**Enter states in CSS.** Use `@starting-style` for the entry of anything mounted on demand, with a `data-mounted` fallback where support is thin. No `useEffect` just to flip a class.

**Exit faster than enter,** and in the direction it came from. A toast that slides in from the bottom leaves by the bottom.

**Slow where the person is deciding, fast where the system answers.** A hold-to-delete fill takes 2 seconds, linear. Letting go snaps back in 200ms.

**Focus is not animated in.** A focus ring appears at once. Animate its offset if you like, never its arrival.

## Surface details that ride along

Not motion, but the same scale and the same payoff. These come from Jakub Krehel's `make-interfaces-feel-better`; load it for the full list and its review format.

- **Concentric radius.** A rounded thing inside a rounded thing uses inner radius = outer radius minus the padding between them. Equal radii on both look pinched.
- **Optical over geometric.** A play icon, an arrow or a glyph with uneven weight is nudged until it looks centered, even when the numbers say it already is.
- **Shadows lift, borders divide.** Use a shadow to say something sits above, a hairline to say two things are separate. Not both for the same job.
- **Never `transition: all`.** Name the properties. `all` animates things you did not mean to and costs frames.
- **Tabular numerals** on anything that updates or lines up in a column: prices, timers, counters, tables.
- **Balanced and pretty wrapping.** `text-wrap: balance` on headings, `text-wrap: pretty` on body, so no line ends on one orphan word.
- **Hit area larger than the glyph.** A small icon button extends its target with a pseudo-element, not by growing the icon.
- **Images get a faint inner outline** (about 1px at 8 to 10 percent) so a pale image does not dissolve into a pale page.
- **Icon stroke matches text weight.** A thin icon beside medium text reads as a different system.
- **No entrance animation on first page load** for things that are simply there. Entrances are for what arrives later.

## Techniques worth reaching for

**A touch of blur fixes a bad crossfade.** When swapping two states still looks like two objects overlapping, add `filter: blur(2px)` and drop opacity to about 0.7 for the 200ms of the swap. The eye reads one thing changing. Keep blur small; heavy blur is slow in Safari.

**clip-path is an animation tool.** `clip-path: inset(top right bottom left)` animates cleanly.
- *Tab highlight:* duplicate the tab list, style the copy as active, clip it to the active tab, and animate the clip. Text and background change color together with no seam.
- *Hold to confirm:* a colored overlay clipped to `inset(0 100% 0 0)` that opens to `inset(0)` while held.
- *Image reveal:* start at `inset(0 0 100% 0)` and open when it enters the viewport, once.
- *Comparison slider:* two stacked images, the top one clipped by the drag position.

**Springs for anything with a hand on it.** Dragging, flicking, and anything the person can interrupt. A spring keeps its velocity when redirected. Describe it as duration and bounce (`duration: 0.5, bounce: 0.2`), keep bounce between 0.1 and 0.3, and use none at all on ordinary interface motion.

**Pointer-following is sprung, never direct.** A tilt, a magnetic button or a cursor-follow wired straight to mouse position feels mechanical. Run the value through a spring. This is decoration: fine on a brand surface, wrong on a chart someone is reading.

**Stagger is short and uneven.** 30 to 80ms between items, total capped, never blocking interaction while it plays. Only for content that arrives as a list.

**Dismiss on velocity, not distance.** A quick flick closes a sheet or a toast even if it barely moved. Add resistance at the edges instead of a hard stop.

**Perceived speed is a design choice.** A spinner that turns faster makes the same wait feel shorter. A 180ms select feels quicker than a 400ms one.

## By register

- **Product chrome:** the floor, and little else. Press feedback, origin-aware popovers, instant tooltips, 150 to 250ms. No entrance choreography. Remove hover motion on dense lists.
- **Brand:** the floor, plus one or two of the techniques where they carry the idea (a clip-path reveal, a sprung pointer moment). The authored moment in SKILL.md is separate from this and still limited to one.
- **Kinetic:** the floor, faster and harder. Shorter durations, bigger press scale (toward 0.95), clip and mask reveals over fades.
- **Consumer mobile:** the floor with springs. Press states on everything, sheets that track the finger, haptics where the platform has them.

## Which Emil skill to load for more

| need | load |
|---|---|
| A new animation, decided in the right order | `animate` |
| Several elements entering or changing as one motion | `choreograph` |
| Drag, swipe, sheets, hold to confirm, reorder | `gestures`, with `apple-design` for the physical feel |
| It stutters or drops frames | `animation-performance` |
| The app feels slow or busy and motion may be why | `remove-animations` |
| A page that should feel installed on a phone | `mobile-native` |
| Does this component survive real content | `break-ui` |
| A full detail review with findings by file and line | `make-interfaces-feel-better` |
| Critique of motion that already ships | `review-animations`, or `improve-animations` for a codebase |
| Finding what should move and does not | `find-animation-opportunities` |
| The deeper reasoning behind this file | `emil-design-eng` |

## Reduced motion

Every item above has a reduced-motion form, and it is never "off". Press feedback stays as a color or opacity change. Popovers and tooltips fade without scaling. Reveals become a fade. Springs and pointer-following stop. State must still be legible.

## What this file does not license

- Motion on every element because the list above is long. The first question still decides.
- A bounce on ordinary interface motion.
- Animating layout properties to get an effect transform can produce.
- Skipping `animate` on a real animation because this file was loaded.
