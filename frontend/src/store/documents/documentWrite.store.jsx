import { create } from "zustand";

export const documentStore = create((set, get) => ({
    title: "",
    content: "",
    setTitle: (newTitle) => set({ title: newTitle }),
    setContent: (newContent) => set({ content: newContent }),
    logAll: () => {
        console.log(get().title)
        console.log(get().content)
    }
}))