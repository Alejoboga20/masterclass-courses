import { createContext } from 'react';
import { useCourses } from 'hooks/useCourses';
import { GetCoursesResponse } from 'interfaces/Courses';

interface CoursesState {
	instructors: GetCoursesResponse[];
	isLoading: boolean;
}

interface CoursesContextProps extends CoursesState {
	setCoursesState: React.Dispatch<React.SetStateAction<CoursesState>>;
}

export const CoursesContext = createContext({} as CoursesContextProps);

export const CoursesProvider = ({ children }: CoursesProviderProps) => {
	const { instructors, isLoading, setCoursesState } = useCourses();

	return (
		<CoursesContext.Provider
			value={{
				instructors,
				isLoading,
				setCoursesState,
			}}
		>
			{children}
		</CoursesContext.Provider>
	);
};

interface CoursesProviderProps {
	children: JSX.Element | JSX.Element[];
}
