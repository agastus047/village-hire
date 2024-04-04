import React, { useState } from 'react';

function JobPostPage() {
  const [jobTitle, setJobTitle] = useState('');
  const [jobType, setJobType] = useState('');
  const [locationType, setLocationType] = useState('');
  const [hoursPerWeek, setHoursPerWeek] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [peopleNeeded, setPeopleNeeded] = useState('');
  const [wage, setWage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can submit the job details to your backend or handle the data as needed
    console.log({
      jobTitle,
      jobType,
      locationType,
      hoursPerWeek,
      location,
      startDate,
      endDate,
      peopleNeeded,
      wage
    });
  };

  return (
    <div className="max-w-lg mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">Post Job</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="jobTitle">Job Title</label>
          <input type="text" id="jobTitle" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} className="border rounded-md px-4 py-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="jobType">Job Type</label>
          <select id="jobType" value={jobType} onChange={(e) => setJobType(e.target.value)} className="border rounded-md px-4 py-2 w-full" required>
            <option value="">Select Job Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="locationType">Location Type</label>
          <select id="locationType" value={locationType} onChange={(e) => setLocationType(e.target.value)} className="border rounded-md px-4 py-2 w-full" required>
            <option value="">Select Location Type</option>
            <option value="On-site">On-site</option>
            <option value="Remote">Remote</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="hoursPerWeek">Hours Per Week</label>
          <input type="number" id="hoursPerWeek" value={hoursPerWeek} onChange={(e) => setHoursPerWeek(e.target.value)} className="border rounded-md px-4 py-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="location">Location</label>
          <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} className="border rounded-md px-4 py-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="startDate">Start Date</label>
          <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="border rounded-md px-4 py-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="endDate">End Date</label>
          <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="border rounded-md px-4 py-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="peopleNeeded">People Needed</label>
          <input type="number" id="peopleNeeded" value={peopleNeeded} onChange={(e) => setPeopleNeeded(e.target.value)} className="border rounded-md px-4 py-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="wage">Wage</label>
          <input type="number" id="wage" value={wage} onChange={(e) => setWage(e.target.value)} className="border rounded-md px-4 py-2 w-full" required />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default JobPostPage;
