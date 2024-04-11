import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useContext } from "react";
import { RoleContext } from "@/contexts/RoleContext";
import { useRouter } from "next/router";

export default function Layout({children}) {

    const {status,data:session} = useSession();
    const {roleState} = useContext(RoleContext);
    const [role,setRole] = roleState;

    useEffect(() => {
        (async ()=> {
            if(status==="authenticated") {
                if(role==="employee") {

                }
                else if(role==="employer") {

                }
            }
        })();
    },[status]);

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