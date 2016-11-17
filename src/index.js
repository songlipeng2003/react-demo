import 'core-js/fn/object/assign';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App';
import Main from './components/Main';
import TopicPage from './components/TopicPage';

// Render the main component into the dom
ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main}/>
      <Route path="topic/:id" component={TopicPage} />
    </Route>
  </Router>, document.getElementById('app'));
