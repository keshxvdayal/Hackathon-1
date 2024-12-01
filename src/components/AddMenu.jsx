import React, { useState } from "react";

const AddMenu = () => {
  const [menu, setMenu] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMenu({ ...menu, [name]: value });
  };

  const handleImageUpload = (e) => {
    setMenu({ ...menu, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Menu submitted:", menu);
    // Add logic to submit form data to the backend
  };

  return (
    <div className="container mx-auto max-w-4xl p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-green-700 mb-6">Add New Menu Item</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
            Item Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={menu.name}
            onChange={handleInputChange}
            placeholder="Enter item name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={menu.category}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          >
            <option value="">Select category</option>
            <option value="starter">Starter</option>
            <option value="main-course">Main Course</option>
            <option value="dessert">Dessert</option>
            <option value="beverage">Beverage</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="price">
            Price (₹)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={menu.price}
            onChange={handleInputChange}
            placeholder="Enter price"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={menu.description}
            onChange={handleInputChange}
            placeholder="Enter a short description of the item"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="4"
            required
          />
        </div>

        {/* Image */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="image">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full text-gray-500 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {menu.image && (
            <p className="text-sm text-gray-600 mt-2">Selected file: {menu.image.name}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Add Menu Item
        </button>
      </form>
    </div>
  );
};

export default AddMenu;
