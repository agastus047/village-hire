import React, { useState } from 'react';
import supabase from '../../../lib/supabase';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

function EmployerProfileEditPage() {

  const {status,data:session} = useSession();

  const [formData, setFormData] = useState({
    company_name: '',
    phone: '',
    address: '',
    description: ''
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const postData = async () => {
    try {
      const response = await supabase.from("employer").upsert({...formData,name:session?.user?.name,email:session?.user?.email,profile:session?.user?.image},{onConflict:'email'});
      if(response.error===null) {
        router.push("/employer_home");
      }
    }
    catch(error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can submit the employer profile details to your backend or handle the data as needed
    postData();
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Edit Employer Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="company_name">Company Name</label>
          <input type="text" id="company_name" name="company_name" value={formData.company_name} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="address">Address</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">Company Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" rows="4" required />
        </div>
        <button type="submit" className="bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EmployerProfileEditPage;
