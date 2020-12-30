import React from 'react';
import Flexibility from '../../../../images/flexibility.jpg';
import Core from '../../../../images/plank.jpg';
import Strength from '../../../../images/strength.jpg';
import '../ExerciseCard/ExerciseCard.scss';
import ExerciseCard from '../ExerciseCard/ExerciseCard.component';

function ExerciseCards() {
  const Card = [
    {
      src: Flexibility,
      exercise: 'Flexibility',
      description: 'Increase your flexibility with these Vital exercises!',
      path: '/exercises',
      rating: '3/5',
      id: '1',
    },
    {
      src: Core,
      exercise: 'Core',
      description: 'Increase your Core with these Vital exercises!',
      premium: true,
      path: '/exercises',
      rating: '5/5',
      id: '2',
      exercises: [
        'Plank',
        'Side Plank',
        'Leg Raises',
        'Hanging Knee Raises',
        'Flutter Kicks',
      ],
    },
    {
      src: Strength,
      exercise: 'Strength',
      description: 'Increase your Strength with these Vital exercises!',
      path: '/exercises',
      rating: '4/5',
      id: '3',
      exercises: ['Squat', 'Deadlift', 'Bent-Over Row'],
    },
  ];
  return (
    <div className='exercise__component'>
      <h1 className='cards__title'>
        Find A Workout Plan that is best Suited for your lifestyle
      </h1>
      <div className='cards'>
        {Card.map((cards, i) => {
          return (
            <div className='cards__container' key={i}>
              {' '}
              <ExerciseCard
                src={cards.src}
                exercise={cards.exercise}
                description={cards.description}
                path={cards.path}
                rating={cards.rating}
                premium={cards.premium}
              />{' '}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExerciseCards;
