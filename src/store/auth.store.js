import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

export const useAuthStore = create(
  devtools(
    persist(
      (set, get) => ({
        user: null,

        signup: async (user) => {
          const id = Math.random().toString(36).substring(7);
          set({
            user: {
              id,
              ...user,
            },
          });
        },

        isAuthed: () => {
          const got = get();
          return !!got.user?.id;
        },
      }),
      {
        name: 'auth-storage',
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
