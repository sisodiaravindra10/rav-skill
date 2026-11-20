# rav voice

How the words on the page are written and checked. Load this in build mode before writing any headline or body copy, in the `clarify` move, and in critique mode when the copy is the weak part.

The design can be right and the page still read as machine-made, because the sentences are. Banned-word lists catch the cheap cases. The patterns below catch the rest: they are shapes, and a shape survives any synonym swap.

## Who writes the copy

rav owns how copy sits on the page and whether it sounds like a person. It does not replace the skills that own the craft of writing it.

| job | load |
|---|---|
| Page copy from scratch: positioning, headline options, section-by-section messaging | `copywriting` |
| The page is not converting: offer, friction, CTA, form | `cro` |
| Interface text: labels, errors, empty states, confirmations | `design:ux-copy` |
| Ad headlines and variations | `ad-creative` |
| An existing draft that reads as machine-written, or a final sweep on long copy | `humanizer` |
| Anything in a company's brand voice | that company's brand skill or voice file, if there is one |

Whatever those produce still passes through this file before it ships. They optimise for persuasion; this is the filter for sounding written.

`humanizer` goes deeper than this file on the sentence level: 26 patterns with before and after examples, ranked by how strong a tell each is, and a check that no fact was lost in the rewrite. Use it for rewriting. This file stays the page-level filter, and the profile's voice rules win where the two differ.

## The patterns

Each one names the shape, shows it, and gives the fix.

**1. The false contrast.** "It's not just a tool, it's a partner." "More than a dashboard." "Not X. Y." The sentence invents a weak claim so it can beat it. Say the true thing directly: "It files your GST returns."

**2. The triad.** "Fast, simple, and secure." "Plan, build, ship." Three abstract words in a row are a rhythm, not a claim. Keep the one that is true and specific, and show it: "Loads in under a second on 3G."

**3. The abstraction ladder.** "Empower teams to unlock their potential." Every noun could be swapped for another and nothing would change. Climb down until a noun can be photographed: who, doing what, with which object.

**4. The staged question.** "Tired of messy books?" "What if bookkeeping kept itself?" "The result?" A question the writer answers in the next breath. Open on the answer.

**5. The audience sweep.** "Whether you're a freelancer or a growing studio..." Naming everyone addresses no one. Pick the reader and write to them.

**6. The scene-setter.** "In today's fast-paced world." "In the age of AI." "Let's face it." Delete the opening clause; the sentence starts where the information does.

**7. The inflated verb.** Elevate, empower, unlock, unleash, supercharge, streamline, transform, reimagine, harness, leverage, revolutionize, redefine, craft, curate. Replace with what happens: reads, sends, files, matches, cuts, shows.

**8. The empty intensifier.** Truly, really, simply, just, effortlessly, seamlessly, incredibly, powerful, robust, cutting-edge, world-class, best-in-class, next-level. If the claim needs one, the claim is too weak. Cut the word and see whether anything was lost.

**9. The hedge stack.** "Can help you potentially save up to..." One claim, stated once, at the confidence it deserves. If it cannot be stated flat, it is not ready for the page.

**10. The signpost.** "Here's the thing." "Here's how it works:" "The best part?" "Let's dive in." "At its core." Announcing that a point is coming instead of making it.

**11. The tidy ending.** A closing line that restates the section as an aphorism: "Because your time matters." "Simple as that." "Bookkeeping, finally done right." End on the last fact.

**12. Uniform rhythm.** Every sentence the same length, or every paragraph ending on a three-word punch. People vary. Read it aloud; where it sounds like a metronome, break one sentence in two and join two others.

**13. Parallel everything.** Every card starting with a verb, every heading two words and a full stop, every bullet a bolded lead-in and a clause. A grid of matched phrases is the copy equivalent of six identical cards.

**14. Fake specificity.** "Save 10+ hours a week." "Trusted by 2,000+ teams." A number nobody supplied. Real, labelled as sample, or gone. Same rule as fabricated data in SKILL.md.

**15. Borrowed warmth.** "We get it." "We've been there." "You deserve better." Intimacy the product has not earned. State what it does for the reader and let them feel what they feel.

**16. Self-description.** "A clean, modern platform." "A beautifully designed experience." The page describing its own qualities. Show the thing.

**17. Punctuation tells.** Em dashes, a colon in every headline, title case on every heading, emoji as bullets, an ellipsis for mood, exclamation marks. See SKILL.md for the first two.

**18. Feature as benefit as feature.** "Smart categorisation that works intelligently." The sentence loops. Name the mechanism once: "It reads the SMS and picks the category."

## How to write a line instead

- **Subject, verb, object, and the object is concrete.** "It reads the bank alert and writes the ledger entry." A reader could check it.
- **Lead with what the reader gets or does,** not with what the company believes.
- **One idea per sentence.** If it needs "and" twice, it is two sentences.
- **Use the reader's own nouns.** Invoice, TDS, UPI, standup, deploy. The category's real words beat any invented ones.
- **A headline is a claim someone could disagree with.** "Groomed at your door in forty minutes" can be argued with. "Grooming, reimagined" cannot, which is why it says nothing.
- **Numbers carry their unit and their source.** "10% TDS on a professional fee", not "smart tax handling".
- **Shorter is not the goal. Truer is.** A long sentence full of facts beats a short one full of air.
- **One spelling convention per page,** the one the profile or the audience calls for. Do not mix "colour" and "color".

## The pass, in order

Run it on every visible string: headlines, subheads, buttons, labels, captions, alt text, errors, footer, metadata.

1. **Cut test.** Delete the first sentence of each block. If nothing is lost, it stays deleted.
2. **Swap test.** Put a competitor's name in place of the product's. If the sentence is still true, it is not about this product. Rewrite it.
3. **Pattern scan.** Walk the eighteen patterns above. `scripts/verify.mjs --source` flags the mechanical ones as `slop-phrase`.
4. **Read aloud.** Would a person say this sentence to another person across a table? If they would be embarrassed, rewrite it.
5. **Check every claim.** Each number, name and quote traces to something real, or is labelled sample, or goes.
6. **Banned characters.** Grep for the em dash, and anything the profile bans, across every surface that ships.

## What this file does not license

- Rewriting copy the user supplied. Flag it, propose the fix, and keep their words unless they ask.
- Stripping all personality. A real voice has quirks. The target is specific and human, not flat.
- Hedging in the other direction: "may", "can", "helps" on every claim is pattern 9 again.
