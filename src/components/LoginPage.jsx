import React from 'react';

import { NavBar, List, InputItem, Button } from 'antd-mobile';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux';

import { login } from '../actions/account';

class LoginPage extends React.Component {
  onloginClick() {
    this.props.dispatch(login({token: '123'}));
    browserHistory.push('/');
  }

  render() {
    return (
      <div>
        <NavBar>登录</NavBar>

        <List renderHeader={() => '登录信息'}>
          <InputItem placeholder="请输入账号">账号</InputItem>
          <InputItem placeholder="请输入密码" type="password">密码</InputItem>
        </List>
        <div style={{ margin: 12 }}>
          <Button type="primary" onClick={this.onloginClick}>登录</Button>
        </div>
      </div>
    );
  }
}

export default connect()(LoginPage);
