import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home/HomePage";
import Footer from "./components/Footer";
import Aboutpage from "./pages/About/Aboutpage";
import PlaygroundPage from "./pages/Playground/PlaygroundPage";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="playground" element={<PlaygroundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
