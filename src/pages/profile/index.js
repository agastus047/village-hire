// pages/profile.js

import { useState } from 'react';

export default function Profile() {
  const [formData, setFormData] = useState({
    personalDetails: '',
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
    <div className="bg-blue-500 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-3xl mb-6 text-blue-500">Profile Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="personalDetails" className="block text-blue-500 mb-2">Personal Details:</label>
            <input
              type="text"
              id="personalDetails"
              name="personalDetails"
              value={formData.personalDetails}
              onChange={handleChange}
              className="w-full border border-blue-500 rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="skills" className="block text-blue-500 mb-2">Skills:</label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full border border-blue-500 rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="experiences" className="block text-blue-500 mb-2">Experiences:</label>
            <textarea
              id="experiences"
              name="experiences"
              value={formData.experiences}
              onChange={handleChange}
              className="w-full border border-blue-500 rounded px-3 py-2"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
        </form>
      </div>
    </div>
  );
}
