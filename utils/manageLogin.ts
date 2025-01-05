import { Dispatch, SetStateAction } from "react";

export const manageLogin = async (
  email: string,
  password: string,
  setLoginFailed: Dispatch<SetStateAction<boolean>>
): Promise<string | void> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";
  const apiKey = process.env.NEXT_PUBLIC_REDIS_API_KEY;

  if (!apiKey) {
    throw new Error("API key is not defined in the environment variables");
  }

  try {
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      return setLoginFailed(true);
    }

    const { token }: { token: string } = await response.json();
    setLoginFailed(false);

    return token;
  } catch (error) {
    console.error("Login error:", error);
    throw new Error("An unexpected error occurred. Please try again later.");
  }
};
