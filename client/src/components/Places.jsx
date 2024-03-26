import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

import AccountNavbar from "./AccountNavbar";

export default function Places() {
  return (
    <div className="">
      <AccountNavbar />
      <div className="text-center">
        <Link to="/account/places/new" className="">
          <Button
            className="rounded-full inline-block mx-auto"
            gradientDuoTone="pinkToOrange"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add New Place
          </Button>
        </Link>
      </div>
    </div>
  );
}
