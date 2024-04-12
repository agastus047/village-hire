import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useContext } from "react";
import { RoleContext } from "@/contexts/RoleContext";
import { useRouter } from "next/router";
import supabase from "../../lib/supabase";

export default function Layout({children}) {

    const router = useRouter();
    const {status,data:session} = useSession();
    const {roleState} = useContext(RoleContext);
    const [role,setRole] = roleState;

    useEffect(() => {
        (async ()=> {
            try{
                if(status==="authenticated") {
                    if(role==="employee") {
                        const {data} = await supabase.from("employee").select('*').eq('email',session?.user?.email);
                        if(data.length===0) {
                            router.push("/employee_edit_profile");
                        }
                        else {
                            router.push("/employee_home");
                        }
                    }
                    else if(role==="employer") {
                        const {data} = await supabase.from("employer").select("*").eq('email',session?.user?.email);
                        if(data.length===0) {
                            router.push("/employer_edit_profile");
                        }
                        else {
                            router.push("/employer_home");
                        }
                    }
                }
                if(!role) {
                    router.push("/");
                }
            }
            catch(error) {
                console.log(error);
            }
        })();
    },[role]);

    return(<>
        <Head>
            <title>Village Hire</title>
        </Head>
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="flex-auto">{children}</main>
            <Footer/>
        </div>
    </>);
};