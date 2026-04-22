# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains two distinct projects:

1. **Mergington High School Activities Website** (`src/`) - A FastAPI-based backend serving a student activity management system
2. **Coffee Brand Product Ad** (`coffee-brand-ad/`) - A 30-second video advertisement built with Remotion and React

## Backend Architecture (src/)

### Technology Stack
- **Framework**: FastAPI with Uvicorn ASGI server
- **Database**: MongoDB (local, connection at `mongodb://localhost:27017/`)
- **Authentication**: Argon2 password hashing
- **Frontend**: Static HTML/CSS/JavaScript served by FastAPI

### Project Structure
```
src/
├── app.py                 # Main FastAPI application, initializes routes and static mounts
├── backend/
│   ├── database.py        # MongoDB connection, initialization with sample data
│   ├── routers/
│   │   ├── activities.py  # GET /activities, POST /activities/{activity_name}/signup endpoints
│   │   └── auth.py        # Teacher authentication routes
├── static/
│   ├── index.html         # Main page (served at /static/index.html, redirected from /)
│   ├── app.js             # Frontend activity listing and signup logic
│   └── styles.css         # Styling for the web interface
└── requirements.txt       # Python dependencies (FastAPI, Uvicorn, PyMongo, Argon2)
```

### Key Architecture Details
- **Database**: MongoDB uses database `mergington_high` with collections `activities` and `teachers`
- **Data Initialization**: `database.py` initializes 12 sample activities and 3 teacher accounts on startup
- **Static Files**: Frontend is mounted at `/static` with redirect from root (`/`)
- **API Documentation**: FastAPI auto-generates docs at `/docs` and `/redoc`

## Frontend Video Project (coffee-brand-ad/)

### Technology Stack
- **Framework**: Remotion (React-based video composition)
- **Language**: TypeScript
- **Output**: 30-second video (1920x1080 @ 30fps)

### Project Structure
```
coffee-brand-ad/
├── src/
│   ├── index.ts           # Entry point
│   ├── CoffeeAd.tsx       # Composition config: 30s duration, Full HD resolution
│   └── MainVideo.tsx      # Video component with animated text and CTA button
└── package.json           # Dependencies (React, Remotion)
```

### Video Specifications
- Duration: 30 seconds (900 frames @ 30fps)
- Resolution: 1920x1080 (Full HD)
- Color scheme: Dark background (#1a1a1a) with orange accents (#ff8c00)
- Animation timeline: Title (0-15f), Subtitle (30-60f), Tagline (600-650f), CTA button (700-750f)

## Common Development Tasks

### Backend Setup & Running
```bash
# Install Python dependencies
pip install -r src/requirements.txt

# Start MongoDB (required before running the backend)
# Ensure MongoDB is running on localhost:27017

# Run the application
python -m uvicorn src.app:app --reload

# Or use VS Code debug configuration: Run → Launch Mergington WebApp (F5)
```

### Backend Testing
```bash
# Test API endpoints:
# - GET /activities → lists all activities
# - POST /activities/{activity_name}/signup?email=student@mergington.edu → signup
# Use FastAPI interactive docs: http://localhost:8000/docs
```

### Video Project Setup & Running
```bash
cd coffee-brand-ad

# Install dependencies
npm install

# Start Remotion Studio for live preview and editing
npm start

# Build video to out/video.mp4
npm run build

# Preview video
npm preview
```

## Important Notes

- **Database Reset**: All data is stored in memory; MongoDB stores it persistently. The application reinitializes from hardcoded data on startup if collections are empty.
- **Static Data**: Initial activities and teacher accounts are defined in `src/backend/database.py` — modify `initial_activities` and `initial_teachers` dicts to update sample data
- **Port Forwarding**: Codespaces forwards port 8000; the website will be accessible there
- **Copilot Instructions**: Custom Copilot instructions are defined in `.github/copilot-instructions.md` — update as needed for specific guidelines
