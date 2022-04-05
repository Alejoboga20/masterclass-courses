import { useContext, useEffect, useState } from 'react';
import { SetFavoriteResponse } from 'interfaces/Favorites';
import { CoursesContext } from 'context/CoursesContext';
import { endpoints } from 'constants/common';
import client from 'api/coursesApi';

export const useFavorite = (favorite: boolean, id: number) => {
	const [favoriteState, setFavoriteState] = useState<FavoriteState>({
		isFavorite: false,
		isLoading: false,
	});

	const { setCoursesState, instructors } = useContext(CoursesContext);
	const { isFavorite, isLoading } = favoriteState;

	const handleOnClick = () => (isFavorite ? handleDeleteFavorite() : handleSetFavorite());

	const handleSetFavorite = async () => {
		setFavoriteState({
			...favoriteState,
			isLoading: true,
		});
		try {
			await client.post<SetFavoriteResponse>(endpoints.favorite, {
				course_id: id,
				email: process.env.REACT_APP_EMAIL,
			});
			setCoursesState((prevState) => ({
				...prevState,
				instructors: instructors.map((instructor) =>
					instructor.id === id ? { ...instructor, favorite: true } : instructor
				),
			}));
			setFavoriteState({
				...favoriteState,
				isFavorite: true,
			});
		} catch (e) {
			throw new Error(JSON.stringify(e, null, 2));
		} finally {
			setFavoriteState({
				...favoriteState,
				isLoading: false,
			});
		}
	};

	const handleDeleteFavorite = async () => {
		setFavoriteState({
			...favoriteState,
			isLoading: true,
		});
		try {
			await client.delete(endpoints.favorite, {
				params: {
					course_id: id,
					email: process.env.REACT_APP_EMAIL,
				},
			});

			setCoursesState((prevState) => ({
				...prevState,
				instructors: instructors.map((instructor) =>
					instructor.id === id ? { ...instructor, favorite: false } : instructor
				),
			}));
			setFavoriteState({
				...favoriteState,
				isFavorite: false,
				isLoading: false,
			});
		} catch (e) {
			throw new Error(JSON.stringify(e, null, 2));
		} finally {
			setFavoriteState({
				...favoriteState,
				isLoading: false,
			});
		}
	};

	useEffect(() => {
		setFavoriteState({
			...favoriteState,
			isFavorite: favorite,
		});
	}, [favorite]);

	return { ...favoriteState, handleOnClick };
};

interface FavoriteState {
	isFavorite: boolean;
	isLoading: boolean;
}
