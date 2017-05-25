import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { TabBar } from 'antd-mobile';
import * as FaIcons from 'react-icons/fa';
import * as routeActions from '../../../redux/actions/routeActions';
import * as styleConfig from '../../../configs/style';

class TabbarComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'task'
        };
    }

    _switchTab(selectedTab) {
        this.setState({
            selectedTab
        });

        const { pushAction } = this.props;
        pushAction(selectedTab);
    }

    render() {
        const { iconStyle, selectedIconStyle } = styleConfig;
        const { tabContentComp, tabStatus } = this.props;

        return (
            <TabBar hidden={tabStatus.hidden}>
                <TabBar.Item
                  icon={<FaIcons.FaTasks style={iconStyle} />}
                  selectedIcon={<FaIcons.FaTasks style={selectedIconStyle} />}
                  title="Task"
                  key="task"
                  selected={this.state.selectedTab === 'task'}
                  onPress={() => {
                      this._switchTab('task');
                  }}
                >
                    {tabContentComp}
                </TabBar.Item>
                <TabBar.Item
                  icon={<FaIcons.FaBook style={iconStyle} />}
                  selectedIcon={<FaIcons.FaBook style={selectedIconStyle} />}
                  title="Note"
                  key="note"
                  selected={this.state.selectedTab === 'note'}
                  onPress={() => {
                      this._switchTab('note');
                  }}
                >
                    {tabContentComp}
                </TabBar.Item>
                <TabBar.Item
                  icon={<FaIcons.FaBookmark style={iconStyle} />}
                  selectedIcon={<FaIcons.FaBookmark style={selectedIconStyle} />}
                  title="Category"
                  key="category"
                  selected={this.state.selectedTab === 'category'}
                  onPress={() => {
                      this._switchTab('category');
                  }}
                >
                    {tabContentComp}
                </TabBar.Item>
                <TabBar.Item
                  icon={<FaIcons.FaTags style={iconStyle} />}
                  selectedIcon={<FaIcons.FaTags style={selectedIconStyle} />}
                  title="Tag"
                  key="tag"
                  selected={this.state.selectedTab === 'tag'}
                  onPress={() => {
                      this._switchTab('tag');
                  }}
                >
                    {tabContentComp}
                </TabBar.Item>
            </TabBar>
        );
    }
}

export default connect((state) => {
    return {
        tabStatus: state.tabReducer
    };
}, {
    pushAction: routeActions.push
})(TabbarComponent);
