import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import supabase from '../../../lib/supabase';
import { useRouter } from 'next/router';

function JobPostPage() {

  const router = useRouter();

  const {status,data:session} = useSession();

  const [formData, setFormData] = useState({
    title: '',
    hrs: '',
    location: '',
    start_date: '',
    end_date: '',
    count: '',
    wage: '',
    description: ''
  });

  const postData = async () => {
    try {
      const response = await supabase.from("job").insert({...formData,owner:session?.user?.email});
      if(response.error===null) {
        router.push("/posted_jobs");
      }
    }
    catch(error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can submit the job details to your backend or handle the data as needed
    postData();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="max-w-lg mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">Post Job</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">Job Title</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="hrs">Hours Per Day</label>
          <input type="number" id="hrs" name="hrs" value={formData.hrs} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="location">Location</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="start_date">Start Date</label>
          <input type="date" id="start_date" name="start_date" value={formData.start_date} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="end_date">End Date</label>
          <input type="date" id="end_date" name="end_date" value={formData.end_date} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="count">Number of People Needed</label>
          <input type="number" id="count" name="count" value={formData.count} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="wage">Wage per day</label>
          <input type="number" id="wage" name="wage" value={formData.wage} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" rows="4" required />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default JobPostPage;
