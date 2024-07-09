import { useAuthStore } from '../../store/auth.store';

export const HomeView = () => {
  const { user } = useAuthStore();

  return (
    <div>
      <h1>Home</h1>
      <h3>
        Welcome, {user?.firstName} {user.lastName}!
      </h3>
    </div>
  );
};
