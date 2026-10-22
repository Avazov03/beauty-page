---
name: beauty-page-design-context
description: >-
  Project design DNA for beauty-page / Classic Apartment template. ALWAYS read
  before design-taste-frontend, impeccable, or Emil motion skills. Use when
  building or polishing pages so output matches existing tokens — not a new
  unrelated visual system.
---

# beauty-page design context

Read this **before** applying taste, impeccable, or Emil skills in this repo.

## Product

Reusable premium mini-site for one cosmetologist / skin expert (demo persona: Malika Karimova). Personal voice — not a multi-doctor clinic. Evolving from Webflow → Next.js.

## Visual DNA (do not replace)

| Token / cue | Value |
|---|---|
| Brand (Muted Plum) | `#72516F` |
| Soft ground (Pearl) | `#F8F4F6` |
| Soft CTA / accent (Mauve) | `#D3B9C9` |
| Body / heading text | plum-gray (`#3d2f3c`, `#5c4a5a`) |
| Fonts | Instrument Sans + Instrument Serif |
| Motion | `--ease-hotel`, short durations; restraint over spectacle |
| Radius | tokens `--radius-sm/md/lg` + pill chrome |
| Home hero | Portrait cutout + name behind on pearl — **no video** |

Sources: `web/src/styles/tokens.css`, `web/public/brand-trial.css`.

## How to use other skills here

1. **Improve within DNA** — hierarchy, spacing, mobile, trust, CTA clarity.
2. **Do not** swap in purple-on-white gradients, Inter/Roboto defaults, loud glassmorphism, or unrelated gallery “directions”. Pearl & Plum is intentional muted mauve — not neon purple slop.
3. **Do not** rip out working Webflow/IX2 sections to chase a new aesthetic unless the user asked for a full redesign.
4. Prefer CSS overrides + React sections over rewriting `baseline/html` dumps.
5. Cosmetology pages: calm clinical beauty, real work imagery, clear services/prices path — not hotel resort vibe or crypto/SaaS chrome.

## Conflict rule

If taste/impeccable/Emil advice fights this file or `.cursor/rules/design-skills-guard.mdc` — follow the project files.
