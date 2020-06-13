import React, {useContext} from "react";
import Input from "../../Layout/Input/Input";
import ThemeContext from "../../../../../contexts/theme/ThemeContext";
import TextInput from "../../Layout/Input/TextInput";


const RGBinput = () => {

    const {colorRGB, colorHEX, changeColor} = useContext(ThemeContext);

    const onChangeColor = (event, hexOrRGBColorName) => changeColor(hexOrRGBColorName, event.target.value);

    return(
        <div style={{
            display:'grid',
            gridTemplateColumns:'1fr 1fr 1fr',
        }}>
            <TextInput
               type={"number"}
               backgroundColor={`#${colorHEX}`}
               shadowColorBase={"#F0F0F0"}
               style={{height:'38px', border: "0px", borderRadius:'6px',
                   borderTopRightRadius:'0', borderBottomRightRadius:'0',textAlign:'center',marginBottom:'0'}}
               onChange={(event) => onChangeColor(event, "Red")}
               value={colorRGB.Red}
           />
           <TextInput
               type={"number"}
               backgroundColor={`#${colorHEX}`}
               shadowColorBase={"#F0F0F0"}
               style={{height:'38px',border: "0px",borderRadius:'0', marginBottom:'0',textAlign:'center'}}
               onChange={(event) => onChangeColor(event, "Green")}
               value={colorRGB.Green}
           />
           <TextInput
               type={"number"}
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