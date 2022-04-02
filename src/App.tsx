import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from 'router';

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				{React.Children.toArray(
					routes.map(({ path, Element }) => <Route path={path} element={<Element />} />)
				)}
				<Route path='*' element={<Navigate to='/courses' replace />} />
			</Routes>
		</BrowserRouter>
	);
};
