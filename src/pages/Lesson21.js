import React from 'react';
import '../styles/Lesson21.css';

function Lesson21() {
  return (
    <div className="lesson-container">
      <h2>Introduction to Metal Stamping Processes</h2>
      <p>
        In this lesson, we will provide an overview of the most common metal stamping processes. 
        These processes are fundamental to transforming metal sheets into complex parts used in various industries, such as automotive, aerospace, and electronics.
      </p>

      <h3>1. Blanking and Punching</h3>
      <p>
        Blanking is the process of cutting a specific shape from a sheet of metal, while punching removes unwanted material. 
        These are key techniques for creating precise shapes in the metal fabrication process.
      </p>
      {/* Video for Blanking and Punching */}
      <video controls width="600">
        <source src="https://metal-stamping-app.s3.eu-north-1.amazonaws.com/metal-parts-after-cutting-process-2023-11-27-04-59-59-utc.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h3>2. Forming and Bending</h3>
      <p>
        Forming and bending involve reshaping the metal without removing material. 
        These methods are used to create three-dimensional parts and are essential for producing complex designs from flat metal sheets.
      </p>
      {/* Video for Forming and Bending */}
      <video controls width="600">
        <source src="https://metal-stamping-app.s3.eu-north-1.amazonaws.com/Forming.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h3>3. Progressive Die Stamping</h3>
      <p>
        Progressive die stamping uses a series of stations to perform multiple operations on a metal sheet. 
        This process is efficient for producing complex parts with high precision and is widely used in high-volume manufacturing.
      </p>
      {/* Video for Progressive Die Stamping */}
      <video controls width="600">
        <source src="https://metal-stamping-app.s3.eu-north-1.amazonaws.com/progressive-stamping.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h3>4. Transfer Stamping</h3>
      <p>
        Transfer stamping involves moving the metal blank through various die stations, where each station performs a different operation. 
        This method is often used for larger parts that require precise forming.
      </p>
      {/* Video for Transfer Stamping */}
      <video controls width="600">
        <source src="https://metal-stamping-app.s3.eu-north-1.amazonaws.com/automatic-hydraulic-press-stamping-machine-and-pre-2023-11-27-05-25-57-utc.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h3>5. Hot Stamping</h3>
      <p>
        Hot stamping heats the metal to high temperatures before forming. 
        This process is commonly used in the automotive industry to create high-strength components, ensuring both lightness and durability.
      </p>
      {/* Video for Hot Stamping */}
      <video controls width="600">
        <source src="YOUR_HOT_STAMPING_VIDEO_URL" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h3>6. High-Speed Stamping</h3>
      <p>
        High-speed stamping allows for rapid production of metal parts. 
        It is ideal for high-volume production, particularly in the electronics and automotive industries.
      </p>
      {/* Video for High-Speed Stamping */}
      <video controls width="600">
        <source src="YOUR_HIGH_SPEED_STAMPING_VIDEO_URL" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Lesson21;

