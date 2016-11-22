import React from 'react';

import { NavBar, List, InputItem, Button, Toast } from 'antd-mobile';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux';

import { login } from '../actions/account';
import { User } from '../api';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {accessToken: null};

    this.handleChange = this.handleChange.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);
  }

  onLoginClick() {
    let accessToken = this.state.accessToken;

    if(accessToken){
      User.login(accessToken).then((response) => {
        let data = response.data;
        if(data.success){
          this.props.dispatch(login({token: accessToken, 'loginname': data.loginname}));
          browserHistory.push('/');
        }
      }).catch((error) => {
        Toast.fail(error.response.data.error_msg);
      });
    }else{
      Toast.fail('Access Token不能为空');
    }
  }

  handleChange(value) {
    this.setState({accessToken: value});
  }

  render() {
    return (
      <div>
        <NavBar>登录</NavBar>

        <List renderHeader={() => '登录信息'}>
          <InputItem placeholder="请输入Access Token" value={this.state.accessToken} onChange={this.handleChange}>Token</InputItem>
        </List>
        <div style={{ margin: 12 }}>
          <Button type="primary" onClick={this.onLoginClick}>登录</Button>
        </div>
      </div>
    );
  }
}

export default connect()(LoginPage);
