import React, {useContext} from "react";
import ThemeContext from "../../../../contexts/theme/ThemeContext";
import TextInput from "../../../../Components/Updated/TextInput";


const RGBinput = () => {

    const {colorRGB, font, colorHEX, changeColor} = useContext(ThemeContext);

    const onChangeColor = (event, hexOrRGBColorName) => changeColor(hexOrRGBColorName, event.target.value);

    return(
        <div style={{
            display:'grid',
            gridTemplateColumns:'1fr 1fr 1fr',
        }}>
            <TextInput
               type={"number"}
               fontColor={font}
               backgroundColor={`#${colorHEX}`}
               shadowColorBase={"#F0F0F0"}
               style={{height:'38px', border: "0px", borderRadius:'6px',
                   borderTopRightRadius:'0', borderBottomRightRadius:'0',textAlign:'center',marginBottom:'0'}}
               onChange={(event) => onChangeColor(event, "Red")}
               value={colorRGB.Red}
           />
           <TextInput
               type={"number"}
               fontColor={font}
               backgroundColor={`#${colorHEX}`}
               shadowColorBase={"#F0F0F0"}
               style={{height:'38px',border: "0px",borderRadius:'0', marginBottom:'0',textAlign:'center'}}
               onChange={(event) => onChangeColor(event, "Green")}
               value={colorRGB.Green}
           />
           <TextInput
               type={"number"}
               fontColor={font}
               shadowColorBase={"#F0F0F0"}
               backgroundColor={`#${colorHEX}`}
               style={{height:'38px', border: "0px",marginBottom:'0',textAlign:'center',
                   borderRadius:'6px',borderTopLeftRadius:'0',borderBottomLeftRadius:'0'}}
               onChange={(event) => onChangeColor(event, "Blue")}
               value={colorRGB.Blue}
           />
        </div>
   )
};

export default RGBinput