import {
    CHANGE_STAGE,
} from "../types";

function validateStage(currentStage,increment) {
    if (increment === "+"){
        if (currentStage >= 4){
            console.log('+ | case greater or equal 4')
            return 4
        }
        else {
            console.log('+ | case between 0 and 4')
            return (currentStage + 1)
        }
    }
    else if (increment === "-"){
        if (currentStage <= 0){
            console.log('- | case less or equal 0')
            return 0
        }
        else {
            console.log('- | case between 0 and 4')
            return (currentStage - 1)
        }
    }
}

export default (state, action) => {

    switch (action.type){
        case CHANGE_STAGE:
            console.log('Payload', action.payload)
            console.log('increment',action.payload.increaseOrDecrease)
            switch (action.payload.increaseOrDecrease) {
                case '+':
                    console.log('stage current/updated', state.stage ,validateStage(state.stage, "+"))
                    return {
                        ...state,
                        stage: validateStage(state.stage, "+")
                    }
                case '-':
                    console.log('stage current/updated', state.stage ,validateStage(state.stage, "-"))
                    return {
                        ...state,
                        stage: validateStage(state.stage, "-"),
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