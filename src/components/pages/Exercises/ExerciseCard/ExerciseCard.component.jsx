import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Button/Button.component';
import './ExerciseCard.scss';
import Special from './Special';
import './Special.scss';

function ExerciseCard({
  id,
  src,
  exercise,
  description,
  path,
  premium,
  rating,
}) {
  let numberOfStars = 15;
  let stars = Array(numberOfStars).fill(0);
  return (
    <>
      <li
        className={`card ${premium ? 'Premium' : 'Standard'}`}
        data-type={premium ? 'Premium' : 'Standard'}
        key={id}
      >
        <div
          className={`cards__item  ${
            premium ? 'cards__premium' : 'cards__standard'
          }`}
        >
          <div className='cards__item__link'>
            <div className='content'>
              <div className={`${premium ? 'night' : null}`}>
                {premium
                  ? stars.map((stars, i) => {
                      return (
                        <Special className='shooting_star' key={i}></Special>
                      );
                    })
                  : null}
              </div>
              <figure
                className='cards__item__pic-wrap'
                data-category={exercise}
              >
                <img src={src} alt='Exercises' className='cards__item__img' />
              </figure>
              <div className='cards__item__info'>
                <div>
                  <p className='cards__rating'>
                    Exercise Rating: {rating ? rating : 'N/A'}
                  </p>
                </div>
                <h5 className='cards__item__text'>{description}</h5>
              </div>
              <div className='button__container'>
                <Link to={path}>
                  <Button>Start</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default ExerciseCard;
