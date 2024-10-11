// src/components/Quiz.js
import React, { useState } from 'react';

function Quiz({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  return (
    <div className="quiz-container">
      {isCompleted ? (
        <div>
          <h3>Quiz Completed!</h3>
          <p>Your score: {score} / {questions.length}</p>
        </div>
      ) : (
        <div>
          <h3>{questions[currentQuestionIndex].question}</h3>
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index}>
                <button
                  className={`quiz-option ${
                    selectedAnswer === option ? 'selected' : ''
                  }`}
                  onClick={() => handleAnswerSelect(option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
          >
            {currentQuestionIndex + 1 === questions.length
              ? 'Finish Quiz'
              : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;

