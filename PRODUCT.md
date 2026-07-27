# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two equal audiences sharing one directory:

- **Filipino developers** (game, web, mobile) who create a public profile listing their stack, rate range, city, experience level, and contact links. Their goal: be discoverable by clients searching for their exact skill set without bidding wars or algorithm games.
- **Clients** (local or international) who need Philippines-based development talent. Their goal: search by developer type, stack, and city, then reach out directly through the developer's own contact links — no middleman, no platform messaging.

## Product Purpose

Indevmand is a focused freelance directory that connects Filipino game, web, and mobile developers with the clients looking for them. It exists because generic platforms bury developers in noise — mixed categories, global pools, opaque algorithms, and commission cuts. Indevmand strips that away: a clean, searchable list where developers stay visible and clients filter by what matters.

Success means a developer can set up a profile in minutes and start appearing in relevant searches, while a client can find a qualified PH-based developer by stack and city without wading through unrelated results.

## Positioning

Philippines-only, developer-category-only directory — no design, copywriting, or general freelancing. Free to list, free to browse, no commissions. Direct contact through the developer's own links, not platform-gated messaging. The constraint is the value: narrowing to three developer types (game, web, mobile) in one country makes every search result relevant.

## Operating Context

- Developers register, fill out their profile (developer types, skills, bio, city, rate range in PHP, portfolio/GitHub URLs), and appear in the public directory.
- Clients browse or filter (by type, city, keyword) without needing an account, find a match, and reach out through profile links.
- Three fixed developer categories: Game Developer, Web Developer, Mobile Developer.
- City selection drawn from 20 Philippine cities.
- Experience levels: Junior, Mid, Senior.
- Hourly rates quoted in Philippine Peso (₱).

## Capabilities and Constraints

**Current capabilities:**
- Public developer directory with search, filter, and sort
- Developer profile creation and self-service editing (Dashboard)
- JWT-based auth (email/password, 7-day token expiry)
- Terminal-style animated hero demonstrating the search concept
- Scroll-reveal animations on landing page sections

**Constraints:**
- JSON flat-file database (not production-grade — no concurrency, synchronous reads/writes)
- No payment processing, no in-platform messaging, no file uploads
- No image/avatar uploads — avatars are generated initials on colored backgrounds
- No admin panel or moderation tools

**Undecided:**
- Monetization model — currently free and commission-free; may evolve (featured listings, subscriptions, etc.)

## Brand Commitments

- **Name:** Indevmand — rendered as `<Indevmand/>` in a code-tag/monospace style, with the closing slash highlighted in mango/amber.
- **Voice:** Developer-first, direct, no-nonsense. Code-comment-style labels (`//` prefix on eyebrows). Terminal metaphors. No marketing superlatives.
- **Footer tagline:** `<Indevmand/> — developers, Philippines only.`
- **No external brand assets** — the codebase is the sole brand reference.

## Evidence on Hand

- 8 sample developer profiles in `backend/data/db.json` (seed data with realistic Filipino names, cities, skills, and bios).
- No real testimonials, case studies, press, or external validation. Future work must not fabricate these.

## Product Principles

1. **Signal over noise** — every filter, category, and constraint exists to make search results more relevant, not to grow the platform's surface area.
2. **No gatekeeping** — developers list for free, clients browse for free, contact happens directly. The platform facilitates discovery, not transactions.
3. **Developer dignity** — profiles stay visible without bidding. No algorithmic burial, no race-to-the-bottom pricing pressure.
4. **Honesty in scope** — the platform is three developer categories in one country. That narrowness is stated as a feature, not hidden as a limitation.
5. **Show, don't sell** — the terminal hero demonstrates the product's core action (search → match) rather than describing it abstractly.
