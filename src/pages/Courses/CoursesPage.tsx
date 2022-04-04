import { useContext } from 'react';
import { Header, InstructorCard, Switch } from 'components';
import { CoursesContext } from 'context/CoursesContext';

export const CoursesPage = () => {
	const { instructors, isLoading, isOnlyFavorites, favInstructors, handleOnChange } =
		useContext(CoursesContext);

	const listToRender = isOnlyFavorites ? favInstructors : instructors;

	if (isLoading) return <p>Loading...</p>;

	return (
		<>
			<Header />
			<Switch onChange={handleOnChange} checked={isOnlyFavorites} />
			{listToRender.map((instructor) => (
				<InstructorCard {...instructor} key={instructor.id} />
			))}
		</>
	);
};
