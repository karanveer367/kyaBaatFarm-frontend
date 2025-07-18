import React from "react";

const Contact = () => {
  return (
    <div className="">
      {/* Header */}
      <div className=" py-12 text-white text-center">
        <h1 className="text-4xl text-black font-bold mb-2 underline">Contact Us</h1>
        <p className="text-2xl">
          We’re here to help and answer any questions you may have.
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20 py-16">
        {/* Contact Info Block */}
        <div className="text-white p-8 shadow-lg rounded-xl ">
          <h2 className="text-2xl font-semibold mb-6">📍 Get in Touch</h2>
          <div className="space-y-4 text-white font-bold">
            <p>
              <strong>📞 Phone:</strong> +91 9815906485
            </p>
            <p>
              <strong>✉️ Email:</strong> support@kyabaatfarms.com
            </p>
            <p>
              <strong>🏡 Address:</strong> Village Tungwali, Street 5,
              Punjab, India
            </p>
            <p>
              <strong>🕒 Hours:</strong> Mon - Sat, 9am - 6pm
            </p>
          </div>
        </div>

        {/* Message Form Block */}
        <div className="bg-white p-8 shadow-lg rounded-xl border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6">📝 Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm mb-1">Your Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-3 rounded-lg"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Your Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 p-3 rounded-lg"
                placeholder="Email Address"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Mobile Number</label>
              <input
                type="+***"
                className="w-full border border-gray-300 p-3 rounded-lg"
                placeholder="Mobile Number"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 p-3 rounded-lg"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white font-semibold py-2 px-6 rounded hover:bg-green-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Social & Support Block */}
      <div className=" text-center p-8 shadow-lg rounded-xl">
        <ul className="space-y-3 text-white font-bold">
          <li>
            <a href="#" className="hover:underline">
              🌐 Website: www.kyabaatfarms.com
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              📸 Instagram: @kyabaatfarms
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              📘 Facebook: KyaBaat Farms
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              🐦 Twitter: @KyaBaatFarms
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
