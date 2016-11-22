import 'core-js/fn/object/assign';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import account from './reducers/account';
import tab from './reducers/tab';

import App from './components/App';
import Main from './components/Main';
import TopicPage from './components/TopicPage';
import LoginPage from './components/LoginPage';
import NotFound from './components/NotFound';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const store = createStore(
  combineReducers({
    account: account,
    tab: tab,
    routing: routerReducer
  })
);

const history = syncHistoryWithStore(browserHistory, store);

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Main}/>
      </Route>
      <Route path="topic/:id" component={TopicPage} />
      <Route path="login" component={LoginPage} />
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>, document.getElementById('app'));
