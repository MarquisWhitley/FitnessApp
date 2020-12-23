import React from 'react';
import { Link } from 'react-router-dom';
import './ExerciseCards.scss';

function ExerciseCards({ src, exercise, description, path }) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={path}>
          <figure className='cards__item__pic-wrap' data-category={exercise}>
            <img src={src} alt='Exercises' className='cards__item__img' />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{description}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ExerciseCards;
