import {
    CHANGE_STAGE,
} from "../types";

function validateStage(currentStage,increment) {
    if (increment === "+"){
        if (currentStage <= 0){
            return 0
        } else if (currentStage >= 4){
            return 4
        }
        else return currentStage+1
    }
    else if (increment === "-"){
        if (currentStage <= 0){
            return 0
        } else if (currentStage >= 4){
            return 4
        }
        else return currentStage-1
    }
}

export default (state, action) => {

    switch (action.type){
        case CHANGE_STAGE:
            console.log('Payload', action.payload)
            console.log('increment',action.payload.increaseOrDecrease)
            switch (action.payload.increaseOrDecrease) {
                case '+':
                    return {
                        ...state,
                        stage: validateStage(state.stage, "+")
                    }
                case '-':
                    return {
                        ...state,
                        stage: validateStage(state.stage, "-")
                    }
                default:
                    break
            }
            return {
                ...state,
            };
        default:
            return state
    }
}