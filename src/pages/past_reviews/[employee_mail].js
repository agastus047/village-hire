import React, { useEffect, useState } from 'react';
import supabase from '../../../lib/supabase';
import { useRouter } from 'next/router';

const PastReviewsPage = () => {
  const router = useRouter();
  const { employee_mail } = router.query;
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data, error } = await supabase
          .from('review')
          .select(`*,
          job(title,location),
          employee(name),
          employer(name,company_name)
          `)
          .eq('employee', employee_mail);
        if (error) {
          throw error;
        }
        setReviews(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reviews:', error.message);
      }
    };

    if (employee_mail) {
      fetchReviews();
    }
  }, [employee_mail]);

  const goBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl text-center font-semibold mb-4">Past Reviews</h1>
      {loading ? (
        <p className='text-center'>Loading...</p>
      ) : reviews.length === 0 ? (
        <p className='text-center'>No reviews found.</p>
      ) : (
        <div className='md:px-44'>
          {reviews.map((review, index) => (
            <div key={index} className="border border-gray-300 rounded-md p-4 mb-4 shadow-xl">
              <p><strong>Job Title:</strong> {review?.job?.title}</p>
              <p><strong>Location:</strong> {review?.job?.location}</p>
              <p><strong>Employee Name:</strong> {review?.employee?.name}</p>
              <p><strong>Employer Name:</strong> {review?.employer?.name}</p>
              <p><strong>Company Name:</strong> {review?.employer?.company_name}</p>
              <p><strong>Review:</strong> {review?.review}</p>
            </div>
          ))}
        </div>
      )}
      <div className="text-center">
        <button onClick={goBack} className="bg-teal-600 hover:bg-teal-800 text-white px-4 py-2 rounded-md mt-4">Go Back</button>
      </div>
    </div>
  );
};

export default PastReviewsPage;
