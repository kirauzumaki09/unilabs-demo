import { create } from "zustand";

interface MobileNavState {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useMobileNav = create<MobileNavState>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));