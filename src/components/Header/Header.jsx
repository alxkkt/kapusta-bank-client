import Logo from './Logo';
import UserMenu from './UserMenu';
import s from './Header.module.scss';
// import useLogin from '../../shared/hooks/isUserLogin';

const Header = () => {
  // const isLogin = useLogin();
  return (
    <div className={s.header}>
      <Logo />
      {/* {isLogin && <UserMenu />} */}
      <UserMenu />
    </div>
  );
};

export default Header;
