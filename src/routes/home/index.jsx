import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Search from '../../components/Search';
import { daysToMilliseconds } from '../../utils';

const Home = () => {
  const [podcasts, setPodcasts] = useState(null);
  const [podcastsCounter, setPodcastsCounter] = useState(null);

  const getPodcastInfo = async () => {
    console.log('entro en el fetch');
    const cors_api_url = 'https://api.allorigins.win/get?url=';
    const podcastsList = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

    const response = await fetch(`${cors_api_url}${encodeURIComponent(podcastsList)}`);
    const { contents } = await response.json();
    setPodcasts(JSON.parse(contents));
    setPodcastsCounter(podcasts?.feed?.entry.length);
  };

  useEffect(() => {
    getPodcastInfo();

    const interval = setInterval(() => {
      getPodcastInfo();
    }, daysToMilliseconds(1));
       
    return () => clearInterval(interval);
  }, [podcastsCounter]);

  return (
    <div>
      <Header />
      <Search counter={podcastsCounter}/>
    </div>
  );
};

export default Home;
