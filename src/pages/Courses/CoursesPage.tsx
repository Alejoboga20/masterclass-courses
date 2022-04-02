import { InstructorCard } from 'components';
import { useCourses } from '../../hooks/useCourses';

export const CoursesPage = () => {
	const { instructors, isLoading } = useCourses();

	if (isLoading) return <p>Loading...</p>;

	return (
		<div className='instructors'>
			<h1>Instructors</h1>
			<hr />
			<div className='instructors__list'>
				{instructors.map((instructor) => (
					<InstructorCard {...instructor} key={instructor.id} />
				))}
			</div>
		</div>
	);
};
