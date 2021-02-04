import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CreateAccountContext } from '../../context/CreateAccount.context';
import './CreateAccount.scss';
import Gender from './DataComponents/Gender';
import Height from './DataComponents/Height';
import Schedule from './DataComponents/Schedule';
import Weight from './DataComponents/Weight';
import WorkoutType from './DataComponents/WorkoutType';
import AccountForm from './test';
import { BodyTypeMale, BodyTypeFemale } from './DataComponents/BodyType';

function CreateAccount() {
  const [accountInfo] = useContext(CreateAccountContext);
  const [showForm, setShowForm] = useState(true);
  const [component, setComponent] = useState(0);
  const [nextSlide, setNextSlide] = useState(false);

  const weightTraining = () => {
    return (
      <div>
        <h1>WeightTraining</h1>
      </div>
    );
  };
  const stretching = () => {
    return (
      <div>
        <h1>Stretching</h1>
      </div>
    );
  };
  const pilates = () => {
    return (
      <div>
        <h1>Pilates</h1>
      </div>
    );
  };
  const yoga = () => {
    return (
      <div>
        <h1>Yoga</h1>
      </div>
    );
  };
  const cardio = () => {
    return (
      <div>
        <h1>Cardio</h1>
      </div>
    );
  };
  const hiit = () => {
    return (
      <div>
        <h1>High-Intensity Interval Training</h1>
      </div>
    );
  };
  const components = [
    <Gender />,
    <Height />,
    <Weight />,
    accountInfo.gender === 'Male' ? <BodyTypeMale /> : <BodyTypeFemale />,
    <WorkoutType />,
    accountInfo.workout.includes('weight-training') && weightTraining(),
    accountInfo.workout.includes('stretching') && stretching(),
    accountInfo.workout.includes('pilates') && pilates(),
    accountInfo.workout.includes('yoga') && yoga(),
    accountInfo.workout.includes('cardio') && cardio(),
    accountInfo.workout.includes('hiit') && hiit(),
    <Schedule />,
  ];

  const filteredComponents = components.filter(
    (components) => components !== false
  );

  useEffect(() => {
    if (accountInfo.gender === 'Male' || accountInfo.gender === 'Female') {
      setNextSlide(true);
    }
    return () => {
      setNextSlide(false);
    };
  }, [accountInfo.gender]);

  return (
    <div className='create-account'>
      <Link to='/'>
        <h3 className='create-account_home'>Home</h3>
      </Link>
      {showForm ? (
        <div className='form-container'>
          <AccountForm setShowForm={setShowForm} />
        </div>
      ) : (
        <div className='body-dataset_container'>
          {filteredComponents[component]}
          <div className='button-container'>
            {component <= 0 ? (
              <div />
            ) : (
              <button type='button' onClick={() => setComponent((c) => c - 1)}>
                previous
              </button>
            )}
            {component >= filteredComponents.length - 1 ? (
              <button>Submit</button>
            ) : (
              <button
                type='button'
                onClick={() =>
                  setComponent((c) => {
                    if (nextSlide) {
                      return c + 1;
                    }
                    return c + 0;
                  })
                }
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
      {console.log(filteredComponents)}
    </div>
  );
}

export default CreateAccount;
