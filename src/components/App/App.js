import React, { useContext } from "react";
import "../../index.css";
import { ThemeContext } from "../../context/ThemeContext";
import NavBar from "../NavBar/NavBar";
import BookList from "../BookList/BookList";
import BookForm from "../BookForm/BookForm";
import AppStyle from "./App.style";


const App = () => {
    const { isLightMode, light, dark } = useContext(ThemeContext);
    return ( 
        <AppStyle color={ isLightMode? light : dark }>
            <NavBar />
            <BookList />
            <BookForm />
        </AppStyle>
     );
}
 
export default App;