import React from 'react';
import Link from 'next/link';

const EmployerJobCard = ({ job }) => {

  return (
    <div className="border border-gray-500 rounded-md p-4 mb-4 bg-teal-50">
      <h2 className="text-lg font-bold mb-2">{job.title}</h2>
      <p className="text-gray-600 mb-1"><b>Owner:</b> {job.employer.name}</p>
      <p className="text-gray-600 mb-1"><b>Company:</b> {job.employer.company_name}</p>
      <p className="text-gray-600 mb-1"><b>Location:</b> {job.location}</p>
      <p className="text-gray-600 mb-1"><b>Posted on:</b> {job.created_at}</p>
      <p className="text-gray-600 mb-1"><b>Start Date:</b> {job.start_date}</p>
      <p className="text-gray-600 mb-1"><b>End Date:</b> {job.end_date}</p>
      <p className="text-gray-600 mb-1"><b>Hours Per Day:</b> {job.hrs}</p>
      <p className="text-gray-600 mb-1"><b>Wage Per Day:</b> {job.wage}</p>
      <p className="text-gray-600 mb-2"><b>Number of Workers Needed:</b> {job.count}</p>
      <p className="text-gray-600 mb-2"><b>Description:</b> {job.description}</p>
      <Link href={`applications/${job.id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        View Applications
      </Link>
    </div>
  );
};

export default EmployerJobCard;
