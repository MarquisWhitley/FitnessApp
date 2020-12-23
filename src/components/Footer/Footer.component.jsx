import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button.component';
import './Footer.scss';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-title'>
          Join our newsletter to receive more information about upcoming
          products.
        </p>
        <p className='footer-text'>
          <em>You can unsubscribe at any time.</em>
        </p>
        <div className='input-area'>
          <form>
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              className='footer-input'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <section className='footer-links'>
        <div className='footer-links-wrapper'>
          <div className='footer-links-items'>
            <h2>About Us</h2>
            <Link to='/about-us'>How it works</Link>
            <Link to='/about-us'>Testimonials</Link>
            <Link to='/about-us'>Careers</Link>
            <Link to='/about-us'>Terms of Service</Link>
            <Link to='/about-us'>Contact Us</Link>
          </div>
          <div className='footer-links-items'>
            <h2>Products</h2>
            <Link to='/about-us'>Teams</Link>
            <Link to='/about-us'>Advertisements</Link>
            <Link to='/about-us'>Images</Link>
            <Link to='/about-us'>FAQ</Link>
          </div>
        </div>
        <div className='footer-links-wrapper'>
          <div className='footer-links-items'>
            <h2>Contact Us</h2>
            <Link to='/about-us'>Contact</Link>
            <Link to='/about-us'>Support</Link>
            <Link to='/about-us'>Sponsorships</Link>
            <Link to='/about-us'>Review Ticket Submission</Link>
            <Link to='/about-us'>Questions</Link>
          </div>
          <div className='footer-links-items'>
            <h2>Social Media</h2>
            <Link to='/about-us'>Instagram</Link>
            <Link to='/about-us'>Facebook</Link>
            <Link to='/about-us'>Twitter</Link>
            <Link to='/about-us'>Youtube</Link>
          </div>
        </div>
      </section>
      <section className='social-media'>
        <div className='social-media-wrapper'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Logo
            </Link>
          </div>
          <small className='website-rights'>LOGO © 2020</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
