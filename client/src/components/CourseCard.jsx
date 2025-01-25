import React from "react";

function CourseCard({ src, weeks, CName, lessons, students }) {
  return (
    <div className="flex border bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-[500px] mx-auto">
      {/* Image Section */}
      <div className="w-1/3">
        <img
          className="w-full h-full object-cover"
          src={src}
          alt="Course"
        />
      </div>

      {/* Content Section */}
      <div className="w-2/3 p-4 flex flex-col justify-between">
        {/* Tags */}
        <div className="flex gap-2 mb-3">
          <div className="bg-cyan-100 text-cyan-500 font-semibold py-1 px-2 rounded-xl text-xs md:text-sm">
            Experts
          </div>
          <div className="py-1 px-2 bg-violet-200 text-violet-500 font-semibold rounded-xl text-xs md:text-sm">
            {weeks} Weeks
          </div>
        </div>

        {/* Course Title */}
        <div className="font-bold text-sm md:text-lg text-gray-800 mb-3">
          {CName}
        </div>

        {/* Lessons and Students */}
        <div className="text-gray-600 text-xs md:text-base">
          <div className="flex items-center mb-1">
            <span className="mr-2">📚</span> {lessons} Lessons
          </div>
          <div className="flex items-center">
            <span className="mr-2">👩‍💻</span> {students} Students
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-400 text-xs md:text-base mr-2">⭐⭐⭐⭐⭐</div>
          <div className="text-gray-500 text-xs md:text-sm">(5 Ratings)</div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
