import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  return (
    <nav className='nav'>
      <Link to='/'>
        <h3>Logo</h3>
      </Link>
      <ul className='links'>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/about-us'>
          <li>About Us</li>
        </Link>
        <Link to='/contact'>
          <li>Contact</li>
        </Link>
        <Link to='/sign-up'>
          <li>SignUp</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
