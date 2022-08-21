import { useState, useEffect, useCallback, memo } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

import toast, { Toaster } from 'react-hot-toast';
import PropType from 'prop-types';

import s from './AuthForm.module.scss';

// const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

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

  const handleChange = useCallback(({ target }) => {
    const { name, value } = target;
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const onSignIn = useCallback(() => {
    const { email, password } = form;
    if (!email.trim().length || !password.trim().length) {
      toast.error('Please fill all fields');
      return;
    }

    login({ ...form });
    setForm({ ...initialState });
  }, [form, login]);
  const onSignUp = () => {
    const { email, password } = form;
    if (!email.trim().length || !password.trim().length) {
      toast.error('Please fill all fields');
      return;
    }
    register({ ...form });
    setForm({ ...initialState });
  };
  const resSuccessGoogle = useCallback(
    async res => {
      onSuccess({ tokenId: res.tokenId });
    },
    [onSuccess]
  );

  const resFailureGoogle = useCallback(
    async res => {
      onFailure(res);
    },
    [onFailure]
  );

  const { email, password } = form;

  return (
    <div className={s.wrap}>
      <h2 className={s.title}>You can log in with your Google Account:</h2>
      <div className={s.login}>
        {/* <GoogleLogin
          clientId="2996877303-j7ihpaskfovb4k023h83sfg5rj5tjosm.apps.googleusercontent.com"
          buttonText="Google"
          // className={s.google}
          onSuccess={resSuccessGoogle}
          onFailure={resFailureGoogle}
          cookiePolicy={'single_host_origin'}
        /> */}
        <GoogleLogin
          clientId="2996877303-j7ihpaskfovb4k023h83sfg5rj5tjosm.apps.googleusercontent.com"
          render={renderProps => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className={s.google}
            >
              Google
            </button>
          )}
          buttonText="Google"
          onSuccess={resSuccessGoogle}
          onFailure={resFailureGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
      <h2 className={s.title}>
        or login using an email and password, after registering:
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
      <Toaster />
    </div>
  );
};

AuthForm.propTypes = {
  register: PropType.func.isRequired,
  login: PropType.func.isRequired,
  onSuccess: PropType.func.isRequired,
  onFailure: PropType.func.isRequired,
};

export default memo(AuthForm);
