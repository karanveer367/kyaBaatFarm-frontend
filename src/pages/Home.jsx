import React from "react";
import { Link } from "react-router-dom";
import bg1 from "../assets/pic1.jpg";
import bg2 from "../assets/pic4.jpg";
import bg3 from "../assets/pic5.jpg";
import item1 from "../assets/Tomato.jpeg";
import item2 from "../assets/Carrots.jpg";
import item3 from "../assets/Cauliflower.jpg";
import item4 from "../assets/Potatos.jpg";
import item5 from "../assets/Onion.jpg";
import fruit1 from "../assets/Apple.jpg";
import fruit2 from "../assets/Banana.jpeg";
import fruit3 from "../assets/Oranges.jpeg";
import fruit4 from "../assets/Mangos.jpeg";
import fruit5 from "../assets/Grapes.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const products = [
  { img: item1, title: "Organic Tomatoes", price: "₹40/kg" },
  { img: item2, title: "Fresh Carrots", price: "₹35/kg" },
  { img: item3, title: "Cauliflower", price: "₹25/kg" },
  { img: item4, title: "Desi Potatoes", price: "₹30/kg" },
  { img: item5, title: "Farm Fresh Onions", price: "₹28/kg" },
];

const fruits = [
  { img: fruit1, title: "Apples", price: "₹120/kg" },
  { img: fruit2, title: "Bananas", price: "₹40/dozen" },
  { img: fruit3, title: "Oranges", price: "₹80/kg" },
  { img: fruit4, title: "Mangoes", price: "₹150/kg" },
  { img: fruit5, title: "Grapes", price: "₹90/kg" },
];

const backgroundSlides = [
  { img: bg1, text: "Fresh from the Farm to Your Plate" },
  { img: bg2, text: "Nature’s Best, Handpicked for You" },
  { img: bg3, text: "Farm Fresh Goodness Delivered Daily" },
];

const Home = () => {
  return (
    <div className="w-full bg-white">

      {/* Hero Swiper */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        loop
        pagination={{ clickable: true }}
        className="w-full h-[500px]"
      >
        {backgroundSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[500px]">
              <img
                src={slide.img}
                alt={slide.text}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h1 className="text-3xl md:text-5xl font-black text-white text-center px-4">
                  {slide.text}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Veggies Section */}
      <section className="px-6 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Recommended Fresh Veggies For You
          </h2>
          <Link to="/addproduct">
            <button className="bg-green-700 text-white px-4 py-2 rounded-lg shadow hover:bg-green-800 transition">
              + Add Veggies
            </button>
          </Link>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 3000 }}
          loop
          pagination={{ clickable: true }}
        >
          {products.map((item, idx) => (
            <SwiperSlide key={idx}>
              <Link to={`/product/${encodeURIComponent(item.title)}`}>
                <div className="bg-black p-4 rounded-xl shadow hover:shadow-xl transition cursor-pointer">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-48 w-full object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-white font-bold">{item.price}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Fruits Section */}
      <section className="px-6 py-12">
         <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Recommended Fresh Fruits For You
        </h2>
        <Link to="/addproduct">
            <button className="bg-green-700 text-white px-4 py-2 rounded-lg shadow hover:bg-green-800 transition">
              + Add Fruits
            </button>
          </Link>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 3000 }}
          loop
          pagination={{ clickable: true }}
        >
          {fruits.map((item, idx) => (
            <SwiperSlide key={idx}>
              <Link to={`/product/${encodeURIComponent(item.title)}`}>
                <div className="bg-black p-4 rounded-xl shadow hover:shadow-xl transition cursor-pointer">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-48 w-full object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-white font-bold">{item.price}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Home;