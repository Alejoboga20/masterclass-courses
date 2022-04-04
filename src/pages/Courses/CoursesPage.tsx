import { useContext } from 'react';
import { InstructorCard, Layout } from 'components';
import { CoursesContext } from 'context/CoursesContext';

export const CoursesPage = () => {
	const { instructors, isLoading } = useContext(CoursesContext);

	if (isLoading) return <p>Loading...</p>;

	return (
		<Layout
			ListComponent={instructors.map((instructor) => (
				<InstructorCard {...instructor} key={instructor.id} />
			))}
		/>
	);
};
