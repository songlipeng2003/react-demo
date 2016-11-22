import React, { PropTypes } from 'react';

import { TabBar } from 'antd-mobile';
import { connect } from 'react-redux';

import HomePage from './HomePage';
import MyPage from './MyPage';

import { changeTab } from '../actions/tab';

class Bottom extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
      >
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/YWpPVCVOnJoCYhs.png' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
          title="首页"
          key="首页"
          selected={this.props.tab.selected === 'homeTab'}
          onPress={() => {
            this.props.dispatch(changeTab('homeTab'));
          }}
        >
        <HomePage></HomePage>
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/YWpPVCVOnJoCYhs.png' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/WadBBxOIZtDzsgP.png' }}
          title="我的"
          key="我的"
          selected={this.props.tab.selected === 'myTab'}
          onPress={() => {
            this.props.dispatch(changeTab('myTab'));
          }}
        >
          <MyPage></MyPage>
        </TabBar.Item>
      </TabBar>
    )
  }
}

Bottom.propTypes = {
  tab: PropTypes.object.isRequired
}

function select(state) {
  return {
    tab: state.tab
  }
}

export default connect(select)(Bottom)
