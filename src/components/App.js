import React from "react";
import "../index.css"
import BookContextProvider from "../context/BookContext";
import NavBar from "./NavBar";
import BookList from "./BookList";
import BookForm from "./BookForm";


const App = () => {
    return ( 
        <BookContextProvider>
            <NavBar />
            <BookList />
            <BookForm />
        </BookContextProvider>
     );
}
 
export default App;