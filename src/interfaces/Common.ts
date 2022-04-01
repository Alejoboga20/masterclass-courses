export interface Route {
	path: string;
	Element: () => JSX.Element;
}
