import React from 'react';
import Button from '../../../Button/Button.component';
import './Deals.scss';

function Deals() {
  return (
    <div className='deals-container'>
      <div className='deals-wrapper'>
        <div className='deals-trial'>
          <div className='deals-free-trial'>
            <h1 className='deals-title'>Free Trial</h1>
            <div className='perks-wrapper'>
              <div className='perks'>Lorem</div>
              <div className='perks'>Lorem</div>
              <div className='perks'>Lorem</div>
              <div className='perks'>Lorem</div>
              <div className='perks'>Lorem</div>
            </div>
            <Button buttonStyle='btn--outline'>Sign Up!</Button>
          </div>
        </div>
        <div className='deals-trial'>
          <div className='deals-premium-trial'>
            <h1 className='deals-title'>Premium Trial</h1>
            <div className='perks-wrapper'>
              <div className='perks'>Lorem</div>
              <div className='perks'>Lorem</div>
              <div className='perks'>Lorem</div>
              <div className='perks'>Lorem</div>
              <div className='perks'>Lorem</div>
            </div>
            <Button buttonStyle='btn--outline'>Sign Up!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deals;
