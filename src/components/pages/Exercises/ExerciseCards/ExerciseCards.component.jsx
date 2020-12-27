import React from 'react';
import Flexibility from '../../../../images/flexibility.jpg';
import Core from '../../../../images/plank.jpg';
import Strength from '../../../../images/strength.jpg';
import '../ExerciseCard/ExerciseCard.scss';
import ExerciseCard from '../ExerciseCard/ExerciseCard.component';

function ExerciseCards() {
  return (
    <div className='exercise__component'>
      <h1 className='cards__title'>
        Find A Workout Plan that is best Suited for your lifestyle
      </h1>
      <div className='cards'>
        <div className='cards__container'>
          <ExerciseCard
            src={Flexibility}
            exercise='Flexibility'
            description='Increase your flexibility with these Vital exercises!'
            path='/exercises'
            rating='3/5'
          />
        </div>
        <div className='cards__container'>
          <ExerciseCard
            src={Core}
            exercise='Core'
            description='Increase your Core with these Vital exercises!'
            premium={true}
            path='/exercises'
            rating='5/5'
            exercises={[
              'Plank',
              'Side Plank',
              'Leg Raises',
              'Hanging Knee Raises',
              'Flutter Kicks',
            ]}
          />
        </div>
        <div className='cards__container'>
          <ExerciseCard
            src={Strength}
            exercise='Strength'
            description='Increase your Strength with these Vital exercises!'
            path='/exercises'
            rating='4/5'
            exercises={['Squat', 'Deadlift', 'Bent-Over Row']}
          />
        </div>
      </div>
    </div>
  );
}

export default ExerciseCards;
