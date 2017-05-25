import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { SwipeAction, List } from 'antd-mobile';

import * as routeActions from '../../../../redux/actions/routeActions';

class CategoryItem extends PureComponent {

    render() {
        const { category } = this.props;

        return (
            <SwipeAction
              style={{ backgroundColor: 'gray' }}
              autoClose
              right={[
                  {
                      text: 'Cancel',
                      onPress: () => {
                          console.log('cancel');
                      },
                      style: { backgroundColor: '#ddd', color: 'white' },
                  },
                  {
                      text: 'Delete',
                      onPress: () => {
                          console.log('delete');
                      },
                      style: { backgroundColor: '#F4333C', color: 'white' },
                  }
              ]}
              left={[
                  {
                      text: 'Reply',
                      onPress: () => {
                          console.log('reply');
                      },
                      style: { backgroundColor: '#108ee9', color: 'white' },
                  },
                  {
                      text: 'Cancel',
                      onPress: () => {
                          console.log('cancel');
                      },
                      style: { backgroundColor: '#ddd', color: 'white' },
                  }
              ]}
              onOpen={() => {
                  console.log('global open');
              }}
              onClose={() => {
                  console.log('global close');
              }}
            >
                <List.Item extra="More" arrow="horizontal">
                    {category}
                </List.Item>
            </SwipeAction>

        );
    }
}

export default connect(null, {
    pushAction: routeActions.push
})(CategoryItem);
