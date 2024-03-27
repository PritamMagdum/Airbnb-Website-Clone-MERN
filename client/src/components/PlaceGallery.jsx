import { Button } from "flowbite-react";
import { useState } from "react";

export default function PlaceGallery({ place }) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  if (showAllPhotos) {
    return (
      <div className="absolute bg-white inset-0 min-h-screen">
        <div className="p-8 grid gap-4">
          <h2 className="mx-auto text-3xl">Photos of {place.title}</h2>
          <div className="mx-auto">
            <Button
              onClick={() => setShowAllPhotos(false)}
              className="fixed mt-8 flex gap-1 rounded-2xl shadow-xl shadow-gray-500"
              gradientDuoTone="pinkToOrange"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
              Close Photos
            </Button>
          </div>
          {place?.photos?.length > 0 &&
            place.photos.map((photo, index) => (
              <div className="mx-auto" key={index}>
                <img src={`http://localhost:8080/uploads/${photo}`} alt="" />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative my-4">
      <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-2xl overflow-hidden">
        <div className="a">
          {place.photos?.[0] && (
            <img
              onClick={() => setShowAllPhotos(true)}
              className="cursor-pointer"
              src={`http://localhost:8080/uploads/${place.photos[0]}`}
              alt=""
            />
          )}
        </div>

        <div className=" grid">
          {place.photos?.[1] && (
            <img
              onClick={() => setShowAllPhotos(true)}
              className="cursor-pointer"
              src={`http://localhost:8080/uploads/${place.photos[1]}`}
              alt=""
            />
          )}
          {place.photos?.[2] && (
            <div className="overflow-hidden">
              <img
                onClick={() => setShowAllPhotos(true)}
                className="relative top-2 cursor-pointer"
                src={`http://localhost:8080/uploads/${place.photos[2]}`}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
      <button
        onClick={() => setShowAllPhotos(true)}
        className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-xl font-medium "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
        Show More photos
      </button>
    </div>
  );
}
