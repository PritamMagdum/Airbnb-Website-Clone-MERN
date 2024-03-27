import { Label, TextInput } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function BookingWidget({ place }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [redirect, setRedirect] = useState("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

  const bookThisPlace = async () => {
    const res = await axios.post("/bookings", {
      place: place._id,
      checkIn,
      checkOut,
      name,
      numberOfGuests,
      phone,
      price: numberOfNights * place.price,
    });
    const bookingId = res.data._id;
    setRedirect(`/account/bookings/${bookingId}`);
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div className="">
      <div className="bg-gray-200 shadow p-4 rounded-2xl ">
        <div className="text-2xl text-center">
          <span className="font-bold ">&#8377;{place.price}</span> per night
        </div>
        <div className="md:grid md:grid-cols-2">
          <div className="">
            <Label>Check in:</Label>
            <TextInput
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div className="">
            <Label>Check out:</Label>
            <TextInput
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>
        <div className="">
          <Label>Number of guests:</Label>
          <TextInput
            type="number"
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(e.target.value)}
          />
        </div>
        {numberOfNights > 0 && (
          <div className="">
            <Label>Your full name:</Label>
            <TextInput
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Label>Phone number:</Label>
            <TextInput
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        )}
        <div className="text-center">
          <button
            onClick={bookThisPlace}
            className="bg-primary py-2 px-4 my-4 rounded-2xl text-white font-medium"
          >
            Book this place
            {checkIn && checkOut && (
              <span>
                {numberOfNights > 0 && (
                  <span> {numberOfNights * place.price}</span>
                )}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
