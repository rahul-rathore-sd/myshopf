import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/newlogo2.jpeg';
// pages
import About from '../pages/About';
import Blog from '../pages/Blog';
import Cart from '../pages/Cart';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Orders from '../pages/Orders';
import MyForm from './Category'

function Navbar() {
  return (
    <>
      {/* main container */}
    <div style={{backgroundColor:'#D1E9F6'}} className="container-fluid">
    <div className="container" >
        <div className="d-flex justify-content-between" style={{ backgroundColor: '', height: '46px' }}>
          <div className='d-flex'>
            <img style={{ width: '60px', borderRadius:'20px' }} src={logo} alt="logo" />
            <h5 style={{ marginTop: '10px', marginLeft:'10px' }}>MyShop</h5>
          </div>
          <div>
            <form className="form-inline">
              <input className="form-control " type="search" placeholder="Search more than 10,000 products" aria-label="Search" style={{ width: '400px', height: '46.3px' }} />
              <button className="btn btn-outline-success " type="submit"><span class="material-symbols-outlined" style={{ marginLeft: 'px' }} >
                search
              </span></button>
            </form>
          </div>
          <div className="">
            <div className="d-flex"><span style={{ marginLeft: '75px' }}>phone</span> <span style={{ marginLeft: '200px' }}>Email</span> </div>
            <div className="d-flex"><span>+91 9599103136</span><span style={{ marginLeft: '40px' }}>rrathore959910@gmail.com</span></div>
          </div>
        </div>
        {/* upper navbar end */}
        <hr />
        {/* ================================================ */}
        {/* 2nd navbar started here */}
        <div className="d-flex justify-content-between" style={{width: '100%', height: '30px' }}>
          <div style={{width:'12%'}}>

            {/* <MyForm /> */}

          </div>
          <div className='d-flex justify-content-around' style={{width:'45%', backgroundColor: ''}}>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/blog">Blog</Link></div>
            <div><Link to="/cart">Cart</Link></div>
            <div><Link to="/orders">Orders</Link></div>
            <div><Link to="/about">About</Link></div>
            <div><Link to="/contact">Contact</Link></div>
          </div>
          {/* right side */}
          <div className='d-flex justify-content-around' style={{width:'12%',  backgroundColor: ''}}>
            <div>
              <span class="material-symbols-outlined ">
                account_circle
              </span>
            </div>
            <div><span class="material-symbols-outlined">
              favorite
            </span></div>
            <div><span class="material-symbols-outlined ">
              shopping_cart_checkout
            </span></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar;