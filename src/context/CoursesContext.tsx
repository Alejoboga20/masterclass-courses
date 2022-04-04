import { useCourses } from 'hooks/useCourses';
import { GetCoursesResponse } from 'interfaces/Courses';
import { createContext } from 'react';

interface CoursesState {
	instructors: GetCoursesResponse[];
	favInstructors: GetCoursesResponse[];
	isLoading: boolean;
	isOnlyFavorites: boolean;
}

const initialState: CoursesState = {
	instructors: [],
	favInstructors: [],
	isOnlyFavorites: false,
	isLoading: true,
};

interface CoursesContextProps extends CoursesState {
	handleOnChange: () => void;
	setCoursesState: React.Dispatch<React.SetStateAction<CoursesState>>;
}

export const CoursesContext = createContext({} as CoursesContextProps);

export const CoursesProvider = ({ children }: CoursesProviderProps) => {
	const {
		instructors,
		isLoading,
		isOnlyFavorites,
		favInstructors,
		handleOnChange,
		setCoursesState,
	} = useCourses();

	return (
		<CoursesContext.Provider
			value={{
				instructors,
				favInstructors,
				isOnlyFavorites,
				isLoading,
				handleOnChange,
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
