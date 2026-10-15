import { LoginPayload, RegisterPayload } from "@/types/auth";
import { getAccessToken } from "@/utils/accessToken";

type Payload = LoginPayload | RegisterPayload | undefined;

const buildHeaders = (): Record<string, string> => {
  const token = getAccessToken();
  const headers: Record<string, string> = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
};

const request = async (method: string, path: string, payload: Payload) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
      method,
      headers: buildHeaders(),
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || "Request failed");
    }
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Unable to reach the server.");
  }
};

export const get = (path: string) => request("GET", path, undefined);

export const post = (path: string, body: Payload) =>
  request("POST", path, body);
