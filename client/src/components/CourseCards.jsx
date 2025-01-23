import React from 'react';
import CourseCard from './CourseCard';

const val = [
  { weeks: 7, Cname: 'WordPress For Everyone: Unlock Your Creativity', lessons: 70, students: 1000, src: '/src/Images/12.png' },
  { weeks: 6, Cname: 'The Data Science Revolution: Upgrading Your Skills', lessons: 60, students: 900, src: '/src/Images/13.png' },
  { weeks: 5, Cname: 'From Zero to Website: A Web Development Adventure', lessons: 50, students: 800, src: '/src/Images/14.png' },
  { weeks: 4, Cname: 'advanced Mastering UI/UX: Design Fundamentals course', lessons: 40, students: 700, src: '/src/Images/15.png' },
];

function CourseCards() {
  return (
    <div className="relative flex justify-center pt-16">
      {/* Glow ball image on the left */}
       
      

      {/* Existing content */}
      <div className="flex flex-wrap w-auto gap-16 justify-center z-10">
        {val.map((val) => (
          <CourseCard
            weeks={val.weeks}
            CName={val.Cname}
            lessons={val.lessons}
            students={val.students}
            star={val.star}
            src={val.src}
          />
        ))}
      </div>


      

    </div>
  );
}

export default CourseCards;
