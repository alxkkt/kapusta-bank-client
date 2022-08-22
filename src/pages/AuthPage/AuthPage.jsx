import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useCallback } from 'react';

import useLogin from '../../shared/hooks/isUserLogin';
import {
  signIn,
  signUp,
  logInByGoogle,
} from '../../redux/auth/auth-operations';

import s from './AuthPage.module.scss';

import Header from '../../components/Header';
import AuthForm from '../../components/AuthForm';

import '../../sass/main.scss';

const AuthPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isLogin = useLogin();

  useEffect(() => {
    if (isLogin) navigate('/');
  }, [isLogin, navigate]);

  const registrNewUser = useCallback(
    async data => {
      await dispatch(signUp(data));
    },
    [dispatch]
  );

  const loginUser = useCallback(
    async data => {
      await dispatch(signIn(data));
    },
    [dispatch]
  );

  const googleSuccess = useCallback(
    async data => {
      await dispatch(logInByGoogle(data));
    },
    [dispatch]
  );

  const googleFailure = useCallback(async res => {
    console.log(res); // ! need to see in case of rejection
  }, []);

  return (
    <div className={s.bg}>
      <Header />
      <div className={s.authPage}>
        <div className={s.wrap}>
          <h1 className={s.title}>Kapu$ta</h1>
          <p className={s.text}>Smart Finance</p>
        </div>
        <AuthForm
          register={registrNewUser}
          login={loginUser}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
        />
      </div>
    </div>
  );
};
export default AuthPage;
