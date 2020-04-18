import React, {useContext} from "react";
import ThemeContext from "../../contexts/theme/ThemeContext";

const Input = ({
                   type,
                   placeholder,
                   value,
                   onChange,
                   onFocus,
                   onBlur,
                   required = false,
                   name,
                   autoComplete='on',
                   style = {} }) => {
    const themeContext =  useContext(ThemeContext);
    const {darkMode} = themeContext;

    return(
        <input
            style={style}
            className={darkMode ? "Input-Dark" : "Input"}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            required={required}
            name={name}
            autoComplete={autoComplete}
        />
    )
};

export default Input;