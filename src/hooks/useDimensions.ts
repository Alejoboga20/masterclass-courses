import { useEffect, useState } from 'react';

export const useDimensions = () => {
	const [isMobileDevice, setIsMobileDevice] = useState(false);

	useEffect(() => {
		const setDimensions = () => {
			setIsMobileDevice(window.innerWidth < 680);
		};

		setDimensions();

		window.addEventListener('resize', () => setDimensions());

		return () => {
			window.removeEventListener('resize', () => setDimensions());
		};
	}, []);

	return {
		isMobileDevice,
	};
};
