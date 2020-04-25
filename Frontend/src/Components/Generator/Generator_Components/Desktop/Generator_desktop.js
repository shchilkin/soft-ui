import React,{useContext} from "react";
import SoftUIPreviewDesktop from "./desktop_components/SoftUIPreviewDesktop";
import SoftUIControlDesktop from "./desktop_components/SoftUIControlDesktop";
import GenerationContext from "../../../../contexts/generation(Desktop)/GenerationContext";
import Button from "../Layout/Button";


const Generator_desktop = () => {
    const generationContext = useContext(GenerationContext);
    const { changeStage } = generationContext;

    return(
            <div>
                <div className='row' style={{ marginRight: "0px", marginLeft: "0px" }}>
                    <div className={"col-md-6"}>
                        <SoftUIPreviewDesktop/>
                    </div>
                    <div className={"col-md-6"}>
                        <SoftUIControlDesktop/>
                    </div>
                </div>

                {/*Debug*/}
                <div className={'row'}>
                    <div className={'col-6'}>
                        <div className={'row'}>
                            <div className={'col-6'}>
                                <Button
                                    onClick={() => changeStage("-")}
                                >Previous stage</Button>
                            </div>
                            <div className={'col-6'}>
                                <Button
                                    onClick={() => changeStage("+")}
                                >Next stage</Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Debug*/}
            </div>
    )
}

export default Generator_desktop;