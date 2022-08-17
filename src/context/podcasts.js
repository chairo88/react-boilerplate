import React, { useState, useEffect, useMemo, useContext } from 'react';
import { daysToMilliseconds } from '../utils';

const PodcastsContext = React.createContext();

export const PodcastsProvider = (props) => {
  const [podcasts, setPodcasts] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [podcastsCounter, setPodcastsCounter] = useState(null);
  
  const getPodcastInfo = async () => {
    const cors_api_url = 'https://api.allorigins.win/get?url=';
    const podcastsList = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
  
    const response = await fetch(`${cors_api_url}${encodeURIComponent(podcastsList)}`);
    const { contents } = await response.json();
    const result = JSON.parse(contents);
    setPodcasts(result?.feed?.entry);
    setPodcastsCounter(podcasts?.length);
  };
  
  useEffect(() => {
    getPodcastInfo();
  
    const interval = setInterval(() => {
      getPodcastInfo();
    }, daysToMilliseconds(1));
         
    return () => clearInterval(interval);
  }, [podcastsCounter]);

  const value = useMemo(() => {
    return ({
      podcasts,
      setPodcasts,
      podcastsCounter,
      getPodcastInfo,
      searchValue,
      setSearchValue,
    });
  },[podcastsCounter, podcasts, searchValue]);

  return <PodcastsContext.Provider value={value} {...props} />;
};

export const usePodcasts = () => {
  const context = useContext(PodcastsContext);
  if(!context) {
    throw new Error('usePodcasts must be defined inside PodcastsContext');
  }
  return context;
};
