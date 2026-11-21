from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_frontend_origin_is_allowed() -> None:
    response = client.get("/health", headers={"Origin": "http://localhost:5173"})
    assert response.headers["access-control-allow-origin"] == "http://localhost:5173"


def test_other_origin_is_not_allowed() -> None:
    response = client.get("/health", headers={"Origin": "http://evil.example"})
    assert "access-control-allow-origin" not in response.headers
