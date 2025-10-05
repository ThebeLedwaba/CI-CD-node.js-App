CI/CD Node.js App

![CI/CD Status](https://github.com/your-username/ci-cd-node-app/actions/workflows/deploy.yml/badge.svg)
![Node.js](https://img.shields.io/badge/Node.js-v20-green)

A minimal Node.js + Express application demonstrating CI/CD using **GitHub Actions** and deployment to **Render**, **Heroku**, or **Vercel**.

---
 Features
CI/CD pipeline with GitHub Actions
Linting with ESLint
Unit tests with Jest
Auto-deploy to cloud (Render, Heroku, or Vercel)
Docker container support
Secure Express server with Helmet
Request logging with Morgan



Tech Stack
- **Node.js** v20
- **Express** for routing
- **GitHub Actions** for CI/CD
- **Render** or **Heroku** for deployment
- **ESLint** for linting
- **Jest** for testing
- **Docker** for containerization



Getting Started Locally

### Prerequisites
- Node.js v20+
- npm v9+
- Docker (optional)

### Installation
```bash
# Clone the repository
git clone https://github.com/ThebeLedawba/ci-cd-node-app.git
cd ci-cd-node-app

# Install dependencies
npm install

# Create a .env file
echo "PORT=3000" > .env

# Start the server
npm start
# Build the image
docker build -t ci-cd-node-app .

# Run the container
docker run -p 3000:3000 ci-cd-node-app

# For production (with env file)
docker run -p 3000:3000 --env-file .env ci-cd-node-app
