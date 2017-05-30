import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Button } from 'antd-mobile';
import * as FaIcons from 'react-icons/fa';

import * as routeActions from '../../../../redux/actions/routeActions';
import * as tabActions from '../../../../redux/actions/tabActions';


import ConfirmModal from '../../../../components/ConfirmModal';

class CategoryItem extends PureComponent {
    _navToCategoryForm() {
        const { pushAction, toggleTabActions } = this.props;
        toggleTabActions();
        pushAction('category-form');
    }

    render() {
        const { description } = this.props;

        return (
            <div style={{ overflow: 'auto' }}>
                <div className="category-description-wrapper">
                    this is the content description
                </div>
                <div className="category-btn-wrapper">
                    <Button size="small" inline onClick={::this._navToCategoryForm}>
                        <FaIcons.FaEdit />
                    </Button>
                    <Button size="small" inline onClick={() => {
                        ConfirmModal();
                    }}
                    >
                        <FaIcons.FaTrashO />
                    </Button>
                </div>
            </div>
        );
    }
}

export default connect(null, {
    pushAction: routeActions.push,
    toggleTabActions: tabActions.toggleTab
})(CategoryItem);
