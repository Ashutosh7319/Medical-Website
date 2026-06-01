import React, { useState } from 'react';
import { CheckCircle2, QrCode, CreditCard, ArrowRight } from 'lucide-react';
import './BookingPanel.css';

const BookingPanel = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: ''
  });
  const [token, setToken] = useState('');

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleMockPayment = () => {
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setToken(Math.floor(1000 + Math.random() * 9000).toString());
      setStep(3);
    }, 2000);
  };

  return (
    <section id="booking" className="section booking-section">
      <div className="container">
        <h2 className="section-title text-center" style={{ textAlign: 'center' }}>Book an Appointment</h2>
        <p className="section-subtitle" style={{ margin: '0 auto 3rem', textAlign: 'center' }}>
          Schedule your visit and secure your token instantly. Consultation fee is ₹700.
        </p>

        <div className="glass-panel booking-panel">
          
          {step === 1 && (
            <form onSubmit={handleProceedToPayment}>
              <div className="form-group">
                <label>Full Name</label>
                <input required type="text" name="name" className="form-control" placeholder="John Doe" value={formData.name} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input required type="tel" name="phone" className="form-control" placeholder="+91 9876543210" value={formData.phone} onChange={handleInputChange} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Preferred Date</label>
                  <input required type="date" name="date" className="form-control" value={formData.date} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label>Time Slot</label>
                  <select required name="time" className="form-control" value={formData.time} onChange={handleInputChange}>
                    <option value="">Select Time</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="04:30 PM">04:30 PM</option>
                    <option value="06:00 PM">06:00 PM</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                Proceed to Pay ₹700 <ArrowRight size={18} />
              </button>
            </form>
          )}

          {step === 2 && (
            <div className="payment-mock">
              {loading ? (
                <div>
                  <div className="loader"></div>
                  <h3>Processing Payment...</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Please do not close this window.</p>
                </div>
              ) : (
                <div>
                  <h3>Select Payment Method</h3>
                  <div className="payment-amount">₹700</div>
                  <div className="payment-methods">
                    <div className="payment-method active">
                      <QrCode size={32} style={{ margin: '0 auto 0.5rem', display: 'block' }} />
                      <div>UPI</div>
                    </div>
                    <div className="payment-method">
                      <CreditCard size={32} style={{ margin: '0 auto 0.5rem', display: 'block' }} />
                      <div>Card</div>
                    </div>
                  </div>
                  <button onClick={handleMockPayment} className="btn-primary" style={{ width: '100%' }}>
                    Pay Securely
                  </button>
                  <button onClick={() => setStep(1)} className="btn-secondary" style={{ width: '100%', marginTop: '1rem' }}>
                    Cancel & Go Back
                  </button>
                </div>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="receipt">
              <CheckCircle2 size={48} className="receipt-success-icon" style={{ margin: '0 auto 1rem', display: 'block' }} />
              <h2>Booking Confirmed!</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Please show this token at the chamber.</p>
              
              <div className="token-number">
                #{token}
              </div>

              <div className="receipt-details">
                <div className="receipt-row">
                  <span>Patient Name:</span>
                  <span>{formData.name}</span>
                </div>
                <div className="receipt-row">
                  <span>Date & Time:</span>
                  <span>{formData.date} at {formData.time}</span>
                </div>
                <div className="receipt-row">
                  <span>Amount Paid:</span>
                  <span style={{ color: '#10b981' }}>₹700 (Success)</span>
                </div>
              </div>
              
              <button onClick={() => {setStep(1); setFormData({name:'', phone:'', date:'', time:''});}} className="btn-secondary" style={{ width: '100%', marginTop: '2rem' }}>
                Book Another Appointment
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default BookingPanel;
