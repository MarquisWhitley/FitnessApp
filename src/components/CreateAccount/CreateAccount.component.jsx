import React, { useState } from 'react';
import './CreateAccount.scss';
import Gender from './DataComponents/Gender';
import Height from './DataComponents/Height';
import Weight from './DataComponents/Weight';
import WorkoutType from './DataComponents/WorkoutType';

function CreateAccount() {
  const [showForm, setShowForm] = useState(true);
  const [component, setComponent] = useState(0);
  const components = [<Gender />, <Height />, <Weight />, <WorkoutType />];

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
  };
  return (
    <div className='create-account'>
      {showForm ? (
        <div className='form-container'>
          <form action='' className='form'>
            <label htmlFor='fname'>First Name</label>
            <input type='text' name='firstname' placeholder='First name...' />

            <label htmlFor='lname'>Last Name</label>
            <input type='text' name='lastname' placeholder='Last name...' />

            <label htmlFor='email'>Email</label>
            <input type='email' name='email' placeholder='Your email...' />

            <label htmlFor='passowrd'>Password</label>
            <input
              type='password'
              name='password'
              placeholder='Your Password...'
            />

            <label htmlFor='confirm-password'>Confirm Password</label>
            <input
              type='password'
              name='confirm-password'
              placeholder='Confirm Password...'
            />

            <button type='button' onClick={handleSubmit}>
              Sign Up
            </button>
          </form>
        </div>
      ) : (
        <div>
          {components[component]}
          {component <= 0 ? null : (
            <button type='button' onClick={() => setComponent((c) => c - 1)}>
              previous
            </button>
          )}
          {component >= components.length - 1 ? (
            <button>Submit</button>
          ) : (
            <button type='button' onClick={() => setComponent((c) => c + 1)}>
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default CreateAccount;
