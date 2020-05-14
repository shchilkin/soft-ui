import React from "react";

const RangeInput = () => {
    return <input
        className={'rangeInput'}
        type={'range'}
        max={50}
        min={0}
        step={1}
        style={{width:'50%'}}
    />
}

export default RangeInput