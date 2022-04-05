import { useState } from 'react';
import { useFavorite } from 'hooks/useFavorite';
import { useDimensions } from 'hooks/useDimensions';
import { MobileInstructorCard } from './MobileInstructorCard';
import { DesktopInstructorCard } from './DesktopInstructorCard';

export const InstructorCard = (props: IntructorCardProps) => {
	const { isMobileDevice } = useDimensions();

	return (
		<>
			{isMobileDevice ? <MobileInstructorCard {...props} /> : <DesktopInstructorCard {...props} />}
		</>
	);
};

export interface IntructorCardProps {
	favorite: boolean;
	id: number;
	instructor_image_url: string;
	instructor_name: string;
	title: string;
}
