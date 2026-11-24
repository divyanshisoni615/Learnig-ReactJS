
import React from 'react'
import { Routes, Route } from "react-router-dom";
// import Course from './components/Course'
// import Home from './components/Home'
import Signup from './components/signup'
import Course from './components/Course';

function App() {
  // javascript

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Courses" element={<Course />} />
    </Routes>
  )
}

export default App