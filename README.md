CI/CD Node.js Application - DevOps Pipeline Implementation
https://img.shields.io/badge/node-%253E%253D20-green
https://github.com/ThebeLedwaba/ci-cd-node-app/actions/workflows/ci-cd.yml/badge.svg
https://img.shields.io/badge/docker-ready-blue
https://img.shields.io/badge/license-MIT-blue

A production-ready Node.js application demonstrating enterprise-level CI/CD practices using GitHub Actions, automated testing, and cloud deployment strategies.

📋 Project Overview
This project implements a complete Continuous Integration and Continuous Deployment (CI/CD) pipeline for a Node.js application. It serves as a demonstration of modern DevOps practices including automated testing, code quality checks, containerization, and multi-environment deployment.

✨ Key Features
Automated CI/CD pipeline with GitHub Actions

Code linting and quality assurance with ESLint

Comprehensive unit testing with Jest test framework

Multi-platform deployment (Render, Heroku, Vercel)

Docker containerization for consistent environments

Secure Express server configuration with Helmet

Request logging and monitoring with Morgan

Environment-based configuration management

Health Checks with /health endpoint

Dependency Scanning with GitHub Security Advisories

Rate Limiting for API security

Performance Optimizations with compression and caching

🛠 Technology Stack
Runtime: Node.js v20

Framework: Express.js for API routing

CI/CD: GitHub Actions for automation

Deployment: Render, Heroku, Vercel

Testing: Jest for unit testing

Code Quality: ESLint for code standards

Containerization: Docker for environment consistency

Security: Helmet for Express security headers

Logging: Morgan for HTTP request logging

Process Management: PM2 for production

🏗 Architecture
This implementation follows industry-standard DevOps practices:

Source code management with Git

Automated testing on each commit

Quality gates with linting and test requirements

Containerized deployment ready for production

Multi-environment configuration support

Health monitoring and metrics collection

Security scanning and vulnerability prevention

💼 Professional Skills Demonstrated
DevOps pipeline design and implementation

Automated testing strategies

Containerization and Docker best practices

Cloud platform deployment expertise

Code quality and maintenance standards

Production-ready application security

Environment configuration management

Monitoring and observability implementation

Performance optimization techniques

🚀 Getting Started
Prerequisites
Node.js v20 or higher

npm v9 or higher

Docker (optional, for containerized deployment)

Git

Local Development
Installation
bash
# Clone the repository
git clone https://github.com/ThebeLedwaba/ci-cd-node-app.git
cd ci-cd-node-app

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your configuration

# Start development server
npm run dev
Docker Deployment
bash
# Build Docker image
docker build -t ci-cd-node-app .

# Run container
docker run -p 3000:3000 ci-cd-node-app

# Production deployment with environment variables
docker run -p 3000:3000 --env-file .env ci-cd-node-app

# Using docker-compose
docker-compose up
Testing and Quality Assurance
bash
# Run test suite
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch

# Execute linting
npm run lint

# Fix linting issues
npm run lint:fix

# Full CI simulation
npm run ci
📁 Project Structure
text
ci-cd-node-app/
├── src/
│   ├── controllers/     # Route controllers
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── utils/           # Utility functions
│   ├── config/          # Configuration files
│   └── app.js          # Main application file
├── tests/
│   ├── unit/           # Unit tests
│   ├── integration/     # Integration tests
│   └── fixtures/        # Test data
├── .github/
│   └── workflows/       # GitHub Actions workflows
├── docs/               # Documentation
├── Dockerfile
├── docker-compose.yml
├── .env.example
└── package.json
📚 API Endpoints
Method	Endpoint	Description	Authentication
GET	/	Root endpoint	Public
GET	/health	Health check with system status	Public
GET	/metrics	Application metrics	Public
GET	/api/users	Get users	Protected
POST	/api/users	Create user	Protected
⚙️ Configuration
Environment Variables
Create a .env file in the root directory:

env
# Server Configuration
PORT=3000
NODE_ENV=development
HOST=0.0.0.0

# Security
JWT_SECRET=your_jwt_secret_here
BCRYPT_ROUNDS=12

# Logging
LOG_LEVEL=info
LOG_FORMAT=combined

# Database (if applicable)
DATABASE_URL=your_database_connection_string

# CORS
ALLOWED_ORIGINS=http://localhost:3000,https://yourapp.com
📜 Available Scripts
json
{
  "start": "node src/app.js",
  "dev": "nodemon src/app.js",
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage",
  "lint": "eslint src/ tests/",
  "lint:fix": "eslint src/ tests/ --fix",
  "ci": "npm run lint && npm test",
  "docker:build": "docker build -t ci-cd-node-app .",
  "docker:run": "docker run -p 3000:3000 ci-cd-node-app"
}
🔒 Security Features
Helmet.js: Secure HTTP headers

CORS: Configurable cross-origin resource sharing

Rate Limiting: API request throttling

Dependency Scanning: Automated security vulnerability checks

Environment Variables: Secure configuration management

Input Validation: Request data sanitization

📈 Monitoring & Observability
Health Checks: Comprehensive /health endpoint

Request Logging: Structured HTTP request logging with Morgan

Error Tracking: Centralized error handling and logging

Performance Metrics: Response time monitoring

Process Monitoring: PM2 for production process management

⚡ Performance Optimizations
Compression: Gzip compression enabled

Caching: Appropriate cache headers implementation

Cluster Mode: PM2 cluster mode ready for production

Connection Pooling: Database connection optimization

Static File Serving: Efficient static asset delivery

🔄 Pipeline Workflow
Code Commit: Triggers automated pipeline on push to main branch

Quality Checks: ESLint validation and code standards enforcement

Security Scan: Dependency vulnerability assessment

Testing: Automated test suite execution with coverage

Build: Application compilation and Docker image creation

Deployment: Automatic deployment to target environment

Health Check: Post-deployment verification

🚀 Quick Deploy
Render
bash
# Connect your GitHub repository to Render for automatic deployments
Heroku
bash
# Set up Heroku CLI and deploy
heroku create your-app-name
git push heroku main
Vercel
bash
# Install Vercel CLI and deploy
npm i -g vercel
vercel --prod
🐛 Troubleshooting
Common Issues
Port already in use:

bash
# Change PORT in .env file or use:
PORT=3001 npm start
Dependencies issues:

bash
rm -rf node_modules package-lock.json
npm install
Test failures:

Ensure all environment variables are properly set

Check test database configuration

Docker issues:

bash
# Check if Docker is running
docker --version

# Clean up unused containers and images
docker system prune
Debugging
bash
# Run with debug logs
DEBUG=app* npm start

# Check container logs
docker logs <container_id>

# View recent application logs
tail -f logs/app.log
👥 Contributing
We welcome contributions! Please see our Contributing Guide for details.

Fork the repository

Create your feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

🚧 Roadmap
Add database integration (PostgreSQL/MongoDB)

Implement JWT authentication

Add API documentation with Swagger/OpenAPI

Kubernetes deployment manifests

Load testing setup with k6

Multi-region deployment strategy

GraphQL API implementation

Real-time features with WebSockets

Microservices architecture example

Serverless deployment option

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

📞 Support
If you have any questions or need help with setup:

Create an Issue

Check the Discussions page

Review the Wiki for detailed guides

🙏 Acknowledgments
Express.js team for the excellent web framework

Jest team for comprehensive testing tools

Docker community for containerization ecosystem

GitHub for robust CI/CD Actions platform
