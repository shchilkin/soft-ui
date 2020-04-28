import {
    CHANGE_SHOWCASE_COLOR,
} from "../types";
import {isHexValid} from "../../Functions";

export default (state, action) => {

    console.log('SHOWCASE action.payload',action.payload)
    switch (action.type){
        case CHANGE_SHOWCASE_COLOR:
            let hexWithoutHash = action.payload.newColor.replace('#','')
            if(isHexValid(hexWithoutHash)){
                console.log('BG Return',`#${hexWithoutHash}`)
                return {
                    ...state,
                    inputValue: action.payload.newColor,
                    backgroundColor: `#${hexWithoutHash}`
                }
            } else {
                return {
                    ...state,
                    inputValue: action.payload.newColor,
                }
            }
        default:
            return state
    }
}