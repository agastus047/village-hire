import supabase from "../../lib/supabase";
import { useRouter } from "next/router";
import Link from "next/link";

const ApplicantCard = ({application}) => {

    let textColour = "text-black";
    if(application.status==="rejected") {
        textColour="text-red-500";
    }
    else if(application.status==="accepted") {
        textColour="text-green-500";
    }

    const router = useRouter();

    const handleAcceptClick = async () => {
      try {
        const response = await supabase.from("applications").update({status:"accepted"}).eq('id',application.id);
        if(response.error===null) {
          router.push("/posted_jobs");
        }
      }
      catch(error) {
        console.log(error);
      }
    };

    const handleRejectClick = async () => {
      try {
        const response = await supabase.from("applications").update({status:"rejected"}).eq('id',application.id);
        if(response.error===null) {
          router.push("/posted_jobs");
        }
      }
      catch(error) {
        console.log(error);
      }
    };

    return (
        <div className="border border-gray-500 rounded-md p-4 mb-4 bg-teal-50">
          <p className="text-gray-600 mb-1"><b>Name:</b> {application.employee.name}</p>
          <p className="text-gray-600 mb-1"><b>Phone No:</b> {application.employee.phone}</p>
          <p className="text-gray-600 mb-1"><b>Address:</b> {application.employee.address}</p>
          <p className="text-gray-600 mb-1"><b>Age:</b> {application.employee.age}</p>
          <p className="text-gray-600 mb-1"><b>Education Level:</b> {application.employee.educationLevel}</p>
          <p className="text-gray-600 mb-1"><b>Skills:</b> {application.employee.skills}</p>
          <p className="text-gray-600 mb-1"><b>Experiences:</b> {application.employee.experiences}</p>
          <div className="text-xl text-gray-600 my-4">
            Status: <span className={textColour}>{application.status}</span>
          </div>
          {application.status==="pending" &&
            <div>
              <Link href={`/past_reviews/${application?.applicant}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Past Reviews</Link>
              <div className="flex gap-6 mt-5">
                <button onClick={handleAcceptClick} className="bg-green-500 text-black px-4 py-2 rounded">Accept</button>
                <button onClick={handleRejectClick} className="bg-red-500 text-black px-4 py-2 rounded">Reject</button>
              </div>  
            </div>
          }
          {application.status==="accepted" &&
            <Link href={`/review/${application.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add Review
            </Link>
          }
        </div>
    );
};

export default ApplicantCard;
