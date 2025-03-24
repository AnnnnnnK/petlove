import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <nav>
        <ul className={css.container}>
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
          <li>
            <NavLink to="/register">Registration</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AuthNav;
