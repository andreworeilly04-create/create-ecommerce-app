import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx';
import Books from './Pages/Books.jsx';
import { books } from './data'
import BookInfo from './Pages/BookInfo.jsx';
import Cart from './Pages/Cart.jsx';
import React, { useState, useEffect } from "react";


function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book){
    setCart([...cart, book])
  }

  useEffect(() =>{
    console.log(cart)
  }, [cart])

  return (
    <Router>
    <>
    <Route />
     <Nav />
     <Route path="/" exact component={Home} />
      <Route path="/books" exact render={() => <Books books={books} />} />
      <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} cart={cart} />} />
      <Route path="/cart" render={() => <Cart books={books} cart={cart} />} />
     <Footer />
    </>
    </Router>
  )
}

export default App;
