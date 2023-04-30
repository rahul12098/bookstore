import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
    const image = require("../images/bookstore.jpg")
  return (
    <div className='Home-page bg-dark text-white container-fluid'>
        <div className='row'>
            <div 
            className='col-lg-6 d-flex justify-content-center align-items-center-start flex-column'
            style={{height:"93vh"}}
            >
               <h2 style={{ fontSize:"80px"}}>BOOK STORE FOR YOU</h2>
               <p style={({color:"silver"})}>Checkout the books from here.</p>
               <Link to="/books" className='viewBook text-white ' >View Books</Link>
            </div>
            <div className='col-lg-6 d-flex justify-content-center align-items-center flex-column'
            style={{height: "91.5vh"}}
            >
               <img className=" homeimg" src={image} alt="/" />
            </div>
        </div>
      home
    </div>
  );
}

export default Home;
