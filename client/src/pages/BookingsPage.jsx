import { useEffect, useState } from "react";
import AccountNavbar from "../components/AccountNavbar";
import axios from "axios";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("/bookings").then((res) => {
      setBookings(res.data);
    });
  }, []);

  return (
    <div>
      <AccountNavbar />
      <div className="">
        {bookings.length > 0 &&
          bookings.map((booking, index) => (
            <div key={index}>
              {booking.checkIn} - {booking.checkOut}
            </div>
          ))}
      </div>
    </div>
  );
}
