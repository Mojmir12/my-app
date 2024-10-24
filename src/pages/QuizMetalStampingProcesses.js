import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/QuizMetalStampingProcesses.css'; // Pokud máme styl pro kvíz

const quizQuestions = [
  {
    question: 'What is the main goal of blanking in metal stamping?',
    type: 'multipleChoice',
    options: ['To bend metal sheets', 'To form complex shapes', 'To cut shapes from metal sheets'],
    correctAnswer: 'To cut shapes from metal sheets'
  },
  {
    question: 'Punching and piercing are two terms that refer to the same process.',
    type: 'trueFalse',
    correctAnswer: 'True'
  },
  {
    question: 'The material removed during the piercing process is considered ___.',
    type: 'fillInTheBlank',
    correctAnswer: 'scrap'
  },
  {
    question: 'Which of the following is a process that involves reshaping metal without removing material?',
    type: 'multipleChoice',
    options: ['Blanking', 'Piercing', 'Forming'],
    correctAnswer: 'Forming'
  },
  {
    question: 'Progressive die stamping is designed to perform multiple operations at different stations in one continuous process.',
    type: 'trueFalse',
    correctAnswer: 'True'
  },
  {
    question: 'Transfer stamping involves moving a metal blank through various ___.',
    type: 'fillInTheBlank',
    correctAnswer: 'die stations'
  },
  {
    question: 'What is a key advantage of using hot stamping in the automotive industry?',
    type: 'multipleChoice',
    options: ['Higher precision', 'High strength components', 'Low production cost'],
    correctAnswer: 'High strength components'
  },
  {
    question: 'Hot stamping involves heating the metal before forming.',
    type: 'trueFalse',
    correctAnswer: 'True'
  },
  {
    question: 'High-speed stamping is ideal for producing small, intricate parts in large ___.',
    type: 'fillInTheBlank',
    correctAnswer: 'volumes'
  },
  {
    question: 'Which process is best suited for high-volume production in the electronics industry?',
    type: 'multipleChoice',
    options: ['Transfer stamping', 'High-speed stamping', 'Hot stamping'],
    correctAnswer: 'High-speed stamping'
  },
  {
    question: 'Blanking creates the final shape by removing material, while forming reshapes without material removal.',
    type: 'trueFalse',
    correctAnswer: 'True'
  },
  {
    question: 'Progressive die stamping uses multiple stations to perform ___ operations in one continuous process.',
    type: 'fillInTheBlank',
    correctAnswer: 'multiple'
  },
  {
    question: 'What is the primary application of transfer stamping?',
    type: 'multipleChoice',
    options: ['Creating small, precise parts', 'Forming large parts with precise dimensions', 'Producing high-strength components for the aerospace industry'],
    correctAnswer: 'Forming large parts with precise dimensions'
  },
  {
    question: 'High-speed stamping machines are commonly automated to increase efficiency and reduce downtime.',
    type: 'trueFalse',
    correctAnswer: 'True'
  },
  {
    question: 'The two fundamental processes in blanking and piercing are cutting shapes from a metal sheet and creating ___.',
    type: 'fillInTheBlank',
    correctAnswer: 'openings'
  }
];

function QuizMetalStampingProcesses() {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

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
        answers[index] &&
        answers[index].toLowerCase() === question.correctAnswer.toLowerCase()
      ) {
        newScore++;
      }
    });
    setScore(newScore);
    setShowResult(true);
    if (newScore >= Math.floor(quizQuestions.length * 0.8)) {
      setTimeout(() => {
        navigate('/lessons'); // Přesměrování zpět k lekcím
      }, 3000);
    }
  };

  const handleSubmit = () => {
    calculateScore();
  };

  return (
    <div className="quiz-container">
      <h2>Quiz: Metal Stamping Processes</h2>
      {quizQuestions.map((question, index) => (
        <div key={index} className="quiz-question">
          <p className="question-text">
            {index + 1}. {question.question}
          </p>
          {question.type === 'multipleChoice' && (
            <div className="options-container">
              {question.options.map((option, idx) => (
                <div key={idx} className={`option ${showResult && answers[index] === option && option !== question.correctAnswer ? 'incorrect' : ''}`}>
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
              <div className={`option ${showResult && answers[index] !== question.correctAnswer && answers[index] !== undefined ? 'incorrect' : ''}`}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value="True"
                  onChange={(e) => handleAnswerChange(index, 'True')}
                  disabled={showResult}
                />
                True
                {showResult && 'True' === question.correctAnswer && (
                  <span className="correct-answer-text"> (Correct Answer)</span>
                )}
              </div>
              <div className={`option ${showResult && answers[index] !== question.correctAnswer && answers[index] !== undefined ? 'incorrect' : ''}`}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value="False"
                  onChange={(e) => handleAnswerChange(index, 'False')}
                  disabled={showResult}
                />
                False
                {showResult && 'False' === question.correctAnswer && (
                  <span className="correct-answer-text"> (Correct Answer)</span>
                )}
              </div>
            </div>
          )}
          {question.type === 'fillInTheBlank' && (
            <input
              type="text"
              className={`input-field ${showResult && answers[index] && answers[index].toLowerCase() !== question.correctAnswer.toLowerCase() ? 'incorrect' : ''}`}
              placeholder="Your answer"
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              disabled={showResult}
            />
          )}
        </div>
      ))}
      {!showResult && <button className="submit-button" onClick={handleSubmit}>Submit</button>}
      {showResult && (
        <div className="result-container">
          <h3>Results</h3>
          <p>You answered {score} out of {quizQuestions.length} correctly.</p>
          {score >= Math.floor(quizQuestions.length * 0.8) ? (
            <p className="pass-text">Congratulations! You passed the quiz.</p>
          ) : (
            <p className="fail-text">Unfortunately, you didn't pass. Try again!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default QuizMetalStampingProcesses;
