import React from 'react';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { RoleContext } from '@/contexts/RoleContext';
import { signIn, useSession } from 'next-auth/react';

const EmployerHomePage = () => {

  const {status} = useSession();

  const router = useRouter();

  const {roleState} = useContext(RoleContext);
  const [role,setRole] = roleState;

  const handleEmployeeClick = () => {
    setRole("employee");
    router.push('/employee_home');
  };

  const handleEmployerClick = () => {
    setRole("employer");
    router.push('/employer_home');
  };

  return (
    <>
    {status==="authenticated" ? (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-bold text-6xl mb-4">Choose a role</h1>
      <div className='flex gap-16 mt-9'>
        <button onClick={handleEmployeeClick} className='border border-lightblue rounded-md cursor-pointer p-2 w-36 bg-teal-600 hover:bg-teal-800'>Job Seeker</button>
        <button onClick={handleEmployerClick} className='border border-lightblue rounded-md cursor-pointer p-2 w-36 bg-teal-600 hover:bg-teal-800'>Job Provider</button>
      </div>
    </div>
    )
    :
    (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-bold text-6xl mb-8">Please Sign In</h1>
      <button onClick={() => signIn("google")} className='border border-lightblue rounded-md cursor-pointer p-2 w-36 bg-teal-600 hover:bg-teal-800'>Login with google</button>  
    </div>
    )
    }
    </>
  );
}

export default EmployerHomePage;