import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { NavBar } from 'antd-mobile';

import * as routeActions from '../../../redux/actions/routeActions';

import TaskListComponent from './components/TaskListComponent';

import './task-list.less';

class TaskListContainer extends PureComponent {

    onOpenChange() {

    }

    render() {
        return (
            <div className="task-list">
                <NavBar mode="light" iconName="ellipsis" onLeftClick={this.onOpenChange}>Tasks</NavBar>
                <TaskListComponent />
            </div>
        );
    }
}

export default connect(null, {
    pushAction: routeActions.push
})(TaskListContainer);
