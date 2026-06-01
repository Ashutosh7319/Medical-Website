import React from 'react';
import { HeartPulse, Stethoscope, Microscope, Clock } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Stethoscope size={32} />,
      title: "General Consultation",
      desc: "Comprehensive checkups and personalized care plans."
    },
    {
      icon: <HeartPulse size={32} />,
      title: "Cardiac Care",
      desc: "Advanced heart monitoring and preventative cardiology."
    },
    {
      icon: <Microscope size={32} />,
      title: "Lab Tests",
      desc: "In-house diagnostic tests with quick accurate results."
    },
    {
      icon: <Clock size={32} />,
      title: "24/7 Support",
      desc: "Round-the-clock emergency assistance and tele-consults."
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        
        <div className="about-chamber" id="about">
          <h2 className="section-title">About the Chamber</h2>
          <div className="about-content">
            <p>
              Our chamber is equipped with the latest medical technology and designed to offer a comforting environment. 
              We prioritize your health and time, offering streamlined booking, minimal waiting times, and comprehensive care.
            </p>
            <div className="chamber-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Medical Chamber Interior" 
                className="chamber-image"
              />
            </div>
          </div>
        </div>

        <h2 className="section-title text-center" style={{ textAlign: 'center' }}>Our Services</h2>
        
        <div className="services-grid">
          {services.map((svc, idx) => (
            <div key={idx} className="glass-panel service-card">
              <div className="service-icon">
                {svc.icon}
              </div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
