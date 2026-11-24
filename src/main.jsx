// ***for browsing ***
//  search in google "browser router in react"

//  Step 1 Install React Router

//     npm install react-router-dom

// Step 2 Import BrowserRouter

//     import { BrowserRouter } from "react-router-dom";

// Step 3 Wrap Your App

// import { BrowserRouter } from "react-router-dom";
// import App from "./App";

// function Root() {
//   return (
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
// }

// => Creating Routes
// past in app.jsx
// import { Routes, Route } from "react-router-dom";

// past in return 
// <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//     </Routes>



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
