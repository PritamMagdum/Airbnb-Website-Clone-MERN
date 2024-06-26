import { Button, Label, TextInput, Textarea } from "flowbite-react";
import PhotosUploader from "./PhotosUploader";
import Perks from "./Perks";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import AccountNavbar from "./AccountNavbar";

export default function PlacesForm() {
  const { id } = useParams();
  console.log(id);
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [price, setPrice] = useState(100);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((response) => {
      const { data } = response;
      setTitle(data.title);
      setAddress(data.address);
      setAddedPhotos(data.photos);
      setDescription(data.description);
      setPerks(data.perks);
      setExtraInfo(data.extraInfo);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setMaxGuests(data.maxGuests);
      setPrice(data.price);
    });
  }, [id]);

  const savePlace = async (e) => {
    e.preventDefault();

    const placeData = {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
    };

    if (id) {
      // update the place
      await axios.put("/places", { id, ...placeData });
    } else {
      // create a new place
      await axios.post("/places", placeData);
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to="/account/places" />;
  }

  return (
    <div className="">
      <AccountNavbar />
      <form className="flex flex-col gap-2 px-5" onSubmit={savePlace}>
        <Label className="text-xl">Title</Label>
        <TextInput
          type="text"
          placeholder="example - My favorite place"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <span className="text-sm text-gray-600 font-medium">
          Title for your place, should be short and catchy for advertisement
        </span>
        <Label className="text-xl">Address</Label>
        <TextInput
          type="text"
          placeholder="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <span className="text-sm text-gray-600 font-medium">
          Address to this place
        </span>
        <Label className="text-xl">Photos</Label>
        <span className="text-sm text-gray-600 font-medium">more = better</span>
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
        <Label className="text-xl">Description</Label>
        <span className="text-sm text-gray-600 font-medium">
          description of the place
        </span>
        <Textarea
          value={description}
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
          value={extraInfo}
          onChange={(e) => setExtraInfo(e.target.value)}
        />
        <Label className="text-xl">Check In & Out times</Label>
        <span className="text-sm text-gray-600 font-medium">
          add check in and out times, remember to have some time window for
          cleaning the room between guests
        </span>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
          <div className="">
            <Label className="text-sm">Check in time</Label>
            <TextInput
              placeholder="12:00"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div className="">
            <Label className="text-sm">Check out time</Label>
            <TextInput
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
          <div className="">
            <Label className="text-sm">Number of guests</Label>
            <TextInput
              type="number"
              value={maxGuests}
              onChange={(e) => setMaxGuests(e.target.value)}
            />
          </div>
          <div className="">
            <Label className="text-sm">Price per night</Label>
            <TextInput
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <Button type="submit" gradientDuoTone="pinkToOrange" className="my-4">
          Save
        </Button>
      </form>
    </div>
  );
}
