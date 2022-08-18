import React from 'react';
import Header from '../../components/Header';
import PodcastDetail from '../../components/PodcastDetail';
import PodcastEpisodes from '../../components/PodcastEpisodes';
import { PodcastDetailProvider } from '../../context/podcastDetail';

const Podcast = () => {
  return (
    <PodcastDetailProvider>
      <Header />
      <div className='podcast-details__container'>
        <PodcastDetail />
        <PodcastEpisodes />
      </div>
    </PodcastDetailProvider>
  );
};

export default Podcast;
