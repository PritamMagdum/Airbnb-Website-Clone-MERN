import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

import AccountNavbar from "./AccountNavbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Places() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("/user-places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);

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
      <div className="my-4 px-4">
        {places.length > 0 &&
          places.map((place, index) => (
            <Link
              to={`/account/places/${place._id}`}
              className="flex cursor-pointer gap-4 p-4 bg-gray-100 rounded-2xl"
              key={index}
            >
              <div className="flex  w-32 h-32 bg-gray-300 grow shrink-0 rounded-md">
                {place.photos.length > 0 && (
                  <img
                    className="object-cover rounded-md"
                    src={`http://localhost:8080/uploads/${place.photos[0]}`}
                    alt="Place Image"
                  />
                )}
              </div>
              <div className="grow-0 shrink">
                <h2 className="text-xl">{place.title}</h2>
                <p className="text-sm mt-2">{place.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
