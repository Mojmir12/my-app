import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LessonsOverview from './pages/LessonsOverview';
import CategoryLessons from './pages/CategoryLessons';  // Importujeme nový soubor
import BasicOfMetalStamping from './pages/BasicOfMetalStamping';
import MetalStampingProcesses from './pages/MetalStampingProcesses';
import Lesson1 from './pages/Lesson1';
import Lesson2 from './pages/Lesson2';
import Lesson3 from './pages/Lesson3';
import Lesson4 from './pages/Lesson4';
import Lesson5 from './pages/Lesson5';
import Lesson6 from './pages/Lesson6';
import Lesson7 from './pages/Lesson7';
import Lesson8 from './pages/Lesson8';
import Lesson21 from './pages/Lesson21';
import Lesson22 from './pages/Lesson22';
import Lesson23 from './pages/Lesson23';
import Lesson24 from './pages/Lesson24';
import Lesson25 from './pages/Lesson25';
import Lesson26 from './pages/Lesson26';
import Lesson27 from './pages/Lesson27';
import QuizComponent from './pages/QuizComponent';
import QuizBasicOfMetalStamping from './pages/QuizBasicOfMetalStamping'; 
import QuizMetalStampingProcesses from './pages/QuizMetalStampingProcesses'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the Metal Stamping Tutorial</h1>
          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/lessons">Lessons</Link> |{" "}
            <Link to="/quiz/basic">Take the Quiz</Link>
          </nav>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<h2>Welcome to the Metal Stamping Tutorial</h2>} />
            <Route path="/lessons" element={<LessonsOverview />} />
            <Route path="/category/:categoryId" element={<CategoryLessons />} /> {/* Nová cesta pro lekce */}
            <Route path="/lessons/basic" element={<BasicOfMetalStamping />} />
            <Route path="/lessons/processes" element={<MetalStampingProcesses />} />
            <Route path="/lessons/lesson1" element={<Lesson1 />} />
            <Route path="/lessons/lesson2" element={<Lesson2 />} />
            <Route path="/lessons/lesson3" element={<Lesson3 />} />
            <Route path="/lessons/lesson4" element={<Lesson4 />} />
            <Route path="/lessons/lesson5" element={<Lesson5 />} />
            <Route path="/lessons/lesson6" element={<Lesson6 />} />
            <Route path="/lessons/lesson7" element={<Lesson7 />} />
            <Route path="/lessons/lesson8" element={<Lesson8 />} />
            <Route path="/lessons/lesson21" element={<Lesson21 />} />
            <Route path="/lessons/lesson22" element={<Lesson22 />} />
            <Route path="/lessons/lesson23" element={<Lesson23 />} />
            <Route path="/lessons/lesson24" element={<Lesson24 />} />
            <Route path="/lessons/lesson25" element={<Lesson25 />} />
            <Route path="/lessons/lesson26" element={<Lesson26 />} />
            <Route path="/lessons/lesson27" element={<Lesson27 />} />
            <Route path="/quiz" element={<QuizComponent />} />
            <Route path="/quiz/basic" element={<QuizBasicOfMetalStamping />} />
            <Route path="/quiz/metal-stamping-processes" element={<QuizMetalStampingProcesses />} />
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








































