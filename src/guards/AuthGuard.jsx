import { useEffect } from 'react';
import { useAuthStore } from '../store/auth.store';
import { useNavigate } from 'react-router-dom';

export default function AuthGuard({ children }) {
  const { isAuthed } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(
      'storage',
      JSON.parse(localStorage.getItem('auth-storage')).state
    );
    if (!isAuthed()) {
      navigate('/auth/signup');
    }
  }, [isAuthed, navigate]);

  return children;
}
