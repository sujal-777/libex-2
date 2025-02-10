import React from 'react';

function Card({ name, clr, bclr,im }) {
 

  return (
    <div
      className={`flex items-center space-x-4 p-4 ${bclr} w-72 rounded-xl hover:cursor-pointer hover:bg-opacity-50`}
      >
         <div className={`w-12 h-12 rounded-full ${clr} hover:bg-opacity-50 flex justify-center items-center`}>
      <img src={im} alt="yo" className="w-3/5 h-2/5" />
    </div>
      <div className="text-lg font-semibold">{name}</div>
    </div>
  );
}

export default Card;