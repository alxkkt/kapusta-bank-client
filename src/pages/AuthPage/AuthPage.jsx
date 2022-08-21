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

import toast, { Toaster } from 'react-hot-toast';

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
      const { meta } = await dispatch(signUp(data));
      const { requestStatus } = meta;

      if (requestStatus === 'fulfilled') {
        toast.success(
          ' You will receive an email in a few minutes, please verify your email to continue.'
        );
      }
      if (requestStatus === 'rejected') {
        toast.error('Something went wrong, please try again.');
      }
    },
    [dispatch]
  );

  const loginUser = useCallback(
    async data => {
      const { meta } = await dispatch(signIn(data));
      const { requestStatus } = meta;

      if (requestStatus === 'fulfilled') {
        toast.success('Welcome back!');
      }
      if (requestStatus === 'rejected') {
        toast.error('Something went wrong, please try again.');
      }
    },
    [dispatch]
  );

  const googleSuccess = useCallback(
    async data => {
      const { meta } = await dispatch(logInByGoogle(data));
      const { requestStatus } = meta;
      if (requestStatus === 'fulfilled') {
        toast.success('Welcome back!');
      }
    },
    [dispatch]
  );

  const googleFailure = useCallback(async res => {
    toast.error('Something went wrong, please try again later');
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
      <Toaster />
    </div>
  );
};
export default AuthPage;
