import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import EmployerJobCard from '@/components/EmployerJobCard'; 
import supabase from '../../../lib/supabase';

const PostedJobsPage = () => {
  const { data: session } = useSession();
  const [postedJobs, setPostedJobs] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    (async () => {
        try {
            const { data, error } = await supabase
            .from('job')
            .select(`
              *, 
              employer(name,company_name)
            `);
            setPostedJobs(data);
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
        <h1 className="text-4xl font-bold my-8 text-center">Posted Jobs</h1>
        <div className='grid grid-cols-2 gap-10'>
        {postedJobs.length > 0 ? (
          postedJobs.map((job) => (
            <EmployerJobCard key={job.id} job={job} />
          ))
        ) : (
          <p className='text-center text-3xl mt-12'>No posted jobs found.</p>
        )}
        </div>
      </div>
    }
    </>
  );
};

export default PostedJobsPage;
