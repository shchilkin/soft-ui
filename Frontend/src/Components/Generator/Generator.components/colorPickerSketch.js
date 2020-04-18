import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import ThemeContext from "../../../contexts/theme/ThemeContext";

class ColorPickerSketch extends React.Component {
    static contextType = ThemeContext;

    state = {
        displayColorPicker: false,
        color: {
            hex:this.context.hexColor,
        },
    };

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        console.log('color picker on change',{ color: color})
        this.context.changeColor('Hex', color.hex)
        this.setState({ color: color.hex })
    };

    render() {
        const colorStyle = {
            color: {
                width: '36px',
                height: '36px',
                border:`3px solid ${this.context.font}`,
                display: 'inline-block',
                borderRadius: '10px',
                background: this.state.background,
            }
        }

        const styles = reactCSS({
            'default': {
                color: {
                    width: '30px',
                    height: '30px',
                    display: 'inline-block',
                    borderRadius: '12px',
                    background: `rgb(${ this.context.colorRGB.Red }, ${ this.context.colorRGB.Green }, ${ this.context.colorRGB.Blue  })`,
                },
                swatch: {
                    height:'36px',
                    width:'36px',
                    padding: '1px',
                    borderRadius: `${this.context.borderRadius}px`,
                    boxShadow: `rgb(${this.context.shadows.darkerShadowArray[0]}, ${this.context.shadows.darkerShadowArray[1]}, ${this.context.shadows.darkerShadowArray[2]})
                     ${this.context.shadowLength}px ${this.context.shadowLength}px ${this.context.shadowBlur}px 0px,
                      rgb(${this.context.shadows.ligherShadowArray[0]}, ${this.context.shadows.ligherShadowArray[1]}, ${this.context.shadows.ligherShadowArray[2]}) 
                      -${this.context.shadowLength}px -${this.context.shadowLength}px ${this.context.shadowBlur}px 0px`,
                    display: 'inline-block',
                    cursor: 'pointer',
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            },
        });


        return (
            <div style={{display: 'inline-block', verticalAlign:'-50%'}}>
                <div style={ styles.swatch } onClick={ this.handleClick }>
                    <div style={ colorStyle.color } />
                    {/*<div style={ styles.color } />*/}
                </div>
                { this.state.displayColorPicker ? <div style={ styles.popover }>
                    <div style={ styles.cover } onClick={ this.handleClose }/>
                    <SketchPicker
                        disableAlpha={true}
                        color={ this.state.color }
                        onChange={ this.handleChange }

                        presetColors ={['#D0021B', '#F5A623', '#F8E71C']}
                    />
                </div> : null }
            </div>

        )

    }
}

export default ColorPickerSketch