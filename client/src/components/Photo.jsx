import React from 'react';

function Photo({ prop, alt }) {
  return (
    <div className="flex justify-center items-center">
      <img
        className="h-32 w-44 md:h-50 md:w-40 lg:h-96 lg:w-60 rounded-full"
        src={prop}
        alt={alt}
      />
    </div>
  );
}

export default Photo;