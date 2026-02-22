import { create } from "zustand";

import type { User } from "@/entities/user";

interface State {
  user: User | null;
}

interface Actions {
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<State & Actions>()((set) => ({
  user: null,
  login: (user) => {
    set({ user });
  },
  logout: () => {
    set({ user: null });
  },
}));
