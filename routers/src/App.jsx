import { useState, useEffect, useRef } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/contact';
import User from './components/User';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: 
        <>
          <Navbar />
          <Home />
        </>
      
    },
    {
      path: '/about',
      element: 
        <>
          <Navbar />
          <About />
        </>

    },
    {
      path: '/contact',
      element: 
        <>
          <Navbar />
          <Contact />
        </>
      
    },
    {
      path: '/User/:username',
      element: 
        <>
          <Navbar />
          <User/>
        </>
      
    },
  ]);

  return (
  <>
<RouterProvider router={router} />

  </>
  )
}

export default App;