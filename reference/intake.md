# rav intake

How to get the context a design needs by asking for it first. Load this at the start of any build, generate or redesign of a new surface or a whole page, before the preflight.

A design built on a guessed audience and a guessed goal can pass every rule in this skill and still be the wrong page. Ten seconds of their answers beat an hour of rework. The opposite failure is real too: a wall of questions about things the skill should decide, or that the project folder already answers. So intake is two steps, in this order: find out what you can alone, then ask only for what is left.

## Step 1: read before you ask

Never ask a question the project can answer. Before any question, look for:

- A `DESIGN.md`, `RAV.md`, brand file or tokens file: the world already exists (law 3).
- Existing pages and components: palette, type, radius, voice.
- `package.json` and the folder layout: the stack and what is installed.
- A README, a brief, a pasted reference, a screenshot in the message.
- Real content: copy docs, product screenshots, logos, photos, data.
- What they have said earlier in the conversation, and anything remembered about the project.

Write down what you now know. The questions come from the gaps.

## Step 2: ask one round

- **One round, up to four questions,** asked together. Use the structured question tool when the environment has one, so they can answer with a click. Otherwise a short numbered list.
- **Each question offers two to four concrete options,** with your recommendation first and marked as such. They can always answer in their own words.
- **Ask in their terms, not design terms.** "What should a visitor do before they leave?" not "What is the primary conversion?" Never ask them to pick a font, a hex value, a grid or a radius. Those are this skill's job.
- **Each question must change the design.** If both answers would produce the same page, cut the question.
- **Say what you found first,** in one line, so the question stands on its own: "The repo has a logo and two screenshots but no copy. Do you have real copy, or should I write it?"

### The question bank, by what it decides

Pick the four that are still open and matter most. They are listed in order of how much each one changes the result.

| what is unknown | ask | what it decides |
|---|---|---|
| The place | Is there a place or a memory behind this one? (Many designs start there. If the profile says theirs do, ask it first.) | the world, the material, the idea |
| The goal | What should someone do before they leave this page? | visitor mode, the one CTA, what the first fold is for |
| The audience | Who is this for, and what do they already know about it? | register, voice, how much explaining the page does |
| The idea | Offer two or three directions, each as one plain sentence about what the first screen is. Which is closest? | the `idea:` line, color strategy, hero |
| Real material | What do you have that is real: copy, screenshots, photos, logo, numbers, quotes? | whether product UI can be shown, what gets a placeholder, what cannot be claimed |
| Fixed things | Is anything already decided: brand colors, a font, a stack, a reference to follow or avoid? | soft-overrides, law 1 |
| Scope | How much of it: one section, one page, a whole site? Which sections matter? | the section list, the effort |
| Where it lives | Where does this ship: a portfolio piece, a live product, a pitch, a client handover? | how real the content must be, how far the motion can go |
| How far to push | Safe and clean, or something people remember? | the dials, whether `awwwards` should lead |
| Preserve or replace | (redesign only) What must stay, and what do you dislike about the current one? | refinement or redesign, law 2 |
| The goal of the review | (critique only) What decision is this review for? | what the findings are ranked by |

The direction question is the most useful one in the bank. Two or three sentences they can react to tell you more than any answer about audience, and they catch a wrong idea before it is built. Write each direction as what a person would see, for example "the brand red fills the screen and the approval queue runs inside it" against "a calm white page led by one large photograph of a desk". Not as adjectives.

## After the answers

- **Play it back in the preflight.** The `read:` and `idea:` lines carry their answers, and the `asked:` line records what was asked and what was assumed. That is the confirmation; do not ask "shall I proceed".
- **Then build the hero, finish it, and stop to show it.** That pause is where their reaction happens, see The profile comes first in SKILL.md. After their reaction, build the rest without stopping. One follow-up question later is fine if something truly blocks. A second round of four is not.
- **An answer is a pin.** What they chose is now a brief override under law 1. Do not drift back to a default halfway through.

## When to skip intake

- **Scoped moves on an existing surface** (`polish`, `quieter`, `typeset` and the rest): the surface is the context. Ask at most one question, and only if the move's target is unclear.
- **A local addition inside an established world.**
- **A brief that already answers the bank.** Say so in the `asked:` line and go.
- **They say "just build it", "you decide" or "surprise me".** Proceed on stated assumptions. That is an instruction, not a gap.
- **Nobody is there to answer** (a background run, a subagent, a scheduled job). Do not stall. List every assumption in the `asked:` line and in the closing notes so they can be corrected after.

## What good and bad intake look like

**Bad:** eight open questions, including "what colors do you like?" and "do you want animations?", asked before opening the project folder.

**Good**, for "build me a booking page for my dog grooming van":

> I found no existing project, so this starts clean. Four things would change the page:
> 1. What should a visitor do? Book a slot (recommended) / Call you / Join a waiting list
> 2. Which first screen is closest? One big photo of a just-groomed dog with the next free slot beside it (recommended) / A map of where the van is this week / A plain price list, top to bottom
> 3. What is real? I have photos of dogs I have groomed / Nothing yet, use labelled sample content (recommended if so) / I have prices and a logo
> 4. Where does it ship? A real page customers will use (recommended) / A concept to show someone

The example is deliberately a small, ordinary business. Do not reuse its answers for another brief; the directions always come from the subject in front of you.
