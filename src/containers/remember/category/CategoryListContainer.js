import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { NavBar, List } from 'antd-mobile';
import * as FaIcons from 'react-icons/fa';

import * as styleConfig from '../../../configs/style';
import * as routeActions from '../../../redux/actions/routeActions';

import CategoryItem from './components/CategoryItem';

class CategoryListContainer extends PureComponent {
    _navToCategoryForm() {
    }

    render() {
        const { selectedIconStyle } = styleConfig;

        const categoryList = ['Javascript', 'CSS'];

        return (
            <div>
                <NavBar iconName="null"
                  mode="light"
                  rightContent={<FaIcons.FaPlusCircle
                    style={selectedIconStyle}
                    onClick={() => { this._navToCategoryForm(); }}
                  />}
                >Categories</NavBar>
                <List>
                    {categoryList.map((category, index) => {
                        return <CategoryItem key={index} category={category} />;
                    })}
                </List>
            </div>
        );
    }
}

export default connect(null, {
    pushAction: routeActions.push
})(CategoryListContainer);
