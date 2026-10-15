import { LoginPayload, RegisterPayload } from "@/types/auth";
import { post } from "../request";

export const authApi = {
  loginuser: async function loginUser(payload: LoginPayload) {
    const result = post("/api/auth/login", payload);
    return result;
  },

  registerUser: async function registerUser(payload: RegisterPayload) {
    const result = post("/api/auth/register", payload);
    return result;
  },
};
