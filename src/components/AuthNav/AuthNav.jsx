import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {' '}
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
