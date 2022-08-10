import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useLogin from 'shared/hooks/isUserLogin';
import { useEffect } from 'react';

import { signIn, signUp } from '../../redux/auth/auth-operations';

import AuthForm from '../../components/AuthForm';

import s from './AuthPage.module.scss';

const AuthPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isLogin = useLogin();

  useEffect(() => {
    if (isLogin) navigate('/');
  }, [isLogin, navigate]);

  const registrNewUser = data => {
    dispatch(signUp(data));
  };

  const loginUser = data => {
    dispatch(signIn(data));
  };
  return (
    <div className={s.authPage}>
      {/* <div className={s.wrap}>
        <h1 className={s.title}>Pro Test</h1>
        <p className={s.text}>
          <b>[ </b>We will help you find weak points in knowledge so that you
          can strengthen it. We will show you what is relevant to know for a
          <b> QA Engineer </b>
          and will try to make the learning process more diverse_ <b> ]</b>
        </p>
      </div> */}
      <AuthForm register={registrNewUser} login={loginUser} />
    </div>
  );
};
export default AuthPage;
