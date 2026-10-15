"use client";

import { useState } from "react";

import useAuth from "@/hooks/useAuth";
import Button from "@/ui/Button";
import Input from "@/ui/Input";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { registerMutation } = useAuth();


  const handleRegister = () => {
    registerMutation.mutate({
      name,
      email,
      password,
    });
  };

  return (
    <div className="w-100 flex flex-col gap-3">
      <Input
        type="text"
        placeholder="Enter the Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        type="email"
        placeholder="Enter the Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Enter the Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        buttonLabel={registerMutation.isPending ? "Registering..." : "Register"}
        onClick={handleRegister}
      />

      {registerMutation.isError && (
        <p className="text-red-500">{registerMutation.error.message}</p>
      )}

      {registerMutation.isSuccess && (
        <p className="text-green-600">Registration successful!</p>
      )}

   
    </div>
  );
}
