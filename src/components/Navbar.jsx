import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Combined correctly
import karan from "../assets/karan.jpg";
import pic3 from "../assets/pic3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import axios from "axios";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();
  const handleSignOut = () => {
    // Optional: clear user session/localStorage/etc. here
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleCaLLApi = () => {
    try {
      axios.post("http://localhost:5100/auth/login").then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <nav className="flex flex-col shadow-md relative z-10">
      <div className="flex items-center justify-between p-4 w-full flex-wrap gap-4 bg-white/70 backdrop-blur-md">
        <div className="flex items-center">
          <img src={pic3} alt="Logo" className="h-10 w-10 rounded-full" />
          <h1
            className="ml-2 text-xl font-bold text-white"
            style={{
              textShadow: `
                -2px -2px 0 #000,
                2px -2px 0 #000,
                -2px 2px 0 #000,
                2px 2px 0 #000,
                0px 0px 4px #000
              `,
            }}
          >
            KyaBaat Farms
          </h1>
        </div>

        <div className="flex-grow max-w-md w-full mx-4">
          <input
            type="text"
            placeholder="Search Your VeggiFruit"
            className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="hidden md:flex items-center gap-6 text-black font-medium">
          <Link to="/" className="hover:underline">
          <button className="hover:underline" onClick={handleCaLLApi}>
            Home
          </button>
           </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
          <Link to="/register" className="hover:underline">
            Register
          </Link>
        </div>

        {/* Profile dropdown */}
        <div className="relative" ref={dropdownRef}>
          <img
            src={karan}
            alt="Profile"
            className="h-12 w-12 rounded-full shadow cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
              
              <Link
                to="/profile"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Profile
              </Link>
              <Link
                to="/addproduct"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Add Product
              </Link>
              <Link
                to="/settings"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Settings
              </Link>
              <button
                onClick={handleSignOut}
                className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Swiper banner */}
      <div className="bg-green-100 w-full">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <p className="text-center py-2 text-green-800 font-semibold">
              🌾 Welcome to KyaBaat Farms – Naturally Fresh!
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="text-center py-2 text-green-800 font-semibold">
              🚛 Free Delivery on Orders Above ₹500
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="text-center py-2 text-green-800 font-semibold">
              🥗 100% Organic Fruits and Vegetables Daily!
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </nav>
  );
};

export default Navbar;
