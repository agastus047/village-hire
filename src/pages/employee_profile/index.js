import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import supabase from '../../../lib/supabase';
import Link from 'next/link';

function EmployeeProfilePage() {
  const { data: session } = useSession();

  const [loading,setLoading] = useState(true);
  const [employeeProfile, setEmployeeProfile] = useState(null);

  useEffect(() => {
    (async () => {
        try {
            const {data,error} = await supabase.from('employee').select("*").filter('email','eq',session?.user?.email);
            setEmployeeProfile(data[0]);
            setLoading(false);
        }
        catch(err) {
            console.log(err);
        }
    })();
  },[]);

  return (
    <>
        {loading ? 
            <div className='text-center text-3xl mt-12'>Loading...</div>
            :
            <div className="max-w-4xl mx-auto mt-10 py-8 flex flex-col items-center">
                <div className="flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden">
                    <img
                        src={employeeProfile?.profile}
                        alt="Profile Picture"
                        className='w-full'
                    />
                    </div>
                </div>
                <h1 className="text-2xl font-bold mt-4">{employeeProfile?.name}</h1>
                <p className="text-gray-600">{employeeProfile?.email}</p>
                <div className="mt-6">
                    <p><span className="font-semibold">Phone Number:</span> {employeeProfile?.phone}</p>
                    <p><span className="font-semibold">Address:</span> {employeeProfile?.address}</p>
                    <p><span className="font-semibold">Age:</span> {employeeProfile?.age}</p>
                    <p><span className="font-semibold">Education:</span> {employeeProfile?.educationLevel}</p>
                    <p><span className="font-semibold">Skills:</span> {employeeProfile?.skills}</p>
                    <p><span className="font-semibold">Experiences:</span> {employeeProfile?.experiences}</p>
                </div>
                <div className="mt-8">
                    <Link href={"/employee_edit_profile"} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Edit Profile
                    </Link>
                </div>
            </div>
        }
    </>
    
  );
}

export default EmployeeProfilePage;
