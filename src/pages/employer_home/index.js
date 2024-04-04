import Link from 'next/link';
import React from 'react';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className='w-80'>
        <img className='w-full' src='https://static.vecteezy.com/system/resources/previews/010/442/458/non_2x/search-job-of-people-online-find-vacancy-employment-go-to-career-of-hire-people-seek-opportunity-for-vacancy-or-work-position-search-new-work-in-internet-illustration-vector.jpg'></img>
      </div>  
      <h1 className="text-3xl font-bold mb-4">Welcome to Job Provider Dashboard</h1>
      <p className="text-lg mb-8">Find the perfect candidates for your job openings!</p>
      <div className='flex gap-8'>
        <Link href="post_job">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Post Job
            </button>
        </Link>
        <Link href={"employer_edit_profile"}>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Edit Profile
            </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
