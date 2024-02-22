import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={css.header}>
      <nav>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        <NavLink className={css.link} to="/catalog">
          Catalog
        </NavLink>
        <NavLink className={css.link} to="/favorites">
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};
