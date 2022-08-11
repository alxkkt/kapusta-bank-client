import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import useLogin from '../../shared/hooks/isUserLogin';
import { signIn, signUp } from '../../redux/auth/auth-operations';

import toast, { Toaster } from 'react-hot-toast';

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
  };

  const loginUser = async data => {
    const { meta } = await dispatch(signIn(data));
    const { requestStatus } = meta;

    if (requestStatus === 'fulfilled') {
      toast.success('Welcome back!');
    }
    if (requestStatus === 'rejected') {
      toast.error('Something went wrong, please try again.');
    }
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
      <Toaster />
    </div>
  );
};
export default AuthPage;
