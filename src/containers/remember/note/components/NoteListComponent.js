import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { List } from 'antd-mobile';

import * as routeActions from '../../../../redux/actions/routeActions';

import NoteItemComponent from './NoteItemComponent';

class NoteListComponent extends PureComponent {

    render() {
        const noteList = ['Javascript', 'CSS'];

        return (
            <List>
                {noteList.map((note, index) => {
                    return <NoteItemComponent key={index} note={note} />;
                })}
            </List>
        );
    }
}

export default connect(null, {
    pushAction: routeActions.push
})(NoteListComponent);
