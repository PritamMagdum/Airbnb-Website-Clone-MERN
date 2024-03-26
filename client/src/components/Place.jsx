import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Place() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((res) => {
      setPlace(res.data);
    });
  }, [id]);
  if (!place) return "Nothing";

  return (
    <div className="mt-4 py-4 px-8">
      <p className="text-3xl">{place.title}</p>
      <a
        href={`https://maps.google.com/?q=${place.address}`}
        target="_blank"
        className="my-1 block font-semibold underline"
      >
        {place.address}
      </a>
      <div className="grid gap-2 grid-cols-[2fr_1fr]">
        <div className="a">
          {place.photos?.[0] && (
            <img
              src={`http://localhost:8080/uploads/${place.photos[0]}`}
              alt=""
            />
          )}
        </div>

        <div className=" grid">
          {place.photos?.[1] && (
            <img
              src={`http://localhost:8080/uploads/${place.photos[1]}`}
              alt=""
            />
          )}
          {place.photos?.[2] && (
            <div className="overflow-hidden">
              <img
                className="relative top-2"
                src={`http://localhost:8080/uploads/${place.photos[2]}`}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
