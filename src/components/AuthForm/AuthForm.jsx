import { useState } from 'react';

import s from './AuthForm.module.scss';

const initialState = {
  email: '',
  password: '',
};

const AuthForm = ({ register, login }) => {
  const [form, setForm] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSignIn = () => {
    login({ ...form });
    setForm({ ...initialState });
  };
  const onSignUp = () => {
    register({ ...form });
    setForm({ ...initialState });
  };

  const { email, password } = form;

  return (
    <div className={s.wrap}>
      <h2 className={s.title}>Login to our app using e-mail and password:</h2>
      <form action="" className={s.form}>
        <div className={s.wrapInput}>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="E-mail"
            className={s.input}
            value={email}
          />
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
            className={s.input}
            value={password}
          />
        </div>
        <div className={s.wrapButton}>
          <button
            className={s.buttonSignIn}
            onClick={() => onSignIn()}
            type="button"
          >
            SIGN IN
          </button>
          <button
            className={s.buttonSignUp}
            onClick={() => onSignUp()}
            type="button"
          >
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
};
export default AuthForm;
