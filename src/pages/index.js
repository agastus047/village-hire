import React from 'react';

const HomePage = () => {
  const commonButtonStyle = "inline-block p-2 rounded-lg shadow-md mb-2 mr-2 bg-gray-200 hover:bg-gray-300";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-20">
      <h1 className="font-bold text-6xl mb-4">Choose a role</h1>
      <div className="w-150 h-80 bg-lightblue rounded-lg shadow-md text-center mt-4 flex flex-wrap justify-center items-center relative">
        <p className="p-4">
          <button className={commonButtonStyle} style={{ backgroundColor: 'rgba(139, 178, 178, 0.39)' }}>
            House Cleaning
          </button>
          <button className={commonButtonStyle} style={{ backgroundColor: 'rgba(139, 178, 178, 0.39)' }}>
            Farm Work
          </button>
          <button className={commonButtonStyle} style={{ backgroundColor: 'rgba(139, 178, 178, 0.39)' }}>
            Brick works
          </button>
          <button className={commonButtonStyle} style={{ backgroundColor: 'rgba(139, 178, 178, 0.39)' }}>
            Cement works
          </button>
          <button className={commonButtonStyle} style={{ backgroundColor: 'rgba(139, 178, 178, 0.39)' }}>
            Electric Works
          </button>
          <button className={commonButtonStyle} style={{ backgroundColor: 'rgba(139, 178, 178, 0.39)' }}>
            Driver
          </button>
          <button className={commonButtonStyle} style={{ backgroundColor: 'rgba(139, 178, 178, 0.39)' }}>
            Cooking
          </button>
          <button className={commonButtonStyle} style={{ backgroundColor: 'rgba(139, 178, 178, 0.39)' }}>
            Painter
          </button>
        </p>
        <div className="absolute bottom-0 left-0 right-0 mx-auto mb-4 border border-lightblue rounded-md cursor-pointer p-2 w-36 hover:bg-gray-300">
          Show More
        </div>
      </div>
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