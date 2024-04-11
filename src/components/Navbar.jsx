import { useSession } from "next-auth/react";
import { useContext } from "react";
import { RoleContext } from "@/contexts/RoleContext";
import Link from "next/link";
import { signIn,signOut } from "next-auth/react";

export default function Navbar() {

  const {status} = useSession();
  const {roleState} = useContext(RoleContext);
  const [role,setRole] = roleState;

  return (
    <div>
      <header style={{ backgroundColor: 'rgba(139, 178, 178, 1)', padding: '1rem' }} className="text-center">
        <h2 className="text-5xl font-bold">VillageHire</h2> {/* Adjusted font size from text-lg to text-2xl */}
        { (role==="employee") && 
          <nav className="flex space-x-4 justify-end">
            <Link href="/employee_home" className="text-gray-800 font-semibold hover:text-blue-600">Home</Link>
            <Link href="/joblist" className="text-gray-800 hover:text-blue-600">Available Jobs</Link>
            {
              status==="authenticated" ?
              <Link href="/employee_profile" className="text-gray-800 hover:text-blue-600">Profile</Link>
              :
              <div onClick={() => signIn("google")} className="text-gray-800 hover:text-blue-600 hover:cursor-pointer">Sign In</div>
            }
          </nav>
        }
        { (role==="employer") &&
          <nav className="flex space-x-4 justify-end">
            <Link href="/employer_home" className="text-gray-800 font-semibold hover:text-blue-600">Home</Link>
            <Link href="/post_job" className="text-gray-800 hover:text-blue-600">Post job</Link>
            {
              status==="authenticated" ?
              <Link href="/employer_profile" className="text-gray-800 hover:text-blue-600">Profile</Link>
              :
              <div onClick={() => signIn("google")} className="text-gray-800 hover:text-blue-600 hover:cursor-pointer">Sign In</div>
            }
          </nav>
        }
        <button onClick={() => signOut()}>Sign Out</button>
      </header>
    </div>
  );
}