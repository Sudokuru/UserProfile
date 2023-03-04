import {patchTestData} from "./patchTestData.test";

let request = require('supertest');
require('dotenv').config();
import { token } from "./globalHooks.test";
import { postTestData } from "./postTestData.test";
import { globalTestData} from "./globalTestData.test";
import Assert from "assert";

request = request('http://localhost:3001');

describe('Test Patch requests for /api/v1/user/activeGames', function () {
    this.retries(2);
    /*
     * This method populates the database before each test
     */
    beforeEach (function (done) {

        postTestData.initializeData();
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

    describe('Test code 200 PATCH requests', function () {
        describe('Test code 200 present PATCH requests', function () {
            it('Patch empty query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .send({"currentTime": 2000})
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({"currentTime": 2000})
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";

                            res.body[1]._id = "ID";
                            res.body[1].moves[0]._id = "ID";
                            res.body[1].moves[1]._id = "ID";

                            res.body[2]._id = "ID";
                            res.body[2].moves[0]._id = "ID";
                            res.body[2].moves[1]._id = "ID";

                            res.body[3]._id = "ID";
                            res.body[3].moves[0]._id = "ID";
                            res.body[3].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle1CurrentTimeResponse(), patchTestData.patchActivePuzzle2CurrentTimeResponse(),
                        patchTestData.patchActivePuzzle3CurrentTimeResponse(), patchTestData.patchActivePuzzle2MovesSwappedCurrentTimeResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified4Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch puzzle query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ puzzle: postTestData.puzzle1})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .send({"currentTime": 2000})
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({"currentTime": 2000})
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle1CurrentTimeResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch userID query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ userID: "Thomas"})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .send({"currentTime": 2000})
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({"currentTime": 2000})
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";

                            res.body[1]._id = "ID";
                            res.body[1].moves[0]._id = "ID";
                            res.body[1].moves[1]._id = "ID";

                            res.body[2]._id = "ID";
                            res.body[2].moves[0]._id = "ID";
                            res.body[2].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle1CurrentTimeResponse(), patchTestData.patchActivePuzzle2CurrentTimeResponse(),
                        patchTestData.patchActivePuzzle2MovesSwappedCurrentTimeResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified3Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch currentTime query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({"currentTime": 0})
                    .send({"currentTime": 2000})
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({"currentTime": 2000})
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle1CurrentTimeResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch numHintsAskedFor query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ numHintsAskedFor: 0 })
                    .send({ numHintsAskedFor: 100 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ numHintsAskedFor: 100 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle1NumHintsAskedForResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch numWrongCellsPlayed query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ numWrongCellsPlayed: 0 })
                    .send({ numWrongCellsPlayed: 100 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ numWrongCellsPlayed: 100 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle1NumWrongCellsPlayedResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch moves AND query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ moves: { puzzleCurrentState: postTestData.puzzle2Move1, puzzleCurrentNotesState: postTestData.puzzle2Notes1} })
                    .send({ moves: [{ puzzleCurrentState: postTestData.puzzle3Move1, puzzleCurrentNotesState: postTestData.puzzle3Notes1}] })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ moves: { puzzleCurrentState: postTestData.puzzle3Move1, puzzleCurrentNotesState: postTestData.puzzle3Notes1} })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                            res.body[0].moves[0]._id = "ID";

                            res.body[1]._id = "ID";
                            res.body[1].moves[0]._id = "ID";
                            res.body[1].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle2MovesResponse(), postTestData.activePuzzle3Response])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch moves OR query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ moves: { puzzleCurrentState: postTestData.puzzle2Move1} },
                        { moves: { puzzleCurrentNotesState: postTestData.puzzle2Notes1}})
                    .send({ moves: [{ puzzleCurrentState: postTestData.puzzle3Move1, puzzleCurrentNotesState: postTestData.puzzle3Notes1}] })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ moves: { puzzleCurrentState: postTestData.puzzle3Move1, puzzleCurrentNotesState: postTestData.puzzle3Notes1} })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                            res.body[0].moves[0]._id = "ID";

                            res.body[1]._id = "ID";
                            res.body[1].moves[0]._id = "ID";
                            res.body[1].moves[1]._id = "ID";

                            res.body[2]._id = "ID";
                            res.body[2].moves[0]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle2MovesResponse(),
                        postTestData.activePuzzle3Response, patchTestData.patchActivePuzzle2MovesSwappedResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified2Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch NAKED_SINGLE query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SINGLE': 9 })
                    .send({ 'numWrongCellsPlayedPerStrategy.NAKED_SINGLE': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SINGLE': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                            res.body[0].moves[0]._id = "ID";
                            res.body[0].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle2MovesSwappedNAKED_SINGLEResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch HIDDEN_SINGLE query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SINGLE': 9 })
                    .send({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SINGLE': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SINGLE': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                            res.body[0].moves[0]._id = "ID";
                            res.body[0].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle2MovesSwappedHIDDEN_SINGLEResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch NAKED_PAIR query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_PAIR': 9 })
                    .send({ 'numWrongCellsPlayedPerStrategy.NAKED_PAIR': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_PAIR': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                            res.body[0].moves[0]._id = "ID";
                            res.body[0].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle2MovesSwappedNAKED_PAIRResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch NAKED_TRIPLET query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_TRIPLET': 9 })
                    .send({ 'numWrongCellsPlayedPerStrategy.NAKED_TRIPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_TRIPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                            res.body[0].moves[0]._id = "ID";
                            res.body[0].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle2MovesSwappedNAKED_TRIPLETResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch NAKED_QUADRUPLET query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_QUADRUPLET': 9 })
                    .send({ 'numWrongCellsPlayedPerStrategy.NAKED_QUADRUPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_QUADRUPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                            res.body[0].moves[0]._id = "ID";
                            res.body[0].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle2MovesSwappedNAKED_QUADRUPLETResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch NAKED_QUINTUPLET query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_QUINTUPLET': 9 })
                    .send({ 'numWrongCellsPlayedPerStrategy.NAKED_QUINTUPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_QUINTUPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                            res.body[0].moves[0]._id = "ID";
                            res.body[0].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle2MovesSwappedNAKED_QUINTUPLETResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch NAKED_TRIPLET query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SEXTUPLET': 9 })
                    .send({ 'numWrongCellsPlayedPerStrategy.NAKED_SEXTUPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SEXTUPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                            res.body[0].moves[0]._id = "ID";
                            res.body[0].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle2MovesSwappedNAKED_SEXTUPLETResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch NAKED_SEPTUPLET query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SEPTUPLET': 9 })
                    .send({ 'numWrongCellsPlayedPerStrategy.NAKED_SEPTUPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SEPTUPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                            res.body[0].moves[0]._id = "ID";
                            res.body[0].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle2MovesSwappedNAKED_SEPTUPLETResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch NAKED_OCTUPLET query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_OCTUPLET': 9 })
                    .send({ 'numWrongCellsPlayedPerStrategy.NAKED_OCTUPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_OCTUPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                            res.body[0].moves[0]._id = "ID";
                            res.body[0].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle2MovesSwappedNAKED_OCTUPLETResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch HIDDEN_PAIR query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_TRIPLET': 9 })
                    .send({ 'numWrongCellsPlayedPerStrategy.HIDDEN_PAIR': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_PAIR': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                            res.body[0].moves[0]._id = "ID";
                            res.body[0].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle2MovesSwappedHIDDEN_PAIRResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch HIDDEN_TRIPLET query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_TRIPLET': 9 })
                    .send({ 'numWrongCellsPlayedPerStrategy.HIDDEN_TRIPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_TRIPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                            res.body[0].moves[0]._id = "ID";
                            res.body[0].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle2MovesSwappedHIDDEN_TRIPLETResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch HIDDEN_QUADRUPLET query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_QUADRUPLET': 9 })
                    .send({ 'numWrongCellsPlayedPerStrategy.HIDDEN_QUADRUPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_QUADRUPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                            res.body[0].moves[0]._id = "ID";
                            res.body[0].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle2MovesSwappedHIDDEN_QUADRUPLETResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch HIDDEN_QUINTUPLET query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_QUINTUPLET': 9 })
                    .send({ 'numWrongCellsPlayedPerStrategy.HIDDEN_QUINTUPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_QUINTUPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                            res.body[0].moves[0]._id = "ID";
                            res.body[0].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle2MovesSwappedHIDDEN_QUINTUPLETResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch HIDDEN_SEXTUPLET query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SEXTUPLET': 9 })
                    .send({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SEXTUPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SEXTUPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                            res.body[0].moves[0]._id = "ID";
                            res.body[0].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle2MovesSwappedHIDDEN_SEXTUPLETResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch HIDDEN_SEPTUPLET query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SEPTUPLET': 9 })
                    .send({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SEPTUPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SEPTUPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                            res.body[0].moves[0]._id = "ID";
                            res.body[0].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle2MovesSwappedHIDDEN_SEPTUPLETResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch HIDDEN_OCTUPLET query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_OCTUPLET': 9 })
                    .send({ 'numWrongCellsPlayedPerStrategy.HIDDEN_OCTUPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_OCTUPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                            res.body[0].moves[0]._id = "ID";
                            res.body[0].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle2MovesSwappedHIDDEN_OCTUPLETResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch POINTING_PAIR query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.POINTING_PAIR': 9 })
                    .send({ 'numWrongCellsPlayedPerStrategy.POINTING_PAIR': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.POINTING_PAIR': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                            res.body[0].moves[0]._id = "ID";
                            res.body[0].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle2MovesSwappedPOINTING_PAIRResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch POINTING_TRIPLET query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.POINTING_TRIPLET': 9 })
                    .send({ 'numWrongCellsPlayedPerStrategy.POINTING_TRIPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.POINTING_TRIPLET': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                            res.body[0].moves[0]._id = "ID";
                            res.body[0].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle2MovesSwappedPOINTING_TRIPLETResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch BOX_LINE_REDUCTION query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.BOX_LINE_REDUCTION': 9 })
                    .send({ 'numWrongCellsPlayedPerStrategy.BOX_LINE_REDUCTION': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.BOX_LINE_REDUCTION': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                            res.body[0].moves[0]._id = "ID";
                            res.body[0].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle2MovesSwappedBOX_LINE_REDUCTIONResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch X_WING query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.X_WING': 9 })
                    .send({ 'numWrongCellsPlayedPerStrategy.X_WING': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.X_WING': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                            res.body[0].moves[0]._id = "ID";
                            res.body[0].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle2MovesSwappedX_WINGResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch SWORDFISH query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.SWORDFISH': 9 })
                    .send({ 'numWrongCellsPlayedPerStrategy.SWORDFISH': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.SWORDFISH': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                            res.body[0].moves[0]._id = "ID";
                            res.body[0].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle2MovesSwappedSWORDFISHResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch SINGLES_CHAINING query 200 with currentTime and expected response', function (done) {
                let patchBody;
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.SINGLES_CHAINING': 9 })
                    .send({ 'numWrongCellsPlayedPerStrategy.SINGLES_CHAINING': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        patchBody = res.body;
                    })
                    .end(function(err, res) {
                    });

                globalTestData.sleep(1000);

                request
                    .get('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .query({ 'numWrongCellsPlayedPerStrategy.SINGLES_CHAINING': 1000 })
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                        if (res.body[0] != undefined){
                            res.body[0]._id = "ID";
                            res.body[0].moves[0]._id = "ID";
                            res.body[0].moves[1]._id = "ID";
                        }
                    })
                    .expect(200, [patchTestData.patchActivePuzzle2MovesSwappedSINGLES_CHAININGResponse()])
                    .expect(function(res) {
                        Assert.equal(JSON.stringify(patchBody), JSON.stringify(patchTestData.modified1Response));
                    })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            //todo implement this later

            // it('Patch by numWrongCellsPlayedPerStrategy query 200 and expected response', function (done) {
            //     request
            //         .patch('/api/v1/user/activeGames')
            //         .query(
            //             { 'numWrongCellsPlayedPerStrategy.NAKED_SINGLE': 11 },
            //             { 'numWrongCellsPlayedPerStrategy.HIDDEN_SINGLE': 11 },
            //             { 'numWrongCellsPlayedPerStrategy.NAKED_PAIR': 11 },
            //             { 'numWrongCellsPlayedPerStrategy.NAKED_TRIPLET': 11 },
            //             { 'numWrongCellsPlayedPerStrategy.NAKED_QUADRUPLET': 11 },
            //             { 'numWrongCellsPlayedPerStrategy.NAKED_QUINTUPLET': 11 },
            //             { 'numWrongCellsPlayedPerStrategy.NAKED_SEXTUPLET': 11 },
            //             { 'numWrongCellsPlayedPerStrategy.NAKED_SEPTUPLET': 11 },
            //             { 'numWrongCellsPlayedPerStrategy.NAKED_OCTUPLET': 11 },
            //             { 'numWrongCellsPlayedPerStrategy.HIDDEN_PAIR': 11 },
            //             { 'numWrongCellsPlayedPerStrategy.HIDDEN_TRIPLET': 11 },
            //             { 'numWrongCellsPlayedPerStrategy.HIDDEN_QUADRUPLET': 11 },
            //             { 'numWrongCellsPlayedPerStrategy.HIDDEN_QUINTUPLET': 11 },
            //             { 'numWrongCellsPlayedPerStrategy.HIDDEN_SEXTUPLET': 11 },
            //             { 'numWrongCellsPlayedPerStrategy.HIDDEN_SEPTUPLET': 11 },
            //             { 'numWrongCellsPlayedPerStrategy.HIDDEN_OCTUPLET': 11 },
            //             { 'numWrongCellsPlayedPerStrategy.POINTING_PAIR': 11 },
            //             { 'numWrongCellsPlayedPerStrategy.POINTING_TRIPLET': 11 },
            //             { 'numWrongCellsPlayedPerStrategy.BOX_LINE_REDUCTION': 11 },
            //             { 'numWrongCellsPlayedPerStrategy.X_WING': 11 },
            //             { 'numWrongCellsPlayedPerStrategy.SWORDFISH': 11 },
            //             { 'numWrongCellsPlayedPerStrategy.SINGLES_CHAINING': 11 }
            //         )
            //         .set('Content-Type', 'application/json')
            //         .set('Authorization', 'Bearer ' + token)
            //         .expect('Content-Type', /json/)
            //         .expect(function(res) {
            //         })
            //         .expect(200, { acknowledged: true, deletedCount: 1 })
            //         .end(function(err, res) {
            //             if (err) return done(err);
            //             return done();
            //         });
            // });
        });

        describe('Test code 200 not present PATCH requests', function () {
            it('Patch body is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ userID: "Jimmy" })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.noBodyResponse)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch userID is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ userID: "Jimmy" })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            // todo make valid not found puzzle
            it('Patch puzzle is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ userID: "Jimmy" })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch currentTime is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ currentTime: 1000 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            // todo get valid puzzleCurrentState not found
            it('Patch puzzleCurrentState is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ currentTime: 1000 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            // todo get valid puzzleCurrentNotesState not found
            it('Patch puzzleCurrentNotesState is not present 200 success error message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ currentTime: 1000 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch numHintsAskedFor is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ numHintsAskedFor: 100} )
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch numWrongCellsPlayed is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ numWrongCellsPlayed: 100} )
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch NAKED_SINGLE is not present 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SINGLE': 100 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch HIDDEN_SINGLE is not present 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SINGLE': 100 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch NAKED_PAIR is not present 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_PAIR': 100 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch NAKED_TRIPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_TRIPLET': 100 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch NAKED_QUADRUPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_QUADRUPLET': 100 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch NAKED_QUINTUPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_QUINTUPLET': 100 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch NAKED_SEXTUPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SEXTUPLET': 100 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch NAKED_SEPTUPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SEPTUPLET': 100 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch NAKED_OCTUPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_OCTUPLET': 100 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch HIDDEN_PAIR is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_PAIR': 100 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch HIDDEN_TRIPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_TRIPLET': 100 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch HIDDEN_QUADRUPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_QUADRUPLET': 100 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch HIDDEN_QUINTUPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_QUINTUPLET': 100 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch HIDDEN_SEXTUPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SEXTUPLET': 100 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch HIDDEN_SEPTUPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SEPTUPLET': 100 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch HIDDEN_OCTUPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_OCTUPLET': 100 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch POINTING_PAIR is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.POINTING_PAIR': 100 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch POINTING_TRIPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.POINTING_TRIPLET': 100 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch BOX_LINE_REDUCTION is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.BOX_LINE_REDUCTION': 100 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch X_WING is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.X_WING': 100 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch SWORDFISH is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.SWORDFISH': 100 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch SINGLES_CHAINING is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.SINGLES_CHAINING': 100 })
                    .send({"currentTime": 100})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, patchTestData.modified0Response)
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });
        });
    });

    describe('Test code 400 Patch requests', function () {
        it('Patch invalid path 1 returns 400 error message', function (done) {
            request
                .patch('/invalid')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch invalid path 2 returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames/invalid')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch invalid path 3 returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/invalid')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch query invalid userID query returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query invalid character puzzle query returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query empty puzzle field returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query puzzle too long returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query puzzle too short returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query puzzle invalid character returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query currentTime is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query puzzleCurrentState is too long returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query puzzleCurrentState is too short returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query puzzleCurrentState has invalid character returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query puzzleCurrentNotesState is too long returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query puzzleCurrentNotesState is too short returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query puzzleCurrentNotesState has invalid character returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query numHintsAskedFor is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query numWrongCellsPlayed is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query NAKED_SINGLE is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query HIDDEN_SINGLE is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query NAKED_PAIR is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query NAKED_TRIPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query NAKED_QUADRUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query NAKED_QUINTUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query NAKED_SEXTUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query NAKED_SEPTUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query NAKED_OCTUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query HIDDEN_PAIR is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query HIDDEN_TRIPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query HIDDEN_QUADRUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query HIDDEN_QUINTUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query HIDDEN_SEXTUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query HIDDEN_SEPTUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query HIDDEN_OCTUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query POINTING_PAIR is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query POINTING_TRIPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query BOX_LINE_REDUCTION is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query X_WING is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query SWORDFISH is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch query SINGLES_CHAINING is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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

        it('Patch body currentTime is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ currentTime: "Banana"} )
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body puzzleCurrentState is too long returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ moves: [{
                    "puzzleCurrentState": postTestData.puzzleCurrentStateIsTooLong,
                    "puzzleCurrentNotesState": postTestData.puzzle2Notes1
                    }]
                })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body puzzleCurrentState is too short returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ moves: [{
                        "puzzleCurrentState": postTestData.puzzleCurrentStateIsTooShort,
                        "puzzleCurrentNotesState": postTestData.puzzle2Notes1
                    }]
                })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body puzzleCurrentState has invalid character returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ moves: [{
                        "puzzleCurrentState": postTestData.puzzleCurrentStateHasInvalidCharacter,
                        "puzzleCurrentNotesState": postTestData.puzzle2Notes1
                    }]
                })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body puzzleCurrentNotesState is too long returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ moves: [{
                        "puzzleCurrentState": postTestData.puzzle2Move1,
                        "puzzleCurrentNotesState": postTestData.puzzleCurrentNotesStateIsTooLong
                    }]
                })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body puzzleCurrentNotesState is too short returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ moves: [{
                        "puzzleCurrentState": postTestData.puzzle2Move1,
                        "puzzleCurrentNotesState": postTestData.puzzleCurrentNotesStateIsTooShort
                    }]
                })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body puzzleCurrentNotesState has invalid character returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ moves: [{
                        "puzzleCurrentState": postTestData.puzzle2Move1,
                        "puzzleCurrentNotesState": postTestData.puzzleCurrentNotesStateHasInvalidCharacter
                    }]
                })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body numHintsAskedFor is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ numHintsAskedFor: "Banana"} )
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body numWrongCellsPlayed is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ numWrongCellsPlayed: "Banana"} )
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body NAKED_SINGLE is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ 'numWrongCellsPlayedPerStrategy.NAKED_SINGLE': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body HIDDEN_SINGLE is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SINGLE': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body NAKED_PAIR is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ 'numWrongCellsPlayedPerStrategy.NAKED_PAIR': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body NAKED_TRIPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ 'numWrongCellsPlayedPerStrategy.NAKED_TRIPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body NAKED_QUADRUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ 'numWrongCellsPlayedPerStrategy.NAKED_QUADRUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body NAKED_QUINTUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ 'numWrongCellsPlayedPerStrategy.NAKED_QUINTUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body NAKED_SEXTUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ 'numWrongCellsPlayedPerStrategy.NAKED_SEXTUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body NAKED_SEPTUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ 'numWrongCellsPlayedPerStrategy.NAKED_SEPTUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body NAKED_OCTUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ 'numWrongCellsPlayedPerStrategy.NAKED_OCTUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body HIDDEN_PAIR is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ 'numWrongCellsPlayedPerStrategy.HIDDEN_PAIR': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body HIDDEN_TRIPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ 'numWrongCellsPlayedPerStrategy.HIDDEN_TRIPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body HIDDEN_QUADRUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ 'numWrongCellsPlayedPerStrategy.HIDDEN_QUADRUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body HIDDEN_QUINTUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ 'numWrongCellsPlayedPerStrategy.HIDDEN_QUINTUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body HIDDEN_SEXTUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SEXTUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body HIDDEN_SEPTUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SEPTUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body HIDDEN_OCTUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ 'numWrongCellsPlayedPerStrategy.HIDDEN_OCTUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body POINTING_PAIR is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ 'numWrongCellsPlayedPerStrategy.POINTING_PAIR': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body POINTING_TRIPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ 'numWrongCellsPlayedPerStrategy.POINTING_TRIPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body BOX_LINE_REDUCTION is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ 'numWrongCellsPlayedPerStrategy.BOX_LINE_REDUCTION': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body X_WING is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ 'numWrongCellsPlayedPerStrategy.X_WING': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body SWORDFISH is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ 'numWrongCellsPlayedPerStrategy.SWORDFISH': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch body SINGLES_CHAINING is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .send({ 'numWrongCellsPlayedPerStrategy.SINGLES_CHAINING': "Banana" })
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

    describe('Test code 401 Patch requests', function () {
        it('Patch no Auth header returns 401 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .set('Content-Type', 'application/json')
                .expect('Content-Type', /json/)
                .expect(401, globalTestData.ErrorMessage401)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch invalid Auth header returns 401 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer')
                .expect('Content-Type', /json/)
                .expect(401, globalTestData.ErrorMessage401)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch expired Auth token returns 401 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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
