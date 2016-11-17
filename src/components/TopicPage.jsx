import React from 'react';

import { NavBar, Card, WhiteSpace } from 'antd-mobile';
import { Topic } from '../api';

class HomePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: this.props.params.id,
      topic: []
    };
  }

  componentDidMount(){
    Topic.get(this.state.id).then((response) => {
      this.setState({
        topic: response.data.data
      });
    });
  }

  render() {
    return (
      <div>
        <NavBar>帖子内容</NavBar>

        <WhiteSpace size="lg" />
        <Card>
          <Card.Header title={this.state.topic.title} />
          <Card.Body>
            <div>发布时间:{this.state.topic.content}</div>
          </Card.Body>
        </Card>
        <WhiteSpace size="lg" />
      </div>
    );
  }
}

export default HomePage;
