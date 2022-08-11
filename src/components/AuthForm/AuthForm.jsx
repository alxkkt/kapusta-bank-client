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
      <h2 className={s.title}>
        You can log in using an email and password, after registering:
      </h2>
      <form action="" className={s.form}>
        <div className={s.wrapInput}>
          <label htmlFor="email" className={s.text}>
            Email
          </label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Enter your email"
            className={s.input}
            value={email}
          />
          <label htmlFor="password" className={s.text}>
            Password
          </label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Enter your password"
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
            Log In
          </button>
          <button
            className={s.buttonSignUp}
            onClick={() => onSignUp()}
            type="button"
          >
            Registration
          </button>
        </div>
      </form>
    </div>
  );
};
export default AuthForm;
