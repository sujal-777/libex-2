// // // import React from 'react';
// // // import TestiCards from './TestiCards';
// // // import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';

// // // function Testimonials() {
// // //   return (
// // //     <div
// // //       className="relative flex flex-col justify-center items-center mt-36 bg-red-100 p-20"
// // //       style={{
// // //         backgroundImage: `url('/Images/bg-line.png')`, // Add the background image
// // //         backgroundSize: 'cover', // Ensure it covers the entire container
// // //         backgroundPosition: 'center', // Center the image
// // //         backgroundRepeat: 'no-repeat', // Prevent repeating
// // //       }}
// // //     >
// // //       {/* Top-right image */}
// // //       <img
// // //         src="/Images/about-shape-2.png"
// // //         alt="shape"
// // //         className="absolute top-8 right-8 w-16 h-auto" // Positioning and size adjustment
// // //       />

// // //       <div className="text-orange-500 z-10">OUR TESTIMONIAL</div>
// // //       <div className="font-bold text-4xl text-center z-10">
// // //         People <span className="text-cyan-400">Say About</span> Eduhive
// // //       </div>
// // //       <img
// // //         src="/Images/line-About-3.png"
// // //         alt="line"
// // //         className="relative w-auto h-8"
// // //       />

// // //       <TestiCards />

// // //       <div className="flex z-10">
// // //         <hr />
// // //         <div className="flex p-5">
// // //           <div className="m-4">
// // //             <CircleArrowLeft />
// // //           </div>
// // //           <div className="m-4">
// // //             <CircleArrowRight />
// // //           </div>
// // //         </div>
// // //         <hr />
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Testimonials;

// // // Testimonials.jsx
// // import React from 'react';
// // import TestiCards from './TestiCards';
// // import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';

// // const Testimonials = () => {
// //   return (
// //     <div
// //       className="relative flex flex-col justify-center items-center py-20 bg-red-100"
// //       style={{
// //         backgroundImage: `url('/Images/bg-line.png')`,
// //         backgroundSize: 'cover',
// //         backgroundPosition: 'center',
// //         backgroundRepeat: 'no-repeat',
// //       }}
// //     >
// //       {/* Decorative top-right image */}
// //       <img
// //         src="/Images/about-shape-2.png"
// //         alt="shape"
// //         className="absolute top-8 right-8 w-16 h-auto"
// //       />
      
// //       {/* Heading Section */}
// //       <div className="text-orange-500 z-10">OUR TESTIMONIAL</div>
// //       <div className="font-bold text-4xl text-center z-10 mb-4">
// //         People <span className="text-cyan-400">Say About</span> Eduhive
// //       </div>
// //       <img
// //         src="/Images/line-About-3.png"
// //         alt="line"
// //         className="relative w-auto h-8 mb-8"
// //       />
      
// //       {/* Testimonial Cards */}
// //       <TestiCards />
// //     </div>
// //   );
// // };

// // export default Testimonials;

// // // // TestiCard.jsx (for reference)
// // // import React from 'react';

// // // const TestiCard = ({ name, proff, description }) => {
// // //   return (
// // //     <div className="bg-white rounded-lg p-8 shadow-lg max-w-md mx-auto">
// // //       <div className="flex items-start mb-4">
// // //         <span className="text-6xl text-pink-500">"</span>
// // //       </div>
// // //       <p className="text-gray-700 mb-6">{description}</p>
// // //       <div className="flex items-center">
// // //         <img
// // //           src="/api/placeholder/48/48"
// // //           alt="Profile"
// // //           className="w-12 h-12 rounded-full mr-4"
// // //         />
// // //         <div>
// // //           <h4 className="font-semibold text-lg">{name}</h4>
// // //           <p className="text-cyan-600">{proff}</p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TestiCard;

// import React, { useState } from 'react';
// import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';

// const TestiCard = ({ name, proff, description }) => (
//   <div className="bg-white rounded-lg p-8 shadow-lg max-w-md mx-auto">
//     <div className="flex items-start mb-4">
//       <span className="text-6xl text-pink-500">"</span>
//     </div>
//     <p className="text-gray-700 mb-6">{description}</p>
//     <div className="flex items-center">
//       <img
//         src="/api/placeholder/48/48"
//         alt="Profile"
//         className="w-12 h-12 rounded-full mr-4"
//       />
//       <div>
//         <h4 className="font-semibold text-lg">{name}</h4>
//         <p className="text-cyan-600">{proff}</p>
//       </div>
//     </div>
//   </div>
// );

// const TestiCards = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const testimonials = [
//     {
//       name: "John D",
//       proff: "Web Development Graduate",
//       description: "Libex's hands-on approach and expert instructors helped me land my dream job in Web Development."
//     },
//     {
//       name: "Maren Geidt",
//       proff: "Web Development Graduate",
//       description: "The data science course at Libex gave me the confidence to shift careers and pursue my passion in tech."
//     },
//     {
//       name: "Mira Dias",
//       proff: "Web Development Graduate",
//       description: "Thanks to Libex, I gained practical skills in UI/UX design that transformed my professional trajectory."
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto px-4 mt-20">
//       <div className="relative">
//         <div className="overflow-hidden">
//           <div 
//             className="transition-transform duration-500 ease-in-out"
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           >
//             <div className="flex">
//               {testimonials.map((testimonial, idx) => (
//                 <div
//                   key={idx}
//                   className="w-full flex-shrink-0"
//                 >
//                   <TestiCard {...testimonial} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-center items-center mt-8 space-x-4">
//           <button 
//             onClick={prevSlide}
//             className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//             aria-label="Previous testimonial"
//           >
//             <CircleArrowLeft className="w-8 h-8 text-gray-600" />
//           </button>
//           <button 
//             onClick={nextSlide}
//             className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//             aria-label="Next testimonial"
//           >
//             <CircleArrowRight className="w-8 h-8 text-gray-600" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Testimonials = () => {
//   return (
//     <div
//       className="relative flex flex-col justify-center items-center py-20 bg-red-100"
//       style={{
//         backgroundImage: `url('/Images/bg-line.png')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       <img
//         src="/Images/about-shape-2.png"
//         alt="shape"
//         className="absolute top-8 right-8 w-16 h-auto"
//       />
      
//       <div className="text-orange-500 z-10">OUR TESTIMONIAL</div>
//       <div className="font-bold text-4xl text-center z-10 mb-4">
//         People <span className="text-cyan-400">Say About</span> Eduhive
//       </div>
//       <img
//         src="/Images/line-About-3.png"
//         alt="line"
//         className="relative w-auto h-8 mb-8"
//       />
      
//       <TestiCards />
//     </div>
//   );
// };

// export default Testimonials;

import React, { useState, useEffect } from 'react';
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';



function TestiCard({name,proff,description}) {
  return (
    <div className='bg-white text-left  w-72 rounded-xl'>
        <div className='flex justify-between'>
        <div className="text-pink-600 text-9xl font-bold">
        &#8220; 
      </div>
      <div className='h-20 overflow-hidden w-20 rounded-full'><img className='rounded-full' src="https://images.unsplash.com/photo-1734335225921-06e1b6d94ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
        </div>
        <div className='font-bold'>{name}</div>
        <div className='text-sm text-gray-500 mb-5'>{proff}</div>
        <div className='text-gray-600'>{description}</div>
        <div>star</div>
    </div>
  )
}

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical tablet/mobile breakpoint
    };

    // Check initially
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

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

  // Desktop Layout
  if (!isMobile) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 px-4 justify-items-center">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="max-w-sm w-full">
            <TestiCard {...testimonial} />
          </div>
        ))}
      </div>
    );
  }

  // Mobile Layout with Slider
  return (
    <div className="w-full max-w-4xl mx-auto px-4 mt-20">
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

const Testimonials = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center py-20 bg-red-100"
      style={{
        backgroundImage: `url('/Images/bg-line.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <img
        src="/Images/about-shape-2.png"
        alt="shape"
        className="absolute top-8 right-8 w-16 h-auto"
      />
      
      <div className="text-orange-500 z-10">OUR TESTIMONIAL</div>
      <div className="font-bold text-4xl text-center z-10 mb-4">
        People <span className="text-cyan-400">Say About</span> Eduhive
      </div>
      <img
        src="/Images/line-About-3.png"
        alt="line"
        className="relative w-auto h-8 mb-8"
      />
      
      <TestiCards />
    </div>
  );
};

export default Testimonials;