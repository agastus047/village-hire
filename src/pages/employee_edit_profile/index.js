import { useSession } from 'next-auth/react';
import { useState } from 'react';
import supabase from '../../../lib/supabase';
import { useRouter } from 'next/router';

export default function Profile() {

  const {status,data:session} = useSession();

  const router = useRouter();

  const [formData, setFormData] = useState({
    phone: '',
    address: '',
    age: '',
    educationLevel: '',
    skills: '',
    experiences: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const postData = async () => {
    try {
      const response = await supabase.from("employee").upsert({...formData,name:session?.user?.name,email:session?.user?.email,profile:session?.user?.image},{onConflict:'email'});
      if(response.error===null) {
        router.push("/employee_home");
      }
    }
    catch(error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, for now, just log the values 
    postData();
  };

  return (
    <div className="bg-blue-100 min-h-screen">
      <div className="container mx-auto py-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center justify-center gap-4">
            {/* Profile Icon */}
            {/* You can replace this with your own profile icon */}
            <img src={session?.user?.image} className='rounded-full h-16'></img>
            {/* Page Title */}
            <h1 className="text-3xl text-black">{session?.user?.name}</h1>
          </div>
          <div className='mb-6 mt-2 text-center'>{session?.user?.email}</div>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            {/* Personal Details Fields */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-black mb-2">Phone No:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-black rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="age" className="block text-black mb-2">Age:</label>
              <input
                type="text"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full border border-black rounded px-3 py-2"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label htmlFor="address" className="block text-black mb-2">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-black rounded px-3 py-2"
              />
            </div>
            {/* Skills and Experiences Fields */}
            <div className="col-span-2 mb-4">
              <label htmlFor="skills" className="block text-black mb-2">Skills:</label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="w-full border border-black rounded px-3 py-2"
              />
            </div>
            <div className="col-span-2 mb-4">
              <label htmlFor="experiences" className="block text-black mb-2">Experiences:</label>
              <textarea
                id="experiences"
                name="experiences"
                value={formData.experiences}
                onChange={handleChange}
                className="w-full border border-black rounded px-3 py-2"
              />
            </div>
            <div className="col-span-2 mb-4">
              <label htmlFor="educationLevel" className="block text-black mb-2">
                Education Level:
              </label>
              <select
                id="educationLevel"
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleChange}
                className="w-full border border-black rounded px-3 py-2"
              >
                <option value="">Select Education Level</option>
                <option value={"Primary Level"}>Primary Level</option>
                <option value="High School">High School</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                {/* Add more options as needed */}
              </select>
            </div>
            {/* Save Button */}
            <div className="col-span-2">
              <button type="submit" className="bg-blue-100 text-black px-4 py-2 rounded hover:bg-blue-200">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
