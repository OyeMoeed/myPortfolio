import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SplashScreen from "./utils/SplashScreen";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/Aboutpage";
import PlaygroundPage from "./pages/Playground/PlaygroundPage";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
const App = () => {
  const [loading, setLoading] = useState(true);

  // Callback function to handle splash screen disappearance
  const onVanish = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <SplashScreen onVanish={onVanish} />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden"
        >
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/playground" element={<PlaygroundPage />} />
          </Routes>
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default App;
