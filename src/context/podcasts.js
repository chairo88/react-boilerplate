import React, { useState, useEffect, useMemo, useContext } from 'react';
import { daysToMilliseconds } from '../utils';
import CONSTANTS from '../utils/constants';
import { useAppContext } from './app';

const { URL_CORS_API, URL_PODCASTS_LIST } = CONSTANTS;
const PodcastsContext = React.createContext();

export const PodcastsProvider = (props) => {
  const { setIsLoading } = useAppContext();
  const [podcasts, setPodcasts] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [podcastsCounter, setPodcastsCounter] = useState(null);
  
  const getPodcastInfo = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${URL_CORS_API}${encodeURIComponent(URL_PODCASTS_LIST)}`);
      const { contents } = await response.json();
      const result = JSON.parse(contents);
      setPodcasts(result?.feed?.entry);
      setPodcastsCounter(podcasts?.length);
    } catch(error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
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
