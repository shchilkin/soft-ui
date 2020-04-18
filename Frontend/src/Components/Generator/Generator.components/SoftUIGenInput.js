import React, {useState} from "react";
import Input from "../../Inputs/Input.component";


const SoftUIGenInput = ({props, type = 'text', onChange, placeholder, value, state=''}) => {

    //TODO might be improved

    const [inputFocus, setInputFocus] = useState(false);
    let mainColor, font, darkerShadow, lighterShadow = '#121212';
    let Blur, shadowLength = 1;

    if (typeof(props) != 'undefined'){
        mainColor = props.mainColor;
        font = props.font;
        darkerShadow = props.darkerShadow;
        lighterShadow = props.lighterShadow;
        Blur = props.Blur;
        shadowLength = props.shadowLength;
    }

    const inputStyle = {
        default: {
            borderColor: mainColor,
            backgroundColor: mainColor,
            color: font,
            boxShadow: `inset 2px 2px 10px 0 ${darkerShadow}, inset -2px -2px 10px 0 ${lighterShadow}`
        },
        focus: {
            borderColor: mainColor,
            backgroundColor: mainColor,
            color: font,
            boxShadow: `2px 2px 10px 0 ${darkerShadow}, -2px -2px 10px 0 ${lighterShadow}`
        }
    }

    function setInputStyle() {
        switch(state){
            case 'focus':
                return inputStyle.focus
            case "blur":
                return inputStyle.default
            default:
                if (inputFocus){
                    return inputStyle.focus
                } else return inputStyle.default
        }
    }

    return (
        <Input type={type}
               onFocus={() => setInputFocus(true)}
               onBlur={() => setInputFocus(false)}
               onChange={onChange}
               value={value}
               placeholder={placeholder}
               style={setInputStyle()}
        />)
}

export default SoftUIGenInput;