import React from 'react';
import Count from './Count';

const val = [
  { bclr: 'bg-blue-100', clr: 'bg-blue-500', logo: '👩‍💻', cnt: '1000', data: 'Satisfied Students' },
  { bclr: 'bg-green-100', clr: 'bg-green-500', logo: '📚', cnt: '100', data: 'Class Completed' },
  { bclr: 'bg-yellow-100', clr: 'bg-yellow-500', logo: '🏫', cnt: '50', data: 'Active Students' },
  { bclr: 'bg-pink-100', clr: 'bg-pink-500', logo: '👨‍🏫', cnt: '10', data: 'Expert Instructors' },
];

function Counts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {val.map((item, idx) => (
        <Count
          key={idx}
          bclr={item.bclr}
          clr={item.clr}
          logo={item.logo}
          cnt={item.cnt}
          data={item.data}
        />
      ))}
    </div>
  );
}

export default Counts;
