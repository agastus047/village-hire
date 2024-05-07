import React, { useEffect, useState } from 'react';
import supabase from '../../../lib/supabase';
import { useRouter } from 'next/router';

const ReviewPage = () => {

  const router = useRouter();
  const {application_id} = router.query;
  const [application, setApplication] = useState();
  const [loading,setLoading] = useState(true);
  const [review,setReview] = useState("");

  useEffect(() => {
    (async () => {
        try {
            const { data, error } = await supabase
            .from('applications')
            .select(`
            *, 
            employee(name,phone,address)
            `)
            .filter('id','eq',application_id);
            setApplication(data[0]);
            setLoading(false);
        }
        catch(err) {
            console.log(err);
        }
    })();
  },[]);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const postData = async () => {
    try {
      const response = await supabase.from("review").insert({review: review,employee:application?.applicant,employer:application?.owner,job_id:application?.job_id});
      if(response.error===null) {
        router.push("/posted_jobs");
      }
    }
    catch(error) {
      console.log(error);
    }
  };

  return (
    <>
    {loading ? 
      <div className='text-center text-3xl mt-12'>Loading...</div>
      :
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold my-8 text-center">Add Review</h1>
        <div className="mb-4 mx-16">
          <div><b>Employee Name:</b> {application.employee.name}</div>
          <div><b>Phone:</b> {application.employee.phone}</div>
          <div className='mb-5'><b>Address:</b> {application.employee.address}</div>
          <label htmlFor="review" className="block text-gray-700 font-bold mb-2">Review:</label>
          <textarea 
            id="review" 
            name="review" 
            value={review} 
            onChange={handleReviewChange} 
            rows="4" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your review here..."
          ></textarea>
          <button onClick={() => postData()} className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Review</button>
        </div>
      </div>
    }
    </>
  );
};

export default ReviewPage;
