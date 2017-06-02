import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { NavBar, Drawer, Picker, List, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import * as FaIcons from 'react-icons/fa';

import * as styleConfig from '../../../configs/style';
import * as routeActions from '../../../redux/actions/routeActions';
import * as tabActions from '../../../redux/actions/tabActions';
import { taskStatusList } from '../../../configs/constants';

import TaskListComponent from './components/TaskListComponent';

import './task-list.less';

class TaskListContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isDrawerOpened: false,
            selectedCategory: [0],
            selectedTag: [0],
            selectedStatus: [0]
        };
    }

    _openDrawer() {
        console.log(this.state.isDrawerOpened);
        this.setState({ isDrawerOpened: !this.state.isDrawerOpened });
    }

    _navToDimension() {
        const { pushAction, toggleTabActions } = this.props;
        toggleTabActions();
        pushAction('dimension');
    }

    _changeCategory() {
        console.log('_changeCategory');
    }

    _searchTask() {
        console.log('_searchTask');
        this.setState({
            isDrawerOpened: false
        });
    }

    render() {
        const { whiteIconStyle } = styleConfig;
        const drawerProps = {
            open: this.state.isDrawerOpened,
            position: 'left'
        };

        const categories = [{
            label: 'all',
            value: 0
        }, {
            label: 'reading',
            value: 1
        }, {
            label: 'writing',
            value: 2
        }];

        const tags = [{
            label: 'all',
            value: 0
        }, {
            label: 'javascript',
            value: 1
        }, {
            label: 'css',
            value: 2
        }];

        const sidebar = (
            <div>
                <Picker
                  data={categories}
                  cols={1}
                  value={this.state.selectedCategory}
                  onChange={(val) => { this.setState({ selectedCategory: val }); }}
                >
                    <List.Item arrow="horizontal">Category</List.Item>
                </Picker>
                <Picker
                  data={tags}
                  cols={1}
                  value={this.state.selectedTag}
                  onChange={(val) => { this.setState({ selectedTag: val }); }}
                >
                    <List.Item arrow="horizontal">Tag</List.Item>
                </Picker>
                <Picker
                  data={taskStatusList}
                  cols={1}
                  value={this.state.selectedStatus}
                  onChange={(val) => { this.setState({ selectedStatus: val }); }}
                >
                    <List.Item arrow="horizontal">Status</List.Item>
                </Picker>
                <WhiteSpace />
                <WingBlank>
                    <Button inline icon="search" onClick={::this._searchTask}>Search</Button>
                </WingBlank>
            </div>
        );

        return (
            <div className="task-list">
                <NavBar
                  mode="light"
                  iconName="ellipsis"
                  onLeftClick={::this._openDrawer}
                  rightContent={
                      <FaIcons.FaTh
                        style={whiteIconStyle}
                        onClick={::this._navToDimension}
                      />
                  }
                >Tasks</NavBar>
                <Drawer
                  className="remember-drawer"
                  style={{
                      minHeight: document.documentElement.clientHeight - 180,
                      position: 'relative',
                      overflow: 'auto'
                  }}
                  dragHandleStyle={{ display: 'none' }}
                  contentStyle={{ color: '#A6A6A6', textAlign: 'center' }}
                  sidebar={sidebar}
                  {...drawerProps}
                >
                    <TaskListComponent />
                </Drawer>
            </div>
        );
    }
}

export default connect(null, {
    pushAction: routeActions.push,
    toggleTabActions: tabActions.toggleTab
})(TaskListContainer);
