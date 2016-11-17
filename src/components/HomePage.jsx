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
      this.setState({
        topics: response.data.data
      });
    });
  }

  render() {
    return (
      <div>
        <NavBar>首页</NavBar>

        {this.state.topics.map(p => {
          return <div key={p.id}>
            <WhiteSpace size="lg" />
            <Card>
              <Card.Header title={p.title} />
              <Card.Body>
                <div>发布时间:{p.create_at}</div>
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
