import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { NavBar, List, InputItem, TextareaItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

import * as routeActions from '../../../redux/actions/routeActions';
import * as tabActions from '../../../redux/actions/tabActions';

class CategoryFormContainer extends PureComponent {
    _onSubmit() {

    }

    _onReset() {

    }

    _validateTagName(rule, value, callback) {
        if (value && value.length > 4) {
            callback();
        } else {
            callback(new Error('invalid name length (<4)'));
        }
    }

    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        const { goBackAction, toggleTabActions } = this.props;

        return (
            <div>
                <NavBar leftContent="back"
                  mode="light"
                  onLeftClick={() => {
                      toggleTabActions();
                      goBackAction();
                  }}
                />

                <form>
                    <List
                      renderHeader={() => { return 'Category Form'; }}
                      renderFooter={() => {
                          return getFieldError('name') && getFieldError('name').join(', ');
                      }}
                    >
                        <InputItem
                          {...getFieldProps('name', {
                              initialValue: 'JavaScript',
                              rules: [
                                  { required: true, message: 'please input name' },
                                  { validator: this._validateTagName },
                              ],
                          })}
                          clear
                          error={!!getFieldError('name')}
                          onErrorClick={() => {
                              alert(getFieldError('name').join('、'));
                          }}
                          placeholder="name..."
                        />
                        <TextareaItem
                          {...getFieldProps('description')}
                          autoHeight
                          rows="4"
                          placeholder="description..."
                        />
                        <List.Item>
                            <Button type="primary" onClick={this._onSubmit} inline>提交验证</Button>
                            <Button onClick={this._onReset} inline style={{ marginLeft: 5 }}>重置</Button>
                        </List.Item>
                    </List>
                </form>
            </div>
        );
    }
}

export default connect(null, {
    goBackAction: routeActions.goBack,
    toggleTabActions: tabActions.toggleTab
})(createForm()(CategoryFormContainer));
