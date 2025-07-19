interface Question {
  question: string;
  options: Array<string>;
  answer: string;
  description: string;
  hardness: 'easy' | 'medium' | 'hard';
}

interface QuestionAPIResponse {
  subcode: string;
  university: string;
  timestamp: number;
  question: Question[];
  questionID: string;
}

export type {Question, QuestionAPIResponse};
