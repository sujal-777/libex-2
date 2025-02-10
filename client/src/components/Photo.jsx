import React from 'react';

function Photo({ prop, alt }) {
  return (
    <div className="flex justify-center items-center">
      <img
        className="h-32 w-32 md:h-36 md:w-48 lg:h-80 lg:w-64 rounded-full object-cover max-h-full max-w-full"
        src={prop}
        alt={alt}
      />
    </div>
  );
}

export default Photo;