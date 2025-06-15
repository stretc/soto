"use server";

import { auth } from "../src/lib/auth";

export const signIn = async (email: string, password: string) => {
  const response = await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  })
}

export const signUp = async (email: string, password: string, name: string) => {
  await auth.api.signUpEmail({
    body: {
      email,
      password,
      name,
    },
  });
};