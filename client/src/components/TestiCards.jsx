import React from 'react'
import TestiCard from './TestiCard'


const val=[
    {name:"John D" ,proff:"Web Development Graduate",description:"Libex's hands-on approach and expert instructors helped me land my dream job in Web Development. "},
    {name:"Maren Geidt" ,proff:"Web Development Graduate",description:"The data science course at Libex gave me the confidence to shift careers and pursue my passion in tech."},
    {name:"Mira Dias" ,proff:"Web Development Graduate",description:"Thanks to Libex, I gained practical skills in UI/UX design that transformed my professional trajectory."},
]


// function TestiCards() {
//   return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  mt-20 px-4 justify-items-center">
//           {val.map((testimonial, idx) => (
//             <div key={idx} className="max-w-sm w-full">
//               <TestiCard
//                 name={testimonial.name}
//                 proff={testimonial.proff}
//                 description={testimonial.description}
//               />
//             </div>
//           ))}
//         </div>
//   );
// }
function TestiCards() {
  return (
    <div className="mt-20 px-4">
      {/* Scrollable container on mobile */}
      <div className="flex space-x-4 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 sm:justify-items-center">
        {val.map((testimonial, idx) => (
          <div key={idx} className="min-w-[80%] sm:min-w-0 max-w-sm w-full">
            <TestiCard
              name={testimonial.name}
              proff={testimonial.proff}
              description={testimonial.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestiCards;