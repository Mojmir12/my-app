// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const navigate = useNavigate();

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^\d{9,}$/; // Jednoduchá validace, aby obsahovalo minimálně 9 číslic
    return phoneNumberRegex.test(phoneNumber);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    if (!validatePhoneNumber(e.target.value)) {
      setPhoneNumberError('Invalid phone number format');
    } else {
      setPhoneNumberError('');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(phoneNumber)) {
      setError('Please enter a valid phone number.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Uložíme JWT token do localStorage
        localStorage.setItem('token', data.token);
        navigate('/lessons'); // Přesměruje na stránku s lekcemi po úspěšném přihlášení
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
          />
          {phoneNumberError && <p className="error-message">{phoneNumberError}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" disabled={phoneNumberError}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;



