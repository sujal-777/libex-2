import React, { useState } from "react";
import CourseCard from "./CourseCard";

const val = [
  { weeks: 7, Cname: "WordPress For Everyone: Unlock Your Creativity Online", lessons: 25, students: 350, src: "/Images/12.png" },
  { weeks: 6, Cname: "The Data Science Revolution: Upgrading Your Skills", lessons: 20, students: 300, src: "/Images/13.png" },
  { weeks: 5, Cname: "From Zero to Website: A Web Development Adventure", lessons: 32, students: 250, src: "/Images/14.png" },
  { weeks: 4, Cname: "Advanced Mastering UI/UX: Design Fundamentals Course", lessons: 28, students: 150, src: "/Images/15.png" },
];

function CourseCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % val.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + val.length) % val.length);
  };

  return (
    <div className="relative flex flex-col items-center pt-16">
      {/* Desktop View */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {val.map((course, index) => (
          <CourseCard
            key={index}
            weeks={course.weeks}
            CName={course.Cname}
            lessons={course.lessons}
            students={course.students}
            src={course.src}
          />
        ))}
      </div>

      {/* Mobile View */}
      <div className="block sm:hidden relative w-full">
        {/* Single Card */}
        <div className="flex justify-center">
          <CourseCard
            weeks={val[currentIndex].weeks}
            CName={val[currentIndex].Cname}
            lessons={val[currentIndex].lessons}
            students={val[currentIndex].students}
            src={val[currentIndex].src}
          />
        </div>

        {/* Arrows */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-300"
          onClick={handlePrev}
        >
          ◀
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-300"
          onClick={handleNext}
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default CourseCards;
