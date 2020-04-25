import {
    CHANGE_STAGE,
} from "../types";

export default (state, action) => {


    switch (action.type){
        case CHANGE_STAGE:
            return {
                ...state,
            };

        default:
            return state
    }
}