// src/pages/LessonDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Quiz from '../components/Quiz';

const lessonsData = {
  1: {
    title: "Introduction to Metal Stamping",
    content: "In this lesson, we cover the basics of metal stamping, including what it is and its importance in manufacturing.",
    questions: [
      {
        question: "What is metal stamping?",
        options: [
          "A process of shaping metal",
          "A type of painting",
          "A metal joining technique",
        ],
        correctAnswer: "A process of shaping metal",
      },
      {
        question: "Which industry commonly uses metal stamping?",
        options: ["Aerospace", "Agriculture", "Textile"],
        correctAnswer: "Aerospace",
      },
    ],
  },
  2: {
    title: "Advanced Techniques in Stamping",
    content: "This lesson discusses advanced stamping techniques used in the automotive and aerospace industries.",
    questions: [
      {
        question: "Which of these is an advanced stamping technique?",
        options: [
          "Deep drawing",
          "Laser cutting",
          "Heat treatment",
        ],
        correctAnswer: "Deep drawing",
      },
    ],
  },
  3: {
    title: "Tools and Dies for Metal Stamping",
    content: "Learn about the tools and dies used in metal stamping and their role in ensuring precision.",
    questions: [
      {
        question: "What is a die used for?",
        options: [
          "Cutting metal",
          "Joining metal pieces",
          "Holding metal",
        ],
        correctAnswer: "Cutting metal",
      },
    ],
  },
};

function LessonDetail() {
  const { lessonId } = useParams(); // Získáme lessonId z URL
  const lesson = lessonsData[lessonId];

  if (!lesson) {
    return <div>Lesson not found.</div>;
  }

  return (
    <div className="lesson-detail">
      <h2>{lesson.title}</h2>
      <p>{lesson.content}</p>
      <Quiz questions={lesson.questions} />
    </div>
  );
}

export default LessonDetail;





