// src/pages/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './Register.css';

function Register() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const validatePassword = (password) => {
    return password.length >= 8 && /\d/.test(password);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!validatePassword(e.target.value)) {
      setPasswordError('Password must be at least 8 characters long and contain a number or special character');
    } else {
      setPasswordError('');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setError('Please fix the errors above before submitting.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, password }),
      });

      if (response.ok) {
        navigate('/login'); // Přesměruje na přihlašovací stránku po úspěšné registraci
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Phone Number:</label>
          <PhoneInput
            country={'cz'} // Defaultní předvolba
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter phone number"
            disableCountryCode={false}
            autoFormat={false}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" disabled={passwordError}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;





