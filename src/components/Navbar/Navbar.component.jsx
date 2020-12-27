import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button.component';
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
        <Link to='/exercises'>
          <li>Exercises</li>
        </Link>
        <Link to='/about-us'>
          <li>About Us</li>
        </Link>
        <Link to='/sign-in'>
          <Button buttonStyle='btn--outline'>Sign In / Get Started</Button>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
