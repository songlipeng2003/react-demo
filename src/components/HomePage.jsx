import React from 'react';

import { NavBar, Card, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router'
import { Topic } from '../api';

class HomePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      topics: []
    };
  }

  componentDidMount(){
    Topic.query().then((response) => {
      this.setState({
        topics: response.data.data
      });
    });
  }

  render() {
    return (
      <div>
        <NavBar>首页</NavBar>

        {this.state.topics.map(topic => {
          return <div key={topic.id}>
            <WhiteSpace size="lg" />
            <Card>
              <Card.Header title={<Link to={`/topic/${topic.id}`}>{topic.title}</Link>} />
              <Card.Body>
                <div>发布时间:{topic.create_at}</div>
              </Card.Body>
            </Card>
            <WhiteSpace size="lg" />
          </div>;
        })}

      </div>
    );
  }
}

export default HomePage;
