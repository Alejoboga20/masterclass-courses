import { GetCoursesResponse } from 'interfaces/Courses';
import { useEffect, useState } from 'react';
import { endpoints } from 'constants/common';
import client from 'api/coursesApi';

export const useCourses = () => {
	const [coursesState, setCoursesState] = useState<InstructorsState>({
		instructors: [],
		isLoading: true,
	});

	const loadData = async () => {
		try {
			const { data } = await client.get<GetCoursesResponse[]>(endpoints.courses, {
				params: {
					'page[limit]': 20,
					'page[offset]': 1,
				},
			});

			setCoursesState({
				instructors: data,
				isLoading: false,
			});
		} catch (e) {
			throw new Error(JSON.stringify(e, null, 2));
		}
	};

	useEffect(() => {
		loadData();
	}, []);

	return { ...coursesState };
};

interface InstructorsState {
	instructors: GetCoursesResponse[];
	isLoading: boolean;
}
