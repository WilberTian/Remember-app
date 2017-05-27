import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { List, Badge } from 'antd-mobile';

import * as routeActions from '../../../../redux/actions/routeActions';

import { dimensions } from '../../../../configs/constants';

class TaskItemComponent extends PureComponent {

    render() {
        const { task } = this.props;

        return (
            <List.Item className="task-list-item">
                <div className="task-dimension">
                    <div className="important-dimension strike">
                        I
                    </div>
                    <div className="urgent-dimension strike">
                        U
                    </div>
                </div>
                <div className="task-detail">
                    <div className="task-name">
                        {task}
                    </div>
                    <div className="task-badge">
                        <Badge
                          text="NEW"
                          style={{ marginLeft: 12, padding: '0 0.06rem', backgroundColor: '#f19736', borderRadius: 2 }}
                        />
                        <Badge
                          text="NEW"
                          style={{ marginLeft: 12, padding: '0 0.06rem', backgroundColor: '#21b68a', borderRadius: 2 }}
                        />
                        <Badge
                          text="NEW"
                          style={{
                              marginLeft: 12,
                              padding: '0 0.06rem',
                              backgroundColor: '#fff',
                              borderRadius: 2,
                              color: '#f19736',
                              border: '1px solid #f19736'
                          }}
                        />
                    </div>
                </div>
            </List.Item>
        );
    }
}

export default connect(null, {
    pushAction: routeActions.push
})(TaskItemComponent);
