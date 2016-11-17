import React from 'react';

import { NavBar, Card, WhiteSpace } from 'antd-mobile';
import { browserHistory } from 'react-router'
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
        <NavBar onLeftClick={browserHistory.goBack}>帖子内容</NavBar>

        <div className="topic-content">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header title={this.state.topic.title} />
            <Card.Body>
              <div dangerouslySetInnerHTML={{__html: this.state.topic.content}}></div>
            </Card.Body>
          </Card>
          <WhiteSpace size="lg" />
        </div>
      </div>
    );
  }
}

export default HomePage;
