import React, { PropTypes } from 'react';

import { NavBar } from 'antd-mobile';

import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { User } from '../api';

class MyPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      user: {}
    };
  }

  componentDidMount(){
    if(!this.props.account.logined){
      browserHistory.push('/login');
    }

    User.get(this.props.account.loginname).then((response) => {
      this.setState({
        user: response.data.data
      });
    });
  }

  render() {
    return (
      <div className="my">
        <NavBar>我的</NavBar>

        <div className="info">
          <img src={this.state.user.avatar_url}/>
          <p>{this.state.user.loginname}</p>
        </div>
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
