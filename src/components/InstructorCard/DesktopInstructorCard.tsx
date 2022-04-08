import { useState } from 'react';
import { useFavorite } from 'hooks/useFavorite';
import { IntructorCardProps } from './InstructorCard';
import { text } from 'constants/common';
import Heart from 'assets/heart.png';
import styles from './InstructorCard.module.css';

export const DesktopInstructorCard = ({
  favorite,
  id,
  instructor_image_url,
  instructor_name,
  title,
}: IntructorCardProps) => {
  const { handleOnClick, isFavorite, isLoading } = useFavorite(favorite, id);
  const [isMouseIn, setIsMouseIn] = useState(false);

  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => setIsMouseIn(true);
  const onMouseLeaver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => setIsMouseIn(false);

  return (
    <div
      className={isLoading ? styles.instructor__loading : styles.instructor__container}
      onClick={isLoading ? () => {} : handleOnClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeaver}
      data-cy="instructors"
    >
      <div className={styles.instructor__image}>
        <img src={instructor_image_url} alt={instructor_name} />
      </div>

      <div className={styles.instructor__text}>
        <div>
          <h3 className={styles.instructor__name}>{instructor_name}</h3>
          <p className={styles.instructor__title}>{title}</p>
        </div>

        {isMouseIn && (
          <small className={styles.instructor__alert}>
            {isFavorite ? text.removeFavorites : text.addFavorites}
          </small>
        )}
      </div>

      {(isFavorite || isMouseIn) && (
        <div className={styles.instructor__fav}>
          <img src={Heart} alt="FavIcon" />
        </div>
      )}
    </div>
  );
};
