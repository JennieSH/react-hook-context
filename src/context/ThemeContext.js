import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const lightTheme =   {
    appBg: "#a67058",
    navBg: "#c2927c",
    listBg: "#c2927c",
    btn: "#ab7863",
    form: {
        bg: "#63331c",
        btn: "#debaaa"
    }
};

const darkTheme = {
    appBg: "#555555",
    navBg: "#6a6a6a",
    listBg: "#808080",
    btn: "#555",
    form: {
        bg: "#333333",
        btn: "#696969"
    }
}


const ThemeContextProvider = (props) => {
    const [ isLightMode, toggleThemeMode ] = useState(true);
    const [ light, setLightTheme ] = useState(lightTheme);
    const [ dark, setDarkTheme ] = useState(darkTheme);
    const handleToggleTheme = () =>{
        toggleThemeMode(!isLightMode)
    }
    return ( 
        <ThemeContext.Provider value = {{ light, dark, isLightMode, handleToggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;