import Link from 'next/link';
import React from 'react';
import supabase from '../../lib/supabase';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const EmployeeJobCard = ({ job }) => {

  const {data:session} = useSession();

  const router = useRouter();

  const postData = async () => {
    try {
      const response = await supabase.from("applications").insert({applicant:session?.user?.email,job_id:job.id,owner:job?.owner});
      if(response.error===null) {
        router.push("/applied_jobs");
      }
    }
    catch(error) {
      console.log(error);
    }
  };

  const handleApplyClick = () => {
    postData();
  };

  return (
    <div className="border border-gray-500 rounded-md p-4 mb-4 bg-teal-50">
      <h2 className="text-lg font-bold mb-2">{job.title}</h2>
      <p className="text-gray-600 mb-1"><b>Owner:</b> {job.employer.name}</p>
      <p className="text-gray-600 mb-1"><b>Company:</b> {job.employer.company_name}</p>
      <p className="text-gray-600 mb-1"><b>Location:</b> {job.location}</p>
      <p className="text-gray-600 mb-1"><b>Posted on:</b> {job.created_at}</p>
      <p className="text-gray-600 mb-1"><b>Start Date:</b> {job.start_date}</p>
      <p className="text-gray-600 mb-1"><b>End Date:</b> {job.end_date}</p>
      <p className="text-gray-600 mb-1"><b>Hours Per Day:</b> {job.hrs}</p>
      <p className="text-gray-600 mb-1"><b>Wage Per Day:</b> {job.wage}</p>
      <p className="text-gray-600 mb-2"><b>Number of Workers Needed:</b> {job.count}</p>
      <p className="text-gray-600 mb-2"><b>Description:</b> {job.description}</p>
      <div className='flex gap-6'>
        <button onClick={handleApplyClick} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Apply
        </button>
        <Link href={"/messaging"}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Negotiate
            </button>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeJobCard;
