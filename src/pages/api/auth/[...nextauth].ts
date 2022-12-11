import CredentialsProdvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import GoogleProvider from "next-auth/providers/google";
import NextAuth, { NextAuthOptions } from "next-auth";
import clientPromise from "../../../utils/monogodb";
import User from "../../../models/UserModel";
import db from "../../../utils/db";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGEL_ID as string,
      clientSecret: process.env.GOOGEL_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),

    CredentialsProdvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        await db.connectDB();

        const user = await User.findOne({
          email: credentials?.email,
        });

        if (!user) {
          throw new Error("Email is not registered");
        }

        const isPasswordCorrect = await user.comparePassword(
          credentials!.password
        );

        if (!isPasswordCorrect) {
          throw new Error("Password is incorrect");
        }

        return user;
      },
    }),
    // ...add more providers here
  ],

  pages: {
    signIn: "/auth",
  },
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.JWT_SECRET as string,
  },
  secret: process.env.SECRET,
};

export default NextAuth(authOptions);
