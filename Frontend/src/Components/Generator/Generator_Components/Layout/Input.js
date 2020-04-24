import React, {useState} from "react";
import styled from 'styled-components'

const StyledInput = styled.input`
        width: 100%;
        height: 50px;
        color: ${props => props.color};
        background-color: ${props => props.background};   
        margin-bottom: 1.25rem;
        border-radius: 12px;
        border: 1px solid transparent;
        padding: .375rem .75rem;
        mix-blend-mode: normal;
        font-weight: bold;
        caretColor: #777B7E;
        box-shadow: inset 2px 2px ${props => props.Blur}px 0 ${props => props.darkerShadow},
         inset -2px -2px ${props => props.Blur}px 0 ${props => props.lighterShadow};
        transition: background-color 0.2s, color 0.2s;
        outline: none;
        :focus {
            box-shadow: 2px 2px ${props => props.Blur}px 0 ${props => props.darkerShadow},
             -2px -2px ${props => props.Blur}px 0 ${props => props.lighterShadow}
        }
    `;

const Input = ({
                   max,
                   min,
                   step = 1,
                   props,
                   type = 'text',
                   onChange,
                   placeholder,
                   onFocus,
                   onBlur,
                   required = false,
                   name,
                   autoComplete='on',
                   style,
                   value,
                   state=''}) => {


    switch (type) {
        case 'range':
            return (
                <input
                    className={'rangeInput'}
                    type={'range'}
                    onChange={onChange}
                    max={max}
                    value={value}
                    min={min}
                    step={step}
                    style={{width:'100%',verticalAlign:'-18%'}}
                />
            )
        default:
            return (
                <StyledInput
                    type={type}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                    color={props.font}
                    background={props.mainColor}
                    Blur={props.Blur}
                    darkerShadow={props.darkerShadow}
                    lighterShadow={props.lighterShadow}
                />
            )
    }
}

export default Input;