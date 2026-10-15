const storage = (): Storage | null => {
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
};

export const getAccessToken = (): string | null =>
  storage()?.getItem("token") ?? null;

export const setAccessToken = (token: string) =>
  storage()?.setItem("token", token);

export const clearAccessToken = () => storage()?.removeItem("token");
