import React from "react";

const Navbar = () => (
  <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
    <div className="text-2xl font-bold">Foodie</div>
    <div className="space-x-4">
      <a href="/" className="hover:text-blue-500">Home</a>
      <a href="/menu" className="hover:text-blue-500">Menu</a>
      <a href="/cart" className="hover:text-blue-500">Cart</a>
    </div>
  </nav>
);

export default Navbar;
