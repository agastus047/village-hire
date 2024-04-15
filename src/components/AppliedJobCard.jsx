const AppliedJobCard = ({ job }) => {
  
  let textColour = "black";
  if(job.status==="rejected") {
    textColour="red";
  }
  else if(job.status==="accepted") {
    textColour="green";
  }

  return (
    <div className="border border-gray-500 rounded-md p-4 mb-4 bg-teal-50">
      <p className="text-gray-600 mb-1"><b>Title:</b> {job.job.title}</p>
      <p className="text-gray-600 mb-1"><b>Location:</b> {job.job.location}</p>
      <p className="text-gray-600 mb-1"><b>Owner:</b> {job.employer.name}</p>
      <p className="text-gray-600 mb-1"><b>Company:</b> {job.employer.company_name}</p>
      <div className="text-xl text-gray-600 mt-4">
        Status: <span className={`text-${textColour}`}>{job.status}</span>
      </div>  
    </div>
  );
};

export default AppliedJobCard;
