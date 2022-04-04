import { useContext } from 'react';
import { InstructorCard, Layout } from 'components';
import { CoursesContext } from 'context/CoursesContext';

export const FavoritesPage = () => {
	const { instructors, isLoading } = useContext(CoursesContext);
	const favInstructors = instructors.filter((instructor) => instructor.favorite === true);

	if (isLoading) return <p>Loading...</p>;

	return (
		<Layout
			ListComponent={favInstructors.map((instructor) => (
				<InstructorCard {...instructor} key={instructor.id} />
			))}
		/>
	);
};
