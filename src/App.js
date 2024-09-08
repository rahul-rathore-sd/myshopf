import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import About from './pages/About';
import Cart from './pages/Cart';
import Orders from './pages/Orders';

function App(){
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/contact' Component={Contact} />
          <Route path='/blog' Component={Blog} />
          <Route path='/about' Component={About} />
          <Route path='/cart' Component={Cart} />
          <Route path='/orders' Component={Orders} />
          </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;