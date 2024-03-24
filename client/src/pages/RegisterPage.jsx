import { Button, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="flex justify-center">
      <div className="min-w-96">
        <h1 className="text-center text-4xl font-medium">Register</h1>
        <form className="flex flex-col gap-2 py-4">
          <TextInput type="text" placeholder="Your Name" />
          <TextInput type="email" placeholder="example@gmail.com" />
          <TextInput type="password" placeholder="Your Password" />
          <Button gradientDuoTone="pinkToOrange">Register</Button>
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
