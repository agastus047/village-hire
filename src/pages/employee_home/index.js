import React from 'react';
import Link from 'next/link';

const EmployeeHomePage = () => {
  const commonButtonStyle = "inline-block p-2 rounded-lg shadow-md mb-2 mr-2 bg-gray-200 hover:bg-gray-300";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-20" style={{backgroundImage: "url('/blue-ink-wave-flowing-underwater-smoothly-generated-by-ai_188544-41061.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
<div className="flex items-center justify-center">
<div className="relative">
  <p className="text-center text-5xl font-bold text-white">Empowering Villages, Empowering Lives</p>
  <p className="text-center text-lg text-white mt-4">Welcome to VillageHire – your go-to platform for connecting job seekers with opportunities in rural India. Whether you're a farmer, contractor, or student, VillageHire makes finding and posting jobs a breeze. With commitment to fairness and transparency, VillageHire empowers individuals and drives economic growth in rural communities. Join VillageHire today and be part of the movement towards a brighter future for rural India!</p>
</div>


</div>

      <div className='flex gap-8 mt-10'>
        <Link href="joblist">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Available Jobs
            </button>
        </Link>
        <Link href={"profile"}>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Edit Profile
            </button>
        </Link>
      </div>
    </div>
  );
}

export default EmployeeHomePage;
