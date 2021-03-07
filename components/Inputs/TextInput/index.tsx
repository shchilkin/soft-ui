import React, { ReactElement, CSSProperties } from 'react';
import { useTheme } from '../../../store/reducers/themeReducer';

interface InputProps {
  value: number | string
  onChange: (event) => void
}

/**
 * Input component
 * */
const Input = (props: InputProps): ReactElement => {
  const { mainColor, fontColor } = useTheme();
  const { value, onChange } = props;

  //TODO Change to styled components css
  const inputStyle: CSSProperties = {
    color: fontColor,
    fontWeight: 600,
    fontSize: '12pt',
    textTransform: 'uppercase',
    width: '100%',
    padding: '15px',
    borderRadius: '12px',
    backgroundColor: mainColor,
    border: `${fontColor} solid 3px`,
    boxSizing: 'border-box',
  };

  return <input
    value={value}
    onChange={onChange}
    style={inputStyle} />;
};

export default Input;