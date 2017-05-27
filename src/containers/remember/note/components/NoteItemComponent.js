import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { List, Button } from 'antd-mobile';

import * as routeActions from '../../../../redux/actions/routeActions';

class NoteItemComponent extends PureComponent {

    render() {
        const noteList = ['Javascript', 'CSS'];

        return (
            <List.Item>
                <Button>add</Button>
            </List.Item>
        );
    }
}

export default connect(null, {
    pushAction: routeActions.push
})(NoteItemComponent);
