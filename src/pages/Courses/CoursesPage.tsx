import { useCallback, useContext, useEffect, useRef } from 'react';
import { InstructorCard, Layout } from 'components';
import { CoursesContext } from 'context/CoursesContext';

export const CoursesPage = () => {
	const { instructorsList, isLoading, setPage } = useContext(CoursesContext);
	const loader = useRef<HTMLDivElement>(null);

	const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
		const target = entries[0];
		if (target.isIntersecting) {
			setPage((prev) => prev + 1);
		}
	}, []);

	const handleCreateObserver = () => {
		const options = { root: null, rootMargin: '20px', threshold: 0 };
		const observer = new IntersectionObserver(handleObserver, options);

		if (loader.current) {
			observer.observe(loader.current);
		}
	};

	useEffect(() => {
		handleCreateObserver();
	}, [handleObserver, isLoading]);

	if (isLoading) return <p>Loading...</p>;

	return (
		<Layout
			ListComponent={
				<>
					{instructorsList.map((instructor) => (
						<InstructorCard {...instructor} key={instructor.id} />
					))}
					<div
						ref={loader}
						style={{
							backgroundColor: 'red',
						}}
					/>
				</>
			}
		/>
	);
};
