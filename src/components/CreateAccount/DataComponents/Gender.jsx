import React, { useContext } from 'react';
import { CreateAccountContext } from '../../../context/CreateAccount.context';
import '../CreateAccount.scss';

function Gender() {
  const [accountInfo, setAccountInfo] = useContext(CreateAccountContext);
  // const [showData, setShowData] = useState([]);
  return (
    <div>
      <h1>Gender</h1>
      <i className='fas fa-male'></i>
      <input
        type='radio'
        name='gender'
        value='Male'
        onChange={(e) => {
          setAccountInfo({ ...accountInfo, gender: e.target.value });
        }}
      />
      <label htmlFor='male'>Male</label> <br />
      <i className='fas fa-female'></i>
      <input
        type='radio'
        name='gender'
        value='Female'
        onChange={(e) => {
          setAccountInfo({ ...accountInfo, gender: e.target.value });
        }}
      />
      <label htmlFor='female'>Female</label> <br />
      {console.log(
        Object.entries(accountInfo).map(([key, value]) => {
          return [key, value];
        })
      )}
      {/* <button
        onClick={() => {
          setShowData([
            ...showData,
            {
              id: accountInfo.length,
              value: accountInfo,
            },
          ]);
        }}
      >
        Retrieve data
      </button>
      
      {Object.entries(accountInfo).map(([key, value]) => {
        return (
          <div>
            {key} {value}
          </div>
        );
      })} */}
    </div>
  );
}

export default Gender;
