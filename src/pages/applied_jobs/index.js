import React, { useEffect, useState } from 'react';
import AppliedJobCard from '@/components/AppliedJobCard';
import supabase from '../../../lib/supabase';
import { useSession } from 'next-auth/react';

const AppliedJobsPage = () => {
  
  const {data:session} = useSession();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    (async () => {
        try {
            const { data, error } = await supabase
            .from('applications')
            .select(`
              *, 
              job(title,location),
              employer(name,company_name)
            `)
            .filter('applicant','eq',session?.user?.email);
            setAppliedJobs(data);
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
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold my-8 text-center">Applied Jobs</h1>
        <div className='grid grid-cols-3 gap-10'>
        {appliedJobs.length > 0 ? (
          appliedJobs.map((job) => (
            <AppliedJobCard key={job.id} job={job} />
          ))
        ) : (
          <p className='text-center text-3xl mt-12'>No jobs available.</p>
        )}
        </div>
      </div>
    }
    </>
  );
};

export default AppliedJobsPage;
