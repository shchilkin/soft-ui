import React, {useContext} from "react";
import ThemeContext from "../../../../contexts/theme/ThemeContext";

const PageCover = ({children}) => {
    const themeContext = useContext(ThemeContext);
    const {
        font,
        colorRGB,
    } = themeContext;

    const mainColor = `rgb(${colorRGB.Red}, ${colorRGB.Green}, ${colorRGB.Blue})`;

    return(
        <div style={{
            backgroundColor:"#F0F0F0",
            minHeight:'100vh'
            ,height:'100%'}}
        >
            {children}
        </div>
    )
}

export default PageCover;