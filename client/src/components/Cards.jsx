import React from 'react';
import Card from './Card';

const cardData = [
  { name: 'Web Development', clr: 'bg-cyan-500' ,bclr:'bg-cyan-200', im:'/Images/b1.png'},
  { name: 'Data Science', clr: 'bg-pink-300' ,bclr:'bg-pink-200', im:'/Images/b2.png' },
  { name: 'AI', clr: 'bg-green-500' ,bclr:'bg-green-200' ,im:'/Images/b3.png'},
  { name: 'UI/UX', clr: 'bg-red-500' ,bclr:'bg-red-200',im:'/Images/b4.png' },
  { name: 'Java', clr: 'bg-gray-500'  ,bclr:'bg-gray-200', im:'/Images/b2.png'},
  { name: 'Python', clr: 'bg-yellow-500' ,bclr:'bg-yellow-200' ,im:'/Images/b2.png'},
  { name: 'Cyber Security', clr: 'bg-blue-500' ,bclr:'bg-blue-200' ,im:'/Images/b2.png'},
  { name: 'Machine Learning', clr: 'bg-orange-500' ,bclr:'bg-orange-200' ,im:'/Images/b5.png'},
];

function Cards() {
  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full md:w-3/4 p-4 mt-20 place-items-center">
        {cardData.map((card, idx) => (
          <Card key={idx} name={card.name} clr={card.clr} bclr={card.bclr} im={card.im}/>
        ))}
      </div>
    </div>
  );
}

export default Cards;
