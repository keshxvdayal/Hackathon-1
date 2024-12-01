import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600 mt-4">Your cart is empty.</p>
      ) : (
        <div className="mt-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-gray-600">x{item.quantity}</p>
              </div>
              <div className="flex items-center">
                <p className="mr-4">${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h3 className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
