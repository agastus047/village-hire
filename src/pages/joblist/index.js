import Head from 'next/head';
import { useState } from 'react';

export default function JobListingPage() {
  const [isEmployerView, setIsEmployerView] = useState(false); // State to track whether it's employer view or employee view
  const [displayedRoles, setDisplayedRoles] = useState(3); // State to track the number of roles displayed

  const toggleView = () => {
    setIsEmployerView((prevIsEmployerView) => !prevIsEmployerView);
  };

  const handleShowMore = () => {
    setDisplayedRoles((prevDisplayedRoles) => prevDisplayedRoles + 3);
  };

  // Sample job roles
  const roles = [
    { id: 1, title: 'Software Engineer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor, nisl sit amet aliquet sodales, turpis neque sodales ligula, vel placerat elit lacus eu purus.', location: 'Remote', salary: '$80,000 - $100,000' },
    { id: 2, title: 'Data Analyst', description: 'Nullam sagittis velit nec dui placerat, ac mattis nisi volutpat. Duis eget quam ut orci vestibulum hendrerit.', location: 'New York, NY', salary: '$70,000 - $90,000' },
    { id: 3, title: 'Marketing Manager', description: 'Pellentesque vitae sapien eu ex tincidunt posuere. Donec ultrices, nisl ut commodo gravida, velit odio fringilla nisi, in auctor nunc enim nec neque.', location: 'San Francisco, CA', salary: '$90,000 - $110,000' },
    { id: 4, title: 'House Cleaning', description: 'Pellentesque vitae sapien eu ex tincidunt posuere. Donec ultrices, nisl ut commodo gravida, velit odio fringilla nisi, in auctor nunc enim nec neque.', location: 'San Francisco, CA', salary: '$90,000 - $110,000' },
    { id: 5, title: 'Painting', description: 'Pellentesque vitae sapien eu ex tincidunt posuere. Donec ultrices, nisl ut commodo gravida, velit odio fringilla nisi, in auctor nunc enim nec neque.', location: 'San Francisco, CA', salary: '$90,000 - $110,000' },
  ];

  // Filter roles based on the number to display
  const filteredRoles = roles.slice(0, displayedRoles);

  // Your existing code for job listing...

  return (
    <div className="min-h-screen bg-blue-100">
      <Head>
        <title>Job Listings</title>
        <meta name="description" content="Browse available job roles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-8 px-4">
        {/* Switch button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleView}
            className={`px-4 py-2 rounded-full ${isEmployerView ? 'bg-gray-400' : 'bg-blue-500'} text-white`}
          >
            {isEmployerView ? 'Employer' : 'Employee'}
          </button>
        </div>

        {/* Job listing */}
        <h1 className="text-3xl font-semibold text-center mb-6">Job Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoles.map((role) => (
            <div key={role.id} className="bg-white rounded-lg shadow-md p-6 relative">
              {/* Job details */}
              <h2 className="text-xl font-semibold mb-2">{role.title}</h2>
              <p className="text-gray-600 mb-4">{role.description}</p>
              <p className="text-gray-700 mb-2">Location: {role.location}</p>
              <p className="text-gray-700 mb-2">Salary: {role.salary}</p>
              <button onClick={() => handleNegotiateClick(role)} className="absolute bottom-4 right-4 bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                Negotiate
              </button>
            </div>
          ))}
          {/* Show More tile */}
          {filteredRoles.length < roles.length && (
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
              <button onClick={handleShowMore} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                Show More
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
