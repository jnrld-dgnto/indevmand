# Indevmand

A freelance platform built only for developers (game, web, and mobile) based in the Philippines.
This is the v1 MVP: freelancer profiles, browse, search, and filtering. No job postings,
messaging, or payments yet — those are natural next steps once this validates.

## What's included

- **Backend** (`/backend`): Node.js + Express REST API. Data is stored in a simple JSON file
  (`backend/data/db.json`) so there's nothing extra to install or configure — no database server
  required. Swap this for Postgres/MySQL later without changing the API shape much.
- **Frontend** (`/frontend`): React + Vite single-page app. Pages: landing, browse/search,
  public developer profile, sign up, log in, and a dashboard to edit your own profile.

Seeded with 8 sample Filipino developer profiles (game/web/mobile, across Cebu, Manila, Davao,
Quezon City, Makati, Iloilo, Baguio, and Pampanga) so Browse isn't empty on first run.

## Running it locally

You'll need [Node.js](https://nodejs.org) 18+ installed. Two terminal windows/tabs:

**Terminal 1 — backend**
```bash
cd backend
npm install
npm start
```
This runs the API at `http://localhost:4000`.

**Terminal 2 — frontend**
```bash
cd frontend
npm install
npm run dev
```
This runs the app at `http://localhost:5173`. The Vite dev server proxies `/api/*` requests
to the backend automatically (see `frontend/vite.config.js`), so just open
`http://localhost:5173` in your browser.

## Try it out

- Browse developers at `/browse` — filter by developer type, city, or search skills (e.g. "flutter").
- Click into any profile to see the full detail page.
- Log in with a seeded demo account to see the dashboard: `miguel.santos@example.com` /
  `password123` (any of the 8 seeded emails work with that same password).
- Or sign up as a new developer at `/signup` and fill in your own profile at `/dashboard`.

## Project structure

```
indevmand/
├── backend/
│   ├── server.js              # Express app entry point
│   ├── db.js                  # Tiny JSON-file read/write helper
│   ├── data/db.json           # All data lives here
│   ├── middleware/auth.js     # JWT auth middleware
│   └── routes/
│       ├── auth.js            # /api/auth/register, /api/auth/login
│       └── freelancers.js     # /api/freelancers (list/search/detail/me)
└── frontend/
    └── src/
        ├── pages/              # Landing, Browse, ProfileDetail, Login, Signup, Dashboard
        ├── components/         # Navbar, Footer, FreelancerCard, FilterBar, TerminalHero
        ├── AuthContext.jsx      # Auth state (token/user), persisted to localStorage
        └── api.js               # Fetch wrapper for the backend API
```

## Notes on the MVP scope

This deliberately leaves out job postings, in-app messaging, and payments — the brief was
profiles + browse/search only, to get something in front of real users fast. When you're ready
to extend it, likely next steps in order of impact:

1. **Contact/inquiry flow** — right now clients reach out via the portfolio/GitHub links on a
   profile. A simple "send an inquiry" form (even just emailing the developer) is the next
   highest-leverage addition.
2. **Client accounts** — currently only developers have accounts. Client accounts would let you
   track inquiries and eventually add reviews.
3. **Job postings + matching** — clients post a job, developers apply or get matched.
4. **A real database** — the JSON file is fine for an MVP and a handful of users, but swap in
   Postgres (or SQLite via `better-sqlite3`) before this gets real traffic.
5. **Image uploads** — profile photos instead of the initials avatar.

## Security note

The JWT secret in `backend/middleware/auth.js` falls back to a hardcoded dev value. Before
deploying anywhere public, set a real `JWT_SECRET` environment variable.
