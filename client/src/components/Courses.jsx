import React from 'react'
import CourseCards from './CourseCards'
function Courses() {
  return (
    <div className='py-24 mt-10  bg-purple-200 mb-48 bgimg h-screen/2 w-screen bg-center bg-cover bg-[url("/Images/design/crs.png")]'>
        <div className='text-orange-500 text-xl'>OUR COURSES</div>
        <div className='font-bold text-5xl mt-6'>Our Most Popular <span className='text-cyan-400'>Courses</span></div>

        <CourseCards />
    </div>
  )
}

export default Courses