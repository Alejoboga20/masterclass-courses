import { routePaths } from 'constants/common';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
	return (
		<nav className={styles.header}>
			<h1 className={styles.header__title}>Instructors</h1>

			<div className={styles.header__navigation}>
				<NavLink
					style={(navData) => (navData.isActive ? { color: '#ff1a66', fontWeight: 'bold' } : {})}
					to={routePaths.courses}
				>
					All
				</NavLink>
				<NavLink
					style={(navData) => (navData.isActive ? { color: '#ff1a66', fontWeight: 'bold' } : {})}
					to={routePaths.favorites}
				>
					Favorites
				</NavLink>
			</div>
			<hr />
		</nav>
	);
};
