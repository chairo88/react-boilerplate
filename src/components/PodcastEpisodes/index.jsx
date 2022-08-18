import React from 'react';
import { usePodcastDetail } from '../../context/podcastDetail';
import PodcastEpisodesTable from '../PodcastEpisodesTable';

const PodcastEpisodes = () => {
  const { podcastEpisodesCounter } = usePodcastDetail();

  return (
    <div>
      <div className='podcast-episodes__counter'>
        {`Episodes: ${podcastEpisodesCounter}`}
      </div>
      <PodcastEpisodesTable />
    </div>
  );
};

export default PodcastEpisodes;
