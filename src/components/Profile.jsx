import React, { useState } from "react";

const Profile = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    alert("Profile updated successfully!");
    // Add backend logic for saving profile
  };

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Profile</h1>

      <div className="bg-green-50 shadow-md rounded-lg p-6">
        {/* Image Upload */}
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 mb-4">
            {preview ? (
              <img
                src={preview}
                alt="Profile Preview"
                className="w-full h-full rounded-full object-cover border-4 border-green-500"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-green-200 flex items-center justify-center text-green-700 text-lg font-bold border-4 border-green-500">
                <span>Upload</span>
              </div>
            )}
            <label
              htmlFor="file-upload"
              className="absolute bottom-0 right-0 bg-green-600 hover:bg-green-700 text-white rounded-full p-2 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5l-4-4m0 0l-4 4m4-4v12m7-7v5.25A2.25 2.25 0 0117.25 21h-10.5A2.25 2.25 0 014.5 18.75V13.5"
                />
              </svg>
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </div>

        {/* Profile Details */}
        <div className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-green-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-green-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6">
          <button
            onClick={handleSave}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
