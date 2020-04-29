import React, {useContext} from "react";
import ThemeContext from '../../contexts/theme/ThemeContext';
import styled from "styled-components";

const Badge = ({children, border = 6, background, className, style}) => {
    const themeContext = useContext(ThemeContext);
    const {darkMode} = themeContext;

    return (
        <StyledBadge
            border={border}
            background={background}
            style={{...style}}>
            {children}
        </StyledBadge>
    )
};

export default Badge;

const StyledBadge = styled.span`
     padding: 5px 4px;
     background-color: ${props => props.background};
     border-radius:${props => props.border}px;
    `;