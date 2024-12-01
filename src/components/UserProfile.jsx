import React from "react";
import { BackIcon } from "../assets/icons";
const UserProfile = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center p-5  bg-gray-100 h-screen ">
        
        
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden md:max-w-md lg:max-w-lg relative">
      <p className="absolute left-0 p-4" role="button"><BackIcon/></p>
        <header className="text-center p-5 bg-green-50">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-3"
          />
          <h1 className="text-lg font-bold">John Smith</h1>
        </header>
        <section className="p-5">
          <h2 className="text-xl font-semibold mb-3">User Details</h2>
          <ul className="space-y-3">
            <li className="flex justify-between border-b pb-2">
              <a href="#" className="text-gray-700">
                Address
              </a>
            </li>
            <li className="flex justify-between border-b pb-2">
              <a href="#" className="text-gray-700">
                Phone number
              </a>
            </li>
            <li className="flex justify-between border-b pb-2">
              <a href="#" className="text-gray-700">
                Cheeseburger and Fries
              </a>
            </li>
          </ul>
        </section>
        <nav className="flex flex-col p-5 bg-gray-50">
        <a href="txn.html" className="text-green-600 mb-3 hover:underline">
            Recent Orders
          </a>
          <a href="txn.html" className="text-green-600 mb-3 hover:underline">
            Payment History
          </a>
          <a href="#" className="text-green-600 hover:underline">
            Order Now
          </a>
        </nav>
      </div>
    </div>
  );
};

export default UserProfile;
