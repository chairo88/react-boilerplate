import React from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { usePodcastDetail } from '../../context/podcastDetail';
import Divider from '../Divider';
import wordings from './wordings';
import propTypes from 'prop-types';

const PodcastDetail = ({ isPodcastDetailsView }) => {
  const { podcastId } = useParams();
  const { podcastDetails } = usePodcastDetail();
  
  const { summary, title } = podcastDetails;
  const imageClasses = classNames('podcast-details__image', {
    'podcast-details__image--disabled': isPodcastDetailsView
  });

  const textClasses = classNames('podcast-details__text-container', {
    'podcast-details__text-container--disabled': isPodcastDetailsView
  });

  return (
    <div className='podcast-details__info'>
      <Link className={imageClasses} to={`/podcast/${podcastId}`}>
        <img src={podcastDetails['im:image'][2].label}/>
      </Link>
      <Divider />
      <Link className={textClasses} to={`/podcast/${podcastId}`}>
        <h4 className='podcast-details__title'>{title.label}</h4>
        <p className='podcast-details__author'>{`by ${podcastDetails['im:artist'].label}`}</p>
      </Link>
      <Divider />
      <h4 className='podcast-details__summary-title'>{wordings.description}</h4>
      <p className='podcast-details__summary'>{summary?.label}</p>
    </div>
  );
};

PodcastDetail.propTypes = {
  isPodcastDetailsView: propTypes.bool
};

PodcastDetail.defaultProps = {
  isPodcastDetailsView: false
};

export default PodcastDetail;
