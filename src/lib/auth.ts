import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/drizzle";
import { schema } from "@/db/schema";
import { nextCookies } from "better-auth/next-js";
import { twoFactor } from "better-auth/plugins";

export const auth = betterAuth({
  appName: "Soto",
    emailAndPassword: {  
      enabled: true,
    },
    user: {
      deleteUser: {
        enabled: true,
      },
    },
    socialProviders:{
      github: {
        clientId: process.env.GITHUB_CLIENT_ID as string, 
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
      }
    },
    // Allows acount linking
    account: {
      accountLinking: {
        enabled: true,
        trustedProviders: ["github"],
      }
    },
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: schema,
    }),
    plugins: [nextCookies()], // twoFactor() for 2FA
});