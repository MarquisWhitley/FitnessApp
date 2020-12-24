import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../Button/Button.component';
import './ExerciseCards.scss';
import Special from './Special';
import './Special.scss';

function ExerciseCards({ src, exercise, description, path, premium, rating }) {
  let numberOfStars = 15;
  let stars = Array(numberOfStars).fill(0);
  return (
    <>
      <li
        className={`cards__item  ${
          premium ? 'cards__premium' : 'cards__standard'
        }`}
      >
        <Link className='cards__item__link' to={path}>
          <div className='content'>
            <div className={`${premium ? 'night' : null}`}>
              {premium
                ? stars.map(() => {
                    return <Special className='shooting_star'></Special>;
                  })
                : null}
            </div>
            <figure className='cards__item__pic-wrap' data-category={exercise}>
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
              <Button>Start</Button>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ExerciseCards;
