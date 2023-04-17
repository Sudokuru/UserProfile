/**
 * These are the mongoose schemas for the user_game_results collection
 * The two schemas currently in this collection are {@link userProfilesSchema} and {@link userGameStats}
 * //todo at some point would like to remove these schemas as we already handle input validation with express-validator
 * //todo and the error throwing with mongoose is inconsistent and hard to work with
 * @module DbGameResultsModel
 */

import { Schema } from 'mongoose';
import * as mongoose from "mongoose";
import {UserProfile} from "./interfaces";

// turns on debug mode so we can see results of successful requests
mongoose.set({ debug: true, autoCreate: true})

/**
 * This schema stores the user profile
 * We may decide to remove userEmail and rely on Auth0 to store that for us
 * All preferences have default values which allows us to create this
 * for the user without any user input
 * We only need to create this when they open up the preferences menu
 * @module DbUserInfoModel
 */
const userProfileSchema = new Schema<UserProfile>({
    userId: { type: String, required: true, unique: true },
    userPreferences: {
        savePuzzleData: { type: Boolean, required: true, default: true },
        theme: { type: String, enum: ['light', 'dark', 'auto'], required: true, default: 'dark' },
        gamePreferences: {
            notifyOnWrongCell: { type: Boolean, required: true, default: true },
            highlightAllPeers: { type: Boolean, required: true, default: true },
            highlightSelectedBox: { type: Boolean, required: true, default: true },
            highlightSelectedRow: { type: Boolean, required: true, default: true },
            highlightSelectedColumn: { type: Boolean, required: true, default: true },
            playMusic: { type: Boolean, required: true, default: true },
            musicIntensify: { type: Boolean, required: true, default: true }
        },
    },
});


export = mongoose.model("UserProfile", userProfileSchema, 'user_profile');