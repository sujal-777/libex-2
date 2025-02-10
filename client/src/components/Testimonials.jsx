import React, { useState, useEffect } from "react";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

const images = [
  "/Images/Frame 12.png",
  "/Images/Frame 13.png",
  "/Images/Frame 14.png",
  "/Images/Frame 15.png",
  "/Images/Frame 16.png",
  "/Images/Frame 17.png"
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const imagesPerSlide = isMobile ? 1 : 3; // 1 image on mobile, 3 on desktop

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + imagesPerSlide >= images.length ? 0 : prevIndex + imagesPerSlide
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - imagesPerSlide < 0 ? images.length - imagesPerSlide : prevIndex - imagesPerSlide
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-16">
      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(100 / imagesPerSlide) * currentIndex}%)` }}
          >
            {images.map((src, idx) => (
              <div key={idx} className="flex-shrink-0 w-full sm:w-1/3 px-2">
                <img 
                  src={src} 
                  alt={`Testimonial ${idx + 1}`} 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center mt-6 space-x-6">
          <button 
            onClick={prevSlide}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Previous testimonial"
          >
            <CircleArrowLeft className="w-8 h-8 text-gray-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Next testimonial"
          >
            <CircleArrowRight className="w-8 h-8 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center py-16 bg-red-100"
      style={{
        backgroundImage: `url('/Images/bg-line.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src="/Images/about-shape-2.png"
        alt="shape"
        className="absolute top-8 right-8 w-16 h-auto"
      />
      
      <div className="text-orange-500 z-10">OUR TESTIMONIAL</div>
      <div className="font-bold text-4xl text-center z-10 mb-6">
        People <span className="text-cyan-400">Say About</span> Eduhive
      </div>
      <img
        src="/Images/line-About-3.png"
        alt="line"
        className="relative w-auto h-8 mb-4"
      />
      
      <TestimonialSlider />
    </div>
  );
};

export default Testimonials;
