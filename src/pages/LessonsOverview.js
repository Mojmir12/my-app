// src/pages/LessonsOverview.js
import React from 'react';
import { Link } from 'react-router-dom';

function LessonsOverview() {
  return (
    <div>
      <h2>Lessons Overview</h2>
      <ul>
        <li><Link to="/lessons/1">Lesson 1</Link></li>
        <li><Link to="/lessons/2">Lesson 2</Link></li>
        <li><Link to="/lessons/3">Lesson 3</Link></li>
      </ul>
    </div>
  );
}

export default LessonsOverview;
