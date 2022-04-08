const testRoutes = {
  favorites: 'favorites',
  courses: 'courses',
};

export const testCases = [
  {
    name: 'Should Go to Favorites Tab',
    route: testRoutes.favorites,
    selector: '[data-cy=favorites]',
  },
  {
    name: 'Should Go to Courses Tab',
    route: testRoutes.courses,
    selector: '[data-cy=courses]',
  },
];
