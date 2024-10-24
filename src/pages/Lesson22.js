import React from 'react';
import '../styles/Lesson22.css';

function Lesson22() {
  return (
    <div className="lesson-container">
      <h2>Blanking and Piercing</h2>
      <p>
        In this lesson, we will explore two fundamental processes used in metal stamping: blanking and piercing. Both are essential techniques for cutting and shaping metal sheets into precise components.
      </p>

      <div className="card">
        <h3>1. What is Blanking?</h3>
        <p>
          Blanking is a metal fabrication process where a punch and die are used to cut a specific shape from a sheet of metal. The cut-out portion, known as the blank, becomes the final part or product. This process is commonly used to create parts for the automotive, aerospace, and electronics industries, where precision and efficiency are critical.
        </p>
        <img src="https://metal-stamping-app-images.s3.eu-north-1.amazonaws.com/OIP.jpg" alt="Blanking Process" width="600" style={{ height: 'auto' }} />
      </div>

      <div className="card">
        <h3>2. What is Piercing?</h3>
        <p>
          Piercing, often referred to as punching, is the process of cutting holes or creating openings in a sheet of metal by pushing a punch through the material. The material removed during this process is considered scrap, while the rest of the metal remains the part. Piercing is typically used for creating holes, slots, or other internal shapes in the material.
        </p>
        <img src="https://metal-stamping-app-images.s3.eu-north-1.amazonaws.com/blanking.jpg" alt="Piercing Process" width="600" style={{ height: 'auto' }} />
      </div>

      <div className="card">
        <h3>3. Tooling in Blanking and Piercing</h3>
        <p>
          Both blanking and piercing require precise tooling. The punch and die used in these processes are made of high-strength materials like tool steel or carbide to withstand the forces exerted during cutting. Proper tool maintenance is essential to ensure the longevity of the dies and punches and to achieve consistent results.
        </p>
        <img src="https://metal-stamping-app-images.s3.eu-north-1.amazonaws.com/punches.png" alt="Tooling for Blanking and Piercing" width="600" style={{ height: 'auto' }} />
      </div>

      <div className="card">
        <h3>4. Material Considerations</h3>
        <p>
          The choice of material greatly influences the blanking and piercing process. Thinner metals are easier to blank and pierce, while thicker or harder metals require more force and specialized tools. Common materials used in these processes include aluminum, stainless steel, and various alloys.
        </p>
        <img src="https://metal-stamping-app-images.s3.eu-north-1.amazonaws.com/rolls-sheets.jpg" alt="Materials for Blanking and Piercing" width="600" style={{ height: 'auto' }} />
      </div>

      <div className="card">
        <h3>5. Applications of Blanking and Piercing</h3>
        <p>
          Blanking and piercing are used across various industries to manufacture components like washers, gears, and brackets. These processes are favored for their speed and accuracy, making them ideal for high-volume production.
        </p>
        <img src="https://metal-stamping-app-images.s3.eu-north-1.amazonaws.com/Aplication-blanking-piercing.jpg" alt="Applications of Blanking and Piercing" width="600" style={{ height: 'auto' }} />
      </div>
    </div>
  );
}

export default Lesson22;





