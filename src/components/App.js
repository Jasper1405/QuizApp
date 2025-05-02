import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';
import questions from '../data/questions';

const App = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleAnswerSelect = (answer) => {
        setUserAnswers([...userAnswers, answer]);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizCompleted(true);
        }
    };

    const calculateScore = () => {
        return userAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;
    };

    return (
        <div className="container mt-5">
            {quizCompleted ? (
                <Score score={calculateScore()} totalQuestions={questions.length} />
            ) : (
                <Question 
                    question={questions[currentQuestionIndex]} 
                    onAnswerSelect={handleAnswerSelect} 
                />
            )}
            {quizCompleted || (
                <button 
                    className="btn btn-primary mt-3" 
                    onClick={() => handleAnswerSelect(null)}
                >
                    Next
                </button>
            )}
        </div>
    );
};

export default App;