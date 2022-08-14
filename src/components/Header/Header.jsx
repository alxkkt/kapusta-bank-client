import Logo from './Logo';
import UserMenu from './UserMenu';
import s from './Header.module.scss';
import useLogin from '../../shared/hooks/isUserLogin';

const Header = () => {
  const isLogin = useLogin();
  return (
    <div className={s.header}>
      <div className={s.headerWrapper}>
        <Logo />
        {isLogin && <UserMenu />}
        {/* <UserMenu /> */}
      </div>
    </div>
  );
};

export default Header;
