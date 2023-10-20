import { Link } from 'react-router-dom';
import { IoCarSport } from 'react-icons/io5';
import css from './Header.module.css';

export const Header = () => {
  return (
    <div className={css.header}>
      <nav className={css.nav}>
        <Link to="/" className={css.link}>
          <IoCarSport size={40}></IoCarSport>
          CarSharing
        </Link>
        <div className={css.linksContainer}>
          <Link to="/catalog" className={`${css.link} ${css.contLinks}`}>
            Catalog
          </Link>
          <Link to="/favorites" className={`${css.link} ${css.contLinks}`}>
            Favorites
          </Link>
        </div>
      </nav>
    </div>
  );
};
