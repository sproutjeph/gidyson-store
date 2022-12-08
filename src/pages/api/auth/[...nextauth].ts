import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProdvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProdvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (email !== "donjeph@gmail.com" || password !== "1234") {
          return null;
        }

        return { id: "1234", name: "jeph mbah", email: "donjeph@gmail" };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGEL_ID as string,
      clientSecret: process.env.GOOGEL_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID as string,
      clientSecret: process.env.FACEBOOK_SECRET as string,
    }),
    // ...add more providers here
  ],
  // pages: {
  //   signIn: "/auth",
  // },
};

export default NextAuth(authOptions);
