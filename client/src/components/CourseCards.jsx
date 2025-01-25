import React from "react";
import CourseCard from "./CourseCard";

const val = [
  { weeks: 7, Cname: "WordPress For Everyone: Unlock Your Creativity", lessons: 70, students: 1000, src: "/Images/12.png" },
  { weeks: 6, Cname: "The Data Science Revolution: Upgrading Your Skills", lessons: 60, students: 900, src: "/Images/13.png" },
  { weeks: 5, Cname: "From Zero to Website: A Web Development Adventure", lessons: 50, students: 800, src: "/Images/14.png" },
  { weeks: 4, Cname: "Advanced Mastering UI/UX: Design Fundamentals Course", lessons: 40, students: 700, src: "/Images/15.png" },
];

function CourseCards() {
  return (
    <div className="relative flex flex-col items-center pt-16">
      {/* Desktop and Tablet View */}
      <div className="hidden sm:grid grid-cols-2 gap-8 w-full">
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
        {val.map((course, index) => (
          <div key={index} className="mb-4">
            <CourseCard
              weeks={course.weeks}
              CName={course.Cname}
              lessons={course.lessons}
              students={course.students}
              src={course.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseCards;
