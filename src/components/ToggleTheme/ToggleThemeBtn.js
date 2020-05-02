import React, { useContext } from "react";
import Button from "./ToggleThemeBtn.style";
import { ThemeContext } from "../../context/ThemeContext";

const ToggleThemeBtn = () => {
    const { isLightMode, light, dark, handleToggleTheme } = useContext(ThemeContext);
    return ( 
        <Button onClick={ ()=> handleToggleTheme() } color={ isLightMode? light : dark} >{ isLightMode? "light":"dark" }</Button>
     );
}
 
export default ToggleThemeBtn;