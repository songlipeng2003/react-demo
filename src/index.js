import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect, Switch} from 'react-router';
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

import { routerReducer } from 'react-router-redux'

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
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/topic/:id" component={TopicPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/404" component={NotFound} />
        <Redirect path="*" to="/404" />
      </Switch>
    </BrowserRouter>
  </Provider>, document.getElementById('app'));
