import React from 'react';
import '../styles/Lesson23.css'; // Používá stejné styly jako Lesson22.css

function Lesson23() {
  return (
    <div className="lesson-container">
      <h2>Forming and Bending</h2>
      <p>
        In this lesson, we will explore two key metal stamping processes: <strong>Forming</strong> and <strong>Bending</strong>. These techniques are used to shape metal sheets into complex components without removing material. Both processes are essential in various industries, including automotive, aerospace, and electronics.
      </p>

      <div className="card">
        <h3>1. What is Forming?</h3>
        <p>
          Forming is the process of reshaping a flat metal sheet into a three-dimensional part by applying force without cutting or removing material. This method allows manufacturers to create complex shapes, often using progressive or transfer dies. The forming process can involve operations such as drawing, stretching, or compressing the metal, depending on the desired shape.
        </p>
        <img src="https://metal-stamping-app-images.s3.eu-north-1.amazonaws.com/forming-bending.jpg" alt="Forming Process" />
      </div>

      <div className="card">
        <h3>2. What is Bending?</h3>
        <p>
          Bending is a type of forming where force is applied to a metal sheet to create an angular shape. The sheet is deformed along a single axis, resulting in bends of varying degrees. Bending is often used to produce components such as brackets, frames, and enclosures.
        </p>
        <img src="https://metal-stamping-app-images.s3.eu-north-1.amazonaws.com/bending.jpg" alt="Bending Process" />
      </div>

      <div className="card">
        <h3>3. Tooling for Forming and Bending</h3>
        <p>
          Tooling in forming and bending is highly specialized and made from high-strength materials like tool steel or carbide. The durability of the tooling is crucial, as it withstands significant pressure during these processes. Proper tool maintenance ensures precision and consistent results over time.
        </p>
        <img src="https://metal-stamping-app-images.s3.eu-north-1.amazonaws.com/bending-tool.jpg" alt="Tooling for Forming and Bending" />
      </div>

      <div className="card">
        <h3>4. Material Considerations</h3>
        <p>
          Different materials respond differently to forming and bending. Softer materials like aluminum are easier to form, while harder materials such as stainless steel require more force and specialized tools. The thickness and composition of the material also play a significant role in determining the success of the process.
        </p>
        <img src="https://metal-stamping-app-images.s3.eu-north-1.amazonaws.com/automotive-spare-parts.jpg" alt="Materials for Forming and Bending" />
      </div>

      <div className="card">
        <h3>5. Applications of Forming and Bending</h3>
        <p>
          Forming and bending are widely used in the production of components for the automotive, aerospace, and electronics industries. These processes are favored for their ability to create precise and durable parts at high production volumes. Examples include metal housings, structural frames, and brackets used in a variety of applications.
        </p>
        <img src="https://metal-stamping-app-images.s3.eu-north-1.amazonaws.com/sforming-bending-app.jpg" alt="Applications of Forming and Bending" />
      </div>
    </div>
  );
}

export default Lesson23;
