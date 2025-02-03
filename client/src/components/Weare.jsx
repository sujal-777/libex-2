// import React from 'react'

// function Weare() {
//   return (
//     <div className=' flex justify-center items-center gap-10 bg-red-50'>
//         <div className='items-center'><img className='overflow-hidden h-24 w-32 ' src="https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" /></div>
//         <div>
//             <div>Who We Are</div>
//             <div>
//                 <div>We Offer The <span className='text-cyan-500'>Best Carrier</span></div>
//                 <hr />
//                 <div className='w-1/2'>
//                 <div className='flex m-4 '>
//                     <div className='bg-cyan-300 rounded-full h-16 w-16'>logo</div>
//                     <div>
//                         <div className='font-semibold'>Industry Expert Instructor</div>
//                         <div>Earn from Industry expert Instructors through courses in Web Development, UI/UX Design, Data Science, Artifical Intelligence and more</div>
//                     </div>
//                 </div>
//                 <hr />
//                 <div className='flex m-4'>
//                     <div>logo</div>
//                     <div>
//                         <div className='font-semibold'>Up-to-Date Course Content</div>
//                         <div>Earn from Industry expert Instructors through courses in Web Development, UI/UX Design, Data Science, Artifical Intelligence and more</div>
//                     </div>
//                 </div>
//                 <hr />
//                 <div className='flex m-4'>
//                     <div>logo</div>
//                     <div>
//                         <div className='font-semibold'>Biggest Student Community`</div>
//                         <div>Earn from Industry expert Instructors through courses in Web Development, UI/UX Design, Data Science, Artifical Intelligence and more</div>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Weare

import React from "react";

function Weare() {
  return (
    <div className="flex justify-center mt-52">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 p-10 w-3/4">
  <div className="flex items-center w-full md:w-2/3 h-full">
    <img
      className="overflow-hidden h-full w-full rounded-full"
      src="/Images/16.png"
      alt="Course"
    />
  </div>
  <div className="mt-10">
    <div className="text-2xl font-bold mb-4 text-start text-orange-400">
      Who We Are
    </div>
    <div>
      <div className="text-3xl mb-2 text-start font-bold">
        We Offer The <span className="text-cyan-500">Best Career</span>
        <img
          src="/Images/line-About-3.png"
          alt="orange-line"
          className="relative left-1/3 z-0 w-auto h-4"
        />
      </div>
      <hr className="mb-4" />
      <div className="w-full">
        <div className="flex m-4 md:flex-row flex-col ">
          <div className="bg-orange-100 rounded-full h-16 p-3 w-20 flex items-center justify-center">
            <img src="/l1.png" alt="" />
          </div>
          <div className="ml-4 text-start">
            <div className="font-semibold">Industry Expert Instructor</div>
            <div className="text-gray-400">
              Learn from Industry expert Instructors through courses in Web
              Development, UI/UX Design, Data Science, Artificial Intelligence,
              and more.
            </div>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="flex m-4 md:flex-row flex-col">
          <div className="bg-cyan-100 rounded-full h-16 p-3 w-20 flex items-center justify-center">
            <img src="/l2.png" alt="" />
          </div>

          <div className="ml-4 text-start">
            <div className="font-semibold">Up-to-Date Course Content</div>
            <div className="text-gray-400">
              Learn from Industry expert Instructors through courses in Web
              Development, UI/UX Design, Data Science, Artificial Intelligence,
              and more.
            </div>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="flex m-4 md:flex-row flex-col">
          <div className="bg-violet-100 rounded-full h-16 p-3 w-16 flex items-center justify-center">
            <img src="l3.png" alt="" />
          </div>
          <div className="ml-4 text-start">
            <div className="font-semibold">Comprehensive Learning Paths</div>
            <div className="text-gray-400">
              Our courses are designed to provide comprehensive learning paths
              that help you achieve your career goals.
            </div>
          </div>
        </div>
        <hr className="mb-4" />
      </div>
    </div>
    <img
      src="/Images/about-shape-2.png"
      className="left-1/4 relative h-auto w-auto z-10"
    />
  </div>
</div>

      <div>

      <img src="/Images/blog-shape-3-1.png.png" alt="star-img" className=" top-1/2 right-0 h-32 w-32 relative z-0" />
      </div>
    </div>
  );
}

export default Weare;