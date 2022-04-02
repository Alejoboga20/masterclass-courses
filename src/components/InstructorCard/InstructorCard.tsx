import styles from './InstructorCard.module.css';

export const InstructorCard = ({
	title,
	instructor_name,
	instructor_image_url,
}: IntructorCardProps) => {
	return (
		<div className={styles.instructor__container}>
			<div className={styles.instructor__image}>
				<img src={instructor_image_url} alt={instructor_name} />
			</div>

			<div className={styles.instructor__text}>
				<h3 className={styles.instructor__name}>{instructor_name}</h3>

				<p className={styles.instructor__title}>{title}</p>
			</div>
		</div>
	);
};

interface IntructorCardProps {
	title: string;
	instructor_name: string;
	instructor_image_url: string;
	favorite: boolean;
	id: number;
}
