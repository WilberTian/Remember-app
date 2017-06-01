import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { NavBar, Badge } from 'antd-mobile';
import * as FaIcons from 'react-icons/fa';

import * as routeActions from '../../../redux/actions/routeActions';
import * as tabActions from '../../../redux/actions/tabActions';
import { dimensions } from '../../../configs/constants';

class DimensionContainer extends PureComponent {
    _navBack() {
        const { goBackAction, toggleTabActions } = this.props;
        toggleTabActions();
        goBackAction();
    }

    render() {
        const DimensionWraper = styled.div`
            display: flex;
            position: absolute;
            top: 90px;
            left: 0px;
            bottom: 0px;
            right: 0px;
            background-color: #fff;
        `;

        const DimensionLinear = styled.div`
            width: 16px;
            background: linear-gradient(#F44336, #f7f7f7);
            border-radius: 8px;
            margin: 8px;
            position: relative;

            &::before {
                content: '';
                position: absolute;
                top: -6px;
                left: -8px;
                border-left: 16px solid transparent;
                border-right: 16px solid transparent;
                border-bottom: 16px solid #F44336;
            }
        `;

        const DimensionItemWrapper = styled.div`
            flex: 1;
            display: flex;
            flex-direction: column;
        `;

        const DimensionItem = styled.div`
            display: flex;
            flex-direction: column;
            height: 25%;
            margin: 8px;
            border-radius: 8px;
            border: ${(props) => { return props.border; }};
        `;

        const DimensionItemHeader = styled.div`
            padding: 0 .2rem;
            height: .8rem;
            line-height: .8rem;
            border-radius: 8px;
            background-color: aliceblue;
            color: #5a5756
        `;

        const DimensionItemContent = styled.div`
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 8px;
        `;

        const TaskCounter = styled.div`
            text-align: right;
            color: #607D8B;
        `;

        const TaskCounterBar = styled.div`
            border-radius: 8px;
            color: #fff;
            background-color: ${(props) => { return props.bgColor; }};
            width: ${(props) => { return props.progress; }};
            height: 12px;
        `;
        return (
            <div>
                <NavBar mode="light" leftContent="back" onLeftClick={::this._navBack}>Dim</NavBar>
                <DimensionWraper>
                    <DimensionLinear />
                    <DimensionItemWrapper>
                        { dimensions.map((dimension, index) => {
                            return (
                                <DimensionItem key={index} border="2px solid #999">
                                    <DimensionItemHeader>
                                        {dimension.text}
                                        <Badge text={'20'} style={{ marginLeft: '16px' }} />
                                        <FaIcons.FaList
                                          style={{
                                              float: 'right',
                                              color: '#4c4f52',
                                              height: '.8rem',
                                              lineHeight: '.8rem'
                                          }}
                                        />
                                    </DimensionItemHeader>
                                    <DimensionItemContent>
                                        <TaskCounter>
                                            Complete
                                            <TaskCounterBar bgColor="#21b68a" progress="70%" />
                                        </TaskCounter>
                                        <TaskCounter>
                                            Incomplete
                                            <TaskCounterBar bgColor="#f35d52" progress="30%" />
                                        </TaskCounter>
                                    </DimensionItemContent>
                                </DimensionItem>
                            );
                        }) }
                    </DimensionItemWrapper>
                </DimensionWraper>
            </div>
        );
    }
}

export default connect(null, {
    goBackAction: routeActions.goBack,
    toggleTabActions: tabActions.toggleTab
})(DimensionContainer);
