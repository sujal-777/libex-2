import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleCancelClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmation = (confirm) => {
    setShowConfirmation(false);
    if (confirm) {
      navigate("/");
    }
  };

  const buyFunction = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/stripe`
      ); // Use environment variable for backend URL
      if (response.status === 200) {
        window.location.href = response.data.url; // Redirect to Stripe page
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow flex flex-col lg:flex-row items-center justify-between px-8 py-12 lg:px-20 lg:py-20">
        <div className="lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
          <div className="bg-gray-100 rounded-lg shadow-md p-4">
            <img
              src="/src/Images/Payment.png"
              alt="Payment Illustration"
              className="max-w-full max-h-full"
              style={{ width: "686px", height: "851px" }}
            />
          </div>
        </div>

        <div className="lg:w-1/2 bg-white shadow-lg rounded-lg p-8">
          <form className="space-y-6">
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 text-center">
              <p className="text-gray-600">
                Buy our Course -{" "}
                <span className="text-indigo-600 font-semibold">₹15999</span>
              </p>
            </div>
            <div className="space-y-4">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                onClick={buyFunction}
              >
                Join the Course
              </button>
              <button
                type="button"
                className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 justify-center"
                style={{ width: "50%" }}
                onClick={handleCancelClick}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Payment;
