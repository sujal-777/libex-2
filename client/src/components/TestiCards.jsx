import React from 'react'
import TestiCard from './TestiCard'


const val=[
    {name:"John D" ,proff:"Web Development Graduate",description:"Libex's hands-on approach and expert instructors helped me land my dream job in Web Development. "},
    {name:"Maren Geidt" ,proff:"Web Development Graduate",description:"The data science course at Libex gave me the confidence to shift careers and pursue my passion in tech."},
    {name:"Mira Dias" ,proff:"Web Development Graduate",description:"Thanks to Libex, I gained practical skills in UI/UX design that transformed my professional trajectory."},
]


function TestiCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 px-4">
      {val.map((testimonial, idx) => (
        <TestiCard
          key={idx}
          name={testimonial.name}
          proff={testimonial.proff}
          description={testimonial.description}
        />
      ))}
    </div>
  );
}

export default TestiCards;