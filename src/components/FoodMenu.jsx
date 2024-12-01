import { useState } from "react";
import axios from "axios";
import { useRazorpay } from "react-razorpay";

const FoodMenu = () => {
  const { Razorpay  , isLoading} = useRazorpay(); // Razorpay instance

  // Function to complete the order after payment
  const complete_order = (paymentID, orderID, signature) => {
    axios({
      method: 'post',
      url: 'http://192.168.43.221:8000/razorpay/order/complete/',
      data: {
        payment_id: paymentID,
        order_id: orderID,
        signature: signature,
        amount: 100,
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // Razorpay payment initiation
  const razorPay = () => {
    axios({
      method: 'post',
      url: 'http://192.168.43.221:8000/api/v1/razorpay/order/create/',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMzMDQ1MTY0LCJpYXQiOjE3MzMwNDIxNjQsImp0aSI6ImQ5YjA4Y2E2ZTJhMDQyYmE5MTA1NGQ2Y2JmMzU1YmI2IiwidXNlcl9pZCI6MX0.1pyjn_q10REuGY4vE5QtD5DHThlB3hvzt9tNhvSuQBY`,
      },
      data: {
        amount: 100,
        currency: "INR",
      },
    })
      .then((response) => {
        const order_id = response.data.data.id; // Get order ID from response

        // Razorpay options for the payment modal
        const options = {
          key: "rzp_test_P6b1PCMzaOdS6T", // Replace with your Razorpay key
          amount: 100, // Amount in paise (100 INR)
          currency: "INR",
          name: "Bell Fresh",
          description: "Fresh & Healthy Food",
          order_id: order_id, // Use dynamic order ID from server response
          handler: (response) => {
            console.log("Payment Response:", response);
            complete_order(response.razorpay_payment_id, order_id, response.razorpay_signature);
           
            alert("Payment Successful!");
          },
          prefill: {
            name: "John Doe",
            email: "john.doe@example.com",
            contact: "9999999999",
          },
          theme: {
            color: "#F37254",
          },
        };

        // Open Razorpay modal
        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();
      })
      .catch((error) => {
        console.log("Error in creating order:", error);
      });
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 bg-gray-100 min-h-screen overflow-hidden">
      <div className="flex-1">
        {/* Header */}
        <header className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md text-nowrap">
          <div className="max-md:hidden">
            <h1 className="text-2xl font-bold text-green-500">Bell Fresh</h1>
            <p className="text-gray-600">Fresh & healthy food recipe</p>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-xl font-bold">24</p>
                <span className="text-gray-500">Total item</span>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">04</p>
                <span className="text-gray-500">Restaurant</span>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center gap-4 cursor-pointer group">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="w-12 h-12 rounded-full border-2 border-green-500"
                />
                <p className="font-semibold text-gray-700">John Doe</p>
              </div>
            </div>
          </div>
        </header>

        {/* Popular Dishes */}
        <section className="bg-white p-6 rounded-lg shadow-md mt-10">
          <h2 className="text-xl font-semibold mb-4">Popular Dish</h2>
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
                  <span className="text-green-500 font-bold">Rs {dish.price}</span>
                  <button
                    className="bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600 transition"
                    onClick={razorPay} disabled={isLoading}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FoodMenu;
