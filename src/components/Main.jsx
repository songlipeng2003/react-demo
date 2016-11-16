require('styles/App.css');

import React from 'react';

import Bottom from './Bottom'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Bottom></Bottom>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
