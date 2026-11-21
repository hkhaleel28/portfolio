from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# shortcut: hard-coded dev origin, move to an env var when the frontend gets a real URL (Phase 5)
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:5173"])


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
