import React, { PureComponent } from 'react';

import TabbarComponent from './components/TabbarComponent';

export default class RememberContainer extends PureComponent {

    render() {
        const { children } = this.props;

        return (
            <TabbarComponent tabContentComp={children} />
        );
    }
}
