# rav fonts

A working roster of Google Fonts, sorted by the job each one does. Load this when picking type for a build, when a brief pins a face you cannot license, and in the `typeset` move.

Why this file exists: SKILL.md names faces like PP Editorial New, Druk, GT Walsheim and Migra. They are the right references and most builds cannot load them. A page that declares a paid face and silently falls back to the system font has no typography at all. So pick from here unless the project already ships licensed files, and say which paid face the pick stands in for when it matters.

Every family below was confirmed to resolve on the Google Fonts API on 19 Nov 2026. If a name is not on this list, check that it loads before building on it.

## How to pick

1. **Start from the register and the subject, not from this list.** The face is an object from the subject's world. Decide what it should feel like first, then find it here.
2. **Pick the display face first.** It carries the idea. Body and mono follow from it.
3. **Three roles at most:** display, body, mono. Two is often enough.
4. **Do not repeat yourself.** If the last build used Space Grotesk plus Inter, this one does not, unless the profile pins that pairing for the user's own surfaces. Rotating is the whole point of a wider roster.
5. **Variable axes are a design tool.** Width and optical size do more than a second family would. Archivo at `wdth 125 wght 800` and Archivo at `wdth 62 wght 600` read as two faces from one file.

## Display, by character

| character | families | stands in for |
|---|---|---|
| Neutral grotesk with a point of view | Space Grotesk, Bricolage Grotesque, Familjen Grotesk, Schibsted Grotesk, Hanken Grotesk, Host Grotesk, Funnel Display, Rethink Sans, Instrument Sans, Mona Sans, Hubot Sans, Geist | PP Neue Montreal, Cabinet Grotesk, GT Walsheim |
| Wide and heavy, variable width | Archivo, Unbounded, Syne, Wix Madefor Display, Radio Canada Big, Roboto Flex, Pathway Extreme | Monument Extended |
| Condensed, loud (kinetic) | Anton, Bebas Neue, Big Shoulders Display, League Gothic, Antonio, Oswald, Barlow Condensed, Sofia Sans Extra Condensed, Saira Condensed, Fjalla One, Six Caps, Teko, Khand | Druk, Clash Display |
| Black and blunt | Archivo Black, Boldonse, Dela Gothic One, Rubik Mono One, Alfa Slab One, Climate Crisis | poster grotesks |
| Editorial serif, high contrast | Instrument Serif, Playfair Display, Playfair, Bodoni Moda, Gloock, DM Serif Display, Kalnia, Italiana | PP Editorial New, Migra |
| Editorial serif, warm and soft | Fraunces, Newsreader, Young Serif, Besley, Hedvig Letters Serif, Montagu Slab | Recoleta, Reckless Neue |
| Book and literary | Cormorant Garamond, EB Garamond, Libre Caslon Text, Spectral, Crimson Pro, Literata, Source Serif 4, Lora | Tiempos Headline, GT Sectra |
| Inscription and ceremony | Cinzel, Marcellus, Forum | carved capitals |
| Slab | Zilla Slab, Roboto Slab, Bitter | workhorse slabs |
| Friendly and rounded (consumer mobile) | Figtree, Outfit, Urbanist, Nunito, Quicksand, Fredoka, Gabarito, Parkinsans, Bagel Fat One | soft consumer sans |
| Technical and futurist, use sparingly | Tomorrow, Michroma, Orbitron, Geologica, SUSE | sci-fi display |
| Pixel and bitmap, one moment only | Pixelify Sans, Silkscreen, VT323, Doto, Sixtyfour | retro screens |
| Hand, annotation only | Caveat, Kalam, Gochi Hand, Reenie Beanie, Homemade Apple | pen notes on a layout |

The last three rows are costumes. Use them for a single moment (one annotation, one numeral, one 404), never as a system.

## Body

Workhorses that hold at 15 to 18px and have real italics or enough weights: Inter, Inter Tight, Geist, Hanken Grotesk, Instrument Sans, Figtree, Manrope, DM Sans, Onest, Public Sans, Work Sans, Albert Sans, Golos Text, IBM Plex Sans, Plus Jakarta Sans, Sora, Red Hat Display, Reddit Sans, Epilogue, Chivo, Rubik, Lato, Kumbh Sans.

Reading-first serif body: Newsreader, Source Serif 4, Literata, Spectral, Crimson Pro, IBM Plex Serif, Lora.

Accessibility-led: Atkinson Hyperlegible Next, Lexend, Readex Pro, Inclusive Sans.

## Mono

JetBrains Mono, Geist Mono, IBM Plex Mono, DM Mono, Space Mono, Martian Mono, Fragment Mono, Azeret Mono, Chivo Mono, Red Hat Mono, Roboto Mono, Sometype Mono, Xanh Mono. Major Mono Display is a display face, not a data face.

Mono is for code, data and measurement. See the spreadsheet-page tell before setting body copy in it.

## Indian scripts

When the audience or the subject is Indian, set the Devanagari properly and do not leave it to a system fallback.

| job | families |
|---|---|
| Devanagari display | Rozha One, Yatra One, Modak, Tillana, Shrikhand (Latin with an Indian poster voice) |
| Devanagari text | Tiro Devanagari Hindi, Tiro Devanagari Sanskrit, Noto Sans Devanagari, Mukta, Hind, Martel, Eczar, Gotu, Kalam |
| Latin plus Devanagari in one family | Anek Devanagari, Baloo 2, Baloo Bhai 2, Mukta, Hind, Poppins, Teko, Khand, Rajdhani, Eczar, Martel |

A Latin display face next to a Devanagari word needs matching weight and x-height, or the Hindi reads as an afterthought. Check them side by side at the real size.

## Pairings that work

Each is display, body, mono. They are starting points, not presets.

| world | pairing |
|---|---|
| Bold SaaS, product-stage hero | Bricolage Grotesque / Inter / Geist Mono |
| Bold SaaS, warmer | Funnel Display / Hanken Grotesk / JetBrains Mono |
| Sharp devtool | Geist / Geist / Geist Mono |
| Editorial brand | Instrument Serif / Instrument Sans / DM Mono |
| Soft editorial | Fraunces / Figtree / Fragment Mono |
| Literary, long read | Newsreader / Source Serif 4 / IBM Plex Mono |
| Luxury, restrained | Bodoni Moda / Hanken Grotesk / none |
| Kinetic, sport, event | Anton / Inter Tight / JetBrains Mono |
| Kinetic, wider | Big Shoulders Display / Barlow Condensed for labels / Chivo Mono |
| Loud consumer campaign | Unbounded / Onest / Martian Mono |
| Wide and architectural | Archivo (wdth 125) / Archivo (wdth 100) / JetBrains Mono |
| Indian consumer brand | Rozha One or Baloo 2 / Mukta / none |
| Heritage, place | Cormorant Garamond / Hanken Grotesk / none, with Tiro Devanagari Hindi for script |
| Calm product chrome | Inter or Geist alone, plus its mono |
| The user's own default | whatever `profile/dna.md` pins, on their own surfaces only |

## Loading it properly

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Inter:wght@400..600&display=swap" rel="stylesheet">
```

- **Request only what the page uses.** A variable range (`wght@400..800`) for a variable family, named weights for a static one. Two or three families is the ceiling.
- **Axes go in alphabetical order** in the URL (`ital,opsz,wdth,wght`), or the request fails with a 400.
- **`display=swap` plus a metric-matched fallback.** Declare the fallback with `size-adjust` and `ascent-override` so the swap does not move the layout. No invisible text.
- **Display faces at display sizes get optical sizing** where the family has an `opsz` axis (Bricolage Grotesque, Fraunces, Newsreader, Roboto Flex): `font-optical-sizing: auto`.
- **For anything that ships to production, self-host.** Download the woff2 files, subset to the scripts in use, and serve them from the project. It is faster, it survives a blocked CDN, and it keeps visitor IPs away from a third party. A Google Fonts link is fine for a mock or a portfolio piece.
- **Check that it actually loaded.** `document.fonts.check('1em "Bricolage Grotesque"')` in the console, or look at the computed font in devtools. A wrong family name fails silently into the fallback.

## What does not change

- The 2-line rule, the display cap and the tracking floor in SKILL.md apply to every face here.
- Inter, Roboto, Open Sans and system-ui stay body faces, never the display face.
- Well-loved faces (Space Grotesk, Instrument Serif, Newsreader) stay recommended. This file widens the roster; it does not demote them. A face the profile pins always wins.
- A brief that pins a face wins. If the pinned face cannot be loaded, say so in the preflight and name the stand-in.
