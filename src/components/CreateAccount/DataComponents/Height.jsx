import React, { useContext, useEffect, useState } from 'react';
import { CreateAccountContext } from '../../../context/CreateAccount.context';
import '../CreateAccount.scss';

function Height() {
  const [accountInfo, setAccountInfo] = useContext(CreateAccountContext);
  const [heightFeet, setHeightFeet] = useState(5);
  const [heightInches, setHeightInches] = useState(7);
  const totalHeight = heightFeet * 30.28 + heightInches * 2.54;
  const [maxFeet, setMaxFeet] = useState(true);
  const [minFeet, setMinFeet] = useState(true);
  const [minInches, setMinInches] = useState(true);
  const [maxInches, setMaxInches] = useState(true);

  useEffect(() => {
    setAccountInfo({ ...accountInfo, height: totalHeight });
    // eslint-disable-next-line
  }, [totalHeight]);

  return (
    <div className='height'>
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
                  if (c >= 7) {
                    setMaxFeet(false);
                    return 8;
                  } else {
                    setMaxFeet(true);
                  }
                  setMinFeet(true);
                  return c + 1;
                })
              }
            >
              {maxFeet && <i className='fas fa-arrow-up'></i>}
            </span>
            <span
              className='arrow arrow-down'
              onClick={() =>
                setHeightFeet((c) => {
                  if (c <= 2) {
                    setMinFeet(false);
                    return 1;
                  } else {
                    setMinFeet(true);
                  }
                  setMaxFeet(true);
                  return c - 1;
                })
              }
            >
              {minFeet && <i className='fas fa-arrow-down'></i>}
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
                  if (c >= 10) {
                    setMaxInches(false);
                    return 11;
                  } else {
                    setMaxInches(true);
                  }
                  setMinInches(true);
                  return c + 1;
                })
              }
            >
              {maxInches && <i className='fas fa-arrow-up'></i>}
            </span>
            <span
              className='arrow arrow-down'
              onClick={() =>
                setHeightInches((c) => {
                  if (c <= 1) {
                    setMinInches(false);
                    return 0;
                  } else {
                    setMinInches(true);
                  }
                  setMaxInches(true);
                  return c - 1;
                })
              }
            >
              {minInches && <i className='fas fa-arrow-down'></i>}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Height;
