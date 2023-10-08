import { Link } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <div className={css.header}>
      <nav className={css.nav}>
        <Link to="/" className={css.link}>
          Home
        </Link>
        <div className={css.linksConteiner}>
          <Link to="/catalog" className={css.link}>
            Catalog
          </Link>
          <Link to="/favorites" className={css.link}>
            Favorites
          </Link>
        </div>
      </nav>
    </div>
  );
};
