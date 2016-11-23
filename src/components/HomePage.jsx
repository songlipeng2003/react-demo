import React from 'react';

import { NavBar, ListView, RefreshControl, ActivityIndicator } from 'antd-mobile';
import { Link } from 'react-router'
import { Topic } from '../api';

class HomePage extends React.Component {
  constructor(props){
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.topics = [];
    this.page = 1;

    this.state = {
      dataSource: dataSource.cloneWithRows(this.topics),
      refreshing: false
    }
  }

  queryData(clear=false){
    this.setState({ refreshing: true });

    if(clear){
      this.page = 1;
    }

    Topic.query().then((response) => {
      if(clear){
        this.topics = [];
      }

      this.topics = this.topics.concat(response.data.data);

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.topics),
        refreshing: false
      });

      this.page ++;
    });
  }

  onRefresh(){
    this.queryData();
  }

  onScroll(){
  }

  componentDidMount(){
    this.queryData();
  }

  render(){
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED'
        }}
      />
    );

    const row = (rowData, sectionID, rowID) => {
      const topic = this.topics[rowID];
      return (
        <div key={rowID}
          style={{
            padding: '8px 16px',
            backgroundColor: 'white'
          }}
        >
          <h3 style={{ padding: 2, marginBottom: 8, borderBottom: '1px solid #F6F6F6' }}>
            <Link to={`topic/${topic.id}`}>{topic.title}</Link>
          </h3>
        </div>
      );
    };

    return (
      <div>
        <NavBar>首页</NavBar>

        <ListView dataSource={this.state.dataSource} renderRow={row} renderSeparator={separator}
          scrollRenderAheadDistance={200} scrollEventThrottle={20} scrollerOptions={{ scrollbars: true }}
          onScroll={this.onScroll} scrollerOptions={{ scrollbars: true }}
          style={{height: document.body.scrollHeight}}
          refreshControl={<RefreshControl distanceToRefresh={80} refreshing={this.state.refreshing} onRefresh={this.onRefresh}
          />}
        />

        <ActivityIndicator toast text="正在加载" animating={this.state.refreshing} />
      </div>
    );
  }
}

export default HomePage;
