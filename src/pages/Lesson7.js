import React from 'react';
import '../styles/Lesson7.css'; // Import CSS pro Lesson7

function Lesson7() {
  return (
    <div className="lesson-container">
      <h2>Coatings in Metal Stamping</h2>

      {/* Úvod do povlaků */}
      <p>
        Coatings are used to enhance the durability and performance of metal stamping tools by reducing friction, preventing wear, and improving corrosion resistance.
      </p>

      <h3>1. Common Types of Coatings</h3>

      {/* TiN Coating */}
      <h4>TiN (Titanium Nitride) Coating</h4>
      <p>
        TiN provides a hard, wear-resistant surface and is commonly used in high-speed stamping operations.
      </p>
      <div className="image-container">
        <img src="/images/tin-coating.jpg" alt="TiN Coating" className="lesson-image" />
        <p>Figure 1: Example of TiN coating on stamping tools.</p>
      </div>

      {/* TiCN Coating */}
      <h4>TiCN (Titanium Carbonitride) Coating</h4>
      <p>
        TiCN offers better wear resistance than TiN and is suitable for stamping harder materials.
      </p>
      <div className="image-container">
        <img src="/images/ticn-coating.jpg" alt="TiCN Coating" className="lesson-image" />
        <p>Figure 2: Comparison of wear resistance of TiCN vs. TiN.</p>
      </div>

      {/* DLC Coating */}
      <h4>DLC (Diamond-Like Carbon) Coating</h4>
      <p>
        DLC is extremely hard and provides excellent wear and corrosion resistance.
      </p>
      <div className="image-container">
        <img src="/images/dlc-coating.jpg" alt="DLC Coating" className="lesson-image" />
        <p>Figure 3: Microstructure of DLC coating.</p>
      </div>

      {/* CrN Coating */}
      <h4>CrN (Chromium Nitride) Coating</h4>
      <p>
        CrN offers a balance between hardness and corrosion resistance, ideal for more corrosive environments.
      </p>
      <div className="image-container">
        <img src="/images/crn-coating.jpg" alt="CrN Coating" className="lesson-image" />
        <p>Figure 4: Corrosion resistance of CrN vs. other coatings.</p>
      </div>

      {/* Benefits of Coatings */}
      <h3>2. Benefits of Using Coatings in Metal Stamping</h3>
      <ul>
        <li>Reduces friction between tool and material.</li>
        <li>Increases tool life and decreases maintenance frequency.</li>
        <li>Enhances corrosion resistance.</li>
      </ul>

      {/* Selecting the Right Coating */}
      <h3>3. Selecting the Right Coating for Your Application</h3>
      <p>
        Factors such as material type, stamping speed, and environmental conditions play a role in choosing the appropriate coating.
      </p>
    </div>
  );
}

export default Lesson7;
