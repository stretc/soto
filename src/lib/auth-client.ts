import { createAuthClient } from "better-auth/react"
import "dotenv/config"

export const authClient = createAuthClient({
    baseURL: "http://localhost:3000",
});

export const githubSignIn = async () => {
    const data = await authClient.signIn.social({
        provider: "github",
    });
};