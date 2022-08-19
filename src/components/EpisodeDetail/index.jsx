import React from 'react';
import { useParams } from 'react-router-dom';
import { usePodcastDetail } from '../../context/podcastDetail';

const EpisodeDetail = () => {
  const { episodeId } = useParams();
  const { podcastEpisodes } = usePodcastDetail();

  const newArr = podcastEpisodes;
  let episodeDetail;

  newArr?.forEach(element => {
    if(String(element.trackId) === String(episodeId)) {
      episodeDetail = element;
    }
  });

  console.log('episodeDetail ', episodeDetail);
  const getDescription = (text) => {
    return {
      __html: text
    };
  };
  
  return (
    <div className='episode-details__info'>
      <h2 className='episode-detail__title'>
        {episodeDetail?.trackName}
      </h2>
      <div className='episode-detail__description' dangerouslySetInnerHTML={getDescription(episodeDetail?.description)}/>
      <div className='episode-detail__player'>
        <audio controls>
          <source src={episodeDetail?.episodeUrl} type="audio/mpeg" />
          {'aflknflgwaknf'}
        </audio>
      </div>
    </div>
  );
};

export default EpisodeDetail;
