import ReactSwitch from 'react-switch';
import styles from './Switch.module.css';

export const Switch = ({ checked, onChange }: SwitchProps) => {
	return (
		<div className={styles.switch}>
			<ReactSwitch onChange={onChange} checked={checked} onColor='#ff1a66' />
			<span className={styles.switch__name}>Favorites</span>
		</div>
	);
};

interface SwitchProps {
	checked: boolean;
	onChange: () => void;
}
