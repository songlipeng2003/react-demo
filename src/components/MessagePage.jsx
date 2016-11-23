import React, { PropTypes } from 'react';

import { NavBar, Tabs, List } from 'antd-mobile';

const TabPane = Tabs.TabPane;
const Item = List.Item;

import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { Message } from '../api';

class MyPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      has_read_messages: [],
      hasnot_read_messages: []
    };
  }

  componentDidMount(){
    if(!this.props.account.logined){
      browserHistory.push('/login');
    }

    Message.query(this.props.account.token).then((response) => {
      this.setState({
        has_read_messages: response.data.data.has_read_messages,
        hasnot_read_messages: response.data.data.hasnot_read_messages
      });
    });
  }

  render() {
    return (
      <div className="my">
        <NavBar>消息</NavBar>

        <Tabs defaultActiveKey="1">
          <TabPane tab="未读通知" key="1">
            <List>
              {this.state.hasnot_read_messages.map(message => {
                return <Item wrap arrow="horizontal" key="{message.id}">{message.topic.title}</Item>
              })}
            </List>
          </TabPane>
          <TabPane tab="已读通知" key="2">
            <List>
              {this.state.has_read_messages.map(message => {
                return <Item wrap arrow="horizontal" key="{message.id}">{message.topic.title}</Item>
              })}
            </List>
          </TabPane>
        </Tabs>
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
