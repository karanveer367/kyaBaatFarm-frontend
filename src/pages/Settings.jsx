import React, { useState } from "react";
import logo from "../assets/pic3.jpg"; // KyaBaat Farms logo

const Settings = () => {
  const [settings, setSettings] = useState({
    email: "support@kyabaatfarms.com",
    phone: "+91 9815906485",
    notifications: true,
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveSettings = () => {
    alert("Settings updated successfully!");
    // Integrate with API here
  };

  const handleChangePassword = () => {
    if (passwords.new !== passwords.confirm) {
      alert("New passwords do not match!");
      return;
    }
    alert("Password changed successfully!");
    // Handle real password change logic here
  };

  const handleSignOut = () => {
    alert("You have been signed out.");
    // Redirect to login page or clear session
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account permanently?")) {
      alert("Account deleted.");
      // Handle deletion logic here
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      {/* Branding */}
      <div className="text-center mb-10">
        <img src={logo} alt="KyaBaat Farms" className="w-28 h-28 mx-auto rounded-full" />
        <h1 className="text-3xl font-bold text-green-800 mt-2">KyaBaat Farms</h1>
        <p className="text-gray-600">Settings & Preferences</p>
      </div>

      {/* Contact Info */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={settings.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
        </div>
      </section>

      {/* Change Password */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Change Password</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-medium">Current Password</label>
            <input
              type="password"
              name="current"
              value={passwords.current}
              onChange={handlePasswordChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">New Password</label>
            <input
              type="password"
              name="new"
              value={passwords.new}
              onChange={handlePasswordChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirm"
              value={passwords.confirm}
              onChange={handlePasswordChange}
              className="w-full border p-2 rounded"
            />
          </div>
        </div>
        <button
          onClick={handleChangePassword}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Update Password
        </button>
      </section>

      {/* Preferences */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            id="notifications"
            checked={settings.notifications}
            onChange={() =>
              setSettings((prev) => ({
                ...prev,
                notifications: !prev.notifications,
              }))
            }
            className="w-5 h-5"
          />
          <label htmlFor="notifications" className="text-gray-700">
            Receive order updates and farm news
          </label>
        </div>
      </section>

      {/* Actions */}
      <div className="flex flex-col md:flex-row justify-between mt-10 gap-4">
        <button
          onClick={handleSaveSettings}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
        <button
          onClick={handleSignOut}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Sign Out
        </button>
        <button
          onClick={handleDeleteAccount}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Delete My Account
        </button>
      </div>
    </div>
  );
};

export default Settings;