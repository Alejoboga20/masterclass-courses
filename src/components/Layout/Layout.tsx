import { Header } from 'components';

export const Layout = ({ ListComponent }: LayoutProps) => {
	return (
		<>
			<Header />
			<div className='list__container'>{ListComponent}</div>
		</>
	);
};

interface LayoutProps {
	ListComponent: JSX.Element | JSX.Element[];
}
