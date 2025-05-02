import React, { useState } from 'react';
import Question from './Question';
import ScoreDisplay from './ScoreDisplay';

const QuizApp = () => {
  const questions = [
    {
      text: 'What is the capital of France?',
      choices: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correct: 2,
    },
    {
      text: 'What is 2 + 2?',
      choices: ['3', '4', '5', '6'],
      correct: 1,
    },
    {
      text: 'Which planet is known as the Red Planet?',
      choices: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      correct: 1,
    },
    {
      text: 'What is the largest ocean on Earth?',
      choices: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
      correct: 3,
    },
    {
      text: 'Who wrote "Hamlet"?',
      choices: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Jane Austen'],
      correct: 1,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (choiceIndex) => {
    if (choiceIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg" style={{ width: '30rem' }}>
        <div className="card-body">
          {showScore ? (
            <ScoreDisplay score={score} total={questions.length} />
          ) : (
            <Question
              question={questions[currentQuestion]}
              onAnswer={handleAnswer}
              currentQuestionNumber={currentQuestion + 1}
              totalQuestions={questions.length}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizApp;
