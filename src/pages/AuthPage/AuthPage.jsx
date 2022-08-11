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
    <div className={s.bg}>
      <div className={s.authPage}>
        <div className={s.wrap}>
          <h1 className={s.title}>Kapusta</h1>
          <p className={s.text}>Smart Finance</p>
        </div>
        <AuthForm register={registrNewUser} login={loginUser} />
      </div>
    </div>
  );
};
export default AuthPage;
