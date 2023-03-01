
class postTestData {

    /*
     * Valid active puzzles and corresponding responses
     */

    static puzzle1 = "310084002200150006570003010423708095760030000009562030050006070007000900000001500";
    static puzzle2 = "030000506000098071000000490009800000002010000380400609800030960100000004560982030";
    static puzzle2MovesSwapped = "030000506000098071000000490009855500002010000380400609800030960100000004560982030";
    static puzzle3 = "130000506000098071000000490009800000002010000380400609800030960100000004560982030";

    static puzzle2Move1 = "036000506000098071000000490009800000002010000380400609800030960100000004560982130";
    static puzzle2Notes1 = "100000010010101011111111111111111111111100000000000000000000000000000000001111111111111111000000000000000000001111111111111110000000000000000000111111111111110000000000000000000000000000001111111111111111100000000000000010000001001010101111111111111111111111110000000000000000000000000000000000111111111111111100000000000000000000111111111111111000000000000000000011111111111111000000000000000000000000000000111111111111111110000000000000001000000100101010111111111111111111111111000000000000000000000000000000000011111111111111110000000000000000000011111111111111100000000000000000001111111111111100000000000000000000000000000011111111111111111000000000000000100000010010101011111111111111111111111100000000000000000000000000001";
    static puzzle3Move1 = "130400506000098071000000490009800000002010000380400609800030960100000004560982130";
    static puzzle3Notes1 = "100000010010101011111111111111111111111100000000000000000000000000000000001111111111111111000000000000000000001111111111111110000000000000000000111111111111110000000000000000000000000000001111111111111111100000000000000010000001001010101111111111111111111111110000000000000000000000000000000000111111111111111100000000000000000000111111111111111000000000000000000011111111111111000000000000000000000000000000111111111111111110000000000000001000000100101010111111111111111111111111000000000000000000000000000000000011111111111111110000000000000000000011111111111111100000000000000000001111111111111100000000000000000000000000000011111111111111111000000000000000100000010010101011111111111111111111111100000000000000000000000000001";

    static puzzle2Move2 = "130000506000098071000000490009800000002010000380400609800030960103000004560982130";
    static puzzle2Notes2 = "100000010010101011111111111111111111111100000000000000001110000000000000001111111111111111000000000000000000001111111111111110000000000000000000111111111111110000000000000000000000000000001111111111111111100000000000000010000001001010101111111111111111111111110000000000000000000000000000000000111111111111111100000000000000000000111111111111111000000000000000000011111111111111000000000000000000000000000000111111111111111110000000000000001000000100101010111111111111111111111111000000000000000000000000000000000011111111111111110000000000000000000011111111111111100000000000000000001111111111111100000000000000000000000000000011111111111111111000000000000000100000010010101011111111111111111111111100000000000000000000000000001";
    static puzzle3Move2 = "132000506000098071000000490009800000002010000380400609800030960103000004560982130";
    static puzzle3Notes2 = "110000010010101011111111111111111111111100000000000000000000000000000000001111111111111111000000000000000000001111111111111110000000000000000000111111111111110000000000000000000000000000001111111111111111100000000000000010000001001010101111111111111111111111110000000000000000000000000000000000111111111111111100000000000000000000111111111111111000000000000000000011111111111111000000000000000000000000000000111111111111111110000000000000001000000100101010111111111111111111111111000000000000000000000000000000000011111111111111110000000000000000000011111111111111100000000000000000001111111111111100000000000000000000000000000011111111111111111000000000000000100000010010101011111111111111111111111100000000000000000000000000001";

    static userName1 = "Thomas";
    static userName2 = "Daniel";


    static puzzleIsTooLong = "3310084002200150006570003010423708095760030000009562030050006070007000900000001500";
    static puzzleIsTooShort = "10084002200150006570003010423708095760030000009562030050006070007000900000001500";
    static puzzleHasInvalidCharacter = "3100840022001500065700030/0423708095760030000009562030050006070007000900000001500";

    static puzzleCurrentStateIsTooLong = "3310084002200150006570003010423708095760030000009562030050006070007000900000001500";
    static puzzleCurrentStateIsTooShort = "10084002200150006570003010423708095760030000009562030050006070007000900000001500";
    static puzzleCurrentStateHasInvalidCharacter = "3100840022001500065700030/0423708095760030000009562030050006070007000900000001500";

    static puzzleCurrentNotesStateIsTooLong = "0100000010010101011111111111111111111111100000000000000000000000000000000001111111111111111000000000000000000001111111111111110000000000000000000111111111111110000000000000000000000000000001111111111111111100000000000000010000001001010101111111111111111111111110000000000000000000000000000000000111111111111111100000000000000000000111111111111111000000000000000000011111111111111000000000000000000000000000000111111111111111110000000000000001000000100101010111111111111111111111111000000000000000000000000000000000011111111111111110000000000000000000011111111111111100000000000000000001111111111111100000000000000000000000000000011111111111111111000000000000000100000010010101011111111111111111111111100000000000000000000000000001";
    static puzzleCurrentNotesStateIsTooShort = "00000010010101011111111111111111111111100000000000000000000000000000000001111111111111111000000000000000000001111111111111110000000000000000000111111111111110000000000000000000000000000001111111111111111100000000000000010000001001010101111111111111111111111110000000000000000000000000000000000111111111111111100000000000000000000111111111111111000000000000000000011111111111111000000000000000000000000000000111111111111111110000000000000001000000100101010111111111111111111111111000000000000000000000000000000000011111111111111110000000000000000000011111111111111100000000000000000001111111111111100000000000000000000000000000011111111111111111000000000000000100000010010101011111111111111111111111100000000000000000000000000001";
    static puzzleCurrentNotesStateHasInvalidCharacter = "10000001/010101011111111111111111111111100000000000000000000000000000000001111111111111111000000000000000000001111111111111110000000000000000000111111111111110000000000000000000000000000001111111111111111100000000000000010000001001010101111111111111111111111110000000000000000000000000000000000111111111111111100000000000000000000111111111111111000000000000000000011111111111111000000000000000000000000000000111111111111111110000000000000001000000100101010111111111111111111111111000000000000000000000000000000000011111111111111110000000000000000000011111111111111100000000000000000001111111111111100000000000000000000000000000011111111111111111000000000000000100000010010101011111111111111111111111100000000000000000000000000001";

    static activePuzzle1 = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
    };

    static activePuzzle1Response = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "currentTime": 0,
        "moves": [],
        "numHintsAskedFor": 0,
        "numWrongCellsPlayed": 0,
        "_id": "ID",
        "__v": 0
    };

    static activePuzzle2 = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle2,
        "currentTime": 255,
        "moves": [{
            "puzzleCurrentState": postTestData.puzzle2Move1,
            "puzzleCurrentNotesState": postTestData.puzzle2Notes1
        },{
            "puzzleCurrentState": postTestData.puzzle2Move2,
            "puzzleCurrentNotesState": postTestData.puzzle2Notes2
        }],
        "numHintsAskedFor": 2,
        "numWrongCellsPlayed": 2,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_SINGLE": 11,
            "HIDDEN_SINGLE": 11,
            "NAKED_PAIR": 11,
            "NAKED_TRIPLET": 11,
            "NAKED_QUADRUPLET": 11,
            "NAKED_QUINTUPLET": 11,
            "NAKED_SEXTUPLET": 11,
            "NAKED_SEPTUPLET": 11,
            "NAKED_OCTUPLET": 11,
            "HIDDEN_PAIR": 11,
            "HIDDEN_TRIPLET": 11,
            "HIDDEN_QUADRUPLET": 11,
            "HIDDEN_QUINTUPLET": 11,
            "HIDDEN_SEXTUPLET": 11,
            "HIDDEN_SEPTUPLET": 11,
            "HIDDEN_OCTUPLET": 11,
            "POINTING_PAIR": 11,
            "POINTING_TRIPLET": 11,
            "BOX_LINE_REDUCTION": 11,
            "X_WING": 11,
            "SWORDFISH": 11,
            "SINGLES_CHAINING": 11
        }
    };

    static activePuzzle2Response = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle2,
        "currentTime": 255,
        "moves": [{
            "puzzleCurrentState": postTestData.puzzle2Move1,
            "puzzleCurrentNotesState": postTestData.puzzle2Notes1,
            "_id": "ID"
        },{
            "puzzleCurrentState": postTestData.puzzle2Move2,
            "puzzleCurrentNotesState": postTestData.puzzle2Notes2,
            "_id": "ID"
        }],
        "numHintsAskedFor": 2,
        "numWrongCellsPlayed": 2,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_SINGLE": 11,
            "HIDDEN_SINGLE": 11,
            "NAKED_PAIR": 11,
            "NAKED_TRIPLET": 11,
            "NAKED_QUADRUPLET": 11,
            "NAKED_QUINTUPLET": 11,
            "NAKED_SEXTUPLET": 11,
            "NAKED_SEPTUPLET": 11,
            "NAKED_OCTUPLET": 11,
            "HIDDEN_PAIR": 11,
            "HIDDEN_TRIPLET": 11,
            "HIDDEN_QUADRUPLET": 11,
            "HIDDEN_QUINTUPLET": 11,
            "HIDDEN_SEXTUPLET": 11,
            "HIDDEN_SEPTUPLET": 11,
            "HIDDEN_OCTUPLET": 11,
            "POINTING_PAIR": 11,
            "POINTING_TRIPLET": 11,
            "BOX_LINE_REDUCTION": 11,
            "X_WING": 11,
            "SWORDFISH": 11,
            "SINGLES_CHAINING": 11
        },
        "_id": "ID",
        "__v": 0
    };

    static activePuzzle2MovesSwapped = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle2MovesSwapped,
        "currentTime": 255,
        "moves": [{
            "puzzleCurrentState": postTestData.puzzle2Move2,
            "puzzleCurrentNotesState": postTestData.puzzle2Notes1,
        },{
            "puzzleCurrentState": postTestData.puzzle2Move1,
            "puzzleCurrentNotesState": postTestData.puzzle2Notes2,
        }],
        "numHintsAskedFor": 2,
        "numWrongCellsPlayed": 2,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_SINGLE": 9,
            "HIDDEN_SINGLE": 9,
            "NAKED_PAIR": 9,
            "NAKED_TRIPLET": 9,
            "NAKED_QUADRUPLET": 9,
            "NAKED_QUINTUPLET": 9,
            "NAKED_SEXTUPLET": 9,
            "NAKED_SEPTUPLET": 9,
            "NAKED_OCTUPLET": 9,
            "HIDDEN_PAIR": 9,
            "HIDDEN_TRIPLET": 9,
            "HIDDEN_QUADRUPLET": 9,
            "HIDDEN_QUINTUPLET": 9,
            "HIDDEN_SEXTUPLET": 9,
            "HIDDEN_SEPTUPLET": 9,
            "HIDDEN_OCTUPLET": 9,
            "POINTING_PAIR": 9,
            "POINTING_TRIPLET": 9,
            "BOX_LINE_REDUCTION": 9,
            "X_WING": 9,
            "SWORDFISH": 9,
            "SINGLES_CHAINING": 9
        },
    };

    static activePuzzle2MovesSwappedResponse = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle2MovesSwapped,
        "currentTime": 255,
        "moves": [{
            "puzzleCurrentState": postTestData.puzzle2Move2,
            "puzzleCurrentNotesState": postTestData.puzzle2Notes1,
            "_id": "ID"
        },{
            "puzzleCurrentState": postTestData.puzzle2Move1,
            "puzzleCurrentNotesState": postTestData.puzzle2Notes2,
            "_id": "ID"
        }],
        "numHintsAskedFor": 2,
        "numWrongCellsPlayed": 2,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_SINGLE": 9,
            "HIDDEN_SINGLE": 9,
            "NAKED_PAIR": 9,
            "NAKED_TRIPLET": 9,
            "NAKED_QUADRUPLET": 9,
            "NAKED_QUINTUPLET": 9,
            "NAKED_SEXTUPLET": 9,
            "NAKED_SEPTUPLET": 9,
            "NAKED_OCTUPLET": 9,
            "HIDDEN_PAIR": 9,
            "HIDDEN_TRIPLET": 9,
            "HIDDEN_QUADRUPLET": 9,
            "HIDDEN_QUINTUPLET": 9,
            "HIDDEN_SEXTUPLET": 9,
            "HIDDEN_SEPTUPLET": 9,
            "HIDDEN_OCTUPLET": 9,
            "POINTING_PAIR": 9,
            "POINTING_TRIPLET": 9,
            "BOX_LINE_REDUCTION": 9,
            "X_WING": 9,
            "SWORDFISH": 9,
            "SINGLES_CHAINING": 9
        },
        "_id": "ID",
        "__v": 0
    };

    static activePuzzle3 = {
        "userID": postTestData.userName2,
        "puzzle": postTestData.puzzle3,
        "currentTime": 500,
        "moves": [{
            "puzzleCurrentState": postTestData.puzzle3Move1,
            "puzzleCurrentNotesState": postTestData.puzzle3Notes1
        },{
            "puzzleCurrentState": postTestData.puzzle3Move2,
            "puzzleCurrentNotesState": postTestData.puzzle3Notes2
        }],
        "numHintsAskedFor": 2,
        "numWrongCellsPlayed": 2,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_SINGLE": 5,
            "HIDDEN_SINGLE": 2,
            "POINTING_PAIR": 0,
            "POINTING_TRIPLET": 4,
            "BOX_LINE_REDUCTION": 7,
            "X_WING": 6,
            "SWORDFISH": 3,
            "SINGLES_CHAINING": 3
        }
    };

    static activePuzzle3Response = {
        "userID": postTestData.userName2,
        "puzzle": postTestData.puzzle3,
        "currentTime": 500,
        "moves": [{
            "puzzleCurrentState": postTestData.puzzle3Move1,
            "puzzleCurrentNotesState": postTestData.puzzle3Notes1,
            "_id": "ID"
        },{
            "puzzleCurrentState": postTestData.puzzle3Move2,
            "puzzleCurrentNotesState": postTestData.puzzle3Notes2,
            "_id": "ID"
        }],
        "numHintsAskedFor": 2,
        "numWrongCellsPlayed": 2,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_SINGLE": 5,
            "HIDDEN_SINGLE": 2,
            "POINTING_PAIR": 0,
            "POINTING_TRIPLET": 4,
            "BOX_LINE_REDUCTION": 7,
            "X_WING": 6,
            "SWORDFISH": 3,
            "SINGLES_CHAINING": 3
        },
        "_id": "ID",
        "__v": 0
    };

    /*
     * Invalid Active Puzzles
     */

    static postUserIDNotPresent = {
        "puzzle": postTestData.puzzle1,
    };

    static postUserIDBlank = {
        "userID": "",
        "puzzle": postTestData.puzzle1,
    };

    static postUserIDIsInt = {
        "userID": 5,
        "puzzle": postTestData.puzzle1,
    };

    static postPuzzleNotPresent = {
        "userID": postTestData.userName1,
    };

    static postPuzzleBlank = {
        "userID": postTestData.userName1,
        "puzzle": "",
    };

    static postPuzzleIsTooLong = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzleIsTooLong,
    };

    static postPuzzleIsTooShort = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzleIsTooShort
    };

    static postPuzzleHasInvalidCharacter = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzleHasInvalidCharacter,
    };

    static postCurrentTimeIsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "currentTime": "Banana"
    };

    static postPuzzleCurrentStateIsTooLong = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "moves": [{
            "puzzleCurrentState": postTestData.puzzleCurrentStateIsTooLong
        }]
    };

    static postPuzzleCurrentStateIsTooShort = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "moves": [{
            "puzzleCurrentState": postTestData.puzzleCurrentStateIsTooShort
        }]
    };

    static postPuzzleCurrentStateHasInvalidCharacter = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "moves": [{
            "puzzleCurrentState": postTestData.puzzleCurrentStateHasInvalidCharacter
        }]
    };

    static postPuzzleCurrentNotesStateIsTooLong = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "moves": [{
            "puzzleCurrentNotesState": postTestData.puzzleCurrentNotesStateIsTooLong,
        }]
    };

    static postPuzzleCurrentNotesStateIsTooShort = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "moves": [{
            "puzzleCurrentNotesState": postTestData.puzzleCurrentNotesStateIsTooShort,
        }]
    };

    static postPuzzleCurrentNotesStateHasInvalidCharacter = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "moves": [{
            "puzzleCurrentNotesState": postTestData.puzzleCurrentNotesStateHasInvalidCharacter,
        }]
    };

    static postNumHintsAskedForIsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "numHintsAskedFor": "Banana"
    };

    static postNumWrongCellsPlayedIsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayed": "Banana"
    };

    static post_NAKED_SINGLE_IsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_SINGLE": "B"
        }
    };

    static HIDDEN_SINGLE_IsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "HIDDEN_SINGLE": "B"
        }
    };

    static NAKED_PAIR_IsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_PAIR": "B"
        }
    };

    static NAKED_TRIPLET_IsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_TRIPLET": "B"
        }
    };

    static post_NAKED_QUADRUPLET_IsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_QUADRUPLET": "B"
        }
    };

    static post_NAKED_QUINTUPLET_IsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_QUINTUPLET": "B"
        }
    };
    static post_NAKED_SEXTUPLET_IsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_SEXTUPLET": "B"
        }
    };

    static post_NAKED_SEPTUPLET_IsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_SEPTUPLET": "B"
        }
    };

    static post_NAKED_OCTUPLET_IsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_OCTUPLET": "B"
        }
    };

    static post_HIDDEN_PAIR_IsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "HIDDEN_PAIR": "B"
        }
    };

    static post_HIDDEN_TRIPLET_IsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "HIDDEN_TRIPLET": "B"
        }
    };

    static post_HIDDEN_QUADRUPLET_IsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "HIDDEN_QUADRUPLET": "B"
        }
    };

    static post_HIDDEN_QUINTUPLET_IsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "HIDDEN_QUINTUPLET": "B"
        }
    };

    static post_HIDDEN_SEXTUPLET_IsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "HIDDEN_SEXTUPLET": "B"
        }
    };

    static post_HIDDEN_SEPTUPLET_IsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "HIDDEN_SEPTUPLET": "B"
        }
    };

    static post_HIDDEN_OCTUPLET_IsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "HIDDEN_OCTUPLET": "B"
        }
    };

    static post_POINTING_PAIR_IsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "POINTING_PAIR": "B"
        }
    };

    static post_POINTING_TRIPLET_IsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "POINTING_TRIPLET": "B"
        }
    };

    static post_BOX_LINE_REDUCTION_IsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "BOX_LINE_REDUCTION": "B"
        }
    };

    static post_X_WING_IsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "X_WING": "B"
        }
    };

    static post_SWORDFISH_IsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "SWORDFISH": "B"
        }
    };

    static post_SINGLES_CHAINING_IsNotInteger = {
        "userID": postTestData.userName1,
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "SINGLES_CHAINING": "B"
        }
    };
}

export { postTestData };


