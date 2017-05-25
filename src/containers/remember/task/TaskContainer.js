import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { NavBar } from 'antd-mobile';

import * as routeActions from '../../../redux/actions/routeActions';

class TaskContainer extends PureComponent {

    onOpenChange() {

    }

    render() {
        return (
            <div>
                <NavBar mode="light" iconName="ellipsis" onLeftClick={this.onOpenChange}>Tasks</NavBar>
            </div>

        );
    }
}

export default connect(null, {
    pushAction: routeActions.push
})(TaskContainer);
