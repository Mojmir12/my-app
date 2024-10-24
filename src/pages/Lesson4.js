// src/pages/Lesson4.js
import React from 'react';
import '../styles/Lesson4.css';

function Lesson4() {
  return (
    <div className="lesson-container">
      <h2>Tool Materials in Metal Stamping</h2>
      <p>
        In metal stamping, the choice of tool materials is crucial for ensuring the quality and durability of the stamping tools. The most common tool materials are tool steels and carbides. These materials offer different levels of hardness, wear resistance, and toughness, making them suitable for various stamping applications.
      </p>

      <h3>1. Tool Steels</h3>
      <p>
        Tool steels, such as D2, H13, and M2, are widely used due to their balance between toughness and wear resistance. These steels are often hardened to increase their performance in demanding stamping environments.
      </p>
      
      <div className="image-container">
        <img src="/images/d2-steel.png" alt="D2 Tool Steel" className="lesson-image" />
        <p>Figure 1: Microstructure of D2 Tool Steel</p>
      </div>

      <div className="image-container">
        <img src="/images/d2-hardness-chart.jpg" alt="D2 Hardness Chart" className="lesson-image" />
        <p>Figure 2: Hardness Comparison of Tool Steels</p>
      </div>

      <h3>2. Carbides</h3>
      <p>
        Carbides, particularly tungsten carbide, are essential in metal stamping for applications requiring extreme hardness and wear resistance. These materials are especially useful in high-speed stamping operations where extended tool life is critical.
      </p>

      <h4>Types of Carbides</h4>
      <p>
        The most commonly used carbide in metal stamping is tungsten carbide due to its exceptional hardness and durability. Other types include titanium carbide (TiC) and tantalum carbide (TaC), which are used in specialized applications.
      </p>

      <div className="image-container">
        <img src="/images/tungsten-carbide-structure.jpg" alt="Tungsten Carbide Structure" className="lesson-image" />
        <p>Figure 3: Microstructure of Tungsten Carbide</p>
      </div>

      <h4>Advantages of Carbides</h4>
      <p>
        Carbides offer superior wear resistance and can maintain their hardness at high temperatures, which makes them ideal for high-speed and high-pressure operations. They also provide excellent dimensional stability.
      </p>

      <div className="image-container">
        <img src="/images/carbide-hardness-chart.jpg" alt="Carbide Hardness Comparison" className="lesson-image" />
        <p>Figure 4: Hardness Comparison of Carbides vs Tool Steels</p>
      </div>

      <h4>Disadvantages of Carbides</h4>
      <p>
        Despite their advantages, carbides are more brittle than tool steels, making them prone to fractures if not used correctly. They also tend to be more expensive, which can be a consideration in some production environments.
      </p>

      <div className="image-container">
        <img src="/images/carbide-wear-resistance.jpg" alt="Carbide Wear Resistance" className="lesson-image" />
        <p>Figure 5: Wear Resistance of Carbides</p>
      </div>
    </div>
  );
}

export default Lesson4;


