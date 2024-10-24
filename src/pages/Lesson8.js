// src/pages/Lesson8.js
import React from 'react';
import '../styles/Lesson8.css'; // Vytvoření stylů pro Lesson8

function Lesson8() {
  return (
    <div className="lesson-container">
      <h2>Advanced Manufacturing Processes in Metal Stamping</h2>

      {/* AHSS Stamping */}
      <h3>1. Metal Stamping of AHSS (Advanced High-Strength Steel)</h3>
      <p>
        Advanced High-Strength Steel (AHSS) is a new class of steel that provides superior strength and formability. 
        It plays a critical role in modern automotive manufacturing, where reducing weight and improving safety are key goals. 
        AHSS is used in components like body structures, crumple zones, and other areas where high strength is required. 
        The challenge of stamping AHSS comes from its higher resistance to deformation, which requires specialized tooling and equipment.
      </p>
      <p>
        AHSS provides significant benefits in reducing vehicle weight while maintaining strength. This allows automakers to meet stringent emissions 
        standards and improve fuel efficiency. However, the stamping process for AHSS requires high tonnage presses and reinforced dies to withstand 
        the higher stress during forming.
      </p>
      <div className="image-container">
        <img src="/images/ahss.jpg" alt="AHSS Stamping" className="lesson-image" />
        <p>Figure 1: AHSS Stamping in Automotive Components</p>
      </div>

      {/* High-Speed Stamping */}
      <h3>2. High-Speed Metal Stamping</h3>
      <p>
        High-speed stamping is a process optimized for mass production, where parts can be stamped at rates of several hundred or even thousands 
        of parts per minute. This process is particularly useful for industries such as electronics, automotive, and appliance manufacturing, 
        where large volumes of identical parts are required.
      </p>
      <p>
        The key to high-speed stamping is the precise coordination of the press, tooling, and feed system. Presses are designed to cycle rapidly, 
        and the tooling must be engineered to withstand the repeated high-stress cycles without degrading. Lubrication and cooling systems are often 
        used to prevent overheating and reduce wear on the tools.
      </p>
      <div className="image-container">
        <img src="/images/high-speed-stamping.jpg" alt="High-Speed Stamping" className="lesson-image" />
        <p>Figure 2: High-Speed Stamping Press for Mass Production</p>
      </div>

      {/* Transfer Die Stamping */}
      <h3>3. Transfer Die Stamping</h3>
      <p>
        Transfer die stamping is used to manufacture large, complex parts that require multiple forming operations. In this process, the part is 
        physically transferred from one die station to another, where different stages of forming take place. Transfer stamping is ideal for large 
        parts like car body panels, where complex geometries and multiple forming operations are needed.
      </p>
      <p>
        One advantage of transfer stamping is that it allows for more intricate designs than progressive stamping, as each station can perform 
        a different operation, such as bending, punching, or drawing. However, this process is typically slower than high-speed or progressive 
        stamping due to the need to move the part between stations.
      </p>
      <div className="image-container">
        <img src="/images/transfer-stamping.png" alt="Transfer Die Stamping" className="lesson-image" />
        <p>Figure 3: Transfer Die Stamping for Large Automotive Parts</p>
      </div>

      {/* Progressive Die Stamping */}
      <h3>4. Progressive Die Stamping</h3>
      <p>
        Progressive die stamping is a high-efficiency process where multiple operations are performed in a single die setup. The metal strip 
        is fed through the press, and each stroke of the press performs a different operation, such as cutting, bending, or punching. 
        The part progresses through the die, and by the time it reaches the final station, it is fully formed and ready for ejection.
      </p>
      <p>
        This process is ideal for high-volume production of small to medium-sized parts, where consistent precision and repeatability are required. 
        Progressive stamping is often used for components like brackets, connectors, and small metal parts in the automotive and electronics industries.
      </p>
      <div className="image-container">
        <img src="/images/progressive-stamping.png" alt="Progressive Stamping" className="lesson-image" />
        <p>Figure 4: Progressive Die Stamping Process in Action</p>
      </div>

      {/* Hot Stamping */}
      <h3>5. Hot Stamping</h3>
      <p>
        Hot stamping, also known as press hardening, involves heating a metal sheet to temperatures of 900°C or higher before forming it in a die. 
        The heated metal is rapidly cooled during the stamping process, which results in an incredibly hard and durable component. This technique is 
        commonly used to produce crash-resistant parts in vehicles, such as A- and B-pillars and other structural components.
      </p>
      <p>
        The benefits of hot stamping include the ability to form very strong parts that are lighter than those made from traditional cold stamping 
        techniques. This makes hot stamping ideal for producing parts that need to be both strong and lightweight, contributing to overall vehicle 
        safety and efficiency.
      </p>
      <div className="image-container">
        <img src="/images/hot-stamping.jpg" alt="Hot Stamping Process" className="lesson-image" />
        <p>Figure 5: Hot Stamping Process Producing Crash-Resistant Components</p>
      </div>

      <h3>6. Conclusion</h3>
      <p>
        Each of these advanced manufacturing processes brings unique benefits to metal stamping. From high-speed stamping for mass production 
        to hot stamping for ultra-strong components, understanding the capabilities and limitations of each process helps manufacturers choose 
        the best method for their specific applications. By leveraging the strengths of these techniques, industries can produce high-quality, 
        durable parts at scale.
      </p>
    </div>
  );
}

export default Lesson8;
