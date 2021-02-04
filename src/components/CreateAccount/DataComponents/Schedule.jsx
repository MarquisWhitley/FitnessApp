import React, { useContext, useEffect, useState } from 'react';
import { CreateAccountContext } from '../../../context/CreateAccount.context';
import '../CreateAccount.scss';

function Schedule() {
  const [accountInfo, setAccountInfo] = useContext(CreateAccountContext);
  const [schedule] = useState(new Array(7).fill(null));
  const [updated, setUpdated] = useState(0);

  const handleSchedule = (e, idx) => {
    [
      ...schedule,
      e.target.checked
        ? (schedule[idx] = e.target.value)
        : (schedule[idx] = null),
    ].splice(0, schedule.length);
    console.log(
      schedule.filter((el) => {
        return el != null;
      })
    );
    setUpdated((c) => c + 1);
  };

  useEffect(() => {
    setAccountInfo({
      ...accountInfo,
      schedule: schedule.filter((days) => {
        return days != null;
      }),
    });
    // eslint-disable-next-line
  }, [updated]);
  return (
    <div>
      <div className='schedule-container'>
        <h1 className='schedule-container_title'>Schedule</h1>
        <form className='schedule-form'>
          <label htmlFor='sunday'>
            <div className='form-group'>
              <input
                type='checkbox'
                id='sunday'
                value='sunday'
                onClick={(e) => handleSchedule(e, 0)}
              />
              <label htmlFor='sunday'>Sunday</label>
            </div>
          </label>
          <label htmlFor='monday'>
            <div className='form-group'>
              <input
                type='checkbox'
                id='monday'
                value='monday'
                onClick={(e) => handleSchedule(e, 1)}
              />
              <label htmlFor='monday'>Monday</label>
            </div>
          </label>
          <label htmlFor='tuesday'>
            <div className='form-group'>
              <input
                type='checkbox'
                id='tuesday'
                value='tuesday'
                onClick={(e) => handleSchedule(e, 2)}
              />
              <label htmlFor='tuesday'>Tuesday</label>
            </div>
          </label>
          <label htmlFor='wednesday'>
            <div className='form-group'>
              <input
                type='checkbox'
                id='wednesday'
                value='wednesday'
                onClick={(e) => handleSchedule(e, 3)}
              />
              <label htmlFor='wednesday'>Wednesday</label>
            </div>
          </label>
          <label htmlFor='thursday'>
            <div className='form-group'>
              <input
                type='checkbox'
                id='thursday'
                value='thursday'
                onClick={(e) => handleSchedule(e, 4)}
              />
              <label htmlFor='thursday'>Thursday</label>
            </div>
          </label>
          <label htmlFor='friday'>
            <div className='form-group'>
              <input
                type='checkbox'
                id='friday'
                value='friday'
                onClick={(e) => handleSchedule(e, 5)}
              />
              <label htmlFor='friday'>Friday</label>
            </div>
          </label>
          <label htmlFor='saturday'>
            <div className='form-group'>
              <input
                type='checkbox'
                id='saturday'
                value='saturday'
                onClick={(e) => handleSchedule(e, 6)}
              />
              <label htmlFor='saturday'>Saturday</label>
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

export default Schedule;
