import React, { useState, useEffect } from 'react';

import wordings from './wordings';

const Search = ({ counter }) => {

  const filterPodcasts = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className='search__container'>
      <div className='search__counter'>
        <span className='search__counter-text'>
          {counter}
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
