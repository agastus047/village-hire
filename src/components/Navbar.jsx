import { useSession } from "next-auth/react";
import { useContext } from "react";
import { RoleContext } from "@/contexts/RoleContext";
import Link from "next/link";
import { signIn,signOut } from "next-auth/react";

export default function Navbar() {

  const {status} = useSession();
  const {roleState} = useContext(RoleContext);
  const [role,setRole] = roleState;

  const handleSignOut = async ()  => {
    await signOut();
    setRole("");
  };

  return (
    <div>
      <header style={{ backgroundColor: 'rgba(120, 200, 200, 1)', padding: '1rem' }} className="text-center">
        <h2 className="text-5xl font-bold">VillageHire</h2> {/* Adjusted font size from text-lg to text-2xl */}
        { (role==="employee") && 
          <nav className="flex space-x-4 justify-end">
            <Link href="/employee_home" className="text-gray-800 font-semibold hover:text-blue-600">Home</Link>
            <Link href="/available_jobs" className="text-gray-800 hover:text-blue-600">Available Jobs</Link>
            <Link href="/applied_jobs" className="text-gray-800 hover:text-blue-600">Applied Jobs</Link>
            {
              status==="authenticated" ?
              <Link href="/employee_profile" className="text-gray-800 hover:text-blue-600">Profile</Link>
              :
              <div onClick={() => signIn("google")} className="text-gray-800 hover:text-blue-600 hover:cursor-pointer">Sign In</div>
            }
            <button className="text-gray-800 hover:text-blue-600 hover:cursor-pointer" onClick={handleSignOut}>Sign Out</button>
          </nav>
        }
        { (role==="employer") &&
          <nav className="flex space-x-4 justify-end">
            <Link href="/employer_home" className="text-gray-800 font-semibold hover:text-blue-600">Home</Link>
            <Link href="/post_job" className="text-gray-800 hover:text-blue-600">Post job</Link>
            <Link href="/posted_jobs" className="text-gray-800 hover:text-blue-600">Posted jobs</Link>
            {
              status==="authenticated" ?
              <Link href="/employer_profile" className="text-gray-800 hover:text-blue-600">Profile</Link>
              :
              <div onClick={() => signIn("google")} className="text-gray-800 hover:text-blue-600 hover:cursor-pointer">Sign In</div>
            }
            <button className="text-gray-800 hover:text-blue-600 hover:cursor-pointer" onClick={handleSignOut}>Sign Out</button>
          </nav>
        }
      </header>
    </div>
  );
}