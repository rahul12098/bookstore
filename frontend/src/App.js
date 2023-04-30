
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from "./pages/Books"
import AddBooks from './pages/AddBooks';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/addBooks' element={<AddBooks />} />
        <Route path='/books/:id' element={<BookDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;
