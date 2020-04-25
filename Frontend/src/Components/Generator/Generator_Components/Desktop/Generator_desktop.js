import React,{useContext} from "react";
import SoftUIPreviewDesktop from "./desktop_components/SoftUIPreviewDesktop";
import SoftUIControlDesktop from "./desktop_components/SoftUIControlDesktop";
import GenerationContext from "../../../../contexts/generation(Desktop)/GenerationContext";


const Generator_desktop = () => {
    const generationContext = useContext(GenerationContext);
    const { stage } = generationContext;

    return(
            <div className='row' style={{ marginRight: "0px", marginLeft: "0px" }}>
                <div className={"col-md-6"}>
                    <SoftUIPreviewDesktop/>
                </div>
                <div className={"col-md-6"}>
                    <SoftUIControlDesktop/>
                </div>
            </div>
    )
}

export default Generator_desktop;