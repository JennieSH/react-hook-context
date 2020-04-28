import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

const BookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [ title, setTitle ] = useState("");
    const [ author, setAuthor ] = useState("");

    const handleAddBook = (e) => {
        e.preventDefault();
        dispatch({ type:"ADD_BOOK", book: {
            title,author
        }})
        setTitle("");
        setAuthor("");
    }

    return ( 
        <form>
            <input type="text" required placeholder="book title" value={ title } onChange={ (e)=> setTitle(e.target.value) }></input>
            <input type="text" required placeholder="book author" value={ author } onChange={ (e)=> setAuthor(e.target.value)}></input>
            <button onClick={ (e) => handleAddBook(e) }>Add Book</button>
        </form>

     );
}
 
export default BookForm;