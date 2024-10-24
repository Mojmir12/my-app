import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/CategoryLessons.css';

const lessonsBasic = [
  { id: 'lesson1', title: 'Lesson 1: Introduction to Metal Stamping' },
  { id: 'lesson2', title: 'Lesson 2: Tooling for Metal Stamping' },
  { id: 'lesson3', title: 'Lesson 3: Basic Processes in Metal Stamping' },
  { id: 'lesson4', title: 'Lesson 4: Tool Materials' },
  { id: 'lesson5', title: 'Lesson 5: Material Considerations' },
  { id: 'lesson6', title: 'Lesson 6: Tool Maintenance and Lubrication' },
  { id: 'lesson7', title: 'Lesson 7: Coatings in Metal Stamping' },
  { id: 'lesson8', title: 'Lesson 8: Advanced Manufacturing Processes' },
];

const lessonsProcesses = [
  { id: 'lesson21', title: 'Lesson 21: Introduction to Metal Stamping Processes' },
  { id: 'lesson22', title: 'Lesson 22: Blanking and Piercing' },
  { id: 'lesson23', title: 'Lesson 23: Forming and Bending' },
  { id: 'lesson24', title: 'Lesson 24: Progressive Die Stamping' },
  { id: 'lesson25', title: 'Lesson 25: Transfer Stamping' },
  { id: 'lesson26', title: 'Lesson 26: Hot Stamping' },
  { id: 'lesson27', title: 'Lesson 27: High-Speed Stamping' },
];

function CategoryLessons() {
  const { categoryId } = useParams();

  const lessons = categoryId === 'basic' ? lessonsBasic : lessonsProcesses;

  return (
    <div className="category-lessons-container">
      <h2>{categoryId === 'basic' ? 'Basic of Metal Stamping' : 'Metal Stamping Processes'} Lessons</h2>
      <ul className="lessons-list">
        {lessons.map(lesson => (
          <li key={lesson.id}>
            <Link to={`/lessons/${lesson.id}`}>{lesson.title}</Link>
          </li>
        ))}
        {categoryId === 'basic' && (
          <li>
            <Link to="/quiz/basic">Quiz: Basic of Metal Stamping</Link>
          </li>
        )}
        {categoryId === 'processes' && (
          <li>
            <Link to="/quiz/metal-stamping-processes">Quiz: Metal Stamping Processes</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default CategoryLessons;
