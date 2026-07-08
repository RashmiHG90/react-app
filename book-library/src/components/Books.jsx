import { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { BooksContext } from '../BooksContext'


export default function Books() {

    const query = new URLSearchParams(useLocation().search);
    const searchItem = query.get('search') || '';
    const books = useContext(BooksContext);

    const filteredBooks = searchItem
        ? books.filter((book) =>
            book.title.toLowerCase().includes(searchItem.toLowerCase()) ||
            book.author.toLowerCase().includes(searchItem.toLowerCase())
        )
        : books;

    return (
        <div>
            <h1>All Books</h1>
            <ul>
                {
                    filteredBooks.map((book) => (
                        <li key={book.id}>{book.title} by {book.author}</li>
                    ))
                }
            </ul>
        </div>
    )
}