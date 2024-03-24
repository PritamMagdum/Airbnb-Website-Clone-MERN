import { Button, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="flex justify-center">
      <div className="min-w-96">
        <h1 className="text-center text-4xl font-medium">Login</h1>
        <form className="flex flex-col gap-2 py-4">
          <TextInput type="email" placeholder="example@gmail.com" />
          <TextInput type="password" placeholder="Your Password" />
          <Button gradientDuoTone="pinkToOrange">Login</Button>
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
