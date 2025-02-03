import React from "react";
import Photos from "../components/Photos";
import Cards from "../components/Cards";
import Counts from "../components/Counts";
import CourseCards from "../components/CourseCards";
import Courses from "../components/Courses";
import Weare from "../components/Weare";
import Testimonials from "../components/Testimonials";
import ExpertTeam from "../components/ExpertTeam";
import Blog from "../components/Blog";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Dice1 } from "lucide-react";
import"./Home.css"

const Home = () => {
  const navigate = useNavigate();

  const handlenav = () => {
    navigate("/about");
  };

  return (

      <div className="w-screen  m-0 p-0 overflow-x-hidden-hidden">

<Navbar />

<div className="p-5 sm:p-10 text-center ">
  <div className="relative">
    {/* Background Image */}
    <img
      src={`/Images/Overlay+Blur.png`}
      alt="Large Photo Left"
      className="w-1/4 h-auto left-0 absolute"
    />
    <img
      src={`/Images/Overlay+Blur.png`}
      alt="Large Photo Left"
      className="absolute left-0 w-16 h-auto sm:w-1/4"
    />

    {/* Decorative Balls */}
    <div className="relative">
      <img
        src={`/Images/ball-1.png`}
        alt="Ball 1"
        className="absolute top-4 left-5 w-6 h-6 sm:w-12 sm:h-12 opacity-60 z-0"
      />
      <img
        src={`/Images/ball-2.png`}
        alt="Ball 2"
        className="absolute top-20 right-10 w-8 h-8 sm:w-16 sm:h-16 opacity-50 z-0"
      />
    </div>

    {/* Main Content */}
    <div className="relative z-10 text-3xl sm:text-5xl font-bold mt-20 sm:mt-36">
      <div>Internship Paths To</div>
      <div>
        Your Dream <span className="text-cyan-400">Career</span>
      </div>
    </div>

    {/* Buttons and Image */}
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-10 sm:mt-16">
      <button className="bg-violet-500 py-2 px-4 sm:py-4 sm:px-5 rounded-3xl text-white text-sm sm:text-lg">
        Find Course
      </button>
      <img
        src={`/Images/Group 1.png`}
        alt="Group Image"
        className="w-1/2 sm:w-auto object-contain"
      />
    </div>
    <div className="relative">
      {/* Background balls (top and bottom) */}
      <div className="relative">
        <img
          src="/Images/ball-2.png"
          alt="Ball 4"
          className="absolute bottom-2 right-1/3 w-6 h-6 opacity-50 z-0"
        />
        <img
          src="/Images/ball-3.png"
          alt="Ball 5"
          className="absolute bottom-2 left-1/3 w-6 h-6 opacity-50 z-0"
        />
      </div>

      {/* Photos Section */}
      <Photos />

      {/* Additional Decorative Elements */}
      <div className="relative">
        <img
          src="/Images/ball-3.png"
          alt="Ball 3"
          className="absolute bottom-1/3 left-4 w-10 h-10 opacity-40 z-0"
        />
        <img
          src="/Images/ball-1.png"
          alt="Ball 4"
          className="absolute top-2 left-1/3 w-12 h-12 opacity-50 z-0"
        />
        <img
          src="/Images/ball-2.png"
          alt="Ball 5"
          className="absolute top-1/3 right-4 w-14 h-14 opacity-60 z-0"
        />
      </div>

      {/* Large Overlay Ball */}
      <img
        src="/Images/Overlay+Blur-Orange.png"
        alt="Large Photo Left"
        className="w-1/4 h-auto right-0 absolute"
      />

      {/* Cards Section */}
      <Cards className="z-10" />
    </div>

    {/* About Us Section */}
    <div className="flex flex-col lg:flex-row justify-center items-center bg-violet-100 p-6 sm:p-12 rounded-3xl mt-16 lg:space-x-10">
      <div className="w-full lg:w-1/2">
        <img
          className="w-full rounded-xl"
          src="/Images/16.png"
          alt="About us"
        />
      </div>
      <div className="w-full lg:w-1/2 mt-6 lg:mt-0 text-left">
        <h2 className="text-orange-500 text-xl sm:text-3xl">About Us</h2>
        <h3 className="text-2xl sm:text-4xl font-extrabold mt-4">
          <span className="text-cyan-400">Training</span> Tailored For
          Your Success
          <div>
            With <span className="text-cyan-400">Libex</span>
          </div>
        </h3>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit...
        </p>
        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <div>
            <h4 className="font-bold">Flexible Timings</h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Expert Instructor</h4>
            <p className="text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit...
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center mt-6 gap-6">
          <button
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300"
            onClick={handlenav}
          >
            About Us
          </button>
          <div className="flex items-center space-x-4">
            <img
              className="h-8 w-10"
              src="src/1-removebg-preview.png"
              alt="Logo"
            />
            <div>
              <p>Call us Now</p>
              <p>987654321</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Other Components */}
    <Counts />
    <Courses />
    <Weare />
    <Testimonials />
    <ExpertTeam />
    <Blog />
  </div>
</div>

<Footer />
</div>
  );
};

export default Home;
