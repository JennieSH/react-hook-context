import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { BookContext } from "../../context/BookContext";
import Nav from "./NavBar.style";
import ToggleThemeBtn from "../ToggleTheme/ToggleThemeBtn";

const NavBar = () => {
    const { isLightMode, light, dark } = useContext(ThemeContext);
    const { books } = useContext(BookContext);
    return ( 
        <Nav color={ isLightMode? light : dark }>
            <h1>Reading List</h1>
            <p>Currently you have { books.length } books.</p>
            <ToggleThemeBtn />
        </Nav>
     );
}
 
export default NavBar;