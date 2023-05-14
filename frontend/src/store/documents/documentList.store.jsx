import { create } from "zustand"
import dahyun1 from '../../resource/img/dahyun1.jpg'
import dahyun2 from '../../resource/img/dahyun2.jpg'
import dahyun3 from '../../resource/img/dahyun3.jpg'
import dahyun4 from '../../resource/img/dahyun4.jpg'
import dahyun5 from '../../resource/img/dahyun5.jpg'

export const titleStore = create((set) => ({
    title: "목차"
}))

export const documentStore = create((set) => ({
    documents: [
        { image: dahyun1 },
        { image: null },
        { image: dahyun2 },
        { image: null },
        { image: dahyun3 },
        { image: null },
        { image: dahyun4 },
        { image: null },
        { image: dahyun5 },
    ],
}))

export const pageListStore = create((set) => ({
    currentPage: 1,
    setCurrentPage: (page) => set({ currentPage: page })
}))