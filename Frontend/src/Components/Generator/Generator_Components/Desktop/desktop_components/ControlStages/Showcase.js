import React, {Fragment, useContext} from "react";
import Button from "../../../Layout/Button";
import GenerationContext from "../../../../../../contexts/generation(Desktop)/GenerationContext";
import Card from "../../../Layout/Card";

const Showcase = () => {
    const generationContext = useContext(GenerationContext);
    const { changeStage } = generationContext;

    return (
        <Fragment>
            <Card type={"top"}>
                <Card style={{backgroundColor:'#ED2939'}}/>
            </Card>
            <Card
                type={'bottom'}
                style={{display:'flex',justifyContent:'center', alignItems:'center',}}
            >
                <Button
                    style={{width:'90%'}}
                    onClick={() => changeStage("+")}
                    children={'Generate!'}
                />
            </Card>
        </Fragment>
    )
}

export default Showcase;