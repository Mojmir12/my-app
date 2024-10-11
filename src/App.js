// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LessonsOverview from './pages/LessonsOverview';
import LessonDetail from './pages/LessonDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Funkce pro kontrolu, zda je uživatel přihlášený
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the Metal Stamping Tutorial</h1>
          <nav>
            <Link to="/">Home</Link> |{" "}
            {!isLoggedIn ? (
              <>
                <Link to="/register">Register</Link> |{" "}
                <Link to="/login">Login</Link>
              </>
            ) : (
              <>
                <Link to="/lessons">Lessons</Link> |{" "}
                <button onClick={handleLogout}>Logout</button>
              </>
            )}
          </nav>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<h2>Welcome to the Metal Stamping Tutorial</h2>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/lessons" element={isLoggedIn ? <LessonsOverview /> : <Login />} />
            <Route path="/lessons/:lessonId" element={isLoggedIn ? <LessonDetail /> : <Login />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <p>© 2024 Metal Stamping Tutorial</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;







