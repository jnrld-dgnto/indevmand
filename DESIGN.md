---
name: Indevmand
description: A freelance directory for Filipino game, web, and mobile developers.
colors:
  deep-ink: "#0f1b2d"
  ink-raised: "#16273d"
  cool-paper: "#eff3f0"
  paper-white: "#fbfdfc"
  mango: "#f4a93b"
  mango-deep: "#d98f1f"
  terminal-teal: "#1b7f79"
  teal-deep: "#145f5a"
  moss: "#4c9a6a"
  text-primary: "#16232b"
  text-muted: "#536067"
  text-on-ink: "#dfe8ea"
  text-on-ink-dim: "#8fa3ab"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "JetBrains Mono, SFMono-Regular, Menlo, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  pill: "999px"
spacing:
  section: "88px"
  section-mobile: "56px"
  container: "24px"
  card: "24px"
  gap-sm: "12px"
  gap-md: "20px"
  gap-lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.mango}"
    textColor: "#1a1305"
    rounded: "{rounded.md}"
    padding: "12px 22px"
  button-primary-hover:
    backgroundColor: "{colors.mango-deep}"
    textColor: "#1a1305"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.md}"
    padding: "12px 22px"
  button-secondary-hover:
    backgroundColor: "rgba(255, 255, 255, 0.08)"
    textColor: "{colors.paper-white}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "12px 22px"
  button-outline-hover:
    backgroundColor: "transparent"
    textColor: "{colors.teal-deep}"
  card-light:
    backgroundColor: "{colors.paper-white}"
    rounded: "{rounded.lg}"
    padding: "24px"
  card-dark:
    backgroundColor: "{colors.ink-raised}"
    rounded: "{rounded.lg}"
    padding: "28px 24px"
  chip:
    backgroundColor: "rgba(76, 154, 106, 0.12)"
    textColor: "{colors.moss}"
    rounded: "{rounded.pill}"
    padding: "3px 9px"
  input:
    backgroundColor: "{colors.cool-paper}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "11px 13px"
---

# Design System: Indevmand

## Overview

**Creative North Star: "The Developer Terminal"**

Indevmand's visual system is built on the premise that developers are the audience and the subject. The interface borrows from the tools developers already live in — terminals, code editors, CLI output — and treats that vocabulary as design language rather than decoration. Monospace labels prefixed with `//`, color-coded category accents, and a literal terminal hero aren't styling choices; they're the product speaking the user's language.

The palette avoids the saturated primaries and gradients that mark generic SaaS design. Instead, a deep ink base anchors the dark sections while a cool, slightly green-tinted paper provides breathing room in light sections. Three accent colors — mango (warm amber), teal (deep cyan-green), and moss (muted green) — each map to a developer category (game, web, mobile) and never compete for attention on the same surface. The result is a system that reads as intentional and scoped rather than cheerful and broad.

Density is moderate: generous section padding (88px) gives each content block room to land, while cards and grids use tighter 20-24px gaps to keep related items grouped. The single breakpoint at 860px collapses multi-column grids to single-column stacks, and nothing else changes — no hidden nav drawer, no layout mode switch, just a simpler grid.

**Key Characteristics:**
- Terminal and code-editor vernacular as design language (monospace labels, `//` prefixes, CLI metaphors)
- Three-accent system tied to developer categories, never mixed arbitrarily
- Dark ink / cool paper duality with clear surface hierarchy
- Utilitarian components — clear affordances, no flourish, confidence through simplicity
- Single-breakpoint responsive: grid collapse only, no behavioral change

## Colors

The palette is structured around a dark/light duality — deep ink for immersive sections and terminal contexts, cool paper for operational/browsing surfaces — with three category-bound accents that carry semantic meaning.

### Primary
- **Mango** (#f4a93b): The primary call-to-action color. Used on CTA buttons, the terminal cursor blink, eyebrow highlights, game-developer category accents, and the `<Indevmand/>` logo slash. Its darker variant **Mango Deep** (#d98f1f) serves hover states and the `//` prefix in eyebrow labels.

### Secondary
- **Terminal Teal** (#1b7f79): The web-developer category accent. Also used for focus rings, card hover borders, and link-like interactive affordances across the system. Its darker variant **Teal Deep** (#145f5a) provides hover depth and secondary text accents. Teal is the system's interactive signal — when something is teal, it's responding to you.

### Tertiary
- **Moss** (#4c9a6a): The mobile-developer category accent and the terminal prompt color. Also serves as the success/positive indicator and the `>` prefix marker in stack lists. Quieter than mango and teal, moss provides the organic counterweight to the system's technical vocabulary.

### Neutral
- **Deep Ink** (#0f1b2d): The primary dark surface. Navbar, dark sections, terminal body. Near-black with a navy cast that prevents it from feeling purely monochrome.
- **Ink Raised** (#16273d): Elevated dark surface. Category cards, terminal titlebar, any element that needs to sit above deep ink without using a shadow.
- **Cool Paper** (#eff3f0): The light background. A barely-green tint distinguishes it from generic white and keeps the page feeling alive rather than bleached.
- **Paper White** (#fbfdfc): Card and raised-surface background on light sections. Near-white, providing just enough contrast against cool paper to define card boundaries.
- **Text Primary** (#16232b): Dark text on light surfaces. Near-black with a cool cast matching the ink family.
- **Text Muted** (#536067): Secondary text, metadata, and de-emphasized labels on light surfaces.
- **Text on Ink** (#dfe8ea): Primary text on dark surfaces. Cool light gray, not pure white.
- **Text on Ink Dim** (#8fa3ab): Secondary/muted text on dark surfaces. Used for descriptions, meta text, and the terminal title.

### Named Rules
**The Category Color Rule.** Mango belongs to game, teal belongs to web, moss belongs to mobile. These mappings are semantic, not decorative — they persist across cards, kickers, accent borders, and badge backgrounds. Never use a category color outside its category context.

**The Accent Budget Rule.** No single viewport shows more than one accent color in a dominant role. Category cards are the exception (they sit side-by-side with their respective accents), but within any single card or section header, one accent leads.

## Typography

**Display Font:** Fraunces (with Georgia, serif fallback)
**Body Font:** Inter (with system sans-serif fallback)
**Utility/Mono Font:** JetBrains Mono (with SFMono-Regular, Menlo fallback)

**Character:** Fraunces brings a warm, slightly quirky serif energy that prevents the developer-tool vocabulary from feeling cold or corporate. Inter stays invisible as body text should. JetBrains Mono does double duty — it's the literal code font for the terminal component AND the system's label/tag/eyebrow typeface, which reinforces the terminal metaphor without any extra styling.

### Hierarchy
- **Display** (600, 46px, 1.12): Hero headlines only. One per page. Always Fraunces.
- **Section Heading** (600, 34px, default): Section titles (h2). Fraunces. Anchors each content block.
- **Card Heading** (600, 19-22px, default): Card and column titles (h3). Fraunces. Size varies by card type: 22px for category cards, 19px for step cards, 18px for stack columns.
- **Body Large** (400, 17px, 1.5): Lead paragraphs and section descriptions. Inter.
- **Body** (400, 16px, 1.5): Standard reading text. Inter. Base size, never smaller for body copy.
- **Body Small** (400, 14-15px, 1.5): Card descriptions, comparison list items, secondary content. Inter.
- **Label** (400-700, 12-13px, 1.5): Eyebrows, kickers, tags, chips, footer, filter metadata. JetBrains Mono. The system's workhorse for structural labels.
- **Step Number** (700, 52px/40px mobile, 1): Decorative large numerals in Fraunces. Color: border token (very muted). Used only in the how-it-works sequence.

### Named Rules
**The Mono-as-Structure Rule.** JetBrains Mono is not decorative. It appears only where the content is structural — labels that categorize, tags that filter, metadata that classifies. If the text is prose meant to be read, it's Inter. If it's a structural marker, it's mono.

## Layout

The layout is a single-column page with contained grids. A centered container (max-width 1120px, 24px horizontal padding) holds all content. Sections alternate between dark (`--ink`) and light (`--paper` / `--paper-raised`) backgrounds, creating a clear visual rhythm down the page.

**Grid behavior:**
- 3-column grids for category cards, how-it-works steps, freelancer cards, and stack coverage columns (gap: 20-32px)
- 2-column grid for the comparison section (gap: 48px) and the hero (1.1fr / 1fr, gap: 56px)
- All grids collapse to single-column at the 860px breakpoint

**Vertical rhythm:**
- Section padding: 88px top and bottom (56px on mobile)
- Section heading to content: 48px margin-bottom
- Card internal padding: 24-28px
- Inter-card gap: 20px (categories, freelancers), 24px (steps)

**Responsive model:** A single breakpoint at 860px. Below it: all multi-column grids become single-column, section padding reduces, step numbers shrink from 52px to 40px, and nav links hide. No intermediate tablet layout — the design holds in two states only.

## Elevation & Depth

The system uses ambient layering with tonal surfaces as the primary depth mechanism, supplemented by shadows on interactive state changes.

**Tonal layering (always present):**
- Deep Ink → Ink Raised: the dark-surface hierarchy. Category cards and terminal titlebar sit above the dark section background through color alone, without shadow.
- Cool Paper → Paper White: the light-surface hierarchy. Cards sit above the page background through a 1px border and a warmer white fill.

**Shadow vocabulary (interactive):**
- **Terminal ambient** (`0 30px 60px -20px rgba(15, 27, 45, 0.45)`): Heavy, diffuse. Applied to the terminal hero to ground it visually as the page's most prominent artifact.
- **Category lift** (`0 12px 32px -8px rgba(15, 27, 45, 0.5)`): Medium, directional. Appears on category card hover to create a physical "lifting" sensation.
- **Card accent glow** (`0 4px 16px -4px rgba(27, 127, 121, 0.12)`): Subtle, teal-tinted. Appears on light-card hover. The teal tint in the shadow reinforces the interactive signal.

### Named Rules
**The Tonal-First Rule.** Depth is communicated primarily through surface color, not shadow. Shadows appear as responses to interaction (hover, focus, float), never at rest on static cards. The one exception is the terminal hero, whose ambient shadow is architectural — it grounds the component as a physical object.

## Shapes

The form language is softly rounded with three distinct tiers. Corners get rounder as surfaces get larger — small inputs use tight radii, medium buttons use moderate radii, and large cards/containers use generous radii.

- **Tight** (6px / `--radius-sm`): Inputs, select fields, error/success alerts. Functional elements where precision matters.
- **Moderate** (10px / `--radius-md`): Buttons, filter bars. Interactive elements that benefit from a slight softness without feeling bubbly.
- **Generous** (16px / `--radius-lg`): Cards, containers, the terminal component. Larger surfaces with enough room for the radius to breathe.
- **Pill** (999px): Tags, chips, checkbox pills. Small, self-contained labels that read as discrete objects.

Borders are consistently 1px and use the `--border` (light) or `--border-on-ink` (dark) tokens — both are low-opacity overlays rather than solid colors, which keeps borders present but never heavy. Category cards add a 3px solid top border in their category accent color as a structural identifier.

## Components

### Buttons
- **Shape:** Moderate radius (10px), inline-flex centered, 15px semi-bold text
- **Primary:** Mango background, dark text (#1a1305), padding 12px 22px. Hover deepens to mango-deep. The warm amber on dark pages commands attention without screaming.
- **Secondary:** Transparent background, paper-white text, 1px border-on-ink border. Hover adds a subtle white overlay (8% opacity). Lives on dark surfaces only.
- **Outline:** Transparent background, text-primary color, 1px border. Hover shifts border and text to teal. Lives on light surfaces.
- **All states:** 0.15s ease transition on transform, box-shadow, and background. Active state drops 1px (translateY(1px)). Disabled at 60% opacity with not-allowed cursor.

### Cards / Containers
- **Light card:** Paper-white background, 1px border, generous radius (16px), 24px padding. Hover: border shifts to teal, subtle accent-glow shadow appears. Used for how-it-works steps, freelancer listings, and form containers.
- **Dark card (category):** Ink-raised background, 1px border-on-ink, generous radius (16px), 28px/24px padding. 3px solid top border in category color. Hover: lifts 3px (translateY(-3px)) with category-lift shadow. Cursor: pointer.

### Chips / Tags
- **Style:** Pill radius (999px), mono font at 12px, 3px/9px padding
- **Default (light):** Moss-tinted background (12% opacity), moss text. Used for skill tags on freelancer cards.
- **Dark variant:** White overlay background (8% opacity), text-on-ink-dim color. Used for tags inside the terminal component.
- **Badge variant:** Category-colored with transparent border. Game: #b25b17 text on 15% mango. Web: teal-dark text on 12% teal. Mobile: #2f6b48 text on 15% moss.

### Inputs / Fields
- **Style:** Cool-paper background, 1px border, tight radius (6px), 15px text, 11px/13px padding
- **Focus:** 2px solid teal outline with 2px offset (system-wide `:focus-visible` rule)
- **Mono variant:** Filter bar search input uses JetBrains Mono, reinforcing the terminal metaphor

### Navigation
- **Navbar:** Sticky, ink background, 68px height, 1px border-on-ink bottom border
- **Logo:** JetBrains Mono 18px bold, paper-white with mango `<span>` for the slash accent
- **Links:** 14px, text-on-ink-dim default, paper-white on hover/active. 0.15s color transition. 28px gap between items.
- **Mobile (≤860px):** Nav links hide entirely. Only logo and action buttons remain.

### Terminal Hero (signature component)
The defining visual element of the product. A simulated terminal window with:
- **Titlebar:** Ink-raised background, three colored dots (red #ec6a5e, yellow #f5bd4f, green #61c454), mono title text
- **Body:** Ink background, mono 15px text, moss-colored prompt (`$`), mango cursor with 1s step-end blink animation
- **Result card:** Fades in (0.5s ease) below a dashed border. Shows an avatar (colored initial circle), name, meta, and skill tags
- **Ambient shadow:** Heavy diffuse shadow grounds it as a physical object on the page
- This component is immutable — it establishes the terminal metaphor that the rest of the system references.

## Do's and Don'ts

### Do:
- **Do** use the `//` eyebrow prefix consistently for all structural labels — it's the system's signature and reinforces the code-comment metaphor.
- **Do** alternate dark and light sections down the page to create visual rhythm and clear content boundaries.
- **Do** use JetBrains Mono for any label that classifies, categorizes, or filters — and Inter for anything that's meant to be read as prose.
- **Do** use the category color mapping (mango=game, teal=web, moss=mobile) everywhere a developer type appears.
- **Do** apply hover states that respond with border-color shifts and subtle shadows — interaction feedback should feel immediate (0.15s) and physically grounded.

### Don't:
- **Don't** use purple, blue gradients, glassmorphism, or generic SaaS color patterns. The palette is deliberately warm and earthy.
- **Don't** use emoji as icons or decorative elements. The terminal metaphor relies on typographic markers (`//`, `>`, `$`, `01/02/03`).
- **Don't** apply category accent colors outside their semantic context. Mango on a mobile-developer card is a bug, not a style choice.
- **Don't** add intermediate breakpoints. The system is designed for two states (wide and narrow) with a single cut at 860px.
- **Don't** shadow cards at rest. Tonal layering (ink → ink-raised, paper → paper-white) handles static depth; shadows are reserved for interaction feedback.
