"use client";

import { useState } from "react";

import useAuth from "@/hooks/useAuth";
import Button from "@/ui/Button";
import Input from "@/ui/Input";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { loginMutation } = useAuth();

  const handleLogin = () => {
    loginMutation.mutate({
      email,
      password,
    });
  };

  return (
    <>
      <div className="w-100 flex flex-col gap-3">
        <Input
          type="text"
          placeholder="Enter the Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Enter the Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button buttonLabel={loginMutation.isPending ? "Logging in..." : "Login"} onClick={handleLogin} />
      </div>
    </>
  );
}
