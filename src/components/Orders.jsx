import React, { useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: 1, table: "Table 1", items: ["Pizza", "Coke"], status: "new" },
    { id: 2, table: "Table 2", items: ["Burger", "Fries"], status: "in-progress" },
    { id: 3, table: "Table 3", items: ["Pasta", "Salad"], status: "completed" },

    { id: 4, table: "Table 1", items: ["Pizza", "Coke"], status: "new" },
    { id: 5, table: "Table 2", items: ["Burger", "Fries"], status: "in-progress" },
    { id: 6, table: "Table 3", items: ["Pasta", "Salad"], status: "completed" },
  ]);

  const updateStatus = (id, status) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  const renderOrders = (status) =>
    orders
      .filter((order) => order.status === status)
      .map((order) => (
        <div
          key={order.id}
          className="border border-green-300 rounded-lg p-4 shadow-md bg-green-50"
        >
          <h3 className="text-lg font-bold text-green-800 mb-2">
            Order #{order.id}
          </h3>
          <p className="mb-1">
            <span className="font-semibold text-green-700">Table:</span>{" "}
            {order.table}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-green-700">Items:</span>{" "}
            {order.items.join(", ")}
          </p>
          {status === "new" && (
            <button
              onClick={() => updateStatus(order.id, "in-progress")}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
            >
              Mark as In Progress
            </button>
          )}
          {status === "in-progress" && (
            <button
              onClick={() => updateStatus(order.id, "completed")}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
            >
              Mark as Completed
            </button>
          )}
        </div>
      ));

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Restaurant Orders</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* New Orders Section */}
        <div>
          <h2 className="text-2xl font-bold text-green-800 mb-4">New Orders</h2>
          <div className="space-y-4">
            {renderOrders("new")}
            {orders.filter((order) => order.status === "new").length === 0 && (
              <p className="text-green-600">No new orders.</p>
            )}
          </div>
        </div>

        {/* In-Progress Orders Section */}
        <div>
          <h2 className="text-2xl font-bold text-green-800 mb-4">In Progress</h2>
          <div className="space-y-4">
            {renderOrders("in-progress")}
            {orders.filter((order) => order.status === "in-progress").length ===
              0 && <p className="text-green-600">No in-progress orders.</p>}
          </div>
        </div>

        {/* Completed Orders Section */}
        <div>
          <h2 className="text-2xl font-bold text-green-800 mb-4">Completed Orders</h2>
          <div className="space-y-4">
            {renderOrders("completed")}
            {orders.filter((order) => order.status === "completed").length ===
              0 && <p className="text-green-600">No completed orders.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
