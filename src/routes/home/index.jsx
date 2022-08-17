import React from 'react';

import Header from '../../components/Header';
import Search from '../../components/Search';
import PodcastsList from '../../components/PodcastList';
import { usePodcasts } from '../../context/podcasts';

const Home = () => {
  const { podcastsCounter, podcasts } = usePodcasts();

  return (
    <div>
      <Header />
      <Search counter={podcastsCounter} />
      <PodcastsList list={podcasts} />
    </div>
  );
};

export default Home;
