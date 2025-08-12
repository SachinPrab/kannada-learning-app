import React, { useEffect, useState } from 'react';
import { useQuizStore } from '../store/quizStore';
import quizData from '../data/quizData.json';
import { useNavigate } from 'react-router-dom';

const TIME_LIMIT = 30; // seconds per question

export default function Quiz() {
  const {
    questions,
    currentQuestionIndex,
    score,
    nextQuestion,
    incrementScore,
    setQuestions,
    resetQuiz
  } = useQuizStore();

  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const navigate = useNavigate();

  // Load questions on mount
  useEffect(() => {
    setQuestions(quizData);
    resetQuiz();
  }, [setQuestions, resetQuiz]);

  // Reset timer when question changes
  useEffect(() => {
    setTimeLeft(TIME_LIMIT);
  }, [currentQuestionIndex]);

  // Countdown effect
  useEffect(() => {
    if (!questions.length) return;
    if (timeLeft <= 0) {
      nextQuestion();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, questions.length, nextQuestion]);

  if (!questions.length) {
    return <p>No questions loaded yet.</p>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-r from-blue-100 via-white to-pink-100 flex flex-col items-center justify-center px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Quiz Complete!</h2>
        <p className="text-xl mb-4">Your Score: {score} / {questions.length}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
          onClick={resetQuiz}
        >
          Restart Quiz
        </button>
        <button
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600"
          onClick={() => navigate('/')}
        >
          Exit Quiz
        </button>
      </div>
    );
  }

  const handleAnswer = (isCorrect) => {
    if (isCorrect) incrementScore();
    nextQuestion();
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      useQuizStore.setState((state) => ({
        currentQuestionIndex: state.currentQuestionIndex - 1
      }));
      setTimeLeft(TIME_LIMIT);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-100 via-white to-pink-100 flex flex-col items-center justify-center px-6 py-12 text-center">
      <div className="w-full max-w-xl bg-white/80 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">Quiz</h2>
        <p className="mb-2 text-lg">Score: {score}</p>
        <p className="mb-2 text-lg font-semibold">
          Time Left: <span className={timeLeft <= 5 ? "text-red-600" : "text-blue-700"}>{timeLeft}s</span>
        </p>
        <p className="mb-6 text-xl font-semibold">{currentQuestion.question}</p>
        <div className="grid grid-cols-1 gap-4 mb-6">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className="bg-blue-100 hover:bg-blue-300 text-blue-900 font-semibold py-2 px-4 rounded transition"
              onClick={() => handleAnswer(option === currentQuestion.answer)}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="flex justify-between">
          <button
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={() => navigate('/')}
          >
            Exit Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
