// pages/profile.js

import { useState } from 'react';

export default function Profile() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    age: '',
    contact: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, for now, just log the values
    console.log('Form Data:', formData);
  };

  return (
    <div className="bg-blue-100 min-h-screen">
      <div className="container mx-auto py-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-6">
            {/* Profile Icon */}
            <div className="rounded-full h-16 w-16 bg-blue-100 flex items-center justify-center text-white text-xl font-bold mr-4">
              {/* You can replace this with your own profile icon */}
              P
            </div>
            {/* Page Title */}
            <h1 className="text-3xl text-black">Profile</h1>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            {/* Personal Details Fields */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-black mb-2">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-black rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
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
            <div className="mb-4">
              <label htmlFor="contact" className="block text-black mb-2">Contact:</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
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
