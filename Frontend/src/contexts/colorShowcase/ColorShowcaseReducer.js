import {
    CHANGE_SHOWCASE_COLOR,
} from "../types";

export default (state, action) => {

    console.log('SHOWCASE action.payload',action.payload)
    switch (action.type){
        case CHANGE_SHOWCASE_COLOR:
            return {
                ...state,
                backgroundColor: action.payload.newColor
            }
        default:
            return state
    }
}