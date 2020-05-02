import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import BookDetailStyle from "./BookDetail.style";

const BookDetail = ({ book }) => {
    const { dispatch } = useContext(BookContext);
    return ( 
        <BookDetailStyle onClick= { () => dispatch({type: "REMOVE_BOOK", id: book.id})}>
            <div className="title">{ book.title }</div>
            <div className="author">{ book.author }</div>
        </BookDetailStyle>
     );
}
 
export default BookDetail;