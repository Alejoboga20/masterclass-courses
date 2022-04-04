import { useFavorite } from 'hooks/useFavorite';
import Heart from 'assets/heart.png';
import styles from './InstructorCard.module.css';

export const InstructorCard = ({
	favorite,
	id,
	instructor_image_url,
	instructor_name,
	title,
}: IntructorCardProps) => {
	const { handleOnClick, isFavorite } = useFavorite(favorite, id);

	return (
		<div className={styles.instructor__container} onClick={handleOnClick}>
			<div className={styles.instructor__image}>
				<img src={instructor_image_url} alt={instructor_name} />
			</div>

			<div className={styles.instructor__text}>
				<h3 className={styles.instructor__name}>{instructor_name}</h3>
				<p className={styles.instructor__title}>{title}</p>
			</div>

			{isFavorite && (
				<div className={styles.instructor__fav}>
					<img src={Heart} alt='FavIcon' />
				</div>
			)}
		</div>
	);
};

interface IntructorCardProps {
	favorite: boolean;
	id: number;
	instructor_image_url: string;
	instructor_name: string;
	title: string;
}
