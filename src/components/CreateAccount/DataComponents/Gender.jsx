import React, { useContext } from 'react';
import { CreateAccountContext } from '../../../context/CreateAccount.context';
import '../CreateAccount.scss';

function Gender() {
  const [accountInfo, setAccountInfo] = useContext(CreateAccountContext);
  // const [showData, setShowData] = useState([]);
  return (
    <div className='gender'>
      <h1>Gender</h1>
      <div className='gender-container'>
        <label htmlFor='male'>
          <div className='gender-male'>
            Male
            <input
              className='gender-input'
              id='male'
              type='radio'
              name='gender'
              value='Male'
              onChange={(e) => {
                setAccountInfo({ ...accountInfo, gender: e.target.value });
              }}
            />
            <i className='fas fa-male gender-icon'></i>
            <br />
          </div>
        </label>
        <label htmlFor='female'>
          <div className='gender-female'>
            Female
            <input
              className='gender-input'
              id='female'
              type='radio'
              name='gender'
              value='Female'
              onChange={(e) => {
                setAccountInfo({ ...accountInfo, gender: e.target.value });
              }}
            />
            <i className='fas fa-female gender-icon'></i>
            <br />
          </div>
        </label>
      </div>
      {console.log(
        Object.entries(accountInfo).map(([key, value]) => {
          return [key, value];
        })
      )}
    </div>
  );
}

export default Gender;
