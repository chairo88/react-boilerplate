import React, { useState, useEffect } from 'react';

import wordings from './wordings';

const Search = ({ counter }) => {

  const filterPodcasts = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className='search-container'>
      <div>
        <span>
          {counter}
        </span>
      </div>
      <input
        type='text'
        placeholder={wordings.placeholder}
        className='search-input'
        onChange={filterPodcasts}
      />        
    </div>
  );
};

export default Search;
