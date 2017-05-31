import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import showdown from 'showdown';

import { NavBar, TextareaItem } from 'antd-mobile';

import * as FaIcons from 'react-icons/fa';

import * as routeActions from '../../../redux/actions/routeActions';
import * as tabActions from '../../../redux/actions/tabActions';

import ConfirmModal from '../../../components/ConfirmModal';

import './note-form.less';

class NoteFormContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isPreview: false,
            note: ''
        };

        this.converter = new showdown.Converter();
    }

    _togglePreview() {
        console.log(this.state.isPreview);
        this.setState({
            isPreview: !this.state.isPreview
        });
    }

    _noteChange(value) {
        this.setState({
            note: value
        });
    }

    render() {
        const { goBackAction, toggleTabActions } = this.props;

        return (
            <div className="note-form">
                <NavBar leftContent="back"
                  mode="light"
                  onLeftClick={() => {
                      toggleTabActions();
                      goBackAction();
                  }}
                />

                <div className="note-form-btns">
                    <FaIcons.FaFloppyO
                      style={{ color: '#009688' }}
                    />
                    { !this.state.isPreview &&
                        <FaIcons.FaEye
                          style={{ color: '#009688' }}
                          onClick={::this._togglePreview}
                        />
                    }
                    { this.state.isPreview &&
                        <FaIcons.FaEyeSlash
                          style={{ color: '#009688' }}
                          onClick={::this._togglePreview}
                        />
                    }
                    <FaIcons.FaClose
                      style={{ color: '#dc4513' }}
                      onClick={() => {
                          ConfirmModal();
                      }}
                    />
                </div>

                { !this.state.isPreview &&
                    <TextareaItem
                      autoHeight
                      rows="16"
                      placeholder="note..."
                      value={this.state.note}
                      onChange={::this._noteChange}
                    />
                }

                { this.state.isPreview &&
                    <div
                      className="note-preview"
                      dangerouslySetInnerHTML={{ __html: this.converter.makeHtml(this.state.note) }}
                    />
                }
            </div>
        );
    }
}

export default connect(null, {
    goBackAction: routeActions.goBack,
    toggleTabActions: tabActions.toggleTab
})(NoteFormContainer);
