import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../../../shared/components/Icon';
// import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <NavLink exact to="/">
      <Icon name="icon-logo" width="90" height="31" />
    </NavLink>
  );
};

export default Logo;