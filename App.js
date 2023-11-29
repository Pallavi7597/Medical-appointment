import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Landingpage from './components/LandingPage/Landingpage'

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
                <Route path="/" element={<Navbar/>}/>
                <Route path="/" element={<Landingpage/>}/>
              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;
