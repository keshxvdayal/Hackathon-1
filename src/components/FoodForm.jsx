import React, { useState } from "react";
import axios from "axios";

const CreateMenu = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: null,
    price_per_serving: "",
    serving_size: "",
    total_weight: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value, // Handle file input for the "image"
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("image", formData.image);
    data.append("price_per_serving", formData.price_per_serving);
    data.append("serving_size", formData.serving_size);
    data.append("total_weight", formData.total_weight);

    try {
      const response = await axios.post("{{BASE_URL}}/api/v1/stock/create-menu", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Menu created successfully:", response.data);
    } catch (error) {
      console.error("Error creating menu:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Image:</label>
        <input type="file" name="image" accept="image/*" onChange={handleChange} required />
      </div>
      <div>
        <label>Price per Serving:</label>
        <input
          type="text"
          name="price_per_serving"
          value={formData.price_per_serving}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Serving Size:</label>
        <input
          type="text"
          name="serving_size"
          value={formData.serving_size}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Total Weight:</label>
        <input
          type="text"
          name="total_weight"
          value={formData.total_weight}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Create Menu</button>
    </form>
  );
};

export default CreateMenu;
