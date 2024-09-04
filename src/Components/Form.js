import React, { useState } from 'react';
import './Form.css';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', number: '', email: '' });
  console.log(formData);
  const [errors, setErrors] = useState({ name: '', number: '', email: '' });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateNumber = (number) => /^\d{10,15}$/.test(number);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      setErrors({ ...errors, email: validateEmail(value) ? '' : 'Invalid email' });
    } else if (name === 'number') {
      setErrors({ ...errors, number: validateNumber(value) ? '' : 'Invalid number' });
    } else {
      setErrors({ ...errors, [name]: value ? '' : 'This field is required' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.number || !formData.email || errors.email || errors.number) {
      alert('Please fill in all fields correctly.');
      return;
    }

    const emailBody = `
    <p>Name: ${formData.name}</p>
    <p>Phone: ${formData.number}</p>
    <p>Email: ${formData.email}</p>
  `;

    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: "komalsingh552718@gmail.com",
      Password: "0EB07327B350CBB192FA6A248417574ABAF4",
      To: 'komalsingh552718@gmail.com',
      From: "komalsingh552718@gmail.com",
      Subject: "Query",
      Body: emailBody
    }).then(
      message => {
        setTimeout(() => {
          navigate("/thankyou"); // Redirect to the thank you page after 1 second
        }, 1000); // 1000 milliseconds = 1 second
      }
    );
  };

  return (
    <div className="form-container">
      <h2>Query Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label>Number:</label>
          <input type="text" name="number" value={formData.number} onChange={handleChange} />
          {errors.number && <p className="error">{errors.number}</p>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
