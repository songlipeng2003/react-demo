import React from 'react';

import { NavBar, Card, WhiteSpace } from 'antd-mobile';
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
      this.state.topics = response.data.data;
    });
  }

  render() {
    var topics = this.state.topics;
    var results = [];
    topics.forEach(p => {
      var item =
        <div>
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header title={p.title} />
            <Card.Body>
              <div>发布时间:{p.create_at}</div>
            </Card.Body>
          </Card>
          <WhiteSpace size="lg" />
        </div>;

      results.push(item);
    });

    return (
      <div>
        <NavBar>首页</NavBar>

        {results}
      </div>
    );
  }
}

export default HomePage;
