import React from 'react';
import priyanshuImage from '../assets/priyanshu.jpeg';
import './DesignerCredit.css';

const DesignerCredit = () => {
  return (
    <section className="designer-section">
      <div className="container designer-container">
        <div className="designer-image-wrapper">
          <img src={priyanshuImage} alt="Priyanshu" className="designer-image" />
        </div>
        <div className="designer-info">
          <h3>Priyanshu</h3>
          <p className="designation">Founder & Designer of Design.in</p>
          <p className="description">
            This website is crafted as a premium demonstration for Design.in, showcasing our commitment to seamless user experiences and modern aesthetics for medical professionals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignerCredit;
