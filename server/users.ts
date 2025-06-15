"use server";

import { auth } from "../src/lib/auth";
import { createHash } from "@better-auth/utils/hash";

export const signIn = async () => {
  const hashBuffer = await createHash("SHA-256").digest("text");
  const hashInHex = await createHash("SHA-256", "hex").digest("text");
  
  const response = await auth.api.signInEmail({
    body: {
      email: "soto@test.com",
      password: "password1234",
    },
  })
}

export const signUp = async () => {
  await auth.api.signUpEmail({
    body: {
      email: "soto@test.com",
      password: "password1234",
      name: "Soto",
    },
  })
}