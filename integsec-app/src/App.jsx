import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Courses from './pages/Courses';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ContactUs from './pages/ContactUs';
import CourseDetail from './pages/CourseDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
      </Routes>
    </Router>
  );
}

export default App;