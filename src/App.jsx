import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegisterPage from "./pages/register";
import NoPage from "./pages/Nopage";
// import Intro from "./components/Intro";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import OpenCards from "./components/OpenCards";
// import Header from "./components/Header";
import LoginPage from "./pages/login";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NoPage />} />

          {/* <OpenCards /> */}
          {/* <Login /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
