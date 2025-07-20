import { create } from 'zustand'

export type QuestionType = {
  question: string;
  options: string[];
  answer: string;
  description: string;
  hardness: 'easy' | 'medium' | 'hard';
}
export interface QuestionsType {
  questionID: string;
  subcode: string;
  timestamp: BigInt;
  university: string;
  question: QuestionType[];
}
type UseQuestionsType = {
  questions: QuestionsType | {};
  setQuestions: (newQuestions: QuestionsType) => void;
  removeQuestions: () => void;
}
const useQuestions = create<UseQuestionsType>((set) => ({
  questions: {},
  setQuestions: (newQuestions) => set((state) => {
    return { questions: newQuestions }
  }),
  removeQuestions: () => set({ questions: {} }),
}))

export default useQuestions;
