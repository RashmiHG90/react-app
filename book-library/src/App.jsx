
import { BooksProvider } from './BooksProvider';
import Books from './components/Books'
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BookDetails from './components/BookDetails';


function App() {


  return (
    <>
      <BooksProvider>

        <Router>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/books" element={<Navigate to='/' />} />
            <Route path="/books/:bookId" element={<BookDetails></BookDetails>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </BooksProvider>
    </>

  )
}

export default App
