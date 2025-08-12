import { create } from 'zustand';

export const useQuizStore = create((set) => ({
  questions: [],
  currentQuestionIndex: 0,
  score: 0,

  setQuestions: (questions) => set({ questions }),
  nextQuestion: () => set((state) => ({
    currentQuestionIndex: state.currentQuestionIndex + 1
  })),
  incrementScore: () => set((state) => ({ score: state.score + 1 })),
  resetQuiz: () => set({ currentQuestionIndex: 0, score: 0 })
}));
