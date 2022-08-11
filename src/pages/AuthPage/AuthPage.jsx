import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import useLogin from '../../shared/hooks/isUserLogin';
import { signIn, signUp } from '../../redux/auth/auth-operations';

import s from './AuthPage.module.scss';

import AuthForm from '../../components/AuthForm';

const AuthPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isLogin = useLogin();

  useEffect(() => {
    if (isLogin) navigate('/');
  }, [isLogin, navigate]);

  const registrNewUser = async data => {
    dispatch(signUp(data));
  };

  const loginUser = data => {
    dispatch(signIn(data));
  };

  return (
    <div className={s.authPage}>
      <AuthForm register={registrNewUser} login={loginUser} />
    </div>
  );
};
export default AuthPage;
