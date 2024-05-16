import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SignupView } from '@/views/SignupView';
import { AuthLayout } from '../Layouts/AuthLayout';

const authPaths = {
  path: '',
  element: (
    <Suspense fallback={<div>loading...</div>}>
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    </Suspense>
  ),

  children: [
    {
      path: 'login',
      // element: <LoginPage />,
    },

    {
      path: 'signup',
      element: <SignupView />,
    },
  ],
};

const authRoutes = [
  {
    path: 'auth',
    children: [authPaths],
  },
];

export default authRoutes;
