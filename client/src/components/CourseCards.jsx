// import React from "react";
// import CourseCard from "./CourseCard";

// const val = [
//   { weeks: 7, Cname: "WordPress For Everyone: Unlock Your Creativity", lessons: 70, students: 1000, src: "/Images/12.png" },
//   { weeks: 6, Cname: "The Data Science Revolution: Upgrading Your Skills", lessons: 60, students: 900, src: "/Images/13.png" },
//   { weeks: 5, Cname: "From Zero to Website: A Web Development Adventure", lessons: 50, students: 800, src: "/Images/14.png" },
//   { weeks: 4, Cname: "Advanced Mastering UI/UX: Design Fundamentals Course", lessons: 40, students: 700, src: "/Images/15.png" },
// ];

// function CourseCards() {
//   return (
//     <div className="relative flex flex-col items-center pt-16">
//       {/* Desktop and Tablet View */}
//       <div className="hidden sm:grid grid-cols-2 gap-8 w-full">
//         {val.map((course, index) => (
//           <CourseCard
//             key={index}
//             weeks={course.weeks}
//             CName={course.Cname}
//             lessons={course.lessons}
//             students={course.students}
//             src={course.src}
//           />
//         ))}
//       </div>

//       {/* Mobile View */}
//       <div className="block sm:hidden relative w-full">
//         {val.map((course, index) => (
//           <div key={index} className="mb-4">
//             <CourseCard
//               weeks={course.weeks}
//               CName={course.Cname}
//               lessons={course.lessons}
//               students={course.students}
//               src={course.src}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CourseCards;


import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard";

const val = [
  { weeks: 7, Cname: "WordPress For Everyone: Unlock Your Creativity", lessons: 70, students: 1000, src: "/Images/12.png" },
  { weeks: 6, Cname: "The Data Science Revolution: Upgrading Your Skills", lessons: 60, students: 900, src: "/Images/13.png" },
  { weeks: 5, Cname: "From Zero to Website: A Web Development Adventure", lessons: 50, students: 800, src: "/Images/14.png" },
  { weeks: 4, Cname: "Advanced Mastering UI/UX: Design Fundamentals Course", lessons: 40, students: 700, src: "/Images/15.png" },
];

function CourseCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  // Update state based on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle left and right navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? val.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === val.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative flex flex-col items-center pt-16 w-full">
      {/* Desktop View - Grid Layout */}
      {!isMobile ? (
        <div className="grid grid-cols-2 gap-8 w-full">
          {val.map((course, index) => (
            <CourseCard
              key={index}
              weeks={course.weeks}
              CName={course.Cname}
              lessons={course.lessons}
              students={course.students}
              src={course.src}
              isMobile={false}
            />
          ))}
        </div>
      ) : (
        /* Mobile View - Single Course with Navigation Arrows */
        <div className="relative w-full flex flex-col items-center">
          <CourseCard
            weeks={val[currentIndex].weeks}
            CName={val[currentIndex].Cname}
            lessons={val[currentIndex].lessons}
            students={val[currentIndex].students}
            src={val[currentIndex].src}
            isMobile={true}
          />

          {/* Navigation Arrows */}
          <div className="flex gap-6 mt-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center bg-gray-700 text-white rounded-full shadow-md"
            >
              ◀
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center bg-gray-700 text-white rounded-full shadow-md"
            >
              ▶
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseCards;
