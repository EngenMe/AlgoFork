"use client";

import { useEffect, useState } from "react";
import UserAvatar from "./UserAvatar";
import LoginButton from "./LoginButton";
import { Skeleton } from "@/components/ui/skeleton";

const LoginComp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("authToken="))
      ?.split("=")[1];

    if (!token) {
      setIsLoggedIn(false);
      setLoading(false);
      return;
    }

    const apiUrl =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";
    const apiKey = process.env.NEXT_PUBLIC_REDIS_API_KEY;

    if (!apiKey) {
      console.error("API key is not defined in the environment variables");
      setIsLoggedIn(false);
      setLoading(false);
      return;
    }

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      Authorization: `Bearer ${token}`,
    };

    fetch(`${apiUrl}/auth/validate-token`, {
      method: "POST",
      headers,
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.isValid) {
          fetch(`${apiUrl}/auth/me`, {
            method: "GET",
            headers,
          })
            .then((res) => res.json())
            .then((userData) => {
              setUsername(userData.username);
              setAvatar(userData.avatar);
              setIsLoggedIn(true);
              setLoading(false);
            })
            .catch((error) => {
              console.error("Error fetching user data:", error);
              setIsLoggedIn(false);
              setLoading(false);
            });
        } else {
          setIsLoggedIn(false);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Token validation error:", error);
        setIsLoggedIn(false);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center space-x-4 animate-blurPulse">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-6 w-24" />
      </div>
    );
  }

  return isLoggedIn ? (
    <UserAvatar username={username} avatar={avatar} />
  ) : (
    <LoginButton />
  );
};

export default LoginComp;
