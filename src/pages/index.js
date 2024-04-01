import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-20">
      <h1 className="font-bold text-5xl mb-4">Choose a role</h1>
      <div className="w-150 h-80 bg-lightblue rounded-lg shadow-md text-center mt-4 flex flex-wrap justify-center items-center relative">
        {/* Content inside the rectangle */}
        <p className="p-4">
          <span className="inline-block p-2">House Cleaning</span>
          <span className="inline-block p-2">Farm Work</span>
          <span className="inline-block p-2">Brick works</span>
          <span className="inline-block p-2">Cement works</span>
          <span className="inline-block p-2">Electric Works</span>
          <span className="inline-block p-2">Driver</span>
          <span className="inline-block p-2">Cooking</span>
          <span className="inline-block p-2">Painter</span>
        </p>
        {/* Small rectangle with "Show More" */}
        <div className="absolute bottom-0 left-0 right-0 mx-auto mb-4 border border-light blue-400 rounded-md cursor-pointer p-2 w-36 hover:bg-gray-300">
          Show More
        </div>
      </div>
      {/* Four small rectangles */}
      <div className="flex justify-center space-x-4 mt-4">
        <button className="w-48 h-28 bg-gray-200 rounded-lg flex items-center justify-center shadow-md" style={{ backgroundColor: 'rgba(139, 178, 178, 0.39)' }}>
          See More Details
        </button>
        <button className="w-48 h-28 bg-gray-200 rounded-lg flex items-center justify-center shadow-md" style={{ backgroundColor: 'rgba(139, 178, 178, 0.39)' }}>
          See More Details
        </button>
        <button className="w-48 h-28 bg-gray-200 rounded-lg flex items-center justify-center shadow-md" style={{ backgroundColor: 'rgba(139, 178, 178, 0.39)' }}>
          See More Details
        </button>
        <button className="w-48 h-28 bg-gray-200 rounded-lg flex items-center justify-center shadow-md" style={{ backgroundColor: 'rgba(139, 178, 178, 0.39)' }}>
          See More Details
        </button>
      </div>
    </div>
  );
}

export default HomePage;