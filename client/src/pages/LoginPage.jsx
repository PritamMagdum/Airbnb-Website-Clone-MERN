import { Button, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../components/UserContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/login", { email, password });
      setUser(data);
      alert("Login Successful");
      setRedirect(true);
    } catch (error) {
      alert("Login Failed");
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <div className="flex justify-center">
      <div className="min-w-96">
        <h1 className="text-center text-4xl font-medium">Login</h1>
        <form className="flex flex-col gap-2 py-4" onSubmit={handleLogin}>
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
            Login
          </Button>
          <div className="text-sm font-semibold">
            Don't have an Accout?
            <Link
              to="/register"
              className="px-1 text-blue-500 hover:text-blue-600"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
