import {
    CHANGE_STAGE,
    CHANGE_GENERATE_DARKMODE,
    CHANGE_GENERATE_SECONDARY_COLOR,
} from "../types";

function validateStage(currentStage,increment,maximum = 6) {
    if (increment === "+"){
        if (currentStage >= maximum){
            console.log('+ | case greater or equal 4')
            return maximum
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
            switch (action.payload.increaseOrDecrease) {
                case '+':
                    return {
                        ...state,
                        stage: validateStage(state.stage, "+")
                    }
                case '-':
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
        case CHANGE_GENERATE_DARKMODE:
            // let darkModeState = state.generateDarkMode
            return {
                ...state,
                generateDarkMode: !state.generateDarkMode
            }
        case CHANGE_GENERATE_SECONDARY_COLOR:
            // let secondaryColorState = state.generateSecondaryColor
            return {
                ...state,
                generateSecondaryColor: !state.generateSecondaryColor
            }

        default:
            return state
    }
}