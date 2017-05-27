import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { NavBar } from 'antd-mobile';
import * as FaIcons from 'react-icons/fa';

import * as styleConfig from '../../../configs/style';
import * as routeActions from '../../../redux/actions/routeActions';

import NoteListComponent from './components/NoteListComponent';

class NoteContainer extends PureComponent {

    render() {
        const { selectedIconStyle } = styleConfig;

        return (
            <div>
                <NavBar iconName="null"
                  mode="light"
                  rightContent={<FaIcons.FaPlusCircle
                    style={selectedIconStyle}
                    onClick={() => { this._showTagModal(); }}
                  />}
                >Tags</NavBar>
                <NoteListComponent />
            </div>
        );
    }
}

export default connect(null, {
    pushAction: routeActions.push
})(NoteContainer);
