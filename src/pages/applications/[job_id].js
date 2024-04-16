import React, { useEffect, useState } from 'react';
import supabase from '../../../lib/supabase';
import { useRouter } from 'next/router';
import ApplicantCard from '@/components/ApplicantCard';

const ApplicationsPage = () => {

  const router = useRouter();
  const {job_id} = router.query;
  const [applications, setApplications] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    (async () => {
        try {
            const { data, error } = await supabase
            .from('applications')
            .select(`
              *, 
              employee(name,phone,address,age,educationLevel,skills,experiences)
            `)
            .filter('job_id','eq',job_id);
            setApplications(data);
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
        <h1 className="text-4xl font-bold my-8 text-center">Applications</h1>
        <div className='grid grid-cols-2 gap-10'>
        {applications.length > 0 ? (
          applications.map((application) => (
            <ApplicantCard key={application.id} application={application} />
          ))
        ) : (
          <p className='text-center text-3xl mt-12'>No applications</p>
        )}
        </div>
      </div>
    }
    </>
  );
};

export default ApplicationsPage;
