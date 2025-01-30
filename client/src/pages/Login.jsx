import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Navbar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log("User logged in:", userCredentials);
        navigate("/home"); // Redirect to home after login
      })
      .catch((error) => console.error("Error logging in:", error));
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Google Sign-In successful:", result);
        navigate("/home"); // Redirect to home after Google Sign-In
      })
      .catch((error) => console.error("Error with Google Sign-In:", error));
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
        {/* Wrapper to control layout width (desktop) */}
        <div className="flex flex-col md:flex-row w-full max-w-screen-xl max-h-full bg-white shadow-lg rounded-lg overflow-hidden">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 p-6">
            <img
              src="/Images/Login.png"
              alt="Illustration"
              className="w-full max-w-[400px] h-auto object-cover"
            />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10">
            <form onSubmit={login} className="w-full">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center md:text-left">Login</h2>
              <p className="text-gray-600 mb-6 text-center md:text-left">Welcome back! Please log in to your account.</p>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition mb-4"
                type="submit"
              >
                Login
              </button>
            </form>

            <div className="flex items-center justify-center my-4">
              <span className="h-[1px] w-1/3 bg-gray-300"></span>
              <span className="px-4 text-gray-500">OR</span>
              <span className="h-[1px] w-1/3 bg-gray-300"></span>
            </div>

            <button
              className="w-full flex items-center justify-center bg-gray-100 py-2 border border-gray-300 rounded-lg hover:bg-gray-200 transition mb-6"
              onClick={signInWithGoogle}
            >
              <img src="/Images/google.png" alt="Google Icon" className="h-5 w-5 mr-2" />
              Login with Google
            </button>

            <p className="text-center text-gray-600">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
