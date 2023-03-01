/**
 * These are the mongoose schemas for the user_game_results collection
 * The two schemas currently in this collection are {@link userActiveGamesSchema} and {@link userGameStats}
 * //todo at some point would like to remove these schemas as we already handle input validation with express-validator
 * //todo and the error throwing with mongoose is inconsistent and hard to work with
 * @module DbGameResultsModel
 */

import { Schema } from 'mongoose';
import * as mongoose from "mongoose";
import { userActiveGames, userGameStats } from "./interfaces";

// turns on debug mode so we can see results of successful requests
mongoose.set({ debug: true, autoCreate: true})

/**
 * This stores a user's paused game
 * This is a separate document so that we can easily delete paused games
 * Minimum needs to store game status and stats so that
 * the game can be resumed and the stats can be transferred at the end of the game
 */
const userActiveGamesSchema = new Schema<userActiveGames>({
    userID: { type: String, required: true},
    puzzle: { type: String, required: true, unique: true },
    currentTime: { type: Number, required: true, default: 0 },
    moves: [{
        puzzleCurrentState: { type: String, required: false, unique: false },
        puzzleCurrentNotesState: { type: String, required: false, unique: false }
        // moveTime: { type: Number, required: true }
    }],
    numHintsAskedFor: { type: Number, required: true, default: 0 },
    numWrongCellsPlayed: { type: Number, required: true, default: 0 },
    numWrongCellsPlayedPerStrategy: {
        NAKED_SINGLE: { type: Number, required: false },
        HIDDEN_SINGLE: { type: Number, required: false },
        NAKED_PAIR: { type: Number, required: false },
        NAKED_TRIPLET: { type: Number, required: false },
        NAKED_QUADRUPLET: { type: Number, required: false },
        NAKED_QUINTUPLET: { type: Number, required: false },
        NAKED_SEXTUPLET: { type: Number, required: false },
        NAKED_SEPTUPLET: { type: Number, required: false },
        NAKED_OCTUPLET: { type: Number, required: false },
        HIDDEN_PAIR: { type: Number, required: false },
        HIDDEN_TRIPLET: { type: Number, required: false },
        HIDDEN_QUADRUPLET: { type: Number, required: false },
        HIDDEN_QUINTUPLET: { type: Number, required: false },
        HIDDEN_SEXTUPLET: { type: Number, required: false },
        HIDDEN_SEPTUPLET: { type: Number, required: false },
        HIDDEN_OCTUPLET: { type: Number, required: false },
        POINTING_PAIR: { type: Number, required: false },
        POINTING_TRIPLET: { type: Number, required: false },
        BOX_LINE_REDUCTION: { type: Number, required: false },
        X_WING: { type: Number, required: false },
        SWORDFISH: { type: Number, required: false },
        SINGLES_CHAINING: { type: Number, required: false }
    }
});


export = mongoose.model("UserPausedGames", userActiveGamesSchema, 'user_game_info');