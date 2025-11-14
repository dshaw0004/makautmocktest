import { create } from "zustand";
import type { QuestionAPIResponse } from "@/types/question";
// import { sampleQuestionPaper } from "@/pages/mockTest/sample";

type UseQuestionsType = {
  questions: QuestionAPIResponse | object;
  setQuestions: (newQuestions: QuestionAPIResponse) => void;
  removeQuestions: () => void;
};

const useQuestions = create<UseQuestionsType>((set) => ({
  questions: {},
  setQuestions: (newQuestions) =>
    set(() => {
      return { questions: newQuestions };
    }),
  removeQuestions: () => set({ questions: {} }),
}));

export default useQuestions;
