const request = require('supertest');
const proxy = require('../helper');
const router = require('../../controllers/account');

proxy.use(router);

describe('POST /account/change_paypass', () => {

  const user = {
    userId: 10001,
    payPass: 'paypass1'
  };

  const userNew = {
    userId: 10003,
    payPass: 'paypass3'
  };

  it('returns code 0 on successful user paypass change', (done) => {
    request(proxy)
      .post('/account/change_paypass')
      .send(user)
      .expect({ 
        code: 0, 
        data: { 
          code: 0
        }
      })
      .expect(200, done);
  });

  it('returns code -1 if userName exists', (done) => {
    request(proxy)
      .post('/account/change_paypass')
      .send(userNew)
      .expect({ 
        code: -1,
        error: {
          code: -1
        } 
      })
      .expect(200, done);
  });
});
