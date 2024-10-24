// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';  // Přidáváme knihovnu PhoneInput
import 'react-phone-input-2/lib/style.css';    // Import stylů pro PhoneInput
import './Login.css';

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Odstraníme mezery z telefonního čísla
    const formattedPhoneNumber = phoneNumber.replace(/\s+/g, '');

    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber: formattedPhoneNumber, password }),
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
          <PhoneInput
            country={'cz'}         // Stejné nastavení jako v Register.js
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
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;





