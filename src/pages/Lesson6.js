// src/pages/Lesson6.js
import React from 'react';
import '../styles/Lesson6.css'; // Import CSS for Lesson6

function Lesson6() {
  return (
    <div className="lesson-container">
      <h2>Tool Maintenance and Lubrication in Metal Stamping</h2>
      <p>
        Proper maintenance and lubrication of tools are critical to extending the lifespan of stamping equipment and ensuring high-quality output. This lesson covers the best practices for maintaining and lubricating tools used in metal stamping.
      </p>

      <h3>1. Importance of Tool Maintenance</h3>
      <p>
        Regular maintenance of tools is essential to prevent wear and damage. Proper tool maintenance includes inspection, cleaning, sharpening, and replacing worn components. Neglecting these practices can lead to reduced tool life and poor stamping quality.
      </p>
      <div className="image-container">
        <img src="/images/tool-maintenance.jpg" alt="Tool Maintenance" className="lesson-image" />
        <p>Figure 1: Example of tool maintenance procedure</p>
      </div>

      <h3>2. Lubrication Techniques</h3>
      <p>
        Lubrication reduces friction and wear between the tool and the workpiece, helping maintain tool integrity and quality. Common lubrication techniques include applying oils, greases, or synthetic lubricants directly to the tooling surfaces.
      </p>
      <div className="image-container">
        <img src="/images/lubrication-techniques.png" alt="Lubrication Techniques" className="lesson-image" />
        <p>Figure 2: Types of lubrication methods used in metal stamping</p>
      </div>

      <h3>3. Recommended Lubricants</h3>
      <p>
        The choice of lubricant depends on the material being stamped and the specific process. High-speed stamping processes often require advanced synthetic lubricants to maintain efficiency and tool longevity.
      </p>
      <div className="image-container">
        <img src="/images/lubricants-comparison.jpg" alt="Lubricants Comparison" className="lesson-image" />
        <p>Figure 3: Comparison of different lubricants used in metal stamping</p>
      </div>

      <h3>4. Cleaning and Lubrication Practices</h3>
      <p>
        Tools should be cleaned after every use to remove dirt and residues. Lubrication should be applied according to manufacturer instructions to keep moving parts functional.
      </p>

      <h3>5. Rust Prevention</h3>
      <p>
        Rust can cause permanent damage to tools and reduce their effectiveness. It’s essential to clean, lubricate, and store tools in dry environments to prevent rust.
      </p>

      <h3>6. Inspections and Adjustments</h3>
      <p>
        Regular inspections help identify potential issues such as loose screws, worn parts, or rust. Addressing these promptly helps maintain tool performance.
      </p>

      <h3>7. Sharpening Blades and Bits</h3>
      <p>
        Properly sharpened blades ensure efficiency and safety. Tools should be sharpened regularly using suitable grinding tools, ensuring consistent angles.
      </p>

      <h3>8. Storage Requirements</h3>
      <p>
        Proper storage in a dry and well-ventilated area is essential for extending tool life. Power tools should be unplugged and stored safely to avoid accidents.
      </p>

      <h3>9. Safety Considerations</h3>
      <p>
        Always wear protective gear when maintaining tools, and follow manufacturer guidelines for safe operation.
      </p>
    </div>
  );
}

export default Lesson6;

