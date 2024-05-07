import React from 'react';
import { useContext } from 'react';
import { RoleContext } from '@/contexts/RoleContext';
import { signIn, useSession } from 'next-auth/react';

const EmployerHomePage = () => {

  const {status} = useSession();

  const {roleState} = useContext(RoleContext);
  const [role,setRole] = roleState;

  const handleEmployeeClick = () => {
    setRole("employee");
  };

  const handleEmployerClick = () => {
    setRole("employer");
  };

  return (
    <>
    {status==="authenticated" ? (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src="/man-organic-farming-concept-illustration_23-2148441820.jpg" alt="Description of the image" class="w-32 h-32 rounded-full mb-4 shadow-lg" />
      <h1 className="font-bold text-6xl mb-4">Choose a role</h1>
      <div className='flex gap-16 mt-9'>
        <button onClick={handleEmployeeClick} className='border border-lightblue rounded-md cursor-pointer p-2 w-36 bg-teal-600 hover:bg-teal-800'>Job Seeker</button>
        <button onClick={handleEmployerClick} className='border border-lightblue rounded-md cursor-pointer p-2 w-36 bg-teal-600 hover:bg-teal-800'>Job Provider</button>
      </div>
    </div>
    )
    :
    (
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
<img src="/man-organic-farming-concept-illustration_23-2148441820.jpg" alt="Description of the image" class="w-32 h-32 rounded-full mb-4 shadow-lg" />
  <h1 className="text-4xl font-bold mb-8 text-gray-800">Please Sign In</h1>
  <button
    onClick={() => signIn("google")}
    className="w-48 p-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold text-lg shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500"
  >
    Login with Google
  </button>
</div>

    )
    }
    </>
  );
}

export default EmployerHomePage;