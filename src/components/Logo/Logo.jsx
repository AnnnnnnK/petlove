import { Link } from 'react-router-dom';
import Icon from '../../hooks/Icon';
import { logo, heart } from './Logo.module.css';

const Logo = () => {
  return (
    <div>
      <Link to="/home" className={logo}>
        petl
        <Icon id="icon-nova" className={heart} width="18" height="16" />
        ve
      </Link>
    </div>
  );
};

export default Logo;
