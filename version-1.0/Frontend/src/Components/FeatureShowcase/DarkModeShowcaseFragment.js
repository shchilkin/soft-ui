import React, {Fragment, useContext} from "react";
import Card from "../Updated/Card";
import Input from "../../Pages/Generator/Generator_Components/Layout/Input/Input";
import ShowcaseContext from "../../contexts/showcase/ShowcaseContext";


const DarkModeShowcaseFragment = () => {

    const showcaseContext = useContext(ShowcaseContext);
    const { darkModeFactor, darkModeBackground,darkModeFont,changeDarkModeFactor,
        darkModeBackgroundDarkShadow, darkModeBackgroundLightShadow} = showcaseContext;


    const isDarkModeMoreThan100 = (darkModeFactor) => {
        if (darkModeFactor > 100){
            return false
        } else if (darkModeFactor <= 100){
            return true
        }
    }

    const onChangeFactor = (event) => {changeDarkModeFactor(event.target.value)}

    const DarkModeCard = (
            <Card
                backgroundColor={darkModeBackground}
                isSameColorShadow={true}
                fontColor={darkModeFont}
            >
                <h6 style={{fontSize:'1.05rem'}}>Automatic{" "}
                    {isDarkModeMoreThan100(darkModeFactor) ? 'darkmode' : 'lightmode'} generation.
                </h6>
                <h6 style={{fontSize: '0.8rem', marginBottom:'1.2rem'}}>
                    {darkModeFactor}% of the background color
                </h6>
                <span style={{
                    fontSize: '0.9rem',
                    marginBottom:'1.2rem'}}
                >Hi! 👋 I am a {isDarkModeMoreThan100(darkModeFactor) ? 'dark' : 'light'} mode card!</span>
                <br/>

                {/*TODO if 100% return "Hi I am darkmode card but currently my color is the same as the main color 😜"*/}
                <div>
                    <label>Change %</label>
                    <Input
                        style={{marginLeft:'10px',marginTop:'1.2rem',height:'35px',borderRadius:'6px',width:'50%'}}
                        type={'number'}
                        background={darkModeBackground}
                        darkShadow={darkModeBackgroundDarkShadow}
                        lightShadow={darkModeBackgroundLightShadow}
                        color={darkModeFont}
                        value={darkModeFactor}
                        onChange={event => onChangeFactor(event)}
                        placeholder={'Enter value'}
                    />
                </div>
            </Card>
    )

    return (
        <Fragment>
            {DarkModeCard}
        </Fragment>
    )
}

export default DarkModeShowcaseFragment;