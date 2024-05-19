import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  secret: `${process.env.NEXT_JWT_SECRET}`,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API}/auth/login`,
          {
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );

        const json = await response.json();

        const user: any = json.user;

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      console.log({ account });
      if (account?.provider === "credentials") {
        (token.id = user.id),
          (token.email = user.email),
          (token.name = user.username),
          (token.role = user.role);
        // token.refreshToken = user.refreshToken;
      }
      return token;
    },

    async session({ session, token }: any) {
      console.log({ token });
      if ("id" in token) {
        session.user.id = token.id;
      }
      if ("email" in token) {
        session.user.email = token.email;
      }

      if ("name" in token) {
        session.user.name = token.name;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }
      // if ("refreshToken" in token) {
      //   session.user.refreshToken = token.refreshToken;
      // }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
