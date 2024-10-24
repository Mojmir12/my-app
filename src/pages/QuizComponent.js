import React, { useState } from 'react';
import '../styles/QuizComponent.css'; // Import stylů pro kvíz

const quizQuestions = [
  {
    question: 'What is metal stamping?',
    type: 'multipleChoice',
    options: [
      'A process for cutting metal sheets',
      'A technique for painting metal',
      'A method to weld metals together',
    ],
    correctAnswer: 'A process for cutting metal sheets',
  },
  {
    question: 'True or False: Metal stamping is only used in the automotive industry.',
    type: 'trueFalse',
    correctAnswer: 'False',
  },
  {
    question: 'Fill in the blank: One of the key processes in metal stamping is ___.',
    type: 'fillInTheBlank',
    correctAnswer: 'blanking',
  },
  {
    question: 'What is the main material used for tooling in metal stamping?',
    type: 'multipleChoice',
    options: [
      'Wood',
      'Plastic',
      'Tool Steels and Carbides',
    ],
    correctAnswer: 'Tool Steels and Carbides',
  },
  {
    question: 'Which of the following is a benefit of regular tool maintenance?',
    type: 'multipleChoice',
    options: [
      'Increased tool wear',
      'Extended tool lifespan',
      'Higher energy consumption',
    ],
    correctAnswer: 'Extended tool lifespan',
  },
  {
    question: 'True or False: Lubrication can help prevent tool damage.',
    type: 'trueFalse',
    correctAnswer: 'True',
  },
  {
    question: 'Fill in the blank: ____ is the process of cutting a metal sheet to create specific shapes.',
    type: 'fillInTheBlank',
    correctAnswer: 'Blanking',
  },
  {
    question: 'Which material is most commonly used for lightweight automotive parts?',
    type: 'multipleChoice',
    options: [
      'Steel',
      'Aluminum',
      'Copper',
    ],
    correctAnswer: 'Aluminum',
  },
  {
    question: 'True or False: Carbide tools are harder but more brittle than steel tools.',
    type: 'trueFalse',
    correctAnswer: 'True',
  },
  {
    question: 'Which type of stamping process is typically used for large, complex parts?',
    type: 'multipleChoice',
    options: [
      'High-Speed Stamping',
      'Transfer Die Stamping',
      'Blanking',
    ],
    correctAnswer: 'Transfer Die Stamping',
  },
  {
    question: 'Fill in the blank: ____ is a process where material is formed using high heat and pressure.',
    type: 'fillInTheBlank',
    correctAnswer: 'Hot Stamping',
  },
];

function QuizComponent() {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (questionIndex, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: value,
    }));
  };

  const calculateScore = () => {
    let newScore = 0;
    quizQuestions.forEach((question, index) => {
      if (answers[index] && answers[index].toLowerCase() === question.correctAnswer.toLowerCase()) {
        newScore++;
      }
    });
    setScore(newScore);
    setShowResult(true);
  };

  const handleSubmit = () => {
    calculateScore();
  };

  const isAnswerCorrect = (index) => {
    return answers[index] && answers[index].toLowerCase() === quizQuestions[index].correctAnswer.toLowerCase();
  };

  return (
    <div className="quiz-container">
      <h2>Quiz: Basic of Metal Stamping</h2>
      {quizQuestions.map((question, index) => (
        <div key={index} className="question-container">
          <p>{index + 1}. {question.question}</p>
          {question.type === 'multipleChoice' && (
            <div>
              {question.options.map((option, idx) => (
                <div key={idx} className={`option ${showResult && !isAnswerCorrect(index) && option === answers[index] ? 'incorrect' : ''}`}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    disabled={showResult}
                  />
                  {option}
                </div>
              ))}
              {showResult && !isAnswerCorrect(index) && (
                <p className="correct-answer">Correct answer: {question.correctAnswer}</p>
              )}
            </div>
          )}
          {question.type === 'trueFalse' && (
            <div>
              <input
                type="radio"
                name={`question-${index}`}
                value="True"
                onChange={(e) => handleAnswerChange(index, 'True')}
                disabled={showResult}
              /> True
              <input
                type="radio"
                name={`question-${index}`}
                value="False"
                onChange={(e) => handleAnswerChange(index, 'False')}
                disabled={showResult}
              /> False
              {showResult && !isAnswerCorrect(index) && (
                <p className="correct-answer">Correct answer: {question.correctAnswer}</p>
              )}
            </div>
          )}
          {question.type === 'fillInTheBlank' && (
            <input
              type="text"
              placeholder="Your answer"
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              disabled={showResult}
              className={`text-input ${showResult && !isAnswerCorrect(index) ? 'incorrect' : ''}`}
            />
          )}
          {showResult && !isAnswerCorrect(index) && (
            <p className="correct-answer">Correct answer: {question.correctAnswer}</p>
          )}
        </div>
      ))}
      <button onClick={handleSubmit} disabled={showResult}>Submit</button>
      {showResult && (
        <div className="results">
          <h3>Results</h3>
          <p>You answered {score} out of {quizQuestions.length} correctly.</p>
          {score >= Math.floor(quizQuestions.length * 0.8) ? (
            <p className="pass-message">Congratulations! You passed the quiz.</p>
          ) : (
            <p className="fail-message">Unfortunately, you didn't pass. Try again!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default QuizComponent;





