import {} from 'ts-jest';
import * as supertest from 'supertest';
import server from '../src/index';

/*
  let app: AppServer;

  beforeEach(() => {
    app = server;
  });

  afterEach(() => {
    app.close();
  });
 */

describe('User tests', () => { 
  test('Get all users from DB', () => {
    const request = supertest(server);
    const query = { query: 'query findAll { findAll { email firstName lastName roleId } }' };

    request
      .post('/graphql')
      .send(query)
      .end(res => {
        console.log(res);
      });
  });
});
