import React from 'react';
import { usePodcasts } from '../../context/podcasts';

import wordings from './wordings';

const Search = () => {
  const { setSearchValue, podcastsCounter } = usePodcasts();
  
  const filterPodcasts = ({ target: { value } }) => {
    setSearchValue(value);
  };

  return (
    <div className='search__container'>
      <div className='search__counter'>
        <span className='search__counter-text'>
          {podcastsCounter}
        </span>
      </div>
      <input
        type='text'
        placeholder={wordings.placeholder}
        className='search__input'
        onChange={filterPodcasts}
      />        
    </div>
  );
};

export default Search;
