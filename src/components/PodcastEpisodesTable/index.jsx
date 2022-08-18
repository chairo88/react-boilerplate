import React from 'react';
import { usePodcastDetail } from '../../context/podcastDetail';
import { formatDate, millisToMinutesAndSeconds } from '../../utils';
import wordings from './wordings';

const { table: { headers: { title, duration, date } } } = wordings;

const PodcastEpisodesTable = () => {
  const { podcastEpisodes } = usePodcastDetail();

  return (
    <div className='podcast-episodes-table__container'>
      <table className='podcast-episodes-table'>
        <tr className='podcast-episodes-table__header-row'>
          <th className='podcast-episodes-table__title'>{title}</th>
          <th>{date}</th>
          <th>{duration}</th>
        </tr>
        {
          podcastEpisodes?.slice(1).map((element, index) => {
            return (
              <tr key={index}>
                <td className='podcast-episodes-table__title'>{element.trackName}</td>
                <td>{formatDate(new Date(element.releaseDate))}</td>
                <td className='podcast-episodes-table-duration'>{millisToMinutesAndSeconds(element.trackTimeMillis)}</td>
              </tr>
            );
          })
        }
      </table>
    </div>
  );
};

export default PodcastEpisodesTable;
