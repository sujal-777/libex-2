// import React from 'react';
// import Photo from './Photo';

// function Photos() {
//   const photoss = [
//     { src: "Images/home1.jpeg", alt: "photo1" },
//     { src: "Images/home2.jpeg", alt: "photo2" },
//     { src: "Images/home3.jpeg", alt: "photo3" },
//     { src: "Images/home11.jpeg", alt: "photo4" },
//   ];

//   return (
//     <div className='flex flex-wrap justify-center gap-4 md:gap-6'>
//       {photoss.map((ph, i) => (
//         <div key={i} className={`${i === 1 || i === 2 ? 'mt-12 md:mt-24' : ''} w-full sm:w-1/2 md:w-auto`}>
//           <Photo prop={ph.src} alt={ph.alt} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Photos;
import React from 'react';
import Photo from './Photo';

function Photos() {
  const photoList = [
    { src: "/Images/home1.jpeg", alt: "A scenic view of home 1" },
    { src: "/Images/home2.jpeg", alt: "A scenic view of home 2" },
    { src: "/Images/home3.jpeg", alt: "A scenic view of home 3" },
    { src: "/Images/home11.jpeg", alt: "A scenic view of home 4" },
  ];

  return (
    <div className="flex justify-center gap-2 ">
      {photoList.map((photo, index) => (
        <div
          key={index}
          className={`w-full sm:w-1/2 sm:h-1/3 md:w-auto ${
            index === 1 || index === 2 ? 'mt-12 md:mt-24' : ''
          }`}
        >
          <Photo prop={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
}

export default Photos;
