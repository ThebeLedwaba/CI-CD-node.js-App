import express from 'express';
import pino from 'pino-http';
import helmet from 'helmet';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import { fileURLToPath } from 'url';
import swaggerUi from 'swagger-ui-express';
import { specs } from './config/swagger.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// Middleware
app.use(helmet());
const pinoOptions = {};

if (process.env.NODE_ENV === 'development') {
  pinoOptions.transport = {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  };
}

app.use(pino(pinoOptions));
app.use(express.json());
app.use(limiter);

// Health check endpoint
app.use(limiter);

// Swagger Documentation
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Check application health
 *     responses:
 *       200:
 *         description: Application is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 timestamp:
 *                   type: string
 *                 uptime:
 *                   type: number
 *                 environment:
 *                   type: string
 */
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Main route
/**
 * @swagger
 * /:
 *   get:
 *     summary: Welcome message
 *     responses:
 *       200:
 *         description: Success message
 */
app.get('/', (req, res) => {
  res.json({
    message: 'CI/CD Node.js Application Running Successfully',
    version: process.env.npm_package_version || '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

// API info endpoint
/**
 * @swagger
 * /api/info:
 *   get:
 *     summary: API Information
 *     responses:
 *       200:
 *         description: API details
 */
app.get('/api/info', (req, res) => {
  res.json({
    name: 'CI/CD Demo API',
    description: 'Demonstration of professional CI/CD practices',
    repository: 'https://github.com/ThebeLedwaba/ci-cd-node-app',
    endpoints: ['GET /', 'GET /health', 'GET /api/info']
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.path,
    method: req.method
  });
});

// Global Error Handler
app.use((err, req, res, _next) => {
  console.error('Error:', err.stack);

  const response = {
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'production' ? 'Something went wrong!' : err.message
  };

  res.status(err.status || 500).json(response);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  });
}

export default app;
