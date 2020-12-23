import React from 'react';
import ExerciseCards from './ExerciseCards/ExerciseCards.component';
import Flexibility from '../../../../images/flexibility.jpg';
import Plank from '../../../../images/plank.jpg';
import Strength from '../../../../images/strength.jpg';

function Exercises() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <ExerciseCards
          src={Flexibility}
          exercise='Flexibility'
          description='Increase your flexibility with these Vital exercises!'
          path='/'
        />
      </div>
      <div className='cards__container'>
        <ExerciseCards
          src={Plank}
          exercise='Core'
          description='Increase your Core with these Vital exercises!'
          path='/'
        />
      </div>
      <div className='cards__container'>
        <ExerciseCards
          src={Strength}
          exercise='Strength'
          description='Increase your Strength with these Vital exercises!'
          path='/'
        />
      </div>
    </div>
  );
}

export default Exercises;
