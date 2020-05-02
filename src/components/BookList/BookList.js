import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import { ThemeContext } from "../../context/ThemeContext";
import BookDetail from "../BookDetail/BookDetail";
import BookListStyle from "./BookList.style";

const BookList = () => {
    const { books } = useContext(BookContext);
    const { isLightMode, light, dark } = useContext(ThemeContext);
    return books.length ? ( 
        <BookListStyle color={ isLightMode? light : dark }>
            <ul>
                { books.map(book => {
                    return( <BookDetail key={book.id} book={book} />)
                })}
            </ul>
        </BookListStyle>
    ) : (
        <BookListStyle color={ isLightMode? light : dark } empty>No books to read</BookListStyle>
    )
}
 
export default BookList;