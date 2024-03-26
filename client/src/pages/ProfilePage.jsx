import { useContext, useState } from "react";
import { UserContext } from "../components/UserContext";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "flowbite-react";
import Places from "../components/Places";
import AccountNavbar from "../components/AccountNavbar";

export default function ProfilePage() {
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
      <AccountNavbar />
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})
          <Button
            gradientDuoTone="pinkToOrange"
            className="mx-auto w-full max-w-xs mt-5"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      )}
      {subpage === "places" && <Places />}
    </div>
  );
}
