import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: "31017781977-c2mev6djp0jd9dte3hcqal7v8ha2tp27.apps.googleusercontent.com",
            clientSecret: "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"
        }),
        GitHubProvider({
            clientId: "8ae91e7483780c86e578",
            clientSecret: "a10f093c2d1eb2253b7e3149e8f42b11dafe9fc0",
          }),
        KeycloakProvider({
            clientId: "login-app",
            clientSecret: "d52928db-fe6e-474a-bbf5-6f1629c0dba1",
            issuer: "http://localhost:8180/realms/myRealm",
          })
    ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
