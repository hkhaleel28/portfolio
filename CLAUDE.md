# CLAUDE.md

## Purpose
Personal portfolio site and a **learning vehicle** for Hammad, who is re-entering tech (BSc CS, former network systems admin, now a geologist) and targeting **DevOps first, AI/ML later**. The app is deliberately small so the DevOps work around it (Docker, CI/CD, Azure, Terraform, Kubernetes) is the main learning. Roadmap: `docs/ROADMAP.md`.

## How to work with me (most important section)
- **Teach as you go.** Explain what you are doing, why, and what the alternatives were, like a senior colleague mentoring. Keep it short; define a term the first time it appears.
- **Small steps.** One concept per change. Prefer showing a diff and explaining it over rewriting large files.
- **Default: you write, I read.** Write small diffs and explain each one. When I say I want to write something myself, switch to guiding me through it and reviewing what I type. (Chosen 2026-11-19.)
- **Ask when ambiguous.** Do not guess about scope, tooling choices or anything outward-facing.
- Never claim something works without running it. Report failures with the real output.

## Engineering principles (Karpathy guidelines + ponytail)
1. **Think before coding.** State assumptions. If there are several interpretations, present them instead of picking silently.
2. **Simplicity first.** The minimum code that solves the problem. No speculative features, abstractions or config. Standard library before new dependencies.
3. **Surgical changes.** Touch only what the task requires. Match existing style. Mention unrelated problems, do not fix them unasked.
4. **Goal-driven execution.** Define a verifiable success check (test, command, screenshot) first, then loop until it passes.

## Stack and layout
- `frontend/`: React + Vite (JavaScript first; TypeScript is a later upgrade). Tests: Vitest.
- `backend/`: Python 3.12 + FastAPI. Tests: pytest. Use a `.venv`, pin dependencies.
- `infra/`: Terraform and Kubernetes manifests (later phases).
- `.github/workflows/`: CI/CD (Phase 4).
- `docs/`: roadmap and notes. PDFs in `docs/` are gitignored (the resume lives there and is private).

Commands:
- Frontend: `cd frontend; npm install; npm run dev | test | lint | build`
- Backend: `cd backend; python -m venv .venv; .venv\Scripts\Activate.ps1; pip install -r requirements.txt; uvicorn app.main:app --reload; pytest` (`pytest` only works from `backend/`)
- Both together: API on port 8000 and `npm run dev` on port 5173. CORS allows only `http://localhost:5173`, so open that exact URL; `127.0.0.1:5173` or another Vite port is blocked and the page shows `API: unreachable`.

## Environment
- Windows 11, **PowerShell 5.1** (no `&&`; chain with `;` and check `$?`). Repo is at `C:\dev\portfolio`, deliberately **outside OneDrive** (syncing `.git` and `node_modules` corrupts things). Do not move it back.
- Node LTS, Python 3.12, Git, GitHub CLI (`gh`) installed with winget. Docker Desktop arrives in Phase 3.
- PowerShell 5.1 file gotchas: `>` writes UTF-16 and `Set-Content -Encoding utf8` adds a BOM. For commit messages, PR bodies and `requirements.txt` use `[IO.File]::WriteAllText(path, text, (New-Object Text.UTF8Encoding($false)))` and `git commit -F file`. With `2>&1` on git or npm, PowerShell reports harmless stderr as an error, so trust `$LASTEXITCODE`.

## Git and GitHub
- Default branch `main`. Work on feature branches (`feat/...`, `fix/...`, `chore/...`) and open PRs, even solo.
- Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `ci:`). Small commits with a "why" in the body.
- Commit email is the GitHub no-reply address, never a personal email.
- Do not push to `main` directly once branch protection exists (Phase 4). Never force-push shared branches.
- `gh auth setup-git` is configured (2026-11-19), so `git push` and `gh pr create` work from Claude's shell. Merging, deleting remote branches and posting review comments still need my explicit go-ahead.

## Security rules
- No secrets in the repo, ever. Use `.env` (gitignored) and commit `.env.example` with placeholders.
- Never commit anything from `docs/` that contains personal data. Check `git status` before each commit.
- Review any third-party plugin, script or MCP server before installing it (hooks and MCP servers run code on this machine).
- Pin versions for Docker base images and GitHub Actions in later phases.

## Installed Claude tooling (user scope)
- Plugins: `andrej-karpathy-skills`, `document-skills`, `example-skills` (includes `frontend-design`, `skill-creator`, `webapp-testing`), `ui-ux-pro-max`, `taste-skill`, `ponytail`, `claude-mem`, `claude-code-setup`, `claude-md-management`, `code-review`, `security-guidance`, `commit-commands`, `github`.
- MCP: **Playwright** (project `.mcp.json`) for opening the running app, taking screenshots and checking UI.
- When to use what: UI work uses `taste-skill`, `ui-ux-pro-max` and `frontend-design`, then verify with Playwright. Commits and PRs use `commit-commands`. After opening each PR, run `code-review` (medium, report-only) without asking and triage the findings; run `security-guidance` before merging. Keep this file current with `claude-md-management`.
- The `github` plugin's MCP server fails to connect (bad auth header) and is ignored; use the `gh` CLI.
- `claude-mem` stores session memory locally in `~/.claude-mem` (telemetry disabled). It is not a substitute for writing decisions down in this file or `docs/`.

## Definition of done (per change)
Runs locally, tests pass, lint is clean, no secrets or personal data staged, and I understand what changed and why.
