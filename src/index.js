import React from "react";
import ReactDom from "react-dom";
import App from "./components/App/App";
import ThemeContextProvider from "../src/context/ThemeContext";
import BookContextProvider from "../src/context/BookContext";


const Index = () => {
    return ( 
        <ThemeContextProvider>
            <BookContextProvider>
                <App/>
            </BookContextProvider>
        </ThemeContextProvider>
     );
}
 
export default Index;

ReactDom.render(<Index/>, document.getElementById("root"))
