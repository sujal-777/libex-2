import React from 'react';
import TestiCards from './TestiCards';
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';

function Testimonials() {
  return (
    <div
      className="relative flex flex-col justify-center items-center mt-36 bg-red-100 p-20"
      style={{
        backgroundImage: `url('/src/Images/bg-line.png')`, // Add the background image
        backgroundSize: 'cover', // Ensure it covers the entire container
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent repeating
      }}
    >
      {/* Top-right image */}
      <img
        src="/src/Images/Background/about-shape-2.png"
        alt="shape"
        className="absolute top-8 right-8 w-16 h-auto" // Positioning and size adjustment
      />

      <div className="text-orange-500 z-10">OUR TESTIMONIAL</div>
      <div className="font-bold text-4xl text-center z-10">
        People <span className="text-cyan-400">Say About</span> Eduhive
      </div>
      <img
        src="/src/Images/Background/line-About-3.png"
        alt="line"
        className="relative w-auto h-8"
      />

      <TestiCards />

      <div className="flex z-10">
        <hr />
        <div className="flex p-5">
          <div className="m-4">
            <CircleArrowLeft />
          </div>
          <div className="m-4">
            <CircleArrowRight />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Testimonials;
