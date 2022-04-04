import { Header } from 'components';

export const Layout = ({ ListComponent }: LayoutProps) => {
	return (
		<>
			<Header />
			{ListComponent}
		</>
	);
};

interface LayoutProps {
	ListComponent: JSX.Element | JSX.Element[];
}
