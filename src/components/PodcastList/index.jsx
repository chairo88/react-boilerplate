import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { usePodcasts } from '../../context/podcasts';

import PodcastCard from '../PodcastCard';

const PodcastsList = () => {
  const { podcasts, searchValue } = usePodcasts();
  const podcastToShow = podcasts?.filter((podcast) => (
    podcast['im:name'].label.toLowerCase().includes(searchValue.toLowerCase()) 
      || podcast['im:artist'].label.toLowerCase().includes(searchValue.toLowerCase())
  ));
  
  return (
    <div className='podcasts-list-container'>
      { 
        podcastToShow?.map((podcast) => {
          const name = podcast['im:name'].label;
          const image = podcast['im:image'];
          const author = podcast['im:artist'].label;

          return (
            <PodcastCard 
              key={uuidv4()}
              name={name}
              picture={image[0].label}
              author={author}
            />
          );
        })
      }
    </div>
  );
};

PodcastsList.defaultProps = {
  list: []
};

export default PodcastsList;
