import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import { Link, useParams } from "react-router-dom";
import Perks from "./Perks";
import { useState } from "react";
import axios from "axios";

export default function Places() {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);

  console.log({ photoLink });
  // console.log(action);
  async function addPhotoByLink(e) {
    e.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    setAddedPhotos((prev) => {
      return [...prev, filename];
    });
    setPhotoLink("");
  }

  return (
    <div className="">
      {action !== "new" && (
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
      )}
      {action === "new" && (
        <div className="">
          <form className="flex flex-col gap-2 px-5">
            <Label className="text-xl">Title</Label>
            <TextInput
              type="text"
              placeholder="example - My favorite place"
              // value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className="text-sm text-gray-600 font-medium">
              Title for your place, should be short and catchy for advertisement
            </span>
            <Label className="text-xl">Address</Label>
            <TextInput
              type="text"
              placeholder="address"
              // value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <span className="text-sm text-gray-600 font-medium">
              Address to this place
            </span>
            <Label className="text-xl">Photos</Label>
            <span className="text-sm text-gray-600 font-medium">
              more = better
            </span>
            <div className="flex flex-row justify-between gap-2">
              <TextInput
                placeholder="add photo using link.....jpg"
                className="w-full"
                value={photoLink}
                onChange={(e) => setPhotoLink(e.target.value)}
              />
              <Button onClick={addPhotoByLink} className="min-w-28">
                Add Photo
              </Button>
            </div>

            <div className="grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {addedPhotos.length > 0 &&
                addedPhotos.map((link) => (
                  <div>
                    <img
                      className="rounded-2xl"
                      src={`http://localhost:8080/uploads/${link}`}
                      alt={link}
                    />
                  </div>
                ))}
              <label
                color="transparent"
                className="flex items-center rounded-2xl border justify-center cursor-pointer text-xl"
              >
                <input
                  type="file"
                  className="hidden"
                  onChange={handleUploadPhoto}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mx-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                  />
                </svg>
                Upload
              </label>
            </div>
            <Label className="text-xl">Description</Label>
            <span className="text-sm text-gray-600 font-medium">
              description of the place
            </span>
            <Textarea
              // value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
            />
            <Label className="text-xl">Perks</Label>
            <span className="text-sm text-gray-600 font-medium">
              select all the perks of your place
            </span>
            <div className="grid gap-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-2">
              <Perks selected={perks} onChange={setPerks} />
            </div>
            <Label className="text-xl">Extra Information</Label>
            <span className="text-sm text-gray-600 font-medium">
              house rules, advance booking, etc
            </span>
            <Textarea
              rows={5}
              // value={extraInfo}
              onChange={(e) => setExtraInfo(e.target.value)}
            />
            <Label className="text-xl">Check In & Out times</Label>
            <span className="text-sm text-gray-600 font-medium">
              add check in and out times, remember to have some time window for
              cleaning the room between guests
            </span>
            <div className="grid sm:grid-cols-3 gap-2">
              <div className="">
                <Label className="text-sm">Check in time</Label>
                <TextInput
                  placeholder="12:00"
                  // value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>
              <div className="">
                <Label className="text-sm">Check out time</Label>
                <TextInput
                  // value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
              <div className="">
                <Label className="text-sm">Number of guests</Label>
                <TextInput
                  type="number"
                  // value={maxGuests}
                  onChange={(e) => setMaxGuests(e.target.value)}
                />
              </div>
            </div>
            <Button gradientDuoTone="pinkToOrange" className="my-4">
              Save
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
