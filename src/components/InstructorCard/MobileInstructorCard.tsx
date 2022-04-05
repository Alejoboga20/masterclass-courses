import { useFavorite } from 'hooks/useFavorite';
import { IntructorCardProps } from './InstructorCard';
import Heart from 'assets/heart.png';
import styles from './InstructorCard.module.css';

export const MobileInstructorCard = ({
	favorite,
	id,
	instructor_image_url,
	instructor_name,
	title,
}: IntructorCardProps) => {
	const { handleOnClick, isFavorite, isLoading } = useFavorite(favorite, id);

	return (
		<div
			className={styles.mobile__container}
			style={isLoading ? { filter: 'blur(4px)' } : {}}
			onClick={isLoading ? () => {} : handleOnClick}
		>
			<div className={styles.mobile__image}>
				<img src={instructor_image_url} alt={instructor_name} />
			</div>

			<div className={styles.mobile__text}>
				<div>
					<h3 className={styles.mobile__name}>{instructor_name}</h3>
					<p className={styles.mobile__title}>{title}</p>
				</div>
			</div>

			{isFavorite && (
				<div className={styles.mobile__fav}>
					<img src={Heart} alt='FavIcon' />
				</div>
			)}
		</div>
	);
};
