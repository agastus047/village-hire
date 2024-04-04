import React, { useState } from 'react';

function EmployerProfileEditPage() {
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can submit the employer profile details to your backend or handle the data as needed
    console.log({
      companyName,
      phoneNumber,
      address,
      description
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Edit Employer Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="companyName">Company Name</label>
          <input type="text" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="border rounded-md px-4 py-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="border rounded-md px-4 py-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="address">Address</label>
          <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="border rounded-md px-4 py-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">Company Description</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="border rounded-md px-4 py-2 w-full" rows="4" required />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EmployerProfileEditPage;
