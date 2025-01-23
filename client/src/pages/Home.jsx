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

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handlenav = () => {
    navigate("/about");
  };

  return (
//     <div className="p-10 text-center bg-white">
//       <div className="p-10 text-center relative">
//         <img
//           src={`/src/Images/Background/Overlay+Blur.png`}
//           alt="Large Photo Left"
//           className="w-1/4 h-auto left-0 absolute"
//         />
//         <div className="relative">
//           <img
//             src={`/src/Images/Background/ball-1.png`}
//             alt="Ball 1"
//             className="absolute top-8 left-10 w-12 h-12 opacity-60 z-0"
//           />
//           <img
//             src={`/src/Images/Background/ball-2.png`}
//             alt="Ball 2"
//             className="absolute top-1/3 right-20 w-16 h-16 opacity-50 z-0"
//           />
//           <img
//             src={`/src/Images/Background/ball-3.png`}
//             alt="Ball 2"
//             className="absolute top-40 right-1/3 w-6 h-6 opacity-50 z-0"
//           />
//         </div>

//         {/* Main Content */}
//         <div className="font-bold text-6xl relative z-10">
//           <div className="mt-36">Internship Paths To</div>
//           <div>
//             Your Dream <span className="text-cyan-400">Career</span>
//           </div>
//         </div>
//         <div className="flex justify-center items-center space-x-6 mt-16">
//           <button className="bg-violet-500 py-4 px-5 rounded-3xl text-white text-lg">
//             Find Course
//           </button>
//           <img
//             src={`/src/Images/Group 1.png`}
//             alt="GroupImage"
//             className=" object-contain"
//           />
//         </div>

//         <div className="relative">
//           <img
//             src={`/src/Images/Background/ball-2.png`}
//             alt="Ball 4"
//             className="absolute bottom-2 right-1/3 w-6 h-6 opacity-50 z-0"
//           />
//           <img
//             src={`/src/Images/Background/ball-3.png`}
//             alt="Ball 4"
//             className="absolute bottom-2 left-1/3 w-6 h-6 opacity-50 z-0"
//           />
//         </div>

//         <Photos />

//         {/* Small balls */}

//         <div className="relative">
//           <img
//             src="/src/Images/Background/ball-3.png"
//             alt="Ball 3"
//             className="absolute bottom-1/3 left-4 w-10 h-10 opacity-40 z-0"
//           />
//           <img src={`/src/Images/Background/ball-1.png`}
//             alt="Ball 4"
//             className="absolute top-2 left-1/3 w-12 h-12 opacity-50 z-0"
//           />
//           <img src="/src/Images/Background/ball-2.png"
//             alt="Ball 5"
//             className="absolute top-1/3 right-4 w-14 h-14 opacity-60 z-0"
//           />
//         </div>

//         {/* large ball - Overlay-Orange */}
//         <img
//           src={`/src/Images/Background/Overlay+Blur-Orange.png`}
//           alt="Large Photo Left"
//           className="w-1/4 h-auto right-0 absolute "
//         />

//         <Cards className="z-10" />

//         {/* Other Content */}
//         {/* <div className="flex justify-center z-10" style={{ backgroundImage: 'url("/src/Images/Background/home-bg.jpg")' }}> */}
//          <div className="flex justify-center z-10">
        
//           <div className="bg-violet-100 flex p-20 rounded-3xl h-2/3 w-10/12 m-28 z-10">
//             <div className="overflow-hidden rounded-xl">
//               <img className="w-full" src="Images/16.png" alt="img" />
//             </div>
//             <div className="mx-16 w-1/2 text-left ml-36">
//               <div className="text-left text-orange-500 text-3xl">About us</div>
//               <div className="text-4xl font-extrabold text-left mt-8">
//                 <span className="text-cyan-400">Training</span> Tailored For
//                 Your Success{" "}
//                 <div>
//                   With <span className="text-cyan-400">Libex</span>
//                 </div>
//               </div>
//               <div>
//                 <div className="text-gray-600">
//                   Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                   Dignissimos reiciendis eos consectetur iusto veniam nulla quam
//                   laboriosam repellendus itaque excepturi, in aut nam natus
//                   deleniti, odio veritatis placeat expedita optio.
//                 </div>
//                 <div className="flex py-10 gap-5">
//                   <div>
//                     <div className="font-bold">Flexible Timings</div>
//                     <div className="text-gray-600">
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Earum laboriosam dicta ipsa laudantium est ea optio quas
//                       repellendus odit deserunt dolore enim
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-semibold">Expert Instructor</div>{" "}
//                     <div className="text-gray-600">
//                       Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                       Distinctio quae, nulla officiis porro fuga voluptatum
//                       tempora amet aliquid vitae ipsam.
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex">
//                 <div>
//                   <button
//                     className="flex items-center justify-between bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300"
//                     onClick={handlenav}
//                   >
//                     <span>About Us</span>
//                     <div className="flex items-center justify-center w-6 h-6 bg-white rounded-lg ms-2">
//                       <span className="text-black text-lg">&#8250;</span>
//                     </div>
//                   </button>
//                 </div>
//                 <div className="flex mx-10">
//                   <div className="logo">
//                     <img
//                       className="h-8 w-10"
//                       src="src/1-removebg-preview.png"
//                       alt="img"
//                     />
//                   </div>
//                   <div>
//                     <div>Call us Now</div>
//                     <div>987654321</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <Counts />
//         <div className="mt-24"></div>
//         <hr />

//         <Courses />
//         <Weare />
//         <Testimonials />
//         <ExpertTeam />
//       </div>
//       <Blog />
//     </div>

<div className="p-5 sm:p-10 text-center bg-white">
  <div className="relative">
    {/* Background Image */}
    <img
          src={`/src/Images/Background/Overlay+Blur.png`}
          alt="Large Photo Left"
          className="w-1/4 h-auto left-0 absolute"
        />
    <img
      src={`/src/Images/Background/Overlay+Blur.png`}
      alt="Large Photo Left"
      className="absolute left-0 w-16 h-auto sm:w-1/4"
    />

    {/* Decorative Balls */}
    <div className="relative">
      <img
        src={`/src/Images/Background/ball-1.png`}
        alt="Ball 1"
        className="absolute top-4 left-5 w-6 h-6 sm:w-12 sm:h-12 opacity-60 z-0"
      />
      <img
        src={`/src/Images/Background/ball-2.png`}
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
        src={`/src/Images/Group 1.png`}
        alt="Group Image"
        className="w-1/2 sm:w-auto object-contain"
      />
    </div>
    <div className="relative">
      {/* Background balls (top and bottom) */}
      <div className="relative">
        <img
          src="/src/Images/Background/ball-2.png"
          alt="Ball 4"
          className="absolute bottom-2 right-1/3 w-6 h-6 opacity-50 z-0"
        />
        <img
          src="/src/Images/Background/ball-3.png"
          alt="Ball 5"
          className="absolute bottom-2 left-1/3 w-6 h-6 opacity-50 z-0"
        />
      </div>

      {/* Photos Section */}
      <Photos />

      {/* Additional Decorative Elements */}
      <div className="relative">
        <img
          src="/src/Images/Background/ball-3.png"
          alt="Ball 3"
          className="absolute bottom-1/3 left-4 w-10 h-10 opacity-40 z-0"
        />
        <img
          src="/src/Images/Background/ball-1.png"
          alt="Ball 4"
          className="absolute top-2 left-1/3 w-12 h-12 opacity-50 z-0"
        />
        <img
          src="/src/Images/Background/ball-2.png"
          alt="Ball 5"
          className="absolute top-1/3 right-4 w-14 h-14 opacity-60 z-0"
        />
      </div>

      {/* Large Overlay Ball */}
      <img
        src="/src/Images/Background/Overlay+Blur-Orange.png"
        alt="Large Photo Left"
        className="w-1/4 h-auto right-0 absolute"
      />

      {/* Cards Section */}
      <Cards className="z-10" />
    </div>

    {/* About Us Section */}
    <div className="flex flex-col lg:flex-row justify-center items-center bg-violet-100 p-6 sm:p-12 rounded-3xl mt-16 lg:space-x-10">
      <div className="w-full lg:w-1/2">
        <img className="w-full rounded-xl" src="Images/16.png" alt="About us" />
      </div>
      <div className="w-full lg:w-1/2 mt-6 lg:mt-0 text-left">
        <h2 className="text-orange-500 text-xl sm:text-3xl">About Us</h2>
        <h3 className="text-2xl sm:text-4xl font-extrabold mt-4">
          <span className="text-cyan-400">Training</span> Tailored For Your Success
          <div>With <span className="text-cyan-400">Libex</span></div>
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
  );
};


export default Home;
