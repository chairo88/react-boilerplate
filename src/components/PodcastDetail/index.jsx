import React from 'react';
import { usePodcastDetail } from '../../context/podcastDetail';
import Divider from '../Divider';
import wordings from './wordings';

const PodcastDetail = () => {
  const { podcastDetails } = usePodcastDetail();
  
  const { summary, title } = podcastDetails;

  return (
    <div className='podcast-details__info'>
      <img className='podcast-details__image' src={podcastDetails['im:image'][2].label}/>
      <Divider />
      <div>
        <h4 className='podcast-details__title'>{title.label}</h4>
        <p className='podcast-details__author'>{`by ${podcastDetails['im:artist'].label}`}</p>
      </div>
      <Divider />
      <h4 className='podcast-details__summary-title'>{wordings.description}</h4>
      <p className='podcast-details__summary'>{summary?.label}</p>
    </div>
  );
};

export default PodcastDetail;
