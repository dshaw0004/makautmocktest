import { create } from 'zustand'

export type QuestionsType = {
  question: string;
  options: string[];
  answer: string;
  description: string;
  hardness: 'easy' | 'medium' | 'hard';
}
type UseQuestionsType = {
  questions: Array<QuestionsType>;
  setQuestions: (newQuestions: Array<QuestionsType>) => void;
  removeQuestions: () => void;
}
const useQuestions = create<UseQuestionsType>((set) => ({
  questions: [],
  setQuestions: (newQuestions) => set((state) => {
    return { questions: newQuestions }
  }),
  removeQuestions: () => set({ questions: [] }),
}))

export default useQuestions;
