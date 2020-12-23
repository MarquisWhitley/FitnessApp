import React from 'react';
import Deals from './Deals/Deals.component';
import Exercises from './Exercises/Exercises.component';

function Home() {
  return (
    <div>
      <Exercises />
      <Deals />
    </div>
  );
}

export default Home;
