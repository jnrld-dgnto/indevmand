# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

The project has two independent sub-projects that must run concurrently. There is no root-level package.json.

```bash
# Frontend (Vite dev server on port 5173)
cd frontend && npm install && npm run dev

# Backend (Express server on port 4000)
cd backend && npm install && npm run dev    # uses nodemon for auto-reload
```

Both must be running simultaneously. The Vite dev server proxies all `/api` requests to `http://localhost:4000`.

**Build:** `cd frontend && npm run build` (output in `frontend/dist/`)

## Architecture

**Monorepo with two standalone projects:**
- `frontend/` — React 18 SPA built with Vite 5, plain JavaScript (no TypeScript)
- `backend/` — Express 4 REST API using CommonJS, stores data in a JSON flat file (`backend/data/db.json`)

### Frontend

- **Routing:** React Router v6 (`BrowserRouter`). All routes defined in `src/App.jsx`. Layout is Navbar + `<main>` + Footer.
- **Auth state:** Single React Context in `src/AuthContext.jsx` providing `{ token, user, login, logout, updateUser }`. Token and user persisted to `localStorage`. Consumed via `useAuth()` hook. This is the only global state; pages use local `useState`.
- **API client:** `src/api.js` — hand-rolled fetch wrapper. All backend calls go through the `api` object. Attaches `Authorization: Bearer` header when a token is provided.
- **Pages** (`src/pages/`) map 1:1 to routes. **Components** (`src/components/`) are shared UI pieces.
- **Styling:** Single global CSS file (`src/index.css`) using CSS custom properties for theming (`--ink`, `--paper`, `--mango`, `--teal`, `--moss`). Typography: Fraunces (display), JetBrains Mono (mono), Inter (body). One breakpoint at 860px.
- **Shared constants:** `src/phCities.js` exports `PH_CITIES`, `DEVELOPER_TYPES`, `EXPERIENCE_LEVELS`.

### Backend

- **Entry:** `server.js` on port 4000. Mounts `/api/auth` and `/api/freelancers` route groups.
- **Database:** `db.js` reads/writes `data/db.json` synchronously. No external database.
- **Auth:** JWT tokens (7-day expiry) via `jsonwebtoken`, passwords hashed with `bcryptjs`. Middleware in `middleware/auth.js`. The JWT secret falls back to a hardcoded dev value — set `JWT_SECRET` env var for real use.
- **Seed data:** `db.json` ships with 8 sample developer profiles.

### API Endpoints

| Method | Path | Auth | Purpose |
|--------|------|------|---------|
| POST | `/api/auth/register` | No | Register new user |
| POST | `/api/auth/login` | No | Login, returns JWT |
| GET | `/api/freelancers` | No | List/search/filter developers |
| GET | `/api/freelancers/meta` | No | Filter metadata |
| GET | `/api/freelancers/:id` | No | Single developer profile |
| GET | `/api/freelancers/me` | Yes | Current user's profile |
| PUT | `/api/freelancers/me` | Yes | Update current user's profile |
| GET | `/api/health` | No | Health check |
