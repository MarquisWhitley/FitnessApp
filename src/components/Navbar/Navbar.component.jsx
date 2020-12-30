import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button.component';
import './Navbar.scss';

function Navbar() {
  const [scroll, scrolledDown] = useState(false);

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      scrolledDown(false);
    } else {
      scrolledDown(true);
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <nav className={`nav ${scroll ? 'scrolledDown' : null}`}>
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
