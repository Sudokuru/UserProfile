/**
 * This is the controller file for the puzzle endpoint
 * This file is called by the router file and calls the service file
 * There are four main functions {@link createUserProfile}, {@link searchUserProfile},
 * {@link updateUserProfile}, and {@link removeUserProfile}
 * The main purpose of the controller is to make sure that only validated and sanitized data
 * moves on to the service function
 * @module UserProfilesController
 */

import {matchedData} from "express-validator";
const userProfileService = require('../services/userProfile.service');

/**
 * Returns 201 if userProfileService is successful
 * Otherwise catches error and sends to our errorHandler
 * Takes sanitized input and sends it to userProfileService
 * @param req This is the request object
 * @param res This is the response object
 * @param next This takes us to the errorHandler if request fails
 */
async function create(req, res, next) {

    const allData = Object.values(matchedData(req, { locations: ['body'] }));
    allData.pop();
    try {
        // override successful completion code of 200 to 201 for successful object creation
        res.status(201).json(await userProfileService.createUserProfileService(allData));
    } catch(err) {
        next(err);
    }
}

/**
 * Returns 200 if userProfileService is successful
 * Otherwise catches error and sends to our errorHandler
 * Takes sanitized input and sends it to userProfileService
 * @param req This is the request object
 * @param res This is the response object
 * @param next This takes us to the errorHandler if request fails
 */
async function searchUserProfile(req, res, next) {

    const allData = matchedData(req, { locations: ['query'] });

    try {
        res.json(await userProfileService.searchUserProfile(allData));
    } catch(err) {
        next(err);
    }
}

/**
 * Returns 200 if userProfileService is successful
 * Otherwise catches error and sends to our errorHandler
 * Takes sanitized input and sends it to userProfileService
 * @param req This is the request object
 * @param res This is the response object
 * @param next This takes us to the errorHandler if request fails
 */
async function updateUserProfile(req, res, next) {

    const queryData = matchedData(req, { locations: ['query'] });
    const bodyData = matchedData(req, { locations: ['body'] });
    try {
        res.json(await userProfileService.updateUserProfile(bodyData, queryData));
    } catch(err) {
        next(err);
    }
}

/**
 * Returns 200 if userProfileService is successful
 * Otherwise catches error and sends to our errorHandler
 * Takes sanitized input and sends it to userProfileService
 * @param req This is the request object
 * @param res This is the response object
 * @param next This takes us to the errorHandler if request fails
 */
async function removeUserProfile(req, res, next) {

    const allData = matchedData(req, { locations: ['query'] });
    try {
        res.json(await userProfileService.removeUserProfile(allData));
    } catch(err) {
        next(err);
    }
}

export = {create, search: searchUserProfile, update: updateUserProfile, remove: removeUserProfile }