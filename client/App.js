import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Home from './containers/home.js';
import About from './containers/about.js';
import Contact from './containers/contact.js';
import Cart from './containers/cart.js';
import Products from './containers/products.js';

function App() {

  useEffect(() => {
    fetch('/login')
      .then(data => data.json())
      .then(data => {
        console.log(data.body);
      });
  }, []);

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;