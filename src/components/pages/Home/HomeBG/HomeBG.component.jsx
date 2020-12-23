import React from 'react';
import Button from '../../../Button/Button.component';
import './HomeBG.scss';

function Home() {
  return (
    <div className='home-container'>
      <h1 className='home-title'>
        Create your own <br /> Healthy Lifestyle!
      </h1>
      <Button buttonStyle='btn--outline'>Get Started</Button>
    </div>
  );
}

export default Home;
