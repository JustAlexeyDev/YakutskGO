// Import React
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import Css
import './Assets/Css/Global.css';
import './Assets/Css/Reset.css';
import './Assets/Css/SideBar.css';
// Import Components
import Header from "./Components/Header";
import SubHeader from "./Components/SubHeader";
// Import Pages
import Home from "./Home/Home";
import Afisha from "./Pages/Afisha";
import NotFound from "./Pages/NotFound";
// Render
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <SubHeader />
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Afisha" element={<Afisha />}/>
        <Route path="/NotFound" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);