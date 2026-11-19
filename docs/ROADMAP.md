# Roadmap: from rusty to DevOps-ready

One project (this portfolio) grows through every phase. Each phase ends with something that runs and something you can explain in an interview.

**Starting point:** BSc Computer Science, 2-3 years as a network systems admin, now a geologist (MSc Marine/Ocean Sciences). AZ-900 in progress. Goal: DevOps engineer first, AI/ML later.

| Phase | Focus | Outcome |
|---|---|---|
| 0 | Setup: Git, GitHub, VS Code, Claude Code tooling, CLAUDE.md | Tools, repo and conventions ready |
| 1 | Fundamentals: JS and React with Vite, Python and FastAPI, HTTP/REST, Git branches and PRs | Working portfolio site with one API endpoint and tests (Vitest, pytest) |
| 2 | Linux and the shell, plus code quality: ESLint, Prettier, type hints, pre-commit | Clean repo and fast feedback loops |
| 3 | **Docker:** multi-stage builds, docker-compose, nginx, healthchecks, image size | `docker compose up` runs the whole app |
| 4 | **CI/CD:** GitHub Actions for lint, test and build, push to GHCR, Dependabot, branch protection | Every PR is tested, and `main` publishes images |
| 5 | **Azure deployment** (builds on AZ-900): Container Apps or App Service, custom domain, HTTPS. **Update the resume here** | Live portfolio URL |
| 6 | **Infrastructure as Code:** Terraform (or Bicep), remote state, deploy via pipeline | Reproducible infrastructure from code |
| 7 | **Kubernetes:** kind or minikube, Deployments, Services, Ingress, ConfigMaps and Secrets, Helm, then AKS | App running on a cluster |
| 8 | Observability and DevSecOps: Prometheus and Grafana, structured logs, Trivy scans, secret scanning | Dashboards and a security gate in CI |
| 9 | AI/ML bridge: Python data stack, a small model served via FastAPI in a container, MLflow, intro to MLOps | One ML service deployed through the same pipeline |

## Certification path (to refine)

AZ-900, then AZ-104 or AZ-400, then Terraform Associate, then CKA or CKAD.

## How we work

- Small steps. Each change is explained: what, why, and what the alternatives were.
- Feature branch, then PR, even when working solo. CI must pass before merging.
- You type the code you want to learn. Claude reviews and explains.
