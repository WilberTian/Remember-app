import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { NavBar, List } from 'antd-mobile';
import * as FaIcons from 'react-icons/fa';

import * as styleConfig from '../../../configs/style';
import * as routeActions from '../../../redux/actions/routeActions';

import TagItem from './components/TagItem';
import TagModal from './components/TagModal';

class TagContainer extends PureComponent {
    _showTagModal() {
        TagModal('');
    }

    render() {
        const { selectedIconStyle } = styleConfig;
        const tagList = ['Javascript', 'CSS'];

        return (
            <div>
                <NavBar iconName="null"
                  mode="light"
                  rightContent={<FaIcons.FaPlusCircle
                    style={selectedIconStyle}
                    onClick={() => { this._showTagModal(); }}
                  />}
                >Tags</NavBar>
                <List>
                    {tagList.map((tag, index) => {
                        return <TagItem key={index} tag={tag} />;
                    })}
                </List>
            </div>
        );
    }
}

export default connect(null, {
    pushAction: routeActions.push
})(TagContainer);
