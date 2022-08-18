import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

import wordings from './wordings';

const PodcastCard = ({ name, author, picture, id }) => {
  return (
    <Link className='podcast-card__link' to={`podcast/${id}`}>
      <div className='podcast-card__container'>
        <img className='podcast-card__image' src={picture}/>
        <div className='podcast-card__content'>
          <h3 className='podcast-card__title'>{name}</h3>
          <p className='podcast-card__author'>{`${wordings.author} ${author}`}</p>
        </div>
      </div>
    </Link>
  );
};

PodcastCard.propTypes = {
  author: string.isRequired,
  id: string.isRequired,
  name: string.isRequired,
  picture: string.isRequired,
};

export default PodcastCard;
