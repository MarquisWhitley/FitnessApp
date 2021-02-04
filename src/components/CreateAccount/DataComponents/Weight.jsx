import React, { useContext, useEffect, useState } from 'react';
import { CreateAccountContext } from '../../../context/CreateAccount.context';
import '../CreateAccount.scss';

function Weight() {
  const [accountInfo, setAccountInfo] = useContext(CreateAccountContext);
  const [pounds, setPounds] = useState(150);
  useEffect(() => {
    setAccountInfo({ ...accountInfo, pounds: parseInt(pounds) });
    // eslint-disable-next-line
  }, [pounds]);
  return (
    <div className='weight'>
      <h1>Weight</h1>
      <div className='weight-container'>
        <div className='weight-input'>
          <h2>Pounds</h2>
          <div className='pounds'>
            <input
              type='number'
              maxLength='1'
              pattern='[1-6]'
              value={pounds}
              className='input-value_weight'
              onChange={(e) => setPounds(e.target.value)}
            />
            <span
              className='arrow arrow-up'
              onClick={() =>
                setPounds((c) => {
                  return c + 5;
                })
              }
            >
              <i className='fas fa-arrow-up'></i>
            </span>
            <span
              className='arrow arrow-down'
              onClick={() =>
                setPounds((c) => {
                  if (c <= 5) {
                    return 0;
                  }
                  return c - 5;
                })
              }
            >
              <i className='fas fa-arrow-down'></i>
            </span>
          </div>
        </div>
      </div>
      {console.log(
        Object.entries(accountInfo).map(([key, value]) => {
          return [key, value];
        })
      )}
    </div>
  );
}

export default Weight;
