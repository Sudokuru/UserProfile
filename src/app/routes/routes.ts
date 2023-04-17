/**
 * Below are the routes for the entire app
 * All requests with the valid base path will enter from app.ts to here
 * The requests will then go to the validators, the validation error handler, and then the controller
 * Each endpoint will have a post, get, patch, and delete options
 * @module Routes
 */

const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');
const express = require("express");
const routes = express.Router();
require('dotenv').config();

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: `https://` + process.env.AUTH0_BASE_URL + '/',
});

const { validationErrorHandler } = require('../validationAndSanitation/errorValidation');
const userProfileController = require ('../controllers/userProfile.controller');

const { validateUserProfileBodyPOST, validateUserProfileParameters, validateUserProfileBodyPATCH } = require("../validationAndSanitation/userProfile.validationAndSanitation");

routes.post("/user/profile", checkJwt, validateUserProfileBodyPOST,  validationErrorHandler, userProfileController.create);
routes.get("/user/profile", checkJwt, validateUserProfileParameters, validationErrorHandler, userProfileController.search);
routes.patch("/user/profile", checkJwt, validateUserProfileParameters, validateUserProfileBodyPATCH, validationErrorHandler, userProfileController.update);
routes.delete("/user/profile", checkJwt, validateUserProfileParameters, validationErrorHandler, userProfileController.remove);

export = routes;

