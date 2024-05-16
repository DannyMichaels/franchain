import { Link } from 'react-router-dom';
import './NavLink.css';
import ArrowRight from '@/assets/images/arrow-right.svg';

export const NavLink = ({ title, to }) => {
  return (
    <div className="NavLink__container">
      <Link to={to} className="NavLink">
        {title}
      </Link>

      <img src={ArrowRight} alt="Arrow right" className="NavLink__icon" />
    </div>
  );
};
