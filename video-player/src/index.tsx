import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import VideoPlayer from './pages/VideoPlayer'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/video-player" component={VideoPlayer} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
