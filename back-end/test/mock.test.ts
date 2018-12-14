import {} from 'ts-jest';
// import * as supertest from 'supertest';
import * as chai from 'chai';
import 'chai-http';
import server from '../src/index';

chai.use(require('chai-http'));

describe('User tests', () => { 
  it('Get all users from DB', (done) => {
    // const request = supertest(server);

    // ?query={findAll{email%20firstName%20lastName%20roleId}}
    /*
          // .set('Accept', 'application/json')
      .set('Content-Type', 'application/json; utf-8')
     */

    chai.request(server)
      .post('/graphql')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json; utf-8')
      .set('Connection', 'keep-alive')
      .send('{ "query": "findAll{email firstName lastName roleId}" }')
      .end((err, res) => {
        console.log(res);
        done();
      });
  });
});
