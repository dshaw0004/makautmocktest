import { create } from 'zustand'


type UserAnswersType = {
  answers: {[key: string]: string};
  setAnswers: (newAnswers: {[key: string]: string}) => void;
  removeAnswers: () => void;
}

const useRAnswers = create<UserAnswersType>((set) => ({
  answers: {},
  setAnswers: (newAnswers: {[key: string]: string}) => set((state) => {
    return { answers: newAnswers }
  }),
  removeAnswers: () => set({ answers: {} }),
}))

export default useRAnswers;
