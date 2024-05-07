import React from 'react';
import Link from 'next/link';

const EmployerJobCard = ({ job }) => {

  return (
<div className="max-w-lg mx-auto my-4 p-6 bg-teal-50 rounded-lg shadow-lg border-t-4 border-[rgba(100,200,200,1)]">
    <h2 className="text-xl font-bold mb-4 text-[rgba(100,150,150,1)]">{job.title}</h2>
    <p className="text-gray-700 mb-1"><b>Owner:</b> {job.employer.name}</p>
    <p className="text-gray-700 mb-1"><b>Company:</b> {job.employer.company_name}</p>
    <p className="text-gray-700 mb-1"><b>Location:</b> {job.location}</p>
    <p className="text-gray-700 mb-1"><b>Posted on:</b> {job.created_at}</p>
    <p className="text-gray-700 mb-1"><b>Start Date:</b> {job.start_date}</p>
    <p className="text-gray-700 mb-1"><b>End Date:</b> {job.end_date}</p>
    <p className="text-gray-700 mb-1"><b>Hours Per Day:</b> {job.hrs}</p>
    <p className="text-gray-700 mb-1"><b>Wage Per Day:</b> {job.wage}</p>
    <p className="text-gray-700 mb-2"><b>Number of Workers Needed:</b> {job.count}</p>
    <p className="text-gray-700 mb-2"><b>Description:</b> {job.description}</p>
    <Link href={`applications/${job.id}`} className="bg-[rgba(100,200,200,1)] hover:bg-[rgba(100,150,150,1)] text-white font-semibold px-4 py-2 rounded-lg transition ease-in-out">
        View Applications
    </Link>
</div>

  );
};

export default EmployerJobCard;
