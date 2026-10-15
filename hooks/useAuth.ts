"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { authApi } from "@/services/auth/auth";
import { LoginPayload, RegisterPayload } from "@/types/auth";
import { setAccessToken } from "@/utils/accessToken";

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: {
      user_id: string;
      name: string;
      email: string;
    };
    token: string;
  };
}

export default function useAuth() {
  const router = useRouter();
  const loginMutation = useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: authApi.loginuser,
    onSuccess: (response) => {
      setAccessToken(response.data.token);
      router.push("/dashboard");
      console.log("Login successful:", response);
    },
    onError: (error) => {
      console.error("Login failed:", error.message);
    },
  });

  const registerMutation = useMutation<unknown, Error, RegisterPayload>({
    mutationFn: authApi.registerUser,
    onSuccess: (data) => {
      console.log("Registration successful:", data);
    },
    onError: (error) => {
      console.error("Registration failed:", error.message);
    },
  });

  return { loginMutation, registerMutation };
}
