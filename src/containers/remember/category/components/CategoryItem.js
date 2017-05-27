import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Button } from 'antd-mobile';
import * as FaIcons from 'react-icons/fa';

import * as routeActions from '../../../../redux/actions/routeActions';

class CategoryItem extends PureComponent {

    render() {
        const { description } = this.props;

        return (
            <div style={{ overflow: 'auto' }}>
                <div className="category-description-wrapper">
                    this is the content description
                </div>
                <div className="category-btn-wrapper">
                    <Button size="small" inline>
                        <FaIcons.FaEdit />
                    </Button>
                    <Button size="small" inline>
                        <FaIcons.FaTrashO />
                    </Button>
                </div>
            </div>
        );
    }
}

export default connect(null, {
    pushAction: routeActions.push
})(CategoryItem);
