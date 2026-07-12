
import { BooksProvider } from './BooksProvider';
import Books from './components/Books'
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BookDetails from './components/BookDetails';
import SecretBooks from './components/SecretBooks';
import { PrivateRoute } from './components/PrivateRoute';


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
            <Route path='/secret' element={
              <PrivateRoute Component={<SecretBooks />} />
            } />
          </Routes>
        </Router>
      </BooksProvider>
    </>

  )
}

export default App
