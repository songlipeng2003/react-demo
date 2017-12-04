import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import account from './reducers/account';
import tab from './reducers/tab';

import App from './components/App';
import TopicPage from './components/TopicPage';
import LoginPage from './components/LoginPage';
import NotFound from './components/NotFound';

import './styles/App.css';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const store = createStore(
  combineReducers({
    account: account,
    tab: tab,
    routing: routerReducer
  })
);

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={App}>
        </Route>
        <Route path="topic/:id" component={TopicPage} />
        <Route path="login" component={LoginPage} />
        <Route path="*" component={NotFound} />
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('app'));
