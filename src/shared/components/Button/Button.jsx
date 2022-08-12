import React from 'react';

import s from './Button.module.scss';

const Button = ({ text, btnAction }) => {
  return (
    <div>
      <button type="button" className={s.button} onClick={btnAction}>
        {text}
      </button>
    </div>
  );
};

export default Button;
