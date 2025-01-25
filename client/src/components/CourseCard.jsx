import React from "react";

function CourseCard({ src, weeks, CName, lessons, students }) {
  return (
    <div className="flex border bg-white rounded-xl shadow-lg w-full overflow-hidden p-4">
      {/* Image Section */}
      <div className="w-1/3 h-full">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={src}
          alt="Course"
        />
      </div>

      {/* Content Section */}
      <div className="w-2/3 pl-6 flex flex-col justify-between">
        {/* Tags */}
        <div className="flex gap-3 mb-4">
          <div className="bg-cyan-100 text-cyan-500 font-semibold py-1 px-3 rounded-xl text-sm">
            Experts
          </div>
          <div className="py-1 px-3 bg-violet-200 text-violet-500 font-semibold rounded-xl text-sm">
            {weeks} Weeks
          </div>
        </div>

        {/* Course Title */}
        <div className="font-bold text-xl text-gray-800 mb-4">{CName}</div>

        {/* Lessons and Students */}
        <div className="text-gray-600 text-base flex flex-col gap-1">
          <div className="flex items-center">
            <span className="mr-2">📚</span> {lessons} Lessons
          </div>
          <div className="flex items-center">
            <span className="mr-2">👩‍💻</span> {students} Students
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mt-4">
          <div className="flex text-yellow-400 text-lg mr-2">⭐⭐⭐⭐⭐</div>
          <div className="text-gray-500 text-sm">(5 Ratings)</div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
