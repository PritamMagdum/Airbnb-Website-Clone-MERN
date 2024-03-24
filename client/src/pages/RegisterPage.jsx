import { Button, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log({ name, email, password });

  const registerUser = (e) => {
    e.preventDefault();
    axios.post("/register", { name, email, password });
  };

  return (
    <div className="flex justify-center">
      <div className="min-w-96">
        <h1 className="text-center text-4xl font-medium">Register</h1>
        <form className="flex flex-col gap-2 py-4" onSubmit={registerUser}>
          <TextInput
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextInput
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button gradientDuoTone="pinkToOrange" type="submit">
            Register
          </Button>
          <div className="text-sm font-semibold">
            Already registered?
            <Link
              to="/login"
              className="px-1 text-blue-500 hover:text-blue-600"
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
