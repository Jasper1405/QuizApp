import React from 'react';

const Score = ({ correctAnswers, totalQuestions }) => {
    const percentageScore = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;

    return (
        <div className="text-center mt-5">
            <h2>Your Score</h2>
            <p>
                You answered {correctAnswers} out of {totalQuestions} questions correctly.
            </p>
            <p>
                Your score: {percentageScore.toFixed(2)}%
            </p>
            <button className="btn btn-primary" onClick={() => window.location.reload()}>
                Restart Quiz
            </button>
        </div>
    );
};

export default Score;