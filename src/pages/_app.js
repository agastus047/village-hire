import "@/styles/globals.css";
import Layout from "@/components/layout";
import {SessionProvider} from "next-auth/react";
import { UserContextProvider } from "@/contexts/UserContext";
import { RoleContextProvider } from "@/contexts/RoleContext";

export default function App({ Component, pageProps: { session, ...pageProps}, }) {
  return (
    <SessionProvider session={session}>
      <RoleContextProvider>
        <UserContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserContextProvider>
    </RoleContextProvider>
    </SessionProvider>
  );
}
