import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import Button from '../Button';
import Icon from '../Icon';

import s from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onNo();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onNo();
    }
  };

  render() {
    const { title, onYes, onNo } = this.props;
    return createPortal(
      <div className={s.modalOverlay} onClick={this.handleOverlayClick}>
        <div className={s.modalContent}>
          <button type="button" onClick={onNo} className={s.closeModalBtn}>
            <Icon
              width="12"
              height="12"
              name="icon-close"
              className={s.iconClose}
            />
          </button>
          <p className={s.modalText}>{title}</p>
          <ul className={s.modalContentWrapper}>
            <li className={s.btnWrapper}>
              <Button text={'Yes'} btnAction={onYes} />
            </li>
            <li className={s.btnWrapper}>
              <Button text={'No'} btnAction={onNo} />
            </li>
          </ul>
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
