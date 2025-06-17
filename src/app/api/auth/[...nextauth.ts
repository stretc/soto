import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

if (!githubId || !githubSecret) {
  throw new Error("GITHUB_ID and GITHUB_SECRET environment variables must be set");
}

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: githubId,
      clientSecret: githubSecret,
    }),
  ],
}

export default NextAuth(authOptions)