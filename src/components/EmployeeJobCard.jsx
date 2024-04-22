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
    <div className="max-w-lg mx-auto my-4 p-6 bg-white rounded-lg shadow-lg border-t-4 border-[rgba(120,200,200,1)]">
    <h2 className="text-2xl font-bold mb-4 text-[rgba(139,178,178,1)]">{job.title}</h2>
    <div className="text-gray-800 mb-3">
        <p><span className="font-medium">Owner:</span> {job.employer.name}</p>
        <p><span className="font-medium">Company:</span> {job.employer.company_name}</p>
        <p><span className="font-medium">Location:</span> {job.location}</p>
        <p><span className="font-medium">Posted on:</span> {job.created_at}</p>
        <p><span className="font-medium">Start Date:</span> {job.start_date}</p>
        <p><span className="font-medium">End Date:</span> {job.end_date}</p>
        <p><span className="font-medium">Hours Per Day:</span> {job.hrs}</p>
        <p><span className="font-medium">Wage Per Day:</span> {job.wage}</p>
        <p><span className="font-medium">Number of Workers Needed:</span> {job.count}</p>
        <p><span className="font-medium">Description:</span> {job.description}</p>
    </div>
    <div className="flex gap-4 mt-4">
        <button onClick={handleApplyClick} className="bg-[rgba(120,200,200,1)] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[rgba(139,178,178,1)] transition ease-in-out shadow-md">
            Apply
        </button>
        <Link href="/messaging">
            <button className="bg-[rgba(120,200,200,1)] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[rgba(139,178,178,1)] transition ease-in-out shadow-md">
                Negotiate
            </button>
        </Link>
    </div>
</div>


  );
};

export default EmployeeJobCard;
