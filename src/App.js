import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Componenets/Navbar";
import Home from "./Componenets/pages/Home";
import FetchData from "./Componenets/FetchData";
import Footer from "./Componenets/Footer";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
