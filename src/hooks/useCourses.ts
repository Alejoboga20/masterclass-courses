import { GetCoursesResponse } from 'interfaces/Courses';
import { useEffect, useState } from 'react';
import { endpoints, scrollOffset } from 'constants/common';
import client from 'api/coursesApi';

export const useCourses = () => {
	const [coursesState, setCoursesState] = useState<CoursesState>({
		instructors: [],
		isLoading: true,
	});
	const [instructorsList, setInstructorsList] = useState<GetCoursesResponse[]>([]);
	const [page, setPage] = useState(1);

	const loadData = async () => {
		try {
			const { data } = await client.get<GetCoursesResponse[]>(endpoints.courses);

			setCoursesState({
				...coursesState,
				instructors: data,
				isLoading: false,
			});

			setInstructorsList(data.slice(0, page * scrollOffset));
		} catch (e) {
			throw new Error(JSON.stringify(e, null, 2));
		}
	};

	const sliceData = () => {
		setInstructorsList([...coursesState.instructors.slice(0, page * scrollOffset)]);
	};

	useEffect(() => {
		loadData();
	}, []);

	useEffect(() => {
		sliceData();
	}, [page, coursesState]);

	return { ...coursesState, instructorsList, page, setCoursesState, setPage };
};

interface CoursesState {
	instructors: GetCoursesResponse[];
	isLoading: boolean;
}
