import React from 'react';
import '../styles/Lesson24.css';

function Lesson24() {
  return (
    <div className="lesson-container">
      <h2>Progressive Die Stamping</h2>
      <p>
        In this lesson, we will explore the progressive die stamping technique, which is widely used for the high-speed production of complex metal parts.
      </p>

      <div className="card">
        <h3>1. What is Progressive Die Stamping?</h3>
        <p>
          Progressive die stamping is a process where a metal strip is fed through a series of stations. Each station performs different operations like cutting, bending, or punching until the finished part is complete. This method is favored in the automotive industry because it allows for the production of complex parts quickly and efficiently.
        </p>
        <img src="https://metal-stamping-app-images.s3.eu-north-1.amazonaws.com/SI-Punch-Press-–-Progressive-Stamping-1.jpg" alt="Progressive Die Stamping" />
      </div>

      <div className="card">
        <h3>2. Key Components of Progressive Die Stamping</h3>
        <p>
          In progressive stamping, a die tool is used with multiple workstations. The metal material progresses through the stations, with each performing specific operations like punching, bending, or shaping.
        </p>
        <img src="https://metal-stamping-app-images.s3.eu-north-1.amazonaws.com/progressive-stamping-use.jpg" alt="Components of Progressive Die Stamping" />
      </div>

      <div className="card">
        <h3>3. Advantages of Progressive Die Stamping</h3>
        <p>
          The main advantages of progressive stamping include the ability to produce complex parts with high precision and speed. This process is also highly material-efficient, as scrap material is minimal.
        </p>
        <img src="https://metal-stamping-app-images.s3.eu-north-1.amazonaws.com/progressive_die_stamping_process.jpeg" alt="Advantages of Progressive Die Stamping" />
      </div>

      <div className="card">
        <h3>4. Applications of Progressive Die Stamping</h3>
        <p>
          Progressive stamping is commonly used to manufacture small to medium-sized parts that require high precision. Typical applications include automotive components, electrical connectors, and metal brackets.
        </p>
        <img src="https://metal-stamping-app-images.s3.eu-north-1.amazonaws.com/electrical-connectors.jpg" alt="Applications of Progressive Die Stamping" />
      </div>

      <div className="card">
        <h3>5. Challenges in Progressive Die Stamping</h3>
        <p>
          The main challenges of progressive stamping involve the high demands on tooling accuracy. Once the tool becomes worn or damaged, it can lead to quality issues with the parts. Tool maintenance and optimization are essential for long-term process efficiency.
        </p>
        <img src="https://metal-stamping-app-images.s3.eu-north-1.amazonaws.com/die-progressive-stamping.jpg" alt="Challenges in Progressive Die Stamping" />
      </div>
    </div>
  );
}

export default Lesson24;
