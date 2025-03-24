import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          {' '}
          <NavLink to="/news">News</NavLink>
        </li>
        <li>
          <NavLink to="/notices">Find pet</NavLink>
        </li>
        <li>
          <NavLink to="/friends">Our friends</NavLink>{' '}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
