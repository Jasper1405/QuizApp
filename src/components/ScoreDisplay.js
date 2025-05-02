import React from 'react';

const ScoreDisplay = ({ score, total }) => {
  const percentage = ((score / total) * 100).toFixed(2);

  return (
    <div className="text-center">
      <h3 className="mb-4">Quiz Completed!</h3>
      <p className="lead">You scored {score} out of {total}.</p>
      <p className="text-success">Your percentage: {percentage}%</p>
      <button className="btn btn-primary mt-3" onClick={() => window.location.reload()}>
        Restart Quiz
      </button>
    </div>
  );
};

export default ScoreDisplay;
