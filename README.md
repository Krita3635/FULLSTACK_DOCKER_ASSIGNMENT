# Full-Stack Docker Assignment

A full-stack web application with a Node.js and Express frontend and a Python Flask backend, containerized using Docker and orchestrated with Docker Compose.

## Project Overview

The application provides a Student Information Form. Users can enter their name, address, email, and age. The Express frontend forwards the submitted information to the Flask backend, which processes the data and returns a success message.

## Technologies Used

- Node.js and Express
- Python and Flask
- HTML
- Docker
- Docker Compose
- Docker Hub
- Git and GitHub

## Project Structure

```text
Docker_Krita/
├── backend/
│   ├── app.py
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/
│   ├── server.js
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   └── views/
│       └── index.html
├── Screenshots/
├── Docker_Assignment_Documentation.docx
├── docker-compose.yml
├── .gitignore
└── README.md
```

## Services and Ports

| Service | Technology | Port |
|---|---|---|
| Frontend | Node.js and Express | 3000 |
| Backend | Python and Flask | 5000 |

Inside the Docker Compose network, the frontend communicates with the backend at `http://backend:5000`.

## Run the Application

### Prerequisites

Install Docker Desktop and ensure the Docker engine is running.

### Build and start both services

From the project root directory, run:

```bash
docker compose up --build
```

Open the frontend in your browser:

http://localhost:3000

Enter the student details and submit the form to test the application.

### Stop the application

Press `Ctrl+C` in the terminal running Docker Compose, then execute:

```bash
docker compose down
```

## Docker Hub Images

- Frontend: https://hub.docker.com/r/kritaaa/fullstack-frontend
- Backend: https://hub.docker.com/r/kritaaa/fullstack-backend

## GitHub Repository

https://github.com/Krita3635/FULLSTACK_DOCKER_ASSIGNMENT

## Submission Contents

The project includes the frontend and backend source code, Dockerfiles, Docker Compose configuration, screenshots, and assignment documentation.

## Author

Krita Roy