import React, { useState, useEffect, useMemo, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { daysToMilliseconds } from '../utils';
import CONSTANTS from '../utils/constants';
import { usePodcasts } from './podcasts';

const { URL_CORS_API } = CONSTANTS;
const PodcastDetailContext = React.createContext();

export const PodcastDetailProvider = (props) => {
  const { podcasts } = usePodcasts();
  const { podcastId } = useParams();
  const podcastDetails = podcasts.find(podcast => podcast.id.attributes['im:id'] === podcastId);
  const [podcastEpisodes, setPodcastEpisodes ] = useState();
  const [podcastEpisodesCounter, setpodcastEpisodesCounter] = useState(null);

  const getPodcastEpisodes = async () => {
    const podcastDetailUrl = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=30`;
  
    const response = await fetch(`${URL_CORS_API}${encodeURIComponent(podcastDetailUrl)}`);
    const { contents } = await response.json();
    const result = JSON.parse(contents);
    setPodcastEpisodes(result?.results);
    setpodcastEpisodesCounter(result?.resultCount);
  };

  useEffect(() => {
    getPodcastEpisodes();
  
    const interval = setInterval(() => {
      getPodcastEpisodes();
    }, daysToMilliseconds(1));
         
    return () => clearInterval(interval);
  }, [podcastEpisodesCounter]);

  const value = useMemo(() => {
    return ({
      podcastEpisodes,
      podcastEpisodesCounter,
      podcastDetails,
    });
  },[podcastEpisodes]);

  return <PodcastDetailContext.Provider value={value} {...props} />;
};

export const usePodcastDetail = () => {
  const context = useContext(PodcastDetailContext);
  if(!context) {
    throw new Error('usePodcastDetail must be defined inside PodcastsContext');
  }
  return context;
};
