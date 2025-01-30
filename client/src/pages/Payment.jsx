import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleCancelClick = () => setShowConfirmation(true);
  const handleConfirmation = (confirm) => {
    setShowConfirmation(false);
    if (confirm) navigate("/");
  };

  const buyFunction = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/stripe`);
      if (response.status === 200) {
        window.location.href = response.data.url;
      } else {
        alert("Failed to initiate payment. Please try again.");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("Payment failed. Please check the console for details.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="flex-grow flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 py-8 sm:py-12 lg:px-20 lg:py-20">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
          <div className="bg-gray-100 rounded-lg shadow-md p-4 flex justify-center items-center">
            <img
              src="/Images/Payment.png"
              alt="Payment Illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Payment Form Section */}
        <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6 sm:p-8">
          <form className="space-y-6">
            {/* Payment Options Table */}
            <table className="w-full bg-gray-100 border border-gray-300 rounded-lg p-4">
              <tbody>
                <tr>
                  <td className="text-xl sm:text-2xl font-semibold text-gray-800 text-center py-4">
                    Pay with UPI
                  </td>
                </tr>
                <tr>
                  <td className="flex flex-wrap justify-center space-x-4 sm:space-x-8 py-4">
                    {[
                      { name: "gpay", img: "/Images/logos_google-pay.png", alt: "GPay" },
                      { name: "paytm", img: "/Images/simple-icons_paytm.png", alt: "Paytm" },
                      { name: "phonepe", img: "/Images/simple-icons_phonepe.png", alt: "PhonePe" },
                    ].map(({ name, img, alt }) => (
                      <label key={name} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="upi"
                          value={name}
                          className="form-radio text-indigo-600 w-5 h-5"
                        />
                        <img src={img} alt={alt} className="h-10 sm:h-12" />
                      </label>
                    ))}
                  </td>
                </tr>
                <tr>
                  <td className="text-center font-semibold py-4 text-gray-500">Or</td>
                </tr>
                <tr>
                  <td className="text-xl sm:text-2xl font-semibold text-gray-800 text-center py-4">
                    Pay with Credit Card
                  </td>
                </tr>
                <tr>
                  <td className="space-y-4 p-4">
                    {[
                      { placeholder: "Card Holder Name", type: "text" },
                      { placeholder: "Card Number", type: "text" },
                    ].map(({ placeholder, type }, index) => (
                      <input
                        key={index}
                        type={type}
                        placeholder={placeholder}
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      />
                    ))}
                    <div className="flex space-x-4">
                      {[
                        { placeholder: "CVV", width: "w-1/2" },
                        { placeholder: "Exp. Date (MM/YY)", width: "w-1/2" },
                      ].map(({ placeholder, width }, index) => (
                        <input
                          key={index}
                          type="text"
                          placeholder={placeholder}
                          className={`${width} border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600`}
                        />
                      ))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Pricing Section */}
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 text-center">
              <p className="text-gray-600">
                Web Development -{" "}
                <span className="text-indigo-600 font-semibold">₹15999</span>
              </p>
            </div>

            {/* Button Section */}
            <div className="space-y-4">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                onClick={buyFunction}
              >
                Join the Course
              </button>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  style={{ width: "50%" }}
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>

      {/* Confirmation Dialog */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Are You Sure?</h2>
            <p className="text-gray-600 mb-6">You are about to cancel the course.</p>
            <div className="flex justify-center space-x-4">
              {[
                { text: "Yes", bg: "bg-indigo-600", hover: "hover:bg-indigo-700", action: () => handleConfirmation(true) },
                { text: "No", bg: "bg-gray-200", hover: "hover:bg-gray-300", action: () => handleConfirmation(false) },
              ].map(({ text, bg, hover, action }, index) => (
                <button key={index} className={`${bg} text-white py-2 px-4 rounded-lg ${hover}`} onClick={action}>
                  {text}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
