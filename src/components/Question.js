import React, { useState } from 'react';

const Question = ({ question, onAnswer, currentQuestionNumber, totalQuestions }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleSubmit = () => {
    if (selectedChoice !== null) {
      onAnswer(selectedChoice);
      setSelectedChoice(null);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h6 className="text-muted mb-2">
          Question {currentQuestionNumber} of {totalQuestions}
        </h6>
        <h5 className="mb-4">{question.text}</h5>
        <div className="list-group">
          {question.choices.map((choice, index) => (
            <button
              key={index}
              className={`list-group-item list-group-item-action ${
                selectedChoice === index ? 'active' : ''
              }`}
              onClick={() => setSelectedChoice(index)}
            >
              {choice}
            </button>
          ))}
        </div>
        <button
          className="btn btn-primary mt-4 w-100"
          onClick={handleSubmit}
          disabled={selectedChoice === null}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Question;