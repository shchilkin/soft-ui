import React, { ReactElement } from 'react';
import { useTheme } from '../../store/reducers/themeReducer';

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
  return <input
    value={value}
    onChange={onChange}
    style={{
      fontWeight: 600,
      color: fontColor,
      textTransform: 'uppercase',
      width: '100%',
      padding: '15px',
      borderRadius: '12px',
      backgroundColor: mainColor,
      border: `${fontColor} solid 3px`,
      boxSizing: 'border-box'
    }} />;
};

export default Input;