import request from 'supertest';
import app from '../src/app.js';

describe('CI/CD App Endpoints', () => {
  test('GET / should return success message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBeDefined();
  });

  test('GET /health should return health status', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('OK');
  });
});
