let request = require('supertest');
require('dotenv').config();

const preRequest = request('https://' + process.env.AUTH0_BASE_URL);
request = request('http://localhost:3001');
let token: string = null;

/*
 * This method retrieves access token for Dev environment and stores it in a local variable
 */
before(function (done) {
    preRequest
        .post('/oauth/token')
        .send('grant_type=password&username=' + process.env.AUTH0_USERNAME + '&password=' + process.env.AUTH0_PASSWORD
            + '&client_id=' + process.env.AUTH0_CLIENT_ID + '&client_secret=' + process.env.AUTH0_CLIENT_SECRET +
            '&audience=' + process.env.AUTH0_AUDIENCE + '&scope=' + process.env.AUTH0_SCOPE + '&ContentType=application/x-www-form-urlencoded')
        .set('Accept', 'application/json')
        .expect(function(res) {
            token = res.body.access_token;
        })
        .end(function(err, res) {
            if (err) return done(err);
            return done();
        });
});

/*
 * This method deletes all items in the database before each test
 */
beforeEach (function (done) {
    request
        .delete('/api/v1/user/activeGames')
        .send()
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer ' + token)
        .end(function(err, res) {
            if (err) return done(err);
            return done();
        });
});

export { token };
