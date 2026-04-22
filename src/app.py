"""
Leo Landau - Resume Website

A professional portfolio website showcasing Amazon and eCommerce expertise.
"""

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os
from pathlib import Path

# Initialize web host
app = FastAPI(
    title="Leo Landau - Amazon & eCommerce Growth Consultant",
    description="Professional portfolio and resume website"
)

# Mount the static files directory for serving the frontend
current_dir = Path(__file__).parent
static_dir = os.path.join(current_dir, "static")
app.mount("/static", StaticFiles(directory=static_dir), name="static")

# Root endpoint to serve index.html
@app.get("/")
def root():
    return FileResponse(os.path.join(static_dir, "index.html"))

# Catch-all route for single-page app
@app.get("/{path:path}")
def serve_spa(path: str):
    file_path = os.path.join(static_dir, path)
    if os.path.isfile(file_path):
        return FileResponse(file_path)
    return FileResponse(os.path.join(static_dir, "index.html"))
