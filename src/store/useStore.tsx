import { create } from "zustand";

export type UserStore = {
  id: string
  accountID: string
  photoURL: string
  username: string

  addData: (id: string, accountID: string, photoURL: string, username: string) => void
  clean: () => void
}

export const useUserStore = create<UserStore>(set => {
  return {
    id: '',
    accountID: '',
    photoURL: '',
    username: '',

    addData: (id, accountID, photoURL, username) => set(() => ({id, accountID, photoURL, username})),
    clean: () => set(() => ({id: '', accountID: '', photoURL: '', username: ''}))
  }
})