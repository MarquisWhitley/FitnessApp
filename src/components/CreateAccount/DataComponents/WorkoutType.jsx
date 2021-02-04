import React, { useContext, useEffect, useState } from 'react';
import { CreateAccountContext } from '../../../context/CreateAccount.context';
import '../CreateAccount.scss';

function WorkoutType() {
  const [accountInfo, setAccountInfo] = useContext(CreateAccountContext);
  const [workout] = useState(new Array(6).fill(null));
  const [updated, setUpdated] = useState(0);

  const handleWorkout = (e, idx) => {
    [
      ...workout,
      e.target.checked
        ? (workout[idx] = e.target.value)
        : (workout[idx] = null),
    ].splice(0, workout.length);
    console.log(
      workout.filter((el) => {
        return el != null;
      })
    );
    setUpdated((c) => c + 1);
  };

  useEffect(() => {
    setAccountInfo({
      ...accountInfo,
      workout: workout.filter((days) => {
        return days != null;
      }),
    });
    // eslint-disable-next-line
  }, [updated]);
  return (
    <div>
      <div className='schedule-container'>
        <h1 className='schedule-container_title'>Exercise Type</h1>
        <form className='schedule-form'>
          <label htmlFor='weight-training'>
            <div className='form-group'>
              <input
                type='checkbox'
                id='weight-training'
                value='weight-training'
                onClick={(e) => handleWorkout(e, 0)}
              />
              <label htmlFor='weight-training'>Weight Training</label>
            </div>
          </label>
          <label htmlFor='stretching'>
            <div className='form-group'>
              <input
                type='checkbox'
                id='stretching'
                value='stretching'
                onClick={(e) => handleWorkout(e, 1)}
              />
              <label htmlFor='stretching'>Stretching</label>
            </div>
          </label>
          <label htmlFor='pilates'>
            <div className='form-group'>
              <input
                type='checkbox'
                id='pilates'
                value='pilates'
                onClick={(e) => handleWorkout(e, 2)}
              />
              <label htmlFor='pilates'>Pilates</label>
            </div>
          </label>
          <label htmlFor='yoga'>
            <div className='form-group'>
              <input
                type='checkbox'
                id='yoga'
                value='yoga'
                onClick={(e) => handleWorkout(e, 3)}
              />
              <label htmlFor='yoga'>Yoga</label>
            </div>
          </label>
          <label htmlFor='cardio'>
            <div className='form-group'>
              <input
                type='checkbox'
                id='cardio'
                value='cardio'
                onClick={(e) => handleWorkout(e, 4)}
              />
              <label htmlFor='cardio'>Cardio</label>
            </div>
          </label>
          <label htmlFor='hiit'>
            <div className='form-group'>
              <input
                type='checkbox'
                id='hiit'
                value='hiit'
                onClick={(e) => handleWorkout(e, 5)}
              />
              <label htmlFor='hiit'>High-Intensity Interval Training</label>
            </div>
          </label>
        </form>
      </div>
      {console.log(
        Object.entries(accountInfo).map(([key, value]) => {
          return [key, value];
        })
      )}
    </div>
  );
}

export default WorkoutType;
