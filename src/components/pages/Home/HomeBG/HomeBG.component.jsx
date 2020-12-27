import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Button/Button.component';
import './HomeBG.scss';

function HomeBG() {
  return (
    <div className='home-container'>
      <h1 className='home-title'>
        Create your own <br /> Healthy Lifestyle!
      </h1>
      <small className='home-text'>
        <em>Don't have an account?</em>
      </small>
      <Link to='/create-account'>
        <Button buttonStyle='btn--outline'>Get Started</Button>
      </Link>
    </div>
  );
}

export default HomeBG;
