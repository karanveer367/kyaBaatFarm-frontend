import React, { useState, useEffect } from "react";
import Loader from "../src/components/Loader";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "@ant-design/v5-patch-for-react-19";
import bgImage from "./assets/pic2.jpg";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import AddProduct from "./pages/Addproduct";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md scale-110 z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="absolute inset-0 bg-white/30 z-0"></div>

      <div className="relative z-10">
    
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
