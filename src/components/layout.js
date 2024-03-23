import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({children}) {
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