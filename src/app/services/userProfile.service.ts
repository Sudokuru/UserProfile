/**
 * This is the user active games service file
 * This file takes input from the controller and directs it to the db.service file
 * The five functions are {@link userProfileCreateService}, {@link userProfileSearchService},
 * {@link userProfileUpdateService}, {@link userProfileRemoveService}, and {@link filterInputQuery}
 * The main purpose of this service file is to perform the 'business' logic
 * Any errors will be caught by our try/catch block in our controller
 * @module
 */

import {CustomError, CustomErrorEnum} from "../models/error.model";

const dataBase = require ('./db.service');
const UserProfile = require("../models/db.userProfile.model");

/**
 * This function takes the Active Games JSON objects and sends them to the upload function
 * There is no need for any additional logic here
 * @param userProfile This is an array of Active Games JSON objects puzzles
 */
async function createUserProfileService(userProfile) {
    return await dataBase.queryUpload(userProfile, UserProfile);
}

/**
 * This function takes in the input query and throws and error if no puzzles
 * are found to match the query
 * This function calls a helper function to create the inputQuery for the dataBase function
 * @param userProfile this is a JSON object that stores the input query
 */
async function userProfileSearchService(userProfile) {
    let res = await dataBase.querySearchAND(filterInputQuery(userProfile), UserProfile);

    if (res.length == 0){
        throw new CustomError(CustomErrorEnum.USER_PROFILE_NOT_FOUND, 404);
    }
    return res;
}

/**
 * This function takes in bodyData and queryData and updates all user active games
 * that match the queryData with the bodyData
 * This function calls a helper function to create the inputQuery for the database function
 * @param bodyData this stores a JSON object with values to be updated
 * @param queryData this stores a JSON object with values used to retrieve puzzles to be updated
 */
async function userProfileUpdateService(bodyData, queryData) {
    return await dataBase.queryUpdate(filterInputQuery(queryData), bodyData, UserProfile);
}

/**
 * This function takes in the input query and deletes any user active games that match the query
 * We do not throw an error here to stay aligned with standard practice.
 * A delete request is successful even if the object did not exist.
 * @param userProfile this stores a JSON object that stores the query
 */
async function userProfileRemoveService(userProfile) {
    return await dataBase.queryDeleteAND(filterInputQuery(userProfile), UserProfile);
}

/**
 * This function is a helper function that ensures we
 * are using the correct logic for locating puzzles
 * @param userProfile this is a JSON object that stores our raw query
 */
function filterInputQuery(userProfile){
    const filterValues = [];
    // if the inputQuery is blank, we return all user active games
    if (Object.keys(userProfile).length === 0){
        filterValues.push({});
    }
    else{
        if (Object.keys(userProfile).length !== 0){
            filterValues.push(userProfile);
        }
    }

    return filterValues;
}

export = { createUserProfileService, searchUserProfile: userProfileSearchService, updateUserProfile: userProfileUpdateService, removeUserProfile: userProfileRemoveService };

