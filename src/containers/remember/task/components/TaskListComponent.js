import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { List } from 'antd-mobile';

import * as routeActions from '../../../../redux/actions/routeActions';

import TaskItemComponent from './TaskItemComponent';

class TaskListComponent extends PureComponent {

    render() {
        const taskList = ['read a book', 'dev remember'];

        return (
            <List>
                {taskList.map((task, index) => {
                    return <TaskItemComponent key={index} task={task} />;
                })}
            </List>
        );
    }
}

export default connect(null, {
    pushAction: routeActions.push
})(TaskListComponent);
