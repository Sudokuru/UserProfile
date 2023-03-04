import {postTestData} from "./postTestData.test";

class patchTestData {

    static modified0Response = {
        acknowledged: true,
        modifiedCount: 0,
        upsertedId: null,
        upsertedCount: 0,
        matchedCount: 0
    };

    static modified1Response = {
        acknowledged: true,
        modifiedCount: 1,
        upsertedId: null,
        upsertedCount: 0,
        matchedCount: 1
    };

    static modified2Response = {
        acknowledged: true,
        modifiedCount: 2,
        upsertedId: null,
        upsertedCount: 0,
        matchedCount: 2
    };

    static modified3Response = {
        acknowledged: true,
        modifiedCount: 3,
        upsertedId: null,
        upsertedCount: 0,
        matchedCount: 3
    };

    static modified4Response = {
        acknowledged: true,
        modifiedCount: 4,
        upsertedId: null,
        upsertedCount: 0,
        matchedCount: 4
    };

    static noBodyResponse = { acknowledged: false };

    static patchActivePuzzle1CurrentTimeResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle1Response;
        patchActivePuzzle1CurrentTimeResponse.currentTime = 2000;
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2CurrentTimeResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2Response;
        patchActivePuzzle1CurrentTimeResponse.currentTime = 2000;
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesSwappedCurrentTimeResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2MovesSwappedResponse;
        patchActivePuzzle1CurrentTimeResponse.currentTime = 2000;
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle3CurrentTimeResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle3Response;
        patchActivePuzzle1CurrentTimeResponse.currentTime = 2000;
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle1NumHintsAskedForResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle1Response;
        patchActivePuzzle1CurrentTimeResponse.numHintsAskedFor = 100;
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle1NumWrongCellsPlayedResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle1Response;
        patchActivePuzzle1CurrentTimeResponse.numWrongCellsPlayed = 100;
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2Response;
        patchActivePuzzle1CurrentTimeResponse.moves = [{ puzzleCurrentState: postTestData.puzzle3Move1, puzzleCurrentNotesState: postTestData.puzzle3Notes1, _id: "ID"}];
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesSwappedResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2MovesSwappedResponse;
        patchActivePuzzle1CurrentTimeResponse.moves = [{ puzzleCurrentState: postTestData.puzzle3Move1, puzzleCurrentNotesState: postTestData.puzzle3Notes1, _id: "ID"}];
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesSwappedNAKED_SINGLEResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2MovesSwappedResponse;
        // @ts-ignore
        patchActivePuzzle1CurrentTimeResponse.numWrongCellsPlayedPerStrategy = {'NAKED_SINGLE': 1000};
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesSwappedHIDDEN_SINGLEResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2MovesSwappedResponse;
        // @ts-ignore
        patchActivePuzzle1CurrentTimeResponse.numWrongCellsPlayedPerStrategy = {'HIDDEN_SINGLE': 1000};
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesSwappedNAKED_PAIRResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2MovesSwappedResponse;
        // @ts-ignore
        patchActivePuzzle1CurrentTimeResponse.numWrongCellsPlayedPerStrategy = {'NAKED_PAIR': 1000};
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesSwappedNAKED_TRIPLETResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2MovesSwappedResponse;
        // @ts-ignore
        patchActivePuzzle1CurrentTimeResponse.numWrongCellsPlayedPerStrategy = {'NAKED_TRIPLET': 1000};
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesSwappedNAKED_QUADRUPLETResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2MovesSwappedResponse;
        // @ts-ignore
        patchActivePuzzle1CurrentTimeResponse.numWrongCellsPlayedPerStrategy = {'NAKED_QUADRUPLET': 1000};
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesSwappedNAKED_QUINTUPLETResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2MovesSwappedResponse;
        // @ts-ignore
        patchActivePuzzle1CurrentTimeResponse.numWrongCellsPlayedPerStrategy = {'NAKED_QUINTUPLET': 1000};
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesSwappedNAKED_SEXTUPLETResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2MovesSwappedResponse;
        // @ts-ignore
        patchActivePuzzle1CurrentTimeResponse.numWrongCellsPlayedPerStrategy = {'NAKED_SEXTUPLET': 1000};
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesSwappedNAKED_SEPTUPLETResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2MovesSwappedResponse;
        // @ts-ignore
        patchActivePuzzle1CurrentTimeResponse.numWrongCellsPlayedPerStrategy = {'NAKED_SEPTUPLET': 1000};
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesSwappedNAKED_OCTUPLETResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2MovesSwappedResponse;
        // @ts-ignore
        patchActivePuzzle1CurrentTimeResponse.numWrongCellsPlayedPerStrategy = {'NAKED_OCTUPLET': 1000};
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesSwappedHIDDEN_PAIRResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2MovesSwappedResponse;
        // @ts-ignore
        patchActivePuzzle1CurrentTimeResponse.numWrongCellsPlayedPerStrategy = {'HIDDEN_PAIR': 1000};
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesSwappedHIDDEN_TRIPLETResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2MovesSwappedResponse;
        // @ts-ignore
        patchActivePuzzle1CurrentTimeResponse.numWrongCellsPlayedPerStrategy = {'HIDDEN_TRIPLET': 1000};
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesSwappedHIDDEN_QUADRUPLETResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2MovesSwappedResponse;
        // @ts-ignore
        patchActivePuzzle1CurrentTimeResponse.numWrongCellsPlayedPerStrategy = {'HIDDEN_QUADRUPLET': 1000};
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesSwappedHIDDEN_QUINTUPLETResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2MovesSwappedResponse;
        // @ts-ignore
        patchActivePuzzle1CurrentTimeResponse.numWrongCellsPlayedPerStrategy = {'HIDDEN_QUINTUPLET': 1000};
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesSwappedHIDDEN_SEXTUPLETResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2MovesSwappedResponse;
        // @ts-ignore
        patchActivePuzzle1CurrentTimeResponse.numWrongCellsPlayedPerStrategy = {'HIDDEN_SEXTUPLET': 1000};
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesSwappedHIDDEN_SEPTUPLETResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2MovesSwappedResponse;
        // @ts-ignore
        patchActivePuzzle1CurrentTimeResponse.numWrongCellsPlayedPerStrategy = {'HIDDEN_SEPTUPLET': 1000};
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesSwappedHIDDEN_OCTUPLETResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2MovesSwappedResponse;
        // @ts-ignore
        patchActivePuzzle1CurrentTimeResponse.numWrongCellsPlayedPerStrategy = {'HIDDEN_OCTUPLET': 1000};
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesSwappedPOINTING_PAIRResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2MovesSwappedResponse;
        // @ts-ignore
        patchActivePuzzle1CurrentTimeResponse.numWrongCellsPlayedPerStrategy = {'POINTING_PAIR': 1000};
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesSwappedPOINTING_TRIPLETResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2MovesSwappedResponse;
        // @ts-ignore
        patchActivePuzzle1CurrentTimeResponse.numWrongCellsPlayedPerStrategy = {'POINTING_TRIPLET': 1000};
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesSwappedBOX_LINE_REDUCTIONResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2MovesSwappedResponse;
        // @ts-ignore
        patchActivePuzzle1CurrentTimeResponse.numWrongCellsPlayedPerStrategy = {'BOX_LINE_REDUCTION': 1000};
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesSwappedX_WINGResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2MovesSwappedResponse;
        // @ts-ignore
        patchActivePuzzle1CurrentTimeResponse.numWrongCellsPlayedPerStrategy = {'X_WING': 1000};
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesSwappedSWORDFISHResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2MovesSwappedResponse;
        // @ts-ignore
        patchActivePuzzle1CurrentTimeResponse.numWrongCellsPlayedPerStrategy = {'SWORDFISH': 1000};
        return patchActivePuzzle1CurrentTimeResponse;
    }

    static patchActivePuzzle2MovesSwappedSINGLES_CHAININGResponse = function(){
        let patchActivePuzzle1CurrentTimeResponse = postTestData.activePuzzle2MovesSwappedResponse;
        // @ts-ignore
        patchActivePuzzle1CurrentTimeResponse.numWrongCellsPlayedPerStrategy = {'SINGLES_CHAINING': 1000};
        return patchActivePuzzle1CurrentTimeResponse;
    }

}

export { patchTestData }