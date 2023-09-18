// Import React
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import Css
import './Assets/Css/Global.css';
import './Assets/Css/Reset.css';
// Import Components
import Header from "./Components/Header";
import HeaderInfo from "./Components/HeaderInfo";
// Import Pages
import Home from "./Home/Home";
import NotFound from "./Pages/NotFound";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <HeaderInfo />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/NotFound" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);