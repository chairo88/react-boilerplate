import React from 'react';

import wordings from './wordings';

const PodcastCard = ({ name, author, picture }) => {
  return (
    <div className='podcast-card__container'>
      <img className='podcast-card__image' src={picture}/>
      <div className='podcast-card__content'>
        <h3 className='podcast-card__title'>{name}</h3>
        <p className='podcast-card__author'>{`${wordings.author} ${author}`}</p>
      </div>
    </div>
  );
};

export default PodcastCard;
