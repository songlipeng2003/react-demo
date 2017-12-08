import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { NavBar, Tabs, List } from 'antd-mobile';

import { User } from '../api';

const Item = List.Item;

class MyPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      user: {},
      recent_topics: [],
      recent_replies: []
    };
  }

  componentDidMount(){
    if(!this.props.account.logined){
      this.props.history.push('/login');
    }

    User.get(this.props.account.loginname).then((response) => {
      this.setState({
        user: response.data.data,
        recent_topics: response.data.data.recent_topics,
        recent_replies: response.data.data.recent_replies
      });
    });
  }

  render() {
    const tabs = [
      { title: '最新帖子', sub: '1' },
      { title: '最新回复', sub: '2' },
    ];

    return (
      <div className="my">
        <NavBar>我的</NavBar>

        <div className="info">
          <img src={this.state.user.avatar_url} alt="avatar"/>
          <p>{this.state.user.loginname}</p>
        </div>

        <Tabs
          tabs={tabs}
          initialPage={1}>
          <div>
            <List>
              {this.state.recent_topics.map(topic => {
                return <Item wrap arrow="horizontal" key="{toplic.id}">{topic.title}</Item>
              })}
            </List>
          </div>
          <div>
            <List>
              {this.state.recent_replies.map(reply => {
                return <Item wrap arrow="horizontal" key="{reply.id}">{reply.title}</Item>
              })}
            </List>
          </div>
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

export default withRouter(connect(select)(MyPage))
