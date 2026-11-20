# Roadmap: from rusty to DevOps-ready

One project (this portfolio) grows through every phase. Each phase ends with something that runs and something you can explain in an interview.

**Starting point:** BSc Computer Science, 2-3 years as a network systems admin, now a geologist (MSc Marine/Ocean Sciences). AZ-900 and AZ-104 passed. Goal: DevOps engineer first, AI/ML later.

| Phase | Focus | Outcome |
|---|---|---|
| 0 | Setup: Git, GitHub, VS Code, Claude Code tooling, CLAUDE.md | Tools, repo and conventions ready |
| 1 | Fundamentals: JS and React with Vite, Python and FastAPI, HTTP/REST, Git branches and PRs | Working portfolio site with one API endpoint and tests (Vitest, pytest) |
| 2 | Linux and the shell, plus code quality: ESLint, Prettier, type hints, pre-commit | Clean repo and fast feedback loops |
| 3 | **Docker:** multi-stage builds, docker-compose, nginx, healthchecks, image size | `docker compose up` runs the whole app |
| 4 | **CI/CD:** GitHub Actions for lint, test and build, push to GHCR, Dependabot, branch protection | Every PR is tested, and `main` publishes images |
| 5 | **Azure deployment** (builds on AZ-104): Container Apps or App Service, custom domain, HTTPS. **Update the resume here** | Live portfolio URL |
| 6 | **Infrastructure as Code:** Terraform (or Bicep), remote state, deploy via pipeline | Reproducible infrastructure from code |
| 7 | **Kubernetes:** kind or minikube, Deployments, Services, Ingress, ConfigMaps and Secrets, Helm, then AKS | App running on a cluster |
| 8 | Observability and DevSecOps: Prometheus and Grafana, structured logs, Trivy scans, secret scanning | Dashboards and a security gate in CI |
| 9 | AI/ML bridge: Python data stack, a small model served via FastAPI in a container, MLflow, intro to MLOps | One ML service deployed through the same pipeline |

**Status:** Phase 1 is done: React + Vite and FastAPI both run with tests, the page shows the real portfolio content, and it calls `/health`. Next is Phase 2.

## Certification path (to refine)

Done: AZ-900, AZ-104 (CCNA and MCSA are also held, but this path tracks the cloud and DevOps certs). Next: AZ-400, then Terraform Associate, then CKA or CKAD.

## How we work

- Small steps. Each change is explained: what, why, and what the alternatives were.
- Feature branch, then PR, even when working solo. CI must pass before merging.
- Claude writes small diffs and explains each one. Type any part yourself whenever you want to learn it by writing; Claude then reviews and explains.
