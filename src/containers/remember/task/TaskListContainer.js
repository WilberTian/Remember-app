import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { NavBar } from 'antd-mobile';
import * as FaIcons from 'react-icons/fa';

import * as styleConfig from '../../../configs/style';
import * as routeActions from '../../../redux/actions/routeActions';
import * as tabActions from '../../../redux/actions/tabActions';

import TaskListComponent from './components/TaskListComponent';

import './task-list.less';

class TaskListContainer extends PureComponent {

    _openDrawer() {

    }

    _navToDimension() {
        const { pushAction, toggleTabActions } = this.props;
        toggleTabActions();
        pushAction('dimension');
    }

    render() {
        const { whiteIconStyle } = styleConfig;

        return (
            <div className="task-list">
                <NavBar
                  mode="light"
                  iconName="ellipsis"
                  onLeftClick={this._openDrawer}
                  rightContent={[
                      <FaIcons.FaTh
                        style={whiteIconStyle}
                        onClick={() => { this._navToDimension(); }}
                      />
                  ]}
                >Tasks</NavBar>

                <TaskListComponent />
            </div>
        );
    }
}

export default connect(null, {
    pushAction: routeActions.push,
    toggleTabActions: tabActions.toggleTab
})(TaskListContainer);
