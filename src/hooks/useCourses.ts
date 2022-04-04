import { GetCoursesResponse } from 'interfaces/Courses';
import { useCallback, useEffect, useState } from 'react';
import { endpoints } from 'constants/common';
import client from 'api/coursesApi';

export const useCourses = () => {
	const [coursesState, setCoursesState] = useState<CoursesState>({
		instructors: [],
		favInstructors: [],
		isOnlyFavorites: false,
		isLoading: true,
	});

	const handleOnChange = () => {
		setCoursesState(({ isOnlyFavorites: prevChecked }) => ({
			...coursesState,
			isOnlyFavorites: !prevChecked,
		}));
	};

	const loadData = async () => {
		try {
			const { data } = await client.get<GetCoursesResponse[]>(endpoints.courses, {
				params: {
					'page[limit]': 20,
					'page[offset]': 1,
				},
			});

			setCoursesState({
				...coursesState,
				instructors: data,
				favInstructors: data.filter((item) => item.favorite),
				isLoading: false,
			});
		} catch (e) {
			throw new Error(JSON.stringify(e, null, 2));
		}
	};

	useEffect(() => {
		loadData();
	}, []);

	return { ...coursesState, handleOnChange, setCoursesState };
};

interface CoursesState {
	instructors: GetCoursesResponse[];
	favInstructors: GetCoursesResponse[];
	isLoading: boolean;
	isOnlyFavorites: boolean;
}
