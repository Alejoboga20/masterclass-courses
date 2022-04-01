import { Route } from 'interfaces/Common';
import { CoursesPage, FavoritesPage } from 'pages';

export const routePaths = {
	courses: '/courses',
	favorites: '/favorites',
};

export const routes: Route[] = [
	{
		path: routePaths.courses,
		Element: CoursesPage,
	},
	{
		path: routePaths.favorites,
		Element: FavoritesPage,
	},
];
