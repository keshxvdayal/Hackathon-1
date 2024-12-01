import axios from "axios";

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const openRazorpayModal = async (orderDetails, onSuccess, onFailure) => {
  const scriptLoaded = await loadRazorpayScript();

  if (!scriptLoaded) {
    console.error("Failed to load Razorpay script");
    return;
  }

  // Create Razorpay Order
  try {
    const { data } = await axios.post(
      "http://192.168.43.221:8000/api/v1/razorpay/order/create/",
      {
        amount: orderDetails.amount,
        currency: orderDetails.currency || "INR",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMzMDQwNzYwLCJpYXQiOjE3MzMwMzc3NjAsImp0aSI6ImVhMzMyYWQ0OWVhZDQxNjdhY2EzYzJlNzgxYzBiNGFhIiwidXNlcl9pZCI6MX0.wiF4HA6be8h8zZ7oWoPC3i1I5fazirZQ-xo7bKBKWeQ`, // Replace with your JWT token
        },
      }
    );

    const options = {
      key: "hIx8ODIuaEJ0Pbgp4BuxK5Ll", // Replace with your Razorpay Key ID
      amount: data.data.amount,
      currency: data.data.currency,
      name: orderDetails.name || "Your Company Name",
      description: orderDetails.description || "Test Transaction",
      order_id: data.data.id, // Razorpay Order ID
      prefill: {
        name: orderDetails.customerName || "Customer Name",
        email: orderDetails.customerEmail || "customer@example.com",
        contact: orderDetails.customerPhone || "9999999999",
      },
      handler: (response) => {
        // Payment Successful
        onSuccess(response);
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.on("payment.failed", (response) => {
      // Payment Failed
      onFailure(response);
    });

    razorpay.open();
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
  }
};
