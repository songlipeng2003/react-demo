import React, { PropTypes } from 'react';

import { NavBar } from 'antd-mobile';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

class MyPage extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if(!this.props.account.logined){
      browserHistory.push('/login');
    }
  }

  render() {
    return (
      <div>
        <NavBar>我的</NavBar>
      </div>
    );
  }
}

MyPage.propTypes = {
  account: PropTypes.object.isRequired
}

function select(state) {
  return {
    account: state.account
  }
}

export default connect(select)(MyPage)
