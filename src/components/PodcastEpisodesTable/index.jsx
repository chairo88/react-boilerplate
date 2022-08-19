import React from 'react';
import { Link } from 'react-router-dom';
import { usePodcastDetail } from '../../context/podcastDetail';
import { formatDate, millisToMinutesAndSeconds } from '../../utils';
import wordings from './wordings';

const { table: { headers: { title, duration, date } } } = wordings;

const PodcastEpisodesTable = () => {
  const { podcastEpisodes } = usePodcastDetail();

  return (
    <div className='podcast-episodes-table__container'>
      <table className='podcast-episodes-table'>
        <thead className='podcast-episodes-table__header'>
          <tr>
            <th className='podcast-episodes-table__title'>{title}</th>
            <th className='podcast-episodes-table__date'>{date}</th>
            <th className='podcast-episodes-table-duration'>{duration}</th>
          </tr>
        </thead>
        <tbody>
          {
            podcastEpisodes?.slice(1).map((element, index) => {
              return (
                <tr key={index}>
                  <td className='podcast-episodes-table__title'>
                    <Link to={`${element.collectionId}/episode/${element.trackId}`}>
                      {element.trackName}
                    </Link>
                  </td>
                  <td className='podcast-episodes-table__date'>{formatDate(new Date(element.releaseDate))}</td>
                  <td className='podcast-episodes-table-duration'>{millisToMinutesAndSeconds(element.trackTimeMillis)}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default PodcastEpisodesTable;
