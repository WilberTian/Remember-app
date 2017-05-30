import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { NavBar } from 'antd-mobile';
import * as FaIcons from 'react-icons/fa';

import * as styleConfig from '../../../configs/style';
import * as routeActions from '../../../redux/actions/routeActions';
import * as tabActions from '../../../redux/actions/tabActions';

import CategoryList from './components/CategoryList';

import './category-list.less';

class CategoryListContainer extends PureComponent {
    _navToCategoryForm() {
        const { pushAction, toggleTabActions } = this.props;
        toggleTabActions();
        pushAction('category-form');
    }

    render() {
        const { whiteIconStyle } = styleConfig;

        const categoryList = ['Javascript', 'CSS'];

        return (
            <div>
                <NavBar iconName="null"
                  mode="light"
                  rightContent={<FaIcons.FaPlusCircle
                    style={whiteIconStyle}
                    onClick={() => { this._navToCategoryForm(); }}
                  />}
                >Categories</NavBar>
                <CategoryList categoryList={categoryList} />
            </div>
        );
    }
}

export default connect(null, {
    pushAction: routeActions.push,
    toggleTabActions: tabActions.toggleTab
})(CategoryListContainer);
