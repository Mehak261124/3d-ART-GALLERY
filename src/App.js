import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './component/page/landing/header/navbar';
import Gallery from './Gallery'; 
import LandingPage from './component/page/landing/landingpage';
import Collection from './component/page/landing/collection';
// import Login from './component/page/landing/auth/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './App.css';


function App() {

  return (
    <Router>
      {/* <Navbar onProfileClick={() => setLoginPopupVisible(true)} /> */}
      {/* {loginPopupVisible && <Login closeLoginPopup={() => setLoginPopupVisible(false)} />} */}
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/collection/:category" element={<Collection />} />
        {/* <Route path="/collection/:category" element={<NatureCollection />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
