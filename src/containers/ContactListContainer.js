import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Button } from 'antd-mobile';

import * as routeActions from '../redux/actions/routeActions';

import ContactListComponent from '../components/ContactListComponent';

class ContactListContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
        };
    }

    _navAddContact() {
        const { pushAction } = this.props;
        pushAction('contact-add');
    }

    render() {
        return (
            <Button type="primary" size="small" inline>small</Button>

        );
    }
}

export default connect(null, {
    pushAction: routeActions.push
})(ContactListContainer);
