import React from 'react';
import '../styles/Lesson26.css'; // Import stylu pro Lesson26

function Lesson26() {
  return (
    <div className="lesson-container">
      <h2>Hot Stamping</h2>
      <p>
        Hot stamping, also known as press hardening, is a process where metal is heated to a high temperature 
        and then formed into shape while still hot. This technique is widely used in the automotive industry 
        to create parts that require both high strength and low weight, such as structural components in car bodies.
      </p>
      <img src="https://metal-stamping-app-images.s3.eu-north-1.amazonaws.com/hot-stamping.jpg" alt="Hot Stamping Introduction" />

      <h3>2. The Hot Stamping Process</h3>
      <p>
        The hot stamping process involves heating a metal blank to temperatures above 900°C and then transferring 
        it into a die for forming. The hot metal is shaped into the desired form and rapidly cooled while still in the die, 
        leading to an increase in strength due to the transformation of its microstructure.
      </p>
      <img src="https://metal-stamping-app-images.s3.eu-north-1.amazonaws.com/hot-stamping-process.jpg" alt="Hot Stamping Process" />

      <h3>3. Benefits of Hot Stamping</h3>
      <p>
        Hot stamping offers several benefits, including the ability to produce high-strength components that are lightweight, 
        which is critical for improving fuel efficiency in vehicles. The process also allows for complex shapes 
        that might be difficult to achieve through cold stamping methods.
      </p>
      <img src="https://metal-stamping-app-images.s3.eu-north-1.amazonaws.com/automotive-mechanical-assembly-engine-transmissi-2023-11-27-05-22-07-utc.jpg" alt="Hot Stamping Benefits" />

      <h3>4. Applications of Hot Stamping</h3>
      <p>
        Hot stamping is commonly used in the production of automotive parts such as A-pillars, B-pillars, and roof rails. 
        These components are crucial for the structural integrity and safety of vehicles, making hot stamping an essential process 
        in modern automotive manufacturing.
      </p>
      <img src="https://metal-stamping-app-images.s3.eu-north-1.amazonaws.com/front-bumper.jpg" alt="Hot Stamping Applications" />

      <h3>5. Challenges in Hot Stamping</h3>
      <p>
        One of the main challenges in hot stamping is the requirement for precise temperature control throughout the process. 
        If the metal is not heated evenly or cooled too slowly, it can result in defects or variations in strength. 
        Additionally, tooling for hot stamping is more complex and requires special materials to withstand the high temperatures.
      </p>
      <img src="https://metal-stamping-app-images.s3.eu-north-1.amazonaws.com/dies-for-hot-stamping-1552575380.jpg" alt="Hot Stamping Challenges" />
    </div>
  );
}

export default Lesson26;

