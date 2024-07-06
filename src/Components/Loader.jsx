import React from 'react';

const Loader = () => {
  return (
    <div className=" h-[93vh] sm:h-[88vh]  flex items-center justify-center bg-white z-50">
      <div className="animate-spin rounded-full h-14 w-14  border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default Loader;