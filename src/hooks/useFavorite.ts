import { useContext, useEffect, useState } from 'react';
import { SetFavoriteResponse } from 'interfaces/Favorites';
import { CoursesContext } from 'context/CoursesContext';
import { IntructorCardProps } from 'components/InstructorCard/InstructorCard';
import { endpoints } from 'constants/common';
import client from 'api/coursesApi';

export const useFavorite = ({
	favorite,
	id,
	instructor_image_url,
	instructor_name,
	title,
}: IntructorCardProps) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const { setCoursesState, instructors, favInstructors } = useContext(CoursesContext);

	const handleOnClick = () => (isFavorite ? handleDeleteFavorite() : handleSetFavorite());

	const handleSetFavorite = async () => {
		try {
			await client.post<SetFavoriteResponse>(endpoints.favorite, {
				course_id: id,
				email: process.env.REACT_APP_EMAIL,
			});
			setCoursesState((prevState) => ({
				...prevState,
				favInstructors: favInstructors.concat({
					favorite,
					id,
					instructor_image_url,
					instructor_name,
					title,
				}),
			}));
			setIsFavorite(true);
		} catch (e) {
			throw new Error(JSON.stringify(e, null, 2));
		}
	};

	const handleDeleteFavorite = async () => {
		try {
			await client.delete(endpoints.favorite, {
				params: {
					course_id: id,
					email: process.env.REACT_APP_EMAIL,
				},
			});

			setCoursesState((prevState) => ({
				...prevState,
				favInstructors: favInstructors.filter((instructor) => instructor.id !== id),
				instructors: instructors.map((instructor) =>
					instructor.id === id ? { ...instructor, favorite: false } : instructor
				),
			}));
			setIsFavorite(false);
		} catch (e) {
			throw new Error(JSON.stringify(e, null, 2));
		}
	};

	useEffect(() => {
		setIsFavorite(favorite);
	}, [favorite]);

	return { isFavorite, handleOnClick };
};
