import React, { useState } from "react";
import farmLogo from "../assets/pic3.jpg"; // Replace path if needed

const Profile = () => {
  const [user, setUser] = useState({
    name: "KyaBaat Farm",
    email: "support@kyabaatfarms.com",
    phone: "+91 9815906485",
    address: " Village Tungwali, Street 5,Punjab, India",
    profilePic: farmLogo, // Set farm logo as default profile image
  });

  const [orders] = useState([
    { id: 1, item: "Organic Tomatoes", date: "2025-06-25", amount: "₹200" },
    { id: 2, item: "Alphonso Mangoes", date: "2025-06-20", amount: "₹450" },
    { id: 3, item: "Farm Fresh Onions", date: "2025-06-18", amount: "₹120" },
  ]);

  const [favorites] = useState([
    "Desi Potatoes",
    "Sweet Bananas",
    "Cauliflower",
  ]);

  const [editing, setEditing] = useState(false);
  const [tempUser, setTempUser] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempUser({ ...tempUser, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setTempUser({ ...tempUser, profilePic: imageUrl });
    }
  };

  const handleSave = () => {
    setUser(tempUser);
    setEditing(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-5 mt-10 bg-white rounded-lg shadow-lg">
      {/* KyaBaat Farms Branding */}
      <div className="text-center mb-10">
        <img
          src={farmLogo}
          alt="KyaBaat Farms Logo"
          className="w-32 h-32 mx-auto rounded-full object-cover"
        />
        <h1 className="text-4xl font-bold text-green-800 mt-4">KyaBaat Farms</h1>
        <p className="text-gray-600">Fresh & Organic Fruits & Vegetables</p>
      </div>

      <h2 className="text-3xl font-bold text-center mb-8 text-green-800">My Farm Profile</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile Pic & Upload */}
        <div className="flex flex-col items-center">
          <img
            src={editing ? tempUser.profilePic : user.profilePic}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-black p-1"
          />
          {editing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-4"
            />
          )}
        </div>

        {/* User Details */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["name", "email", "phone", "address"].map((field) => (
              <div key={field}>
                <label className="block font-semibold text-gray-700 capitalize mb-1">
                  {field}
                </label>
                {editing ? (
                  <input
                    type="text"
                    name={field}
                    value={tempUser[field]}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  <p className="text-gray-800">{user[field]}</p>
                )}
              </div>
            ))}
          </div>

          {/* Edit Buttons */}
          <div className="mt-6 flex justify-end gap-3">
            {editing ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setEditing(false);
                    setTempUser(user);
                  }}
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditing(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Order History */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4 text-green-700">Order History</h3>
        <div className="bg-gray-50 p-4 rounded shadow">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex justify-between border-b py-2 last:border-none"
            >
              <span>{order.item}</span>
              <span className="text-gray-600">{order.date}</span>
              <span className="font-medium">{order.amount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Favorites */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4 text-green-700">Favorite Produce</h3>
        <div className="flex flex-wrap gap-2">
          {favorites.map((fav, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium"
            >
              {fav}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;