import React, { useState } from "react";

const FoodDetails = ({ inventory }) => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [donationQuantity, setDonationQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const handleFoodSelection = (food) => {
    setSelectedFood(food);
    setDonationQuantity(1); // Reset quantity on selection
    setMessage("");
  };

  const handleDonate = () => {
    if (donationQuantity < 1 || donationQuantity > selectedFood.stock) {
      setMessage("Invalid donation quantity.");
      return;
    }
    console.log("Donated Item:", selectedFood.name, "Quantity:", donationQuantity);
    setMessage("Donation successful!");
    setSelectedFood(null); // Reset selection
  };

  const calculateTotalPrice = () => {
    return donationQuantity * selectedFood.pricePerUnit;
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold  mb-6 text-center">Available Food Inventory</h1>

      {/* Food Inventory */}
      {!selectedFood && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inventory.map((food) => (
            <button
              key={food.id}
              onClick={() => handleFoodSelection(food)}
              className="border border-gray-300 rounded-lg p-4 bg-white shadow-md hover:bg-green-50 transition"
            >
              <h2 className="text-lg font-semibold text-green-700">{food.name}</h2>
              <p className="text-sm text-gray-600">{food.description}</p>
              <p className="text-sm text-gray-500">Stock: {food.stock}</p>
              <p className="text-sm text-gray-500">Price per Unit: ₹{food.pricePerUnit}</p>
            </button>
          ))}
        </div>
      )}

      {/* Food Details */}
      {selectedFood && (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-green-700 mb-4">{selectedFood.name}</h2>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Description:</span> {selectedFood.description}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Expiration Date:</span> {selectedFood.expirationDate}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Price per Unit:</span> ₹{selectedFood.pricePerUnit}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Plate Price:</span> ₹{selectedFood.platePrice}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Total Quantity:</span> {selectedFood.stock - donationQuantity < 0 ? 0 :  selectedFood.stock - donationQuantity}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="mr-4 font-medium text-gray-700">
              Select Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              value={donationQuantity}
              min="1"
              max={selectedFood.stock}
              onChange={(e) => setDonationQuantity(parseInt(e.target.value) || 1)}
              className="border border-gray-300 rounded-md px-2 py-1 w-20 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Total Price */}
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Total Price:</span> ₹{calculateTotalPrice()}
          </p>

          {/* Action Buttons */}
          <div className="flex justify-between">
            <button
              onClick={() => setSelectedFood(null)}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
            >
              Back to Inventory
            </button>
            <button
              onClick={handleDonate}
              className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800"
            >
              Donate
            </button>
          </div>

          {/* Donation Message */}
          {message && (
            <p className="mt-4 text-sm font-medium text-green-600">
              {message}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

// Example inventory data
const inventoryData = [
  {
    id: 1,
    name: "Rice",
    description: "A staple food that can feed many. Perfect for donation.",
    stock: 50,
    expirationDate: "2024-12-15",
    pricePerUnit: 40,
    platePrice: 25,
  },
  {
    id: 2,
    name: "Bread",
    description: "Fresh bread, ideal for quick meals or sandwiches.",
    stock: 20,
    expirationDate: "2024-01-05",
    pricePerUnit: 20,
    platePrice: 10,
  },
  {
    id: 3,
    name: "Milk",
    description: "Dairy product with rich nutrients.",
    stock: 30,
    expirationDate: "2024-01-10",
    pricePerUnit: 50,
    platePrice: 15,
  },
  {
    id: 4,
    name: "Vegetables",
    description: "Fresh and organic, perfect for healthy meals.",
    stock: 40,
    expirationDate: "2024-01-20",
    pricePerUnit: 30,
    platePrice: 20,
  },
];

const App = () => {
  return <FoodDetails inventory={inventoryData} />;
};

export default App;
