import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { NavBar } from 'antd-mobile';
import * as FaIcons from 'react-icons/fa';

import * as styleConfig from '../../../configs/style';
import * as routeActions from '../../../redux/actions/routeActions';
import * as tabActions from '../../../redux/actions/tabActions';

import NoteListComponent from './components/NoteListComponent';

import './note-list.less';

class NoteListContainer extends PureComponent {
    _navToNoteForm() {
        const { pushAction, toggleTabActions } = this.props;
        toggleTabActions();
        pushAction('note-form');
    }

    render() {
        const { whiteIconStyle } = styleConfig;

        return (
            <div>
                <NavBar iconName="null"
                  mode="light"
                  rightContent={<FaIcons.FaPlusCircle
                    style={whiteIconStyle}
                    onClick={() => { this._navToNoteForm(); }}
                  />}
                >Notes</NavBar>
                <NoteListComponent />
            </div>
        );
    }
}

export default connect(null, {
    pushAction: routeActions.push,
    toggleTabActions: tabActions.toggleTab
})(NoteListContainer);
