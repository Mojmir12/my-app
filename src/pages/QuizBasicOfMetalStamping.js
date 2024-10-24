import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/QuizBasicOfMetalStamping.css'; // Import stylů

const quizQuestions = [
  {
    question: 'What is metal stamping?',
    type: 'multipleChoice',
    options: [
      'A process for cutting metal sheets',
      'A technique for painting metal',
      'A method to weld metals together'
    ],
    correctAnswer: 'A process for cutting metal sheets'
  },
  {
    question: 'True or False: Metal stamping is only used in the automotive industry.',
    type: 'trueFalse',
    correctAnswer: 'False'
  },
  {
    question: 'Fill in the blank: One of the key processes in metal stamping is ___.',
    type: 'fillInTheBlank',
    correctAnswer: 'blanking'
  },
  {
    question: 'What is the main material used for tooling in metal stamping?',
    type: 'multipleChoice',
    options: [
      'Wood',
      'Plastic',
      'Tool Steels and Carbides'
    ],
    correctAnswer: 'Tool Steels and Carbides'
  },
  {
    question: 'True or False: Blanking is a key process in metal stamping.',
    type: 'trueFalse',
    correctAnswer: 'True'
  },
  {
    question: 'Fill in the blank: ___ is a process used to shape metal sheets into specific forms.',
    type: 'fillInTheBlank',
    correctAnswer: 'forming'
  },
  {
    question: 'Which of the following is NOT a process used in metal stamping?',
    type: 'multipleChoice',
    options: [
      'Punching',
      'Coining',
      'Casting'
    ],
    correctAnswer: 'Casting'
  },
  {
    question: 'True or False: Tool maintenance is critical for the longevity of metal stamping tools.',
    type: 'trueFalse',
    correctAnswer: 'True'
  },
  {
    question: 'Fill in the blank: Tool steels are often used in metal stamping because of their ___.',
    type: 'fillInTheBlank',
    correctAnswer: 'durability'
  },
  {
    question: 'Which process is used to cut the outline of a shape in a metal sheet?',
    type: 'multipleChoice',
    options: [
      'Blanking',
      'Drawing',
      'Bending'
    ],
    correctAnswer: 'Blanking'
  },
  {
    question: 'True or False: High-speed stamping is used for low volume production.',
    type: 'trueFalse',
    correctAnswer: 'False'
  },
  {
    question: 'Fill in the blank: ___ is a process that involves stretching metal into a shape.',
    type: 'fillInTheBlank',
    correctAnswer: 'deep drawing'
  },
  {
    question: 'Which of the following is an advantage of carbide tooling?',
    type: 'multipleChoice',
    options: [
      'Inexpensive',
      'High wear resistance',
      'Easy to machine'
    ],
    correctAnswer: 'High wear resistance'
  },
  {
    question: 'True or False: Lubrication reduces friction during the metal stamping process.',
    type: 'trueFalse',
    correctAnswer: 'True'
  },
  {
    question: 'Fill in the blank: Coatings are applied to metal stamping tools to increase ___.',
    type: 'fillInTheBlank',
    correctAnswer: 'longevity'
  }
];

function QuizBasicOfMetalStamping() {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate(); // Hook pro navigaci

  const handleAnswerChange = (questionIndex, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: value,
    }));
  };

  const calculateScore = () => {
    let newScore = 0;
    quizQuestions.forEach((question, index) => {
      if (
        answers[index]?.toLowerCase() === question.correctAnswer.toLowerCase()
      ) {
        newScore++;
      }
    });
    setScore(newScore);
    setShowResult(true);

    if (newScore >= Math.floor(quizQuestions.length * 0.8)) {
      // Přesměrování na další lekci, např. Lesson2
      setTimeout(() => {
        navigate('/lessons/lesson2');
      }, 3000); // Přesměruje po 3 sekundách
    }
  };

  const handleSubmit = () => {
    calculateScore();
  };

  return (
    <div className="quiz-container">
      <h2>Quiz: Basic of Metal Stamping</h2>
      {quizQuestions.map((question, index) => (
        <div key={index} className="quiz-question">
          <p className="question-text">
            {index + 1}. {question.question}
          </p>
          {question.type === 'multipleChoice' && (
            <div className="options-container">
              {question.options.map((option, idx) => (
                <div
                  key={idx}
                  className={`option ${
                    showResult &&
                    answers[index] === option &&
                    option !== question.correctAnswer
                      ? 'incorrect'
                      : ''
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    disabled={showResult}
                  />
                  {option}
                  {showResult && option === question.correctAnswer && (
                    <span className="correct-answer-text"> (Correct Answer)</span>
                  )}
                </div>
              ))}
            </div>
          )}
          {question.type === 'trueFalse' && (
            <div className="options-container">
              <div
                className={`option ${
                  showResult &&
                  answers[index] !== question.correctAnswer &&
                  answers[index] !== undefined
                    ? 'incorrect'
                    : ''
                }`}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value="True"
                  onChange={(e) => handleAnswerChange(index, 'True')}
                  disabled={showResult}
                />{' '}
                True
                {showResult && 'True' === question.correctAnswer && (
                  <span className="correct-answer-text"> (Correct Answer)</span>
                )}
              </div>
              <div
                className={`option ${
                  showResult &&
                  answers[index] !== question.correctAnswer &&
                  answers[index] !== undefined
                    ? 'incorrect'
                    : ''
                }`}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value="False"
                  onChange={(e) => handleAnswerChange(index, 'False')}
                  disabled={showResult}
                />{' '}
                False
                {showResult && 'False' === question.correctAnswer && (
                  <span className="correct-answer-text"> (Correct Answer)</span>
                )}
              </div>
            </div>
          )}
          {question.type === 'fillInTheBlank' && (
            <div>
              <input
                type="text"
                className={`input-field ${
                  showResult &&
                  answers[index] &&
                  answers[index].toLowerCase() !==
                    question.correctAnswer.toLowerCase()
                    ? 'incorrect'
                    : ''
                }`}
                placeholder="Your answer"
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                disabled={showResult}
              />
              {showResult &&
                answers[index] &&
                answers[index].toLowerCase() !==
                  question.correctAnswer.toLowerCase() && (
                  <p className="correct-answer-text">
                    Correct Answer: {question.correctAnswer}
                  </p>
                )}
            </div>
          )}
          {showResult && (
            <div>
              {answers[index] &&
                (answers[index].toLowerCase() ===
                question.correctAnswer.toLowerCase() ? (
                  <p className="correct-text">Correct!</p>
                ) : (
                  <p className="incorrect-text">
                    Incorrect. Correct Answer: {question.correctAnswer}
                  </p>
                ))}
            </div>
          )}
        </div>
      ))}
      {!showResult && (
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      )}
      {showResult && (
        <div className="result-container">
          <h3>Results</h3>
          <p>
            You answered {score} out of {quizQuestions.length} correctly.
          </p>
          {score >= Math.floor(quizQuestions.length * 0.8) ? (
            <p className="pass-text">Congratulations! You passed the quiz.</p>
          ) : (
            <p className="fail-text">Unfortunately, you didn't pass. Try again!</p>
          )}
          {score >= Math.floor(quizQuestions.length * 0.8) && (
            <p>You will be redirected to the next lesson shortly.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default QuizBasicOfMetalStamping;






