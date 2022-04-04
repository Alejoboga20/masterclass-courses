import styles from './Header.module.css';

export const Header = () => {
	return (
		<nav className={styles.header}>
			<h1 className={styles.header__title}>Instructors</h1>
			<hr />
		</nav>
	);
};
