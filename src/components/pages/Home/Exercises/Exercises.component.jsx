import React from 'react';
import ExerciseCards from './ExerciseCards/ExerciseCards.component';
import Flexibility from '../../../../images/flexibility.jpg';
import Plank from '../../../../images/plank.jpg';
import Strength from '../../../../images/strength.jpg';
import './ExerciseCards/ExerciseCards.scss';

function Exercises() {
  return (
    <div className='exercise__component'>
      <h1 className='cards__title'>
        Find A Workout Plan that is best Suited for your lifestyle
      </h1>
      <div className='cards'>
        <div className='cards__container'>
          <ExerciseCards
            src={Flexibility}
            exercise='Flexibility'
            description='Increase your flexibility with these Vital exercises!'
            path='/'
            rating='3/5'
          />
        </div>
        <div className='cards__container'>
          <ExerciseCards
            src={Plank}
            exercise='Core'
            description='Increase your Core with these Vital exercises!'
            premium={true}
            path='/'
            rating='5/5'
          />
        </div>
        <div className='cards__container'>
          <ExerciseCards
            src={Strength}
            exercise='Strength'
            description='Increase your Strength with these Vital exercises!'
            path='/'
            rating='4/5'
          />
        </div>
      </div>
    </div>
  );
}

export default Exercises;
