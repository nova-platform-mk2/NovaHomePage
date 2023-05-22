import { create } from "zustand";

import jokbo1 from "../../resource/cat.png";

export const JokboStore = create((set) => ({
  documents: [{ image: jokbo1 }, { image: null }],
}));

export const pageListStore = create((set) => ({
  currentPage: 1,
  setCurrentPage: (page) => set({ currentPage: page }),
}));
