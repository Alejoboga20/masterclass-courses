import { useState } from 'react';
import { endpoints } from 'constants/common';
import { SetFavoriteResponse } from 'interfaces/Favorites';
import client from 'api/coursesApi';

export const useFavorite = (favorite: boolean, id: number) => {
	const [isFavorite, setIsFavorite] = useState(favorite);

	const handleOnClick = () => (isFavorite ? handleDeleteFavorite() : handleSetFavorite());

	const handleSetFavorite = async () => {
		try {
			await client.post<SetFavoriteResponse>(endpoints.favorite, {
				course_id: id,
				email: process.env.REACT_APP_EMAIL,
			});
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
			setIsFavorite(false);
		} catch (e) {
			throw new Error(JSON.stringify(e, null, 2));
		}
	};

	return { isFavorite, handleOnClick };
};
