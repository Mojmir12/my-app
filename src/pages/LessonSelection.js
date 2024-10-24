import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LessonSelection.css';

function LessonSelection() {
  return (
    <div className="lesson-selection-container">
      <h2>Select a Lesson</h2>
      <ul className="lesson-list">
        <li>
          <Link to="/lessons/basic-of-metal-stamping">1. Basic of Metal Stamping</Link>
        </li>
        <li>
          <Link to="/lessons/metal-stamping-processes">2. Metal Stamping Processes</Link>
        </li>
        {/* Přidej další lekce zde */}
      </ul>
    </div>
  );
}

export default LessonSelection;
