import React from "react";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center p-10 px-4">
      <h1 className="text-5xl font-bold mb-4 text-gray-900 underline p-6">
        About Us
      </h1>

      <p
        className="text-3xl text-white max-w-3xl text-center font-bold mb-8 p-6"
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
        KyaBaat Farms is your go-to solution for fast, fresh, and delicious
        Vegetables and Fruits delivered right to your doorstep. Whether you're
        craving your favorite restaurant meal or looking to discover something
        new, we're here to serve you with speed and care.
      </p>

      <p className="text-4xl font-extrabold underline  text-white p-4"
         style={{
           textShadow: `
             -1px -1px 0 #000,
             1px -1px 0 #000,
             -1px 1px 0 #000,
             1px 1px 0 #000
           `,
         }}>
      
      </p>
    </div>
  );
}

export default About;