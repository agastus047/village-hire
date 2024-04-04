import Link from 'next/link';
import React from 'react';

const EmployerHomePage = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-bold text-6xl mb-4">Choose a role</h1>
      <div className='flex gap-16 mt-9'>
        <Link href={"employee_home"}><button className='border border-lightblue rounded-md cursor-pointer p-2 w-36 bg-teal-600 hover:bg-teal-800'>Job Seeker</button></Link>
        <Link href={"employer_home"}><button className='border border-lightblue rounded-md cursor-pointer p-2 w-36 bg-teal-600 hover:bg-teal-800'>Job Provider</button></Link>
      </div>
    </div>
  );
}

export default EmployerHomePage;