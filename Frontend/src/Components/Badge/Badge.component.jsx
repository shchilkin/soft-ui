import React, {useContext} from "react";
import ThemeContext from '../../contexts/theme/ThemeContext';

const Badge = ({children, type = 'normal', className,  color, style}) => {
    const themeContext = useContext(ThemeContext);
    const {darkMode} = themeContext;

    const badgeNormal = (
        <span className={
            `Badge-${darkMode ? "Dark" : 'Light'} 
            ${color && color}${darkMode ? "-Dark" : ""} 
            ${className && className}`}
              style={style}
        >{children}
        </span>
    );
    const badgeSmall = (
        <span
            style={style}
            className={
            `Badge-Small-${darkMode ? "Dark" : 'Light'} 
            ${color && color}${darkMode ? "-Dark" : ""} 
            ${className && className}`}>{children}
        </span>
    );

    if (type === 'normal'){
        return badgeNormal
    } else if (type === 'small') {
        return badgeSmall
    } else return null
};

export default Badge;