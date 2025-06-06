import {app}  from "../src/app.js";
import request from 'supertest';

describe('User API', () => {
    it('GET /api/users should return all users', async () => {
      const res = await request(app).get('/api/users');
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBeGreaterThan(0);
    });
  
    it('GET /api/users/:id should return a specific user', async () => {
      const res = await request(app).get('/api/users/1');
      expect(res.statusCode).toBe(200);
      expect(res.body.name).toBe('Alice');
    });
  
    it('GET /api/users/:id should return 404 if user not found', async () => {
      const res = await request(app).get('/api/users/999');
      expect(res.statusCode).toBe(404);
    });
  });