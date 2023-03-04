let request = require('supertest');
require('dotenv').config();
import { token } from "./globalHooks.test";
import { postTestData } from "./postTestData.test";
import { globalTestData} from "./globalTestData.test";

request = request('http://localhost:3001');

describe('Test Delete requests for /api/v1/user/activeGames', function () {
    /*
     * This method populates the database before each test
     */
    beforeEach (function (done) {
        request
            .post('/api/v1/user/activeGames')
            .send([postTestData.activePuzzle1, postTestData.activePuzzle2,
                postTestData.activePuzzle3, postTestData.activePuzzle2MovesSwapped])
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer ' + token)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });
    });

    describe('Test code 200 DELETE requests', function () {
        describe('Test code 200 present DELETE requests', function () {
            it('Delete empty query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 4 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by puzzle query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ puzzle: postTestData.puzzle1})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by userID query returns 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ userID: "Thomas"})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 3 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by currentTime query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ currentTime: 0 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by numHintsAskedFor query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ numHintsAskedFor: 0 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by numWrongCellsPlayed query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ numWrongCellsPlayed: 0 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                        }
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by moves AND query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ moves: { puzzleCurrentState: postTestData.puzzle2Move1, puzzleCurrentNotesState: postTestData.puzzle2Notes1} })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by moves OR query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ moves: { puzzleCurrentState: postTestData.puzzle2Move1} },
                        { moves: { puzzleCurrentNotesState: postTestData.puzzle2Notes1}})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 2 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by NAKED_SINGLE query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SINGLE': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by HIDDEN_SINGLE query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SINGLE': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by NAKED_PAIR query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_PAIR': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by NAKED_TRIPLET query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_TRIPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by NAKED_QUADRUPLET query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_QUADRUPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by NAKED_QUINTUPLET query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_QUINTUPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by NAKED_SEXTUPLET query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SEXTUPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by NAKED_SEPTUPLET query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SEPTUPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by NAKED_OCTUPLET query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_OCTUPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by HIDDEN_PAIR query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_PAIR': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by HIDDEN_TRIPLET query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_TRIPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by HIDDEN_QUADRUPLET query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_QUADRUPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by HIDDEN_QUINTUPLET query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_QUINTUPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by HIDDEN_SEXTUPLET query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SEXTUPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by HIDDEN_SEPTUPLET query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SEPTUPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by HIDDEN_OCTUPLET query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_OCTUPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by POINTING_PAIR query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.POINTING_PAIR': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by POINTING_TRIPLET query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.POINTING_TRIPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by BOX_LINE_REDUCTION query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.BOX_LINE_REDUCTION': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by X_WING query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.X_WING': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by SWORDFISH query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.SWORDFISH': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by SINGLES_CHAINING query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.SINGLES_CHAINING': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete by numWrongCellsPlayedPerStrategy query 200 and expected response', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query(
                        { 'numWrongCellsPlayedPerStrategy.NAKED_SINGLE': 11 },
                        { 'numWrongCellsPlayedPerStrategy.HIDDEN_SINGLE': 11 },
                        { 'numWrongCellsPlayedPerStrategy.NAKED_PAIR': 11 },
                        { 'numWrongCellsPlayedPerStrategy.NAKED_TRIPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.NAKED_QUADRUPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.NAKED_QUINTUPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.NAKED_SEXTUPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.NAKED_SEPTUPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.NAKED_OCTUPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.HIDDEN_PAIR': 11 },
                        { 'numWrongCellsPlayedPerStrategy.HIDDEN_TRIPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.HIDDEN_QUADRUPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.HIDDEN_QUINTUPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.HIDDEN_SEXTUPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.HIDDEN_SEPTUPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.HIDDEN_OCTUPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.POINTING_PAIR': 11 },
                        { 'numWrongCellsPlayedPerStrategy.POINTING_TRIPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.BOX_LINE_REDUCTION': 11 },
                        { 'numWrongCellsPlayedPerStrategy.X_WING': 11 },
                        { 'numWrongCellsPlayedPerStrategy.SWORDFISH': 11 },
                        { 'numWrongCellsPlayedPerStrategy.SINGLES_CHAINING': 11 }
                    )
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });
        });

        describe('Test code 200 not present DELETE requests', function () {
            it('Delete userID is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ userID: "Jimmy" })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            // todo make valid not found puzzle
            it('Delete puzzle is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ userID: "Jimmy" })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete currentTime is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ currentTime: 1000 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            // todo get valid puzzleCurrentState not found
            it('Delete puzzleCurrentState is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ currentTime: 1000 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            // todo get valid puzzleCurrentNotesState not found
            it('Delete puzzleCurrentNotesState is not present 200 success error message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ currentTime: 1000 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });



            it('Delete numHintsAskedFor is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ numHintsAskedFor: 100} )
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete numWrongCellsPlayed is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ numWrongCellsPlayed: 100} )
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete NAKED_SINGLE is not integer present 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SINGLE': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete HIDDEN_SINGLE is not integer present 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SINGLE': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete NAKED_PAIR is not integer present 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_PAIR': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete NAKED_TRIPLET is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_TRIPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete NAKED_QUADRUPLET is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_QUADRUPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete NAKED_QUINTUPLET is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_QUINTUPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete NAKED_SEXTUPLET is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SEXTUPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete NAKED_SEPTUPLET is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SEPTUPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete NAKED_OCTUPLET is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_OCTUPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete HIDDEN_PAIR is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_PAIR': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete HIDDEN_TRIPLET is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_TRIPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete HIDDEN_QUADRUPLET is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_QUADRUPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete HIDDEN_QUINTUPLET is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_QUINTUPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete HIDDEN_SEXTUPLET is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SEXTUPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete HIDDEN_SEPTUPLET is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SEPTUPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete HIDDEN_OCTUPLET is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_OCTUPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete POINTING_PAIR is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.POINTING_PAIR': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete POINTING_TRIPLET is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.POINTING_TRIPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete BOX_LINE_REDUCTION is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.BOX_LINE_REDUCTION': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete X_WING is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.X_WING': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete SWORDFISH is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.SWORDFISH': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Delete SINGLES_CHAINING is not present returns 200 success message', function (done) {
                request
                    .delete('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.SINGLES_CHAINING': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });
        });
    });

    describe('Test code 400 Delete requests', function () {
        it('Delete invalid path 1 returns 400 error message', function (done) {
            request
                .delete('/invalid')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete invalid path 2 returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames/invalid')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete invalid path 3 returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/invalid')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete invalid userID query returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ userID: ""})
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete invalid character puzzle query returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ puzzle: "Banana"})
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete empty puzzle field returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ puzzle: "" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete puzzle too long returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ puzzle: postTestData.puzzleIsTooLong })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete puzzle too short returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ puzzle: postTestData.puzzleIsTooShort})
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete puzzle invalid character returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ puzzle: postTestData.puzzleHasInvalidCharacter })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete currentTime is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ currentTime: "Banana"} )
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete puzzleCurrentState is too long returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ moves: {puzzleCurrentState: postTestData.puzzleCurrentStateIsTooLong} })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete puzzleCurrentState is too short returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ moves: {puzzleCurrentState: postTestData.puzzleCurrentStateIsTooShort} })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete puzzleCurrentState has invalid character returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ moves: {puzzleCurrentState: postTestData.puzzleCurrentStateHasInvalidCharacter} })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete puzzleCurrentNotesState is too long returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ moves: {puzzleCurrentNotesState: postTestData.puzzleCurrentNotesStateIsTooLong} })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        //todo convert
        it('Delete puzzleCurrentNotesState is too short returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ moves: {puzzleCurrentNotesState: postTestData.puzzleCurrentNotesStateIsTooShort} })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete puzzleCurrentNotesState has invalid character returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ moves: {puzzleCurrentNotesState: postTestData.puzzleCurrentNotesStateHasInvalidCharacter} })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete numHintsAskedFor is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ numHintsAskedFor: "Banana"} )
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete numWrongCellsPlayed is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ numWrongCellsPlayed: "Banana"} )
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete NAKED_SINGLE is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SINGLE': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete HIDDEN_SINGLE is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SINGLE': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete NAKED_PAIR is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.NAKED_PAIR': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete NAKED_TRIPLET is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.NAKED_TRIPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete NAKED_QUADRUPLET is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.NAKED_QUADRUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete NAKED_QUINTUPLET is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.NAKED_QUINTUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete NAKED_SEXTUPLET is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SEXTUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete NAKED_SEPTUPLET is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SEPTUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete NAKED_OCTUPLET is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.NAKED_OCTUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete HIDDEN_PAIR is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_PAIR': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete HIDDEN_TRIPLET is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_TRIPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete HIDDEN_QUADRUPLET is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_QUADRUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete HIDDEN_QUINTUPLET is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_QUINTUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete HIDDEN_SEXTUPLET is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SEXTUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete HIDDEN_SEPTUPLET is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SEPTUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete HIDDEN_OCTUPLET is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_OCTUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete POINTING_PAIR is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.POINTING_PAIR': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete POINTING_TRIPLET is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.POINTING_TRIPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete BOX_LINE_REDUCTION is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.BOX_LINE_REDUCTION': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete X_WING is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.X_WING': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete SWORDFISH is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.SWORDFISH': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete SINGLES_CHAINING is not integer returns 400 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.SINGLES_CHAINING': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });
    });

    describe('Test code 401 Delete requests', function () {
        it('Delete no Auth header returns 401 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .set('Content-Type', 'application/json')
                .expect('Content-Type', /json/)
                .expect(401, globalTestData.ErrorMessage401)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete invalid Auth header returns 401 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer')
                .expect('Content-Type', /json/)
                .expect(401, globalTestData.ErrorMessage401)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Delete expired Auth token returns 401 error message', function (done) {
            request
                .delete('/api/v1/user/activeGames')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + globalTestData.expiredAccessToken)
                .expect('Content-Type', /json/)
                .expect(401, globalTestData.ErrorMessage401)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });
    });
});
