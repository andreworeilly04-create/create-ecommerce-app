import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx';
import Books from './Pages/Books.jsx';
import { books } from './data'
import BookInfo from './Pages/BookInfo.jsx';

function App() {
  return (
    <Router>
    <>
    <Route />
     <Nav />
     <Route path="/" exact component={Home} />
      <Route path="/books" exact render={() => <Books books={books} />} />
      <Route path="/books/1" render={() => <BookInfo books={books} />} />
     <Footer />
    </>
    </Router>
  )
}

export default App;
