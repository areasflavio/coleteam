import request from 'supertest';
import knex from '../database/connection';

import app from '../app';

describe('POST /users', function () {
  beforeAll(async () => {
    await knex('users').where('email', 'johndoe@example.com').del();
  });

  it('should be able to create a new user', function (done) {
    request(app)
      .post('/users')
      .send({
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: '123456',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });

  it('should not be able to create a new user without password', function (done) {
    request(app)
      .post('/users')
      .send({
        name: 'John Doe',
        email: 'johndoe@example.com',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });

  it("should not be able to create a new user with an email that's already in use", function (done) {
    request(app)
      .post('/users')
      .send({
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: '123456',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
});
