import React from 'react';
import '../styles/Lesson3.css';  // Import stylů pro Lesson3

function Lesson3() {
  return (
    <div className="lesson-container">
      <h2>Basic Processes in Metal Stamping</h2>
      <p>
        In this lesson, we will explore some of the most fundamental processes used in metal stamping. 
        These processes include a variety of techniques that shape, cut, and form metal into specific parts.
      </p>

      <h3>1. Blanking</h3>
      <p>
        Blanking is the process of cutting a flat, predefined shape from a metal sheet or strip. 
        The blank is the piece of metal that has been cut out and will typically be used as a part in the next step of manufacturing.
      </p>
      {/* Obrázek pro Blanking */}
      <div className="image-container">
        <img src="/images/blanking.jpg" alt="Blanking process" className="lesson-image" />
      </div>

      <h3>2. Punching</h3>
      <p>
        Punching is similar to blanking, but in this process, the removed material is considered scrap, while the remaining material 
        (the metal sheet with holes) is used in further production steps.
      </p>
      {/* Obrázek pro Punching */}
      <div className="image-container">
        <img src="/images/punching.png" alt="Punching process" className="lesson-image" />
      </div>

      <h3>3. Coining</h3>
      <p>
        Coining is a precision stamping process in which a metal sheet is subjected to high pressure in a closed die 
        to create intricate surface details. This process is often used for producing coins or high-precision components.
      </p>
      {/* Obrázek pro Coining */}
      <div className="image-container">
        <img src="/images/coining.png" alt="Coining process" className="lesson-image" />
      </div>

      <h3>4. Deep Drawing</h3>
      <p>
        Deep drawing involves pulling a metal sheet into a die to form a deep, hollow-shaped part. This process is commonly used 
        for manufacturing items like automotive body parts, cans, and tanks.
      </p>
      {/* Obrázek pro Deep Drawing */}
      <div className="image-container">
        <img src="/images/deepdrawing.jpg" alt="Deep Drawing process" className="lesson-image" />
      </div>

      <h3>5. Bending</h3>
      <p>
        Bending involves deforming a metal sheet into a specific angle or curvature. This process is used to form parts with 
        specific geometric shapes, such as brackets, enclosures, and frames.
      </p>
      {/* Obrázek pro Bending */}
      <div className="image-container">
        <img src="/images/bending.jpg" alt="Bending process" className="lesson-image" />
      </div>

      <h3>6. Forming</h3>
      <p>
        Forming is the general process of shaping metal using a variety of techniques such as bending, stretching, and compressing. 
        It allows for the creation of complex shapes from flat sheets.
      </p>
      {/* Obrázek pro Forming */}
      <div className="image-container">
        <img src="/images/forming.png" alt="Forming process" className="lesson-image" />
      </div>

      <h3>7. Embossing</h3>
      <p>
        Embossing creates raised or recessed designs on the surface of a metal sheet by pressing the sheet between matching male and female dies.
      </p>
      {/* Obrázek pro Embossing */}
      <div className="image-container">
        <img src="/images/embossing.jpg" alt="Embossing process" className="lesson-image" />
      </div>

      <h3>8. Flanging</h3>
      <p>
        Flanging is the process of bending the edge of a metal sheet at a right angle to create a flange, which provides structural support 
        or allows parts to be joined together.
      </p>
      {/* Obrázek pro Flanging */}
      <div className="image-container">
        <img src="/images/flanging.png" alt="Flanging process" className="lesson-image" />
      </div>

      <h3>9. Curling</h3>
      <p>
        Curling involves rolling the edge of a metal sheet into a round shape to eliminate sharp edges and increase stiffness, 
        commonly used in products like metal containers.
      </p>
      {/* Obrázek pro Curling */}
      <div className="image-container">
        <img src="/images/curling.png" alt="Curling process" className="lesson-image" />
      </div>

      <h3>10. Notching</h3>
      <p>
        Notching is the process of cutting out a piece from the edge or inside of a metal sheet, often to prepare it for bending or forming operations.
      </p>
      {/* Obrázek pro Notching */}
      <div className="image-container">
        <img src="/images/notching.jpg" alt="Notching process" className="lesson-image" />
      </div>

      <h3>11. Trimming</h3>
      <p>
        Trimming involves cutting away excess material from a stamped part, typically after another forming process, 
        to ensure that the part conforms to the desired dimensions.
      </p>
      {/* Obrázek pro Trimming */}
      <div className="image-container">
        <img src="/images/trimming.png" alt="Trimming process" className="lesson-image" />
      </div>
    </div>
  );
}

export default Lesson3;





