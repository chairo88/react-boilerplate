import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

import app from './styles/app.scss';

import Home from './routes/home';
import Podcast from './routes/podcast';
import Episode from './routes/episode';

function App() {  
  return (
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
  );
}

export default App;
