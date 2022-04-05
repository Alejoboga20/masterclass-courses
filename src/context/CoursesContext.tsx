import { createContext } from 'react';
import { useCourses } from 'hooks/useCourses';
import { GetCoursesResponse } from 'interfaces/Courses';

interface CoursesState {
	instructors: GetCoursesResponse[];
	isLoading: boolean;
}

interface CoursesContextProps extends CoursesState {
	page: number;
	instructorsList: GetCoursesResponse[];
	setCoursesState: React.Dispatch<React.SetStateAction<CoursesState>>;
	setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const CoursesContext = createContext({} as CoursesContextProps);

export const CoursesProvider = ({ children }: CoursesProviderProps) => {
	const { instructors, instructorsList, isLoading, page, setCoursesState, setPage } = useCourses();

	return (
		<CoursesContext.Provider
			value={{
				instructors,
				instructorsList,
				isLoading,
				page,
				setCoursesState,
				setPage,
			}}
		>
			{children}
		</CoursesContext.Provider>
	);
};

interface CoursesProviderProps {
	children: JSX.Element | JSX.Element[];
}
