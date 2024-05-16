import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SignupView } from '@/views/SignupView';
import { AuthLayout } from '@/Layouts/AuthLayout';

const authPaths = {
  path: '',
  element: (
    <Suspense fallback={<div>loading...</div>}>
      <Outlet />
    </Suspense>
  ),

  children: [
    {
      path: 'login',
      element: (
        <AuthLayout page="login">
          <h1>Login View (TODO)</h1>
        </AuthLayout>
      ),
    },

    {
      path: 'signup',
      element: (
        <AuthLayout page="signup">
          <SignupView />
        </AuthLayout>
      ),
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
