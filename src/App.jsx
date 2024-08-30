import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Main from './layout/Main';
import aboutRoutes from './routes/about';
import homeRoutes from './routes/index';
import servicesRoutes from './routes/services';

const AppRoutes = [
  {
    path: '/',
    element: <Main />,
    children: [
      ...homeRoutes,
      ...servicesRoutes,
      ...aboutRoutes
    ],
  },
];

const router = createBrowserRouter(AppRoutes);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
