import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import KeycloakProvider from "next-auth/providers/keycloak";
import bcrypt from 'bcrypt'
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const authOptions = {
   providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: {
            label: "email:",
            type: "text",
          },
          password: {
            label: "password:",
            type: "password",
          },
        },
        async authorize(credentials) {
          try {
            const user = await prisma.user.findUnique({
              where: {
                email: credentials.email,
              },
            });
  
          if (!user || !user?.password) {
              throw new Error("Invalid credentials");
            }
  
            const isCorrectPassword = await bcrypt.compare(
              credentials.password,
              user.password
            );
  
            if (!isCorrectPassword) {
              throw new Error("Invalid credentials");
            }
            return { ...user, password: null, role: user.role };
          } catch (error) {
            console.log(error);
          }
          return null;
        },
      }),
        GoogleProvider({
            clientId: "31017781977-c2mev6djp0jd9dte3hcqal7v8ha2tp27.apps.googleusercontent.com",
            clientSecret: "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",
            profile(profile) { console.log(profile)
                return { role: profile.role ?? "user", email : profile.email , name : profile.name,  id: profile.sub}
              },
        }),
        GitHubProvider({
            clientId: "8ae91e7483780c86e578",
            clientSecret: "a10f093c2d1eb2253b7e3149e8f42b11dafe9fc0",
            profile(profile) { console.log(profile)
                return { role: profile.role ?? "user", email : profile.email , name : profile.name,  id: profile.id}
              },
          }),
        KeycloakProvider({
            clientId: "login-app",
            clientSecret: "d52928db-fe6e-474a-bbf5-6f1629c0dba1",
            issuer: "http://localhost:8180/realms/myRealm",
            profile(profile) { console.log(profile)
                return { role: profile.role ?? "user", email : profile.email , name : profile.name,  id: profile.sub}
              },
          })
    ],
    secret: process.env.SECRET,
    callbacks: {
      async jwt({ token, user }) { console.log(token)
        if (user) token.role = user.role;
        return token;
      },
      async session({ session, token }) {
        if (session?.user) session.user.role = token.role;
        return session;
      },
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
