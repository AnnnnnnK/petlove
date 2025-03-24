import Nav from '../Nav/Nav';
import AuthNav from '../AuthNav/AuthNav';
import Logo from '../Logo/Logo';
import css from './Header.module.css';

export const Header = () => {
  return (
    <div className={css.container}>
      <Logo />
      <Nav />
      <AuthNav />
    </div>
  );
};
