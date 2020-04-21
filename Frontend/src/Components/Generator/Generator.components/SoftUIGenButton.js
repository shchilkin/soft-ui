import React, {useState} from "react";


const SoftUIGenButton = ({props, children, onClick, state='', type = 'default'}) => {

    let mainColor, font, darkerShadow, lighterShadow = '#000';
    let Blur, shadowLength = 0;
    //TODO might be improved

    if (typeof(props) != "undefined"){
        mainColor = props.mainColor;
        font = props.font;
        darkerShadow = props.darkerShadow;
        lighterShadow = props.lighterShadow;
        Blur = props.Blur;
        shadowLength = props.shadowLength;
    }

    console.log('shadow', lighterShadow);
    const buttonStyle = {
        default:{
            initial:{
                width: "100%",
                backgroundColor:mainColor,
                transition: 'background-color .5s, color .5s',
                border:`1px solid ${mainColor}`,
                color:font,
                boxShadow: `${shadowLength}px ${shadowLength}px ${Math.round(Blur/2)}px 0 ${darkerShadow},
                       -${shadowLength}px -${shadowLength}px ${Math.round(Blur/2)}px 0 ${lighterShadow}`,
                borderRadius: '12px',
                padding: '.375rem .75rem',
                fontWeight:'bold'
            },
            active:{
                width: "100%",
                backgroundColor:mainColor,
                transition: 'background-color .5s, color .5s',
                border:`1px solid ${mainColor}`,
                color:font,
                boxShadow: `inset ${shadowLength}px ${shadowLength}px ${Math.round(Blur/2)}px 0 ${darkerShadow},
                       inset -${shadowLength}px -${shadowLength}px ${Math.round(Blur/2)}px 0 ${lighterShadow}`,
                borderRadius: '12px',
                padding: '.375rem .75rem',
                fontWeight:'bold'
            },
            hover:{
                width: "100%",
                border:`1px solid ${mainColor}`,
                transition: 'background-color .5s, color .5s',
                borderRadius: '12px',
                padding: '.375rem .75rem',
                backgroundColor:font,
                color:mainColor,
                fontWeight:'bold'
            }
        },
        first:{
            initial: {
                width: "33%",
                backgroundColor:mainColor,
                transition: 'background-color .5s, color .5s',
                border:`0px solid`,
                color:font,
                boxShadow: `${shadowLength}px ${shadowLength}px ${Blur}px 0 ${darkerShadow},
                   -${shadowLength}px -${shadowLength}px ${Blur}px 0 ${lighterShadow}`,
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '12px',
                padding: '.375rem .75rem',
                fontWeight:'bold'
            },
            active: {
                width: "33%",
                backgroundColor:mainColor,
                transition: 'background-color .5s, color .5s',
                border:`0px solid`,
                color:font,
                boxShadow: `inset ${shadowLength}px ${shadowLength}px ${Blur}px 0 ${darkerShadow},
                   inset -${shadowLength}px -${shadowLength}px ${Blur}px 0 ${lighterShadow}`,
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '12px',
                padding: '.375rem .75rem',
                fontWeight:'bold'
            },
            hover: {
                width: "33%",
                backgroundColor:font,
                transition: 'background-color .5s, color .5s',
                border:`0px solid`,
                color:mainColor,
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '12px',
                padding: '.375rem .75rem',
                fontWeight:'bold',
            }
        },
        middle:{
            initial:{
                width: "33%",
                backgroundColor:mainColor,
                transition: 'background-color .5s, color .5s',
                border:`0px solid`,
                color:font,
                boxShadow: `0px ${shadowLength}px ${Blur}px 0 ${darkerShadow},
                   0px -${shadowLength}px ${Blur}px 0 ${lighterShadow}`,
                padding: '.375rem .75rem',
                fontWeight:'bold'
            },
            active:{
                width: "33%",
                backgroundColor:mainColor,
                transition: 'background-color .5s, color .5s',
                border:`0px solid`,
                boxShadow: `inset ${shadowLength}px ${shadowLength}px ${Blur}px 0 ${darkerShadow},
                   inset -${shadowLength}px -${shadowLength}px ${Blur}px 0 ${lighterShadow}`,
                color:font,
                padding: '.375rem .75rem',
                fontWeight:'bold'
            },
            hover: {
                width: "33%",
                backgroundColor:font,
                transition: 'background-color .5s, color .5s',
                border:`0px solid`,
                color:mainColor,
                padding: '.375rem .75rem',
                fontWeight:'bold'
            }
        },
        last:{
            initial: {
                width: "33%",
                backgroundColor:mainColor,
                transition: 'background-color .5s, color .5s',
                border:`0px solid`,
                color:font,
                boxShadow: `${shadowLength}px ${shadowLength}px ${Blur}px 0 ${darkerShadow},
                   -${shadowLength}px -${shadowLength}px ${Blur}px 0 ${lighterShadow}`,
                borderTopRightRadius: '12px',
                borderBottomRightRadius: '12px',
                padding: '.375rem .75rem',
                fontWeight:'bold'
            },
            active: {
                width: "33%",
                backgroundColor:mainColor,
                transition: 'background-color .5s, color .5s',
                border:`0px solid`,
                color:font,
                boxShadow: `inset ${shadowLength}px ${shadowLength}px ${Blur}px 0 ${darkerShadow},
                   inset -${shadowLength}px -${shadowLength}px ${Blur}px 0 ${lighterShadow}`,
                borderTopRightRadius: '12px',
                borderBottomRightRadius: '12px',
                padding: '.375rem .75rem',
                fontWeight:'bold'
            },
            hover: {
                width: "33%",
                backgroundColor:font,
                transition: 'background-color .5s, color .5s',
                border:`0px solid`,
                color:mainColor,
                borderTopRightRadius: '12px',
                borderBottomRightRadius: '12px',
                padding: '.375rem .75rem',
                fontWeight:'bold'
            }
        }
    }

    const [buttonActive, setButtonActive] = useState(false);
    const [buttonHover, setButtonHover] = useState(false);

    function setButtonStyle(type) {
        switch(state){
            case 'active':
                return buttonStyle[type].active
            case 'hover':
                return buttonStyle[type].hover
            case "initial":
                return buttonStyle[type].initial
            default:
                if (buttonActive){
                    return buttonStyle[type].active
                } else if (buttonHover) {
                    return buttonStyle[type].hover
                } else
                    return buttonStyle[type].initial
        }
    }

    return (
        <button
        onMouseDown={() => setButtonActive(true)}
        onMouseUp={() => setButtonActive(false)}
        onMouseEnter={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)}
        style={setButtonStyle(type)}
        onClick={onClick}
        >
            {children}
        </button>)
}

export default SoftUIGenButton;