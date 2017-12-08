import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { NavBar, Tabs, List } from 'antd-mobile';

import { Message } from '../api';

const Item = List.Item;

class MessagePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      has_read_messages: [],
      hasnot_read_messages: []
    };
  }

  componentDidMount(){
    if(!this.props.account.logined){
      this.props.history.push('/login');
    }

    Message.query(this.props.account.token).then((response) => {
      this.setState({
        has_read_messages: response.data.data.has_read_messages,
        hasnot_read_messages: response.data.data.hasnot_read_messages
      });
    });
  }

  render() {
    const tabs = [
      { title: '未读通知', sub: '1' },
      { title: '已读通知', sub: '2' },
    ];

    return (
      <div className="my">
        <NavBar>消息</NavBar>

        <Tabs
          tabs={tabs}
          initialPage={1}
          >
          <div>
            <List>
              {this.state.hasnot_read_messages.map(message => {
                return <Item wrap arrow="horizontal" key="{message.id}">{message.topic.title}</Item>
              })}
            </List>
          </div>
          <div>
            <List>
              {this.state.has_read_messages.map(message => {
                return <Item wrap arrow="horizontal" key="{message.id}">{message.topic.title}</Item>
              })}
            </List>
          </div>
        </Tabs>
      </div>
    );
  }
}

function select(state) {
  return {
    account: state.account
  }
}

export default withRouter(connect(select)(MessagePage))
