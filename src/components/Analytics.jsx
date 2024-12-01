import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
} from "chart.js";
import { Doughnut, Bar, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement
);

const Analytics = () => {
  // Data for charts
  const wasteData = {
    labels: ["Vegetables", "Meat", "Dairy", "Grains", "Other"],
    datasets: [
      {
        data: [25, 15, 20, 30, 10],
        backgroundColor: [
          "#34d399",
          "#f87171",
          "#fbbf24",
          "#60a5fa",
          "#a78bfa",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const rawMaterialsData = {
    labels: ["Vegetables", "Meat", "Dairy", "Grains"],
    datasets: [
      {
        label: "Raw Materials Needed (kg)",
        data: [100, 80, 50, 70],
        backgroundColor: "#34d399",
      },
    ],
  };

  const donationData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Food Donated (kg)",
        data: [50, 60, 80, 70, 90],
        borderColor: "#34d399",
        backgroundColor: "rgba(52, 211, 153, 0.2)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const sellingData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Revenue from Selling (₹)",
        data: [1000, 1200, 1500, 1400, 1800],
        borderColor: "#4ade80",
        backgroundColor: "rgba(74, 222, 128, 0.2)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  // Most Selling Items Data
  const mostSellingItems = [
    { name: "Veggie Burger", sales: 250 },
    { name: "Cheese Pizza", sales: 200 },
    { name: "Pasta Alfredo", sales: 150 },
    { name: "Caesar Salad", sales: 100 },
    { name: "Choco Lava Cake", sales: 80 },
  ];

  return (
    <div className="container mx-auto p-6 max-w-6xl ">
      <h1 className="text-3xl font-bold  mb-6">Food Waste Management Analytics</h1>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-green-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-green-700">Total Waste</h2>
          <p className="text-2xl font-bold text-green-800">75 kg</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-green-700">Food Donated</h2>
          <p className="text-xl font-bold text-green-800">350 kg</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-green-700">Food Sold</h2>
          <p className="text-xl font-bold text-green-800">₹7200</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-green-700">Raw Materials Needed</h2>
          <p className="text-xl font-bold text-green-800">300 kg</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Waste Breakdown */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-green-700 mb-4">Waste Breakdown</h3>
          <Doughnut data={wasteData} />
        </div>

        {/* Raw Materials Needed */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-green-700 mb-4">Raw Materials Needed</h3>
          <Bar
            data={rawMaterialsData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>

        {/* Donation Analysis */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-green-700 mb-4">Donation Analysis</h3>
          <Line
            data={donationData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
              },
            }}
          />
        </div>

        {/* Selling Analysis */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-green-700 mb-4">Selling Analysis</h3>
          <Line
            data={sellingData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
              },
            }}
          />
        </div>
      </div>

      {/* Most Selling Items */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold text-green-700 mb-4">Most Selling Items</h3>
        <ul>
          {mostSellingItems.map((item, index) => (
            <li
              key={index}
              className="flex justify-between border-b py-2 text-gray-700"
            >
              <span>{item.name}</span>
              <span>{item.sales} sold</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Analytics;
