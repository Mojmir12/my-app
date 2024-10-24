// src/pages/BasicOfMetalStamping.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BasicOfMetalStamping.css';
import { useNavigate } from 'react-router-dom';

function BasicOfMetalStamping() {
  return (
    <div className="lesson-container">
      <h2>Basic of Metal Stamping</h2>
      <p>
        This lesson covers the fundamental concepts of metal stamping, including the processes,
        tools, and materials used in stamping operations.
      </p>

      <ul className="lesson-topics">
        {/* Lesson 1: Introduction to Metal Stamping */}
        <li>
          <h3>Introduction to Metal Stamping</h3>
          <p>Learn the basics of metal stamping processes.</p>
          <Link to="/lessons/lesson1">Start Lesson 1</Link>
        </li>

        {/* Lesson 2: Tooling for Metal Stamping */}
        <li>
          <h3>Tooling for Metal Stamping</h3>
          <p>Understand the types of tools used in metal stamping.</p>
          <Link to="/lessons/lesson2">Start Lesson 2</Link>
        </li>

        {/* Lesson 3: Basic Processes in Metal Stamping */}
        <li>
          <h3>Basic Processes in Metal Stamping</h3>
          <p>Learn about blanking, punching, and other essential processes in metal stamping.</p>
          <Link to="/lessons/lesson3">Start Lesson 3</Link>
        </li>

        {/* Lesson 4: Tool Materials */}
        <li>
          <h3>Tool Materials</h3>
          <p>Explore different materials used for tooling in metal stamping.</p>
          <Link to="/lessons/lesson4">Start Lesson 4</Link>
        </li>

        {/* Lesson 5: Material Considerations */}
        <li>
          <h3>Material Considerations</h3>
          <p>Understand the materials used in metal stamping and their properties.</p>
          <Link to="/lessons/lesson5">Start Lesson 5</Link>
        </li>

        {/* Lesson 6: Tool Maintenance and Lubrication */}
        <li>
          <h3>Tool Maintenance and Lubrication</h3>
          <p>Learn best practices for maintaining and lubricating tools.</p>
          <Link to="/lessons/lesson6">Start Lesson 6</Link>
        </li>

        {/* Lesson 7: Coatings in Metal Stamping */}
        <li>
          <h3>Coatings in Metal Stamping</h3>
          <p>Explore the different types of coatings used in metal stamping and their benefits.</p>
          <Link to="/lessons/lesson7">Start Lesson 7</Link>
        </li>

        {/* Lesson 8: Advanced Manufacturing Processes */}
        <li>
          <h3>Advanced Manufacturing Processes</h3>
          <p>Explore high-speed stamping, transfer die stamping, hot stamping, and more.</p>
          <Link to="/lessons/lesson8">Start Lesson 8</Link>
        </li>
      </ul>

      {/* Odkaz na kvíz */}
      <div className="quiz-section">
        <h3>Ready to test your knowledge?</h3>
        <p>Take the quiz to check your understanding of Basic of Metal Stamping.</p>
        <Link to="/quiz/basic" className="quiz-link">Take the Quiz</Link>
      </div>
    </div>
  );
}

export default BasicOfMetalStamping;















