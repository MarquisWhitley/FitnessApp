import React, { useContext, useEffect, useState } from 'react';
import { CreateAccountContext } from '../../../context/CreateAccount.context';
import '../CreateAccount.scss';

function Height() {
  const [accountInfo, setAccountInfo] = useContext(CreateAccountContext);
  const [heightFeet, setHeightFeet] = useState(5);
  const [heightInches, setHeightInches] = useState(7);
  const totalHeight = heightFeet * 30.28 + heightInches * 2.54;

  useEffect(() => {
    setAccountInfo({ ...accountInfo, height: totalHeight });
    // eslint-disable-next-line
  }, [totalHeight]);

  return (
    <div>
      <h1>Height</h1>

      <div className='height-container'>
        <div className='height-feet'>
          <h2>Feet</h2>
          <div className='feet'>
            <input
              readOnly
              type='number'
              maxLength='1'
              pattern='[1-6]'
              value={heightFeet}
              className='input-value'
            />
            <span
              className='arrow arrow-up'
              onClick={() =>
                setHeightFeet((c) => {
                  if (c >= 8) {
                    return 8;
                  }
                  return c + 1;
                })
              }
            >
              <i className='fas fa-arrow-up'></i>
            </span>
            <span
              className='arrow arrow-down'
              onClick={() =>
                setHeightFeet((c) => {
                  if (c <= 1) {
                    return 1;
                  }
                  return c - 1;
                })
              }
            >
              <i className='fas fa-arrow-down'></i>
            </span>
          </div>
        </div>
          {console.log(
            Object.entries(accountInfo).map(([key, value]) => {
              return [key, value];
            })
          )}
        <div className='height-inches'>
          <h2>Inches</h2>
          <div className='inches'>
            <input
              readOnly
              type='number'
              pattern='[1-6]'
              value={heightInches}
              className='input-value'
            />
            <span
              className='arrow arrow-up'
              onClick={() =>
                setHeightInches((c) => {
                  if (c >= 11) {
                    return 11;
                  }
                  return c + 1;
                })
              }
            >
              <i className='fas fa-arrow-up'></i>
            </span>
            <span
              className='arrow arrow-down'
              onClick={() =>
                setHeightInches((c) => {
                  if (c <= 0) {
                    return 0;
                  }
                  return c - 1;
                })
              }
            >
              <i className='fas fa-arrow-down'></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Height;
