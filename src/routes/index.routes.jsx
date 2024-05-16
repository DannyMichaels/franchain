import { Navigate, useRoutes } from 'react-router-dom';
import authRoutes from './auth.routes';

export default function AppRouter() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to={'/auth/signup'} replace />,
    },

    ...authRoutes,
  ]);
}
