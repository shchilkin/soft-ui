import React from "react";
import styled from 'styled-components'


const Checkbox = ({checked,style,width,height,...props}) => {
    return(
        <CheckboxContainer>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}
            width={width}
            height={height}
            style={{...style}}>
            <Icon/>
        </StyledCheckbox>
        </CheckboxContainer>
    )
}

export default Checkbox;

// https://codesandbox.io/s/yvp79r4251?file=/src/Checkbox.js:237-608

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`
const Icon = styled.div`
  width: ${props => props.width|| 10}px;
  height: ${props => props.height || 10}px;
  border-radius: 3px;
  background-color: #000;
`;

const StyledCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width || 16}px;
  height: ${props => props.height || 16}px;
  background: ${props => (props.checked ? 'salmon' : 'papayawhip')};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;
