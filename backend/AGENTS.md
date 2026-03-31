# AGENTS.md

Guidance for agentic coding agents operating in this repository.

## Project Overview

- Runtime/framework: Nitro (`nitro` package, ESM project).
- Language: TypeScript.
- Server source directory: `src/` (configured in `nitro.config.ts`).
- API routes: `src/api/**`.
- Auth: Better Auth with Drizzle adapter and Google OAuth.
- DB: Drizzle ORM + libsql (`@libsql/client`) using SQLite dialect.
- Migration style: code-based schema in `db/schema.ts` + generated SQL in `db/migrations`.

## Rule Files Check

- `.cursor/rules/`: not present.
- `.cursorrules`: not present.
- `.github/copilot-instructions.md`: not present.
- Therefore, no additional Cursor/Copilot repository rules are currently defined.

## Source Of Truth Files

- `package.json`: scripts and dependency versions.
- `.prettierrc`: formatting preferences.
- `tsconfig.json`: TS config and `@/*` path alias.
- `nitro.config.ts`: Nitro config (`serverDir: "./src"`).
- `drizzle.config.ts`: Drizzle migration generation config.
- `db/schema.ts`: database schema declarations.

## Setup Commands

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build production bundle: `npm run build`
- Preview production bundle: `npm run preview`

## Database Commands

- Generate migration from schema changes: `npm run db:generate`
- Apply migrations: `npm run db:migrate`
- Open Drizzle Studio: `npm run db:studio`

## Build / Lint / Test Commands

### Build

- Full build: `npm run build`

### Lint / Format

- There is currently no dedicated lint script in `package.json`.
- Formatter in dependencies: `oxfmt`.
- If needed manually:
  - Check formatting: `npx oxfmt --check .`
  - Apply formatting: `npx oxfmt .`
- Follow `.prettierrc` conventions even when auto-format is not run.

### Test

- There is currently no `test` script and no test framework configured.
- Single-test command is therefore **not available yet** in current repo state.
- If tests are added later (recommended Vitest), expected patterns are:
  - All tests: `npx vitest run`
  - Single file: `npx vitest run path/to/file.test.ts`
  - Single test name: `npx vitest run -t "test name"`

## Environment Variables

Expected variables are documented in `.env.example`:

- `DATABASE_URL`
- `DATABASE_AUTH_TOKEN`
- `BETTER_AUTH_SECRET`
- `BETTER_AUTH_URL`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`

Notes:

- Local SQLite default fallback used in code: `file:./db/local.db`.
- Never commit real credentials.

## Architecture Notes

- `src/db/client.ts` exports Drizzle db client.
- `src/lib/auth.ts` configures Better Auth instance.
- `src/api/auth/[...all].ts` exposes Better Auth handler at `/api/auth/*`.
- `src/api/index.ts` is a simple sample route.
- `db/migrate.ts` applies generated migrations.

## Import Conventions

- Prefer alias-based imports using `@/*` from `tsconfig.json`.
- Avoid deep relative chains like `../../../` when alias can be used.
- Keep external imports before internal imports.
- Group imports with a single blank line between groups.
- Prefer explicit named imports over namespace imports unless necessary.

## Formatting Conventions

From `.prettierrc` and existing code patterns:

- Use double quotes.
- Do not use semicolons.
- Use trailing commas where valid.
- Use 2-space indentation.
- Target line width around 80 chars.
- Keep files ASCII unless there is a strong reason otherwise.

## TypeScript Conventions

- Prefer explicit types for exported APIs when helpful.
- Use inference for obvious local variables.
- Use `as` assertions sparingly and only when unavoidable.
- Prefer narrow types over `any`.
- If `any` is required, document why with a brief comment.

## Naming Conventions

- Files: lowercase, concise, descriptive (`auth.ts`, `client.ts`, `schema.ts`).
- Variables/functions: `camelCase`.
- Types/interfaces: `PascalCase`.
- Constants: `camelCase` unless true compile-time constants warrant `UPPER_SNAKE_CASE`.
- Route file names should follow Nitro conventions (`[...all].ts` for catch-all).

## Error Handling Guidelines

- Fail fast on missing required configuration in startup paths.
- Do not swallow exceptions silently.
- Return framework-appropriate HTTP errors for route handlers.
- Avoid leaking secrets in error messages or logs.
- Prefer deterministic fallback behavior only where already established (e.g., local DB URL).

## Database & Migration Guidelines

- Make schema changes only in `db/schema.ts`.
- Generate SQL via `npm run db:generate`; do not hand-edit migration snapshots.
- Commit generated migration SQL and metadata files together.
- Apply migrations locally with `npm run db:migrate` before finalizing changes.
- Preserve compatibility with Better Auth required tables when editing auth schema.

## Auth Integration Guidelines

- Keep Better Auth setup centralized in `src/lib/auth.ts`.
- Keep auth route wiring in `src/api/auth/[...all].ts`.
- When adding providers, use env vars only (no inline secrets).
- Ensure provider callback URLs match deployment base URL.

## Agent Workflow Expectations

- Before editing, inspect related files for established patterns.
- Keep changes minimal and scoped to the user request.
- Avoid unrelated refactors in the same patch.
- When adding scripts or dependencies, update docs if behavior changes.
- Prefer `apply_patch` for precise edits.

## Validation Checklist (Before Hand-off)

- Run relevant command(s) for touched area (build/db/test if available).
- Confirm imports resolve with `@/*` alias usage.
- Confirm no secrets were added to tracked files.
- Confirm generated artifacts (migrations) are included when schema changed.
- Summarize any limitations (e.g., test framework not yet configured).
