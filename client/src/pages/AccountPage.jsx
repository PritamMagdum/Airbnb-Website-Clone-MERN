import { useContext, useState } from "react";
import { UserContext } from "../components/UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "flowbite-react";

export default function AccountPage() {
  const { ready, user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  if (!ready) {
    return "Loading...";
  }
  if (ready && !user) {
    return <Navigate to="/login" />;
  }

  let { subpage } = useParams();

  if (subpage === undefined) {
    subpage = "profile";
  }

  const handleLogout = async () => {
    await axios.post("/logout");
    setUser(null);
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
        <Link
          className={` py-2 px-6 ${
            subpage === "profile" && "bg-primary text-white rounded-full"
          }`}
          to="/account"
        >
          My Profile
        </Link>
        <Link
          className={` py-2 px-6 ${
            subpage === "bookings" && "bg-primary text-white rounded-full"
          }`}
          to="/account/bookings"
        >
          My Bookings
        </Link>
        <Link
          className={` py-2 px-6 ${
            subpage === "places" && "bg-primary text-white rounded-full"
          }`}
          to="/account/places"
        >
          My Places
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})
          <Button
            gradientDuoTone="pinkToOrange"
            className="mx-auto w-full max-w-sm mt-5"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      )}
    </div>
  );
}
