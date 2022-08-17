import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import './styles/app.scss';

import Home from './routes/home';
import Podcast from './routes/podcast';
import Episode from './routes/episode';
import { PodcastsProvider } from './context/podcasts';

function App() {  
  return (
    <PodcastsProvider>
      <BrowserRouter>
        <div className='podcaster__container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="podcast" element={<Podcast />}>
              <Route path=":podcastId" element={<Podcast />}>
                <Route path="episode" element={<Episode />}>
                  <Route path=":episodeId" element={<Episode />} />
                </Route>
              </Route>
            </Route>
            <Route path="*" element={<Home />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </PodcastsProvider>
  );
}

export default App;
