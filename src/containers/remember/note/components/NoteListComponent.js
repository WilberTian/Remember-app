import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import * as routeActions from '../../../../redux/actions/routeActions';

import NoteItemComponent from './NoteItemComponent';

class NoteListComponent extends PureComponent {

    render() {
        const noteList = [
            'JavascriptJavascriptJavascriptJavascriptJavascriptJavascriptJavascriptJavascriptJavascript',
            'CSS\nCSS\nCSS\nCSS\nCSS\nCSS\nCSS\nCSS\nCSS\nCSS\nCSS'
        ];

        return (
            <div className="note-list">
                {noteList.map((note, index) => {
                    return <NoteItemComponent key={index} note={note} />;
                })}
            </div>
        );
    }
}

export default connect(null, {
    pushAction: routeActions.push
})(NoteListComponent);
