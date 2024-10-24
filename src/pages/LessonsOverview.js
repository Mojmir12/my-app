import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LessonsOverview.css';

const categories = [
  { id: 'basic', title: 'Basic of Metal Stamping', description: 'Introduction to the basic principles of Metal Stamping.' },
  { id: 'processes', title: 'Metal Stamping Processes', description: 'Overview of different processes used in Metal Stamping.' }
];

function LessonsOverview() {
  return (
    <div className="lessons-overview-container">
      <h2>Lessons Overview</h2>
      <ul className="categories-list">
        {categories.map(category => (
          <li key={category.id}>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <Link to={`/category/${category.id}`}>View Lessons</Link> {/* Odkaz na novou stránku */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LessonsOverview;






