import "dotenv/config"

import { createAuthClient } from "better-auth/react"
import { twoFactorClient } from "better-auth/plugins";

export const authClient = createAuthClient({
    baseURL: "http://localhost:3000",
    //plugins: [twoFactorClient()], for when 2FA is ready to be implemented
});

export const githubSignIn = async () => {
    const data = await authClient.signIn.social({
        provider: "github",
    });
};