import React from 'react';
import ExerciseCards from '../Exercises/ExerciseCards/ExerciseCards.component';
import Deals from './Deals/Deals.component';
import HomeBG from './HomeBG/HomeBG.component';

function Home() {
  return (
    <>
      <HomeBG />
      <ExerciseCards />
      <Deals />
    </>
  );
}

export default Home;
