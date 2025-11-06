# CI/CD Node.js Application  
### Enterprise-Ready DevOps Pipeline Implementation

[![Node.js >=20](https://img.shields.io/badge/node-%3E%3D20-green)](https://nodejs.org/)
[![CI/CD Pipeline](https://github.com/ThebeLedwaba/ci-cd-node-app/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/ThebeLedwaba/ci-cd-node-app/actions/workflows/ci-cd.yml)
[![Docker Ready](https://img.shields.io/badge/docker-ready-blue)](https://hub.docker.com/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

> A **production-grade Node.js application** showcasing **modern CI/CD, testing, security, and deployment** using **GitHub Actions**, **Docker**, and **multi-cloud strategies**.

---

## 📋 Project Overview

This repository demonstrates **enterprise-level DevOps practices** through a fully automated CI/CD pipeline for a Node.js Express application. From code commit to production deployment — every step is automated, secure, and observable.

Ideal for **learning, portfolio showcase, or production template**.

---

## ✨ Key Features

| Feature | Description |
|-------|-----------|
| **🔄 CI/CD Pipeline** | GitHub Actions with lint, test, build, scan, deploy |
| **🧪 Testing** | Jest with 90%+ coverage, unit & integration tests |
| **✅ Code Quality** | ESLint + Prettier + Husky pre-commit hooks |
| **🐳 Docker** | Multi-stage builds, minimal image size |
| **☁️ Multi-Cloud Deploy** | Render, Heroku, Vercel — zero-downtime |
| **🔐 Security** | Helmet, rate limiting, CORS, JWT-ready |
| **📊 Observability** | `/health`, `/metrics`, structured logging |
| **⚡ Performance** | Compression, caching, cluster-ready |

---

## 🛠 Technology Stack

```text
Runtime        : Node.js v20+
Framework      : Express.js
CI/CD          : GitHub Actions
Testing        : Jest + Supertest
Linting        : ESLint + Prettier
Container      : Docker + Docker Compose
Security       : Helmet, CORS, Rate Limiting
🏗 Architecture
mermaidgraph TD
    A[Git Push] --> B(GitHub Actions)
    B --> C[Lint & Format]
    B --> D[Unit + Integration Tests]
    B --> E[Security Scan]
    B --> F[Build Docker Image]
    F --> G[Push to Registry]
    G --> H[Deploy to Environment]
    H --> I[Health Check Verification]
Logging        : Morgan (combined format)
Process Mgr    : PM2 (cluster mode ready)
Deployment     : Render · Heroku · Vercel
Environments: development · staging · production
Config: .env with fallback validation

💼 Skills Demonstrated

Full-stack DevOps pipeline design
Test-driven development (TDD)
Docker optimization & multi-stage builds
Cloud-native deployment strategies
Security hardening & dependency scanning
Observability & monitoring patterns
Configuration management & secrets handling


🚀 Getting Started
Prerequisites

Node.js ≥20
npm ≥9
Docker (optional)
Git
Local Development
bash# Clone the repo
git clone https://github.com/ThebeLedwaba/ci-cd-node-app.git
cd ci-cd-node-app

# Install dependencies
npm install

# Copy env example
cp .env.example .env
# Edit .env with your values

# Start dev server (with hot reload)
npm run dev
Server: http://localhost:3000

Docker Deployment
bash# Build image
docker build -t ci-cd-node-app .

# Run container
docker run -p 3000:3000 --env-file .env ci-cd-node-app

# Or with docker-compose
docker-compose up -d
Testing & Quality
bashnpm run lint          # ESLint check
npm run lint:fix      # Auto-fix issues
npm test              # Run tests
npm run test:coverage # With coverage report
npm run test:watch    # Watch mode
npm run ci            # Full CI simulation

Coverage: >90% enforced in pipeline
Project Structure
ci-cd-node-app/
├── src/
│   ├── controllers/     # Business logic
│   ├── routes/          # API endpoints
│   ├── middleware/      # Auth, error, logging
│   ├── utils/           # Helpers & validators
│   ├── config/          # Env, logger, db
│   └── app.js           # Express app entry
├── tests/
│   ├── unit/            # Isolated tests
│   ├── integration/     # API contract tests
│   └── fixtures/        # Test data
├── .github/workflows/    # CI/CD pipeline
├── docs/                # Extended guides
├── Dockerfile
├── docker-compose.yml
├── .env.example
└── package.json
⚙️ Configuration (.env)
env# Server
PORT=3000
NODE_ENV=development
HOST=0.0.0.0

# Security
JWT_SECRET=your_strong_secret_here
BCRYPT_ROUNDS=12

# Logging
LOG_LEVEL=info
LOG_FORMAT=combined

# CORS
ALLOWED_ORIGINS=http://localhost:3000,https://yourapp.com
🔒 Security Features

Helmet.js → Secure HTTP headers
CORS → Whitelisted origins
Rate Limiting → 100 req/15min per IP
Input Validation → Sanitized payloads
Dependency Scanning → GitHub Dependabot + CodeQL
Secret Management → .env + platform secrets
📈 Monitoring & Observability

/health → DB, memory, uptime
/metrics → Prometheus format
Structured logs → JSON output in production
Error tracking → Centralized handler
PM2 monitoring → pm2 monit ready
⚡ Performance Optimizations

Gzip compression
Cache-Control headers
Cluster mode (PM2)
Connection pooling (DB)
Static assets optimized
🔄 CI/CD Pipeline (GitHub Actions)
Triggers: push to main, pull_request
Jobs:

Lint → ESLint + Prettier
Test → Jest with coverage
Security → CodeQL + dependency scan
Build → Docker image
Deploy → To selected platform


See: .github/workflows/ci-cd.yml
Quick Deploy
Render.com
bash# Connect GitHub repo → Auto-deploy on push

Heroku
bashheroku create your-app-name
git push heroku main

Vercel (API only)
bashnpm i -g vercel
vercel --prod

Debug:
bashDEBUG=app* npm start
docker logs <container-id>

👥 Contributing
We ❤️ contributions!

Fork the repo
Create branch: git checkout -b feature/xyz
Commit: git commit -m 'Add xyz'
Push: git push origin feature/xyz
Open a Pull Request
See CONTRIBUTING.md for details.

🚧 Roadmap

 PostgreSQL / MongoDB integration
 JWT Authentication + Refresh Tokens
 Swagger/OpenAPI docs
 Kubernetes manifests
 Load testing with k6
 Multi-region failover
 GraphQL endpoint
 WebSocket real-time
 Serverless (Vercel/AWS Lambda)



📄 License
MIT License – Free to use, modify, and distribute.

📞 Support

Open an Issue
Check Discussions
Read the Wiki


🙏 Acknowledgments

Express.js
Jest
Docker
GitHub Actions


Star this repo if you found it useful! 🌟
