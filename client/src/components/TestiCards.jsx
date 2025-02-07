
import React, { useState } from 'react';
import TestiCard from './TestiCard';
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: "John D",
    proff: "Web Development Graduate",
    description: "Libex's hands-on approach and expert instructors helped me land my dream job in Web Development."
  },
  {
    name: "Maren Geidt",
    proff: "Web Development Graduate",
    description: "The data science course at Libex gave me the confidence to shift careers and pursue my passion in tech."
  },
  {
    name: "Mira Dias",
    proff: "Web Development Graduate",
    description: "Thanks to Libex, I gained practical skills in UI/UX design that transformed my professional trajectory."
  }
];

const TestiCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mt-20 ">
      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="flex">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="w-full flex-shrink-0"
                >
                  <TestiCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center mt-8 space-x-4">
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

export default TestiCards;