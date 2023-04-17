/**
 * This is the typescript interfaces for our JSON data
 * //todo add typings to sanitized data
 * There are several 'helper' interfaces that break out some duplicate code
 * The remaining interfaces correlate to the mongoose schema
 */

/**
 * Below are the helper interfaces
 * They include: {@link numWrongCellsPlayedPerStrategy}
 * and {@link moves}
 * @module Interfaces
 *
 */

// This interface records what the 'next' strategy was when a user made an error,
// so that we can provide recommendations for strategies to do drills on
interface numWrongCellsPlayedPerStrategy {
    NAKED_SINGLE: number,
    HIDDEN_SINGLE: number,
    NAKED_PAIR: number,
    NAKED_TRIPLET: number,
    NAKED_QUADRUPLET: number,
    NAKED_QUINTUPLET: number,
    NAKED_SEXTUPLET: number,
    NAKED_SEPTUPLET: number,
    NAKED_OCTUPLET: number,
    HIDDEN_PAIR: number,
    HIDDEN_TRIPLET: number,
    HIDDEN_QUADRUPLET: number,
    HIDDEN_QUINTUPLET: number,
    HIDDEN_SEXTUPLET: number,
    HIDDEN_SEPTUPLET: number,
    HIDDEN_OCTUPLET: number,
    POINTING_PAIR: number,
    POINTING_TRIPLET: number,
    BOX_LINE_REDUCTION: number,
    X_WING: number,
    SWORDFISH: number,
    SINGLES_CHAINING: number
}

interface moves {
    puzzleCurrentState: string,
    puzzleCurrentNotesState: string
    // moveTime: number
}

/**
 * Below are the interfaces for the {@link userProfile} Mongo schema
 * //todo make casing of types consistant
 */

export interface UserProfile {
    userId: string,
    userPreferences: {
        savePuzzleData: boolean,
        theme: string,
        gamePreferences: {
            notifyOnWrongCell: boolean,
            highlightAllPeers: boolean,
            highlightSelectedBox: boolean,
            highlightSelectedRow: boolean,
            highlightSelectedColumn: boolean,
            playMusic: boolean,
            musicIntensify: boolean
        }
    }
}