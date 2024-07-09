import { useRoutes } from 'react-router-dom';
import authRoutes from './auth.routes';
import AuthGuard from '../guards/AuthGuard';
import { HomeView } from '../views/HomeView/HomeView';

export default function AppRouter() {
  return useRoutes([
    {
      path: '/',
      element: (
        <AuthGuard>
          <HomeView />
        </AuthGuard>
      ),
    },

    ...authRoutes,
  ]);
}
