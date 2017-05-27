import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Accordion } from 'antd-mobile';

import * as routeActions from '../../../../redux/actions/routeActions';

import CategoryItem from './CategoryItem';

class CategoryList extends PureComponent {

    render() {
        const { categoryList } = this.props;

        return (
            <Accordion className="category-list">
                {categoryList.map((category, index) => {
                    return (<Accordion.Panel key={index} header={category} className="category-list-item">
                        <CategoryItem description="this is category description" />
                    </Accordion.Panel>);
                })}
            </Accordion>
        );
    }
}

export default connect(null, {
    pushAction: routeActions.push
})(CategoryList);
