import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then((res) => {
      setPlaces([...res.data, ...res.data, ...res.data, ...res.data]);
    });
  }, []);
  return (
    <div className="gap-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 m px-8">
      {places.length > 0 &&
        places.map((place, index) => (
          <Link to={`/place/${place._id}`} key={index} className="">
            <div className="bg-gray-400 rounded-2xl flex mb-2">
              {place.photos?.[0] && (
                <img
                  className=" rounded-2xl object-cover aspect-square"
                  src={"http://localhost:8080/uploads/" + place.photos?.[0]}
                  alt="Place Image"
                />
              )}
            </div>
            <h2 className=" font-medium">{place.address}</h2>
            <h2 className="  truncate text-gray-500 ">{place.title}</h2>
            <div className="mt-1">
              <span className="font-bold">&#8377;{place.price}</span> per night
            </div>
          </Link>
        ))}
    </div>
  );
}
