import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';

import getUserName from '../../../redux/auth/auth-selectors';
// import authOperations from '../../../redux/auth/auth-operations';
import Modal from '../../../shared/components/Modal';
import Icon from '../../../shared/components/Icon';

import s from './UserMenu.module.scss';

const UserMenu = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const name = useSelector(getUserName);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className={s.container}>
      <Avatar name={name} unstyled className={s.avatar} />
      <span className={s.userNameText}>{name}</span>
      <button type="button" className={s.logOutBtn} onClick={toggleModal}>
        <Icon name />
        <p className={s.logOutText}>Leave</p>
      </button>
    </div>
  );
};

export default UserMenu;
