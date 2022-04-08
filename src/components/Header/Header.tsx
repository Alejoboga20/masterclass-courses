import { routePaths, text } from 'constants/common';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <nav className={styles.header}>
      <h1 className={styles.header__title}>{text.headerTitle}</h1>

      <div className={styles.header__navigation}>
        <NavLink
          className={navData => (navData.isActive ? styles.header__active : styles.header__link)}
          to={routePaths.courses}
          data-cy="courses"
        >
          {text.coursesLink}
        </NavLink>
        <NavLink
          className={navData => (navData.isActive ? styles.header__active : styles.header__link)}
          to={routePaths.favorites}
          data-cy="favorites"
        >
          {text.favoritesLink}
        </NavLink>
      </div>
      <hr />
    </nav>
  );
};
