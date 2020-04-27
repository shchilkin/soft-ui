import React from 'react';
import { CirclePicker } from 'react-color';

class colorPickerCircle extends React.Component {
    state = {
        background: '#fff',
    };

    handleChangeComplete = (color, event) => {
        this.setState({ background: color.hex });
    };

    render() {
        return <CirclePicker onChangeComplete={ this.handleChangeComplete } />;
    }
}

export default colorPickerCircle;