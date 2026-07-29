# Repository Guidelines

## Project Structure & Module Organization

This repository contains two independent Node.js projects:

- `frontend/` is a React 18 single-page app built with Vite. Routes live in `src/pages/`, reusable UI in `src/components/`, shared auth state in `src/AuthContext.jsx`, API calls in `src/api.js`, and global styling in `src/index.css`.
- `backend/` is a CommonJS Express API. `server.js` starts the service, `routes/` contains endpoint groups, `middleware/` contains authentication logic, `db.js` handles persistence, and `data/db.json` stores seed and development data.
- Root documents such as `README.md`, `PRODUCT.md`, and `DESIGN.md` describe scope and product/design decisions. There is no root-level `package.json`.

## Build, Test, and Development Commands

Run frontend and backend commands from their respective directories:

```bash
cd backend && npm install && npm run dev   # API with nodemon on :4000
cd frontend && npm install && npm run dev  # Vite app on :5173
cd frontend && npm run build              # Production build in frontend/dist
cd frontend && npm run preview            # Serve the production build locally
```

Keep both development servers running; Vite proxies `/api` requests to the backend.

## Coding Style & Naming Conventions

Use two-space indentation and semicolons in JavaScript/JSX. Follow the existing plain-JavaScript style: `PascalCase` for React components, `camelCase` for functions, variables, hooks, and API fields, and lowercase route filenames such as `freelancers.js`. Keep shared constants in dedicated modules and reuse the existing CSS custom properties rather than introducing unrelated colors or typography.

## Testing Guidelines

No automated test framework is configured. Before submitting changes, run `npm run build` in `frontend/` and manually verify the affected browser flow with both servers running, including authentication or API behavior when applicable. Use the `/api/health` endpoint for a quick backend smoke check.

## Commit & Pull Request Guidelines

Existing commits use short, imperative summaries (for example, `Added 2 sections & animations on landing page`). Keep commits focused and describe the user-visible or technical change. Pull requests should include a concise summary, verification steps, affected routes or endpoints, and screenshots for visual changes. Do not include generated `dist/` output or dependency directories.

## Security & Configuration Tips

Set `JWT_SECRET` to a strong environment value before any public deployment; the backend fallback is for development only. Treat `backend/data/db.json` as mutable local seed data and avoid committing secrets or private user data.
