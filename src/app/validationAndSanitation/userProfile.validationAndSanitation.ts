/**
 * This file contains several sets of settings for validating request queries and bodies
 * This file is for the user active games endpoint
 * We have three exports here that are used in the routing file
 * The purpose of this file is to sanitize and validate our input to make sure
 * there is no foul play about
 * @module UserProfilesValidationAndSanitation
 */

import {body, query} from "express-validator";

/**
 * This array stores the validation for our POST puzzle requests
 * This validation only applies for the body field
 * //todo add more validation and sanitization
 * The astricks are required because we are accessing values from an array
 */
exports.validateUserProfilesBodyPOST = [
    body().isArray().withMessage('body is not an array'),
    body('*.userID', 'userID did not match correct format').isString().isLength({ min: 1 }),
    body('*.userPreferences.savePuzzleData', 'savePuzzleData is not a boolean').optional().isBoolean(),
    body('*.userPreferences.theme', 'theme is not a correct value').optional().isString().isIn(["light", "dark", "auto"]),
    body('*.userPreferences.gamePreferences.notifyOnWrongCell', 'notifyOnWrongCell is not a boolean').optional().isBoolean(),
    body('*.userPreferences.gamePreferences.highlightAllPeers', 'highlightAllPeers is not a boolean').optional().isBoolean(),
    body('*.userPreferences.gamePreferences.highlightSelectedBox', 'highlightSelectedBox is not a boolean').optional().isBoolean(),
    body('*.userPreferences.gamePreferences.highlightSelectedRow', 'highlightSelectedRow is not a boolean').optional().isBoolean(),
    body('*.userPreferences.gamePreferences.highlightSelectedColumn', 'highlightSelectedColumn is not a boolean').optional().isBoolean(),
    body('*.userPreferences.gamePreferences.playMusic', 'playMusic is not a boolean').optional().isBoolean(),
    body('*.userPreferences.gamePreferences.musicIntensify', 'musicIntensify is not a boolean').optional().isBoolean(),
];

/**
 * This array stores the validation for our PATCH, GET, and DELETE requests
 * This validation only applies for the query fields
 * //todo add more validation and sanitization
 */
exports.validateUserProfilesParameters = [
    query('*.userID', 'userID did not match correct format').optional().isString().isLength({ min: 1 }),
    query('*.userPreferences.savePuzzleData', 'savePuzzleData is not a boolean').optional().isBoolean(),
    query('*.userPreferences.theme', 'theme is not a correct value').optional().isString().isIn(["light", "dark", "auto"]),
    query('*.userPreferences.gamePreferences.notifyOnWrongCell', 'notifyOnWrongCell is not a boolean').optional().isBoolean(),
    query('*.userPreferences.gamePreferences.highlightAllPeers', 'highlightAllPeers is not a boolean').optional().isBoolean(),
    query('*.userPreferences.gamePreferences.highlightSelectedBox', 'highlightSelectedBox is not a boolean').optional().isBoolean(),
    query('*.userPreferences.gamePreferences.highlightSelectedRow', 'highlightSelectedRow is not a boolean').optional().isBoolean(),
    query('*.userPreferences.gamePreferences.highlightSelectedColumn', 'highlightSelectedColumn is not a boolean').optional().isBoolean(),
    query('*.userPreferences.gamePreferences.playMusic', 'playMusic is not a boolean').optional().isBoolean(),
    query('*.userPreferences.gamePreferences.musicIntensify', 'musicIntensify is not a boolean').optional().isBoolean(),
];

/**
 * This array stores the validation for our PATCH requests
 * This validation only applies for the body field
 * //todo add more validation and sanitization
 * the Astricks are not needed here because in this instance we are not storing our values in an array
 * We also leave out the userID and puzzle fields because we do not want to replace those during a PATCH operation
 */
exports.validateUserActivePuzzlesBodyPATCH = [
    body('*.userPreferences.savePuzzleData', 'savePuzzleData is not a boolean').optional().isBoolean(),
    body('*.userPreferences.theme', 'theme is not a correct value').optional().isString().isIn(["light", "dark", "auto"]),
    body('*.userPreferences.gamePreferences.notifyOnWrongCell', 'notifyOnWrongCell is not a boolean').optional().isBoolean(),
    body('*.userPreferences.gamePreferences.highlightAllPeers', 'highlightAllPeers is not a boolean').optional().isBoolean(),
    body('*.userPreferences.gamePreferences.highlightSelectedBox', 'highlightSelectedBox is not a boolean').optional().isBoolean(),
    body('*.userPreferences.gamePreferences.highlightSelectedRow', 'highlightSelectedRow is not a boolean').optional().isBoolean(),
    body('*.userPreferences.gamePreferences.highlightSelectedColumn', 'highlightSelectedColumn is not a boolean').optional().isBoolean(),
    body('*.userPreferences.gamePreferences.playMusic', 'playMusic is not a boolean').optional().isBoolean(),
    body('*.userPreferences.gamePreferences.musicIntensify', 'musicIntensify is not a boolean').optional().isBoolean(),
];