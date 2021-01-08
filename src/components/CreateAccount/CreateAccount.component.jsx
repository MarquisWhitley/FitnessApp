import React, { useState } from 'react';
import './CreateAccount.scss';
import Gender from './DataComponents/Gender';
import Height from './DataComponents/Height';
import Weight from './DataComponents/Weight';
import WorkoutType from './DataComponents/WorkoutType';
import AccountForm from './test';

function CreateAccount() {
  const [showForm, setShowForm] = useState(true);
  const [component, setComponent] = useState(0);
  const components = [<Gender />, <Height />, <Weight />, <WorkoutType />];

  return (
    <div className='create-account'>
      {showForm ? (
        <div className='form-container'>
          <AccountForm setShowForm={setShowForm} />
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
