import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../../../shared/components/Icon';

const Logo = () => {
  return (
    <NavLink exact="true" to="/">
      <Icon name="icon-logo" width="90" height="31" />
    </NavLink>
  );
};

export default Logo;
