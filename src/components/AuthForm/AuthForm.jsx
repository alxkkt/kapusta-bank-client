import { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

import s from './AuthForm.module.scss';

const clientId =
  '2996877303-j7ihpaskfovb4k023h83sfg5rj5tjosm.apps.googleusercontent.com';

const initialState = {
  email: '',
  password: '',
};

const AuthForm = ({ register, login, onSuccess, onFailure }) => {
  const [form, setForm] = useState({ ...initialState });

  useEffect(() => {
    // global google
    function startGapi() {
      gapi.client.init({
        clientId,
        scope: 'openid profile email',
      });
    }

    gapi.load('client:auth2', startGapi);
  }, []);

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
  const resSuccessGoogle = async res => {
    onSuccess({ tokenId: res.tokenId });
  };

  const resFailureGoogle = async res => {
    console.log('blydska morda');
    onFailure(res);
  };

  const { email, password } = form;

  return (
    <div className={s.wrap}>
      <div className={s.login}>
        <GoogleLogin
          clientId="2996877303-j7ihpaskfovb4k023h83sfg5rj5tjosm.apps.googleusercontent.com"
          buttonText="Login by Google"
          onSuccess={resSuccessGoogle}
          onFailure={resFailureGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
      <h2 className={s.title}>
        or You can login using an email and password, after registering:
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
