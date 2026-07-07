import { useContext } from "react";
import { BooksContext } from "../BooksContext";
import { useParams } from "react-router-dom";

export default function BookDetails() {
    const { bookId } = useParams();
    const books = useContext(BooksContext);

    const book = books.find(b => b.id === parseInt(bookId));

    if (books.length === 0) {
        return <h2>Loading...</h2>
    }

    if (book == null) {
        return <h2>Book not found</h2>
    }

    return (
        <div>
            <h1>{book.title}</h1>
            <h2> by {book.author}</h2>
            <p>{book.description}</p>
        </div>
    )
}