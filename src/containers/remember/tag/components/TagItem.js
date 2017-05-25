import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Button } from 'antd-mobile';

import * as routeActions from '../../../../redux/actions/routeActions';

class TagItem extends PureComponent {

    render() {
        return (
            <Button type="primary" size="small" inline>small</Button>

        );
    }
}

export default connect(null, {
    pushAction: routeActions.push
})(TagItem);
