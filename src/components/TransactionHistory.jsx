import React from "react";

const TransactionHistory = () => {
  const transactions = [
    {
      id: "TXN123456789",
      total: "$24.50",
      items: [
        { name: "14\" Medium Pizza", price: "$12.00" },
        { name: "Steamed Dumplings", price: "$7.50" },
      ],
      restaurant: "ABC Restaurant",
    },
    {
      id: "TXN987654321",
      total: "$18.00",
      items: [{ name: "Cheeseburger and Fries", price: "$15.00" }],
      restaurant: "DEF Restaurant",
    },
    {
      id: "TXN567891234",
      total: "$30.75",
      items: [
        { name: "Large Pepperoni Pizza", price: "$20.00" },
        { name: "Garlic Bread", price: "$5.75" },
      ],
      restaurant: "GHI Restaurant",
    },
    {
      id: "TXN567893454",
      total: "$30.75",
      items: [
        { name: "Large Pepperoni Pizza", price: "$20.00" },
        { name: "Garlic Bread", price: "$5.75" },
      ],
      restaurant: "GHI Restaurant",
    },
    {
      id: "TXN567891254",
      total: "$29.75",
      items: [
        { name: "Large Pepperoni Pizza", price: "$24.00" },
        { name: "Garlic Bread", price: "$5.75" },
      ],
      restaurant: "GHI Restaurant",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-100">
      <header className="text-center mb-8">
        <h1 className="text-2xl font-bold text-blue-800">Transaction History</h1>
      </header>
      <main className="grid gap-6">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="bg-white rounded-lg p-5 shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">
                <strong>Txn ID:</strong> {transaction.id}
              </p>
              <p className=" font-semibold">
                <strong>Total:</strong> {transaction.total}
              </p>
            </div>
            <ul className="border-l-4 border-blue-700 pl-4 space-y-2">
              {transaction.items.map((item, index) => (
                <li key={index} className="relative text-gray-700">
                  <span className="absolute -left-3 text-blue-700">•</span>
                  {item.name} - {item.price}
                </li>
              ))}
              <li className="font-bold text-gray-800">
                Ordered from - {transaction.restaurant}
              </li>
            </ul>
          </div>
        ))}
      </main>
    </div>
  );
};

export default TransactionHistory;
