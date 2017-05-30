import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import * as FaIcons from 'react-icons/fa';

import * as routeActions from '../../../../redux/actions/routeActions';
import * as tabActions from '../../../../redux/actions/tabActions';

import ConfirmModal from '../../../../components/ConfirmModal';

class NoteItemComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            needExpand: false,
            expended: false
        };
    }

    componentDidMount() {
        const noteContentEl = this.noteContent;

        this._checkMultilineEllipsis();
        noteContentEl.addEventListener('webkitTransitionEnd', ::this._checkMultilineEllipsis);
        noteContentEl.addEventListener('transitionend', ::this._checkMultilineEllipsis);
    }

    componentWillUnmount() {
        const noteContentEl = this.noteContent;
        noteContentEl.removeEventListener('webkitTransitionEnd', ::this._checkMultilineEllipsis);
        noteContentEl.removeEventListener('transitionend', ::this._checkMultilineEllipsis);
    }

    _checkMultilineEllipsis() {
        const noteContentEl = this.noteContent;
        if (noteContentEl.scrollHeight > noteContentEl.offsetHeight) {
            this.setState({
                needExpand: true
            });
        }
    }
    _compressNote() {
        const noteContentEl = this.noteContent;
        noteContentEl.style.maxHeight = '2rem';

        this.setState({
            expended: false
        });
    }

    _expandNote() {
        const noteContentEl = this.noteContent;

        noteContentEl.style.maxHeight = `${noteContentEl.scrollHeight}px`;

        this.setState({
            expended: true
        });
    }

    _navToNoteForm() {
        const { pushAction, toggleTabActions } = this.props;
        toggleTabActions();
        pushAction('note-form');
    }

    render() {
        const { note } = this.props;

        const noteContentClass = cx({
            content: true,
            'multiline-ellipsis': this.state.needExpand && !this.state.expended
        });

        return (
            <div className="note-item">
                <div className="header">
                    { this.state.needExpand && this.state.expended &&
                        <FaIcons.FaCompress onClick={::this._compressNote} style={{ color: '#5a676d' }} />
                    }
                    { this.state.needExpand && !this.state.expended &&
                        <FaIcons.FaExpand onClick={::this._expandNote} style={{ color: '#5a676d' }} />
                    }
                    <FaIcons.FaPencil onClick={::this._navToNoteForm} style={{ color: '#009688' }} />
                    <FaIcons.FaClose
                      style={{ color: '#dc4513' }}
                      onClick={() => {
                          ConfirmModal();
                      }}
                    />
                </div>
                <div className={noteContentClass} ref={(ref) => {
                    this.noteContent = ref;
                }}
                >
                    {note}
                </div>
            </div>
        );
    }
}

export default connect(null, {
    pushAction: routeActions.push,
    toggleTabActions: tabActions.toggleTab
})(NoteItemComponent);
