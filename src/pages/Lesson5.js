// src/pages/Lesson5.js
import React from 'react';
import '../styles/Lesson5.css';

function Lesson5() {
  return (
    <div className="lesson-container">
      <h2>Sheet Materials in Metal Stamping</h2>
      <p>
        In metal stamping, the choice of sheet materials is critical as it influences the quality, formability, and strength of the final product. The most common sheet materials used are carbon steel, stainless steel, aluminum alloys, and magnesium alloys.
      </p>

      <h3>1. Carbon Steel</h3>
      <p>
        Carbon steel is widely used in the automotive and manufacturing industries due to its strength and relatively low cost. Depending on the carbon content, it can be categorized as low, medium, or high carbon steel. Each type offers different levels of strength and formability.
      </p>
      <div className="image-container">
        <img src="/images/carbon-steel.jpg" alt="Carbon Steel" className="lesson-image" />
        <p>Figure 1: Microstructure of Carbon Steel</p>
      </div>

      <h3>2. Stainless Steel</h3>
      <p>
        Stainless steel offers excellent corrosion resistance and strength, making it suitable for parts exposed to harsh environments. It is commonly used in automotive exhaust systems and components that require high durability.
      </p>
      <div className="image-container">
        <img src="/images/stainless-steel.png" alt="Stainless Steel" className="lesson-image" />
        <p>Figure 2: General Properties oteelf Steels</p>
      </div>

      <h3>3. Aluminum Alloys</h3>
      <p>
        Aluminum is known for its light weight and high corrosion resistance. It is frequently used in the automotive industry to reduce vehicle weight, improve fuel efficiency, and enhance performance. The use of aluminum alloys in car bodies, like those in the Ford F-150, is an example of its application.
      </p>
      <div className="image-container">
        <img src="/images/aluminum-alloy.jpg" alt="Aluminum Alloy" className="lesson-image" />
        <p>Figure 3: Applications of Aluminum Alloys in Automotive Industry</p>
      </div>

      <h3>4. Magnesium Alloys</h3>
      <p>
        Magnesium alloys are 33% lighter than aluminum, making them suitable for weight-critical components such as engine blocks and transmission cases. These alloys are increasingly used in the automotive industry to improve vehicle dynamics and reduce weight.
      </p>
      <div className="image-container">
        <img src="/images/magnesium-alloy.png" alt="Magnesium Alloy" className="lesson-image" />
        <p>Figure 4: Lightweight Applications of Magnesium Alloys</p>
      </div>

      <h3>5. High-Strength Steels (HSS and AHSS)</h3>
      <p>
        High-strength steels (HSS) and advanced high-strength steels (AHSS) provide a balance between strength and formability. They are commonly used in automotive safety structures to enhance crashworthiness without significantly increasing vehicle weight.
      </p>
      <div className="image-container">
        <img src="/images/high-strength-steel.png" alt="High-Strength Steel" className="lesson-image" />
        <p>Figure 5: High-Strength Steel Used in Automotive Industry</p>
      </div>

      <h3>6. Composites and Sustainable Materials</h3>
      <p>
        New developments in composites, such as carbon fiber and bio-composites, offer lightweight solutions while maintaining strength. These materials are increasingly being used in electric vehicles (EVs) and other applications where weight reduction is essential.
      </p>
      <div className="image-container">
        <img src="/images/composites.jpg" alt="Composites" className="lesson-image" />
        <p>Figure 6: Applications of Composites in EVs</p>
      </div>
    </div>
  );
}

export default Lesson5;


