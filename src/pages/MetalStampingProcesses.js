// src/pages/MetalStampingProcesses.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MetalStampingProcesses.css';

function MetalStampingProcesses() {
  return (
    <div className="lesson-container">
      <h2>Metal Stamping Processes</h2>
      <p>This section provides an overview of the different processes used in metal stamping, including blanking, punching, forming, progressive die stamping, transfer stamping, hot stamping, and high-speed stamping.</p>
      
      <ul className="lesson-topics">
        <li>
          <h3>Introduction to Metal Stamping Processes</h3>
          <Link to="/lessons/lesson21">Start Lesson 21</Link>
        </li>
        <li>
          <h3>Blanking and Punching</h3>
          <Link to="/lessons/lesson22">Start Lesson 22</Link>
        </li>
        <li>
          <h3>Forming and Bending</h3>
          <Link to="/lessons/lesson23">Start Lesson 23</Link>
        </li>
        <li>
          <h3>Progressive Die Stamping</h3>
          <Link to="/lessons/lesson24">Start Lesson 24</Link>
        </li>
        <li>
          <h3>Transfer Stamping</h3>
          <Link to="/lessons/lesson25">Start Lesson 25</Link>
        </li>
        <li>
          <h3>Hot Stamping</h3>
          <Link to="/lessons/lesson26">Start Lesson 26</Link>
        </li>
        <li>
          <h3>High-Speed Stamping</h3>
          <Link to="/lessons/lesson27">Start Lesson 27</Link>
        </li>
      </ul>
    </div>
  );
}

export default MetalStampingProcesses;


