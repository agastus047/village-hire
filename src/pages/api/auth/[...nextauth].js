import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
  ],
  callbacks: {
    async signIn({user,account}) {
        if(account.provider === "google") {
            const {name,email} = user;
            // try {
            //     const userExists = await prisma.user.findUnique({
            //         where: {
            //             email: email,
            //         },
            //     });
            //     console.log('database checked for user');
            //     if(!userExists) {
            //         const result = await prisma.user.create({
            //             data: {
            //                 name,
            //                 email
            //             },
            //         });
            //         console.log('database written');
            //         return user;
            //     }
            // }
            // catch(err) {
            //     console.log(err);
            // }
        }

        return user;
    },
  },
};

export default NextAuth(authOptions);