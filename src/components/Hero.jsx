import React from 'react';
import { Calendar, ArrowRight, Activity } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>
            Expert Medical Care <br />
            <span>Right in Your Chamber</span>
          </h1>
          <p>
            Welcome to Design.in Chamber. We provide state-of-the-art medical consultation with a seamless pre-booking experience. Skip the waiting room and book your slot instantly.
          </p>
          <div className="hero-buttons">
            <a href="#booking" className="btn-primary">
              <Calendar size={20} />
              Book Appointment
            </a>
            <a href="#about" className="btn-secondary">
              Learn More <ArrowRight size={18} />
            </a>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Doctor in Chamber" 
            className="hero-image"
          />
          <div className="doctor-badge">
            <div className="doctor-badge-icon">
              <Activity size={24} />
            </div>
            <div className="doctor-badge-text">
              <h3>Dr. Sarah Jenkins</h3>
              <p>Chief Medical Officer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
