import React from "react";

const FoodMenu = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 bg-gray-100 min-h-screen">
      {/* Left Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
          {/* Logo and Stats */}
          <div>
            <h1 className="text-2xl font-bold text-green-500">Bell Fresh</h1>
            <p className="text-gray-600">Fresh & healthy food recipe</p>
          </div>
          {/* Stats */}
          <div className="flex gap-6">
            <div className="text-center">
              <p className="text-xl font-bold">24</p>
              <span className="text-gray-500">Total items</span>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">09</p>
              <span className="text-gray-500">Categories</span>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">04</p>
              <span className="text-gray-500">Outlets</span>
            </div>
          </div>
          {/* Profile Section */}
          <div className="relative">
            <div className="flex items-center gap-4 cursor-pointer group">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-green-500"
              />
              <div>
                <p className="font-semibold text-gray-700">John Doe</p>
                <p className="text-sm text-gray-500">Manager</p>
              </div>
            </div>
            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg hidden group-hover:block">
              <ul className="text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* Categories */}
        <section className="flex gap-4 my-6 overflow-x-auto">
          {["Salad", "Pizza", "Steak Meat", "Drinks", "Burger"].map(
            (category, index) => (
              <div
                key={index}
                className={`min-w-[100px] px-4 py-2 text-center rounded-lg cursor-pointer whitespace-nowrap ${
                  index === 0
                    ? "bg-green-100 text-green-500 font-semibold"
                    : "bg-gray-200 text-gray-600"
                } hover:shadow-lg transition`}
              >
                {category}
              </div>
            )
          )}
        </section>

        {/* Popular Dishes */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Popular Dishes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: "Fresh and Healthy Salad",
                calories: 60,
                persons: 4,
                price: 2.65,
              },
              {
                name: "Cashew Nut Chicken Salad",
                calories: 60,
                persons: 4,
                price: 2.65,
              },
              {
                name: "Crunchy Cashew Salad",
                calories: 60,
                persons: 4,
                price: 2.65,
              },
              {
                name: "Sesame Dressing Salad",
                calories: 60,
                persons: 4,
                price: 2.65,
              },
            ].map((dish, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-4 shadow-sm transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://via.placeholder.com/100"
                  alt={dish.name}
                  className="w-full h-24 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-medium">{dish.name}</h3>
                <p className="text-gray-500 text-sm">
                  {dish.calories} calories • {dish.persons} persons
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-green-500 font-bold">
                    ${dish.price.toFixed(2)}
                  </span>
                  <button className="bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600 transition">
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Placeholder for Right Cart Section */}
      <div className="hidden md:block w-1/4">
        {/* Cart can be added here */}
      </div>
    </div>
  );
};

export default FoodMenu;
