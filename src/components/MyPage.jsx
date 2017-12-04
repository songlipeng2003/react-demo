import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { NavBar, Tabs, List } from 'antd-mobile';

import { User } from '../api';

const TabPane = Tabs.TabPane;
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
    return (
      <div className="my">
        <NavBar>我的</NavBar>

        <div className="info">
          <img src={this.state.user.avatar_url}/>
          <p>{this.state.user.loginname}</p>
        </div>

        <Tabs defaultActiveKey="1">
          <TabPane tab="最新帖子" key="1">
            <List>
              {this.state.recent_topics.map(topic => {
                return <Item wrap arrow="horizontal" key="{toplic.id}">{topic.title}</Item>
              })}
            </List>
          </TabPane>
          <TabPane tab="最新回复" key="2">
            <List>
              {this.state.recent_replies.map(reply => {
                return <Item wrap arrow="horizontal" key="{reply.id}">{reply.title}</Item>
              })}
            </List>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

// MyPage.propTypes = {
//   account: PropTypes.object.isRequired
// }

function select(state) {
  return {
    account: state.account
  }
}

export default withRouter(connect(select)(MyPage))
