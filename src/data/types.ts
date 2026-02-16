export interface MCQ {
  id: number;
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correct: "a" | "b" | "c" | "d";
  unit: number;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  totalQuestions: number;
}
