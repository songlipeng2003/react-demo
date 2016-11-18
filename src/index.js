import 'core-js/fn/object/assign';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import demoApp from './reducers'

const store = createStore(demoApp);

import App from './components/App';
import Main from './components/Main';
import TopicPage from './components/TopicPage';
import LoginPage from './components/LoginPage';

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Main}/>
        <Route path="topic/:id" component={TopicPage} />
        <Route path="login" component={LoginPage} />
      </Route>
    </Router>
  </Provider>, document.getElementById('app'));
