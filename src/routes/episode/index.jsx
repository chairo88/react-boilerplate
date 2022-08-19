import React from 'react';
import Header from '../../components/Header';
import EpisodeDetail from '../../components/EpisodeDetail';
import PodcastDetail from '../../components/PodcastDetail';
import { PodcastDetailProvider } from '../../context/podcastDetail';

const Episode = () => {
  return (
    <PodcastDetailProvider>
      <Header />
      <div className='episode__container'>
        <PodcastDetail />
        <EpisodeDetail />
      </div>
    </PodcastDetailProvider>
  );
};

export default Episode;
