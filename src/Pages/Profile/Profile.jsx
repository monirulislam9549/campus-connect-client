import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    // Check if the user is authenticated before making the fetch request
    if (user?.email) {
      fetch(`http://localhost:5000/users/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setProfile(data);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    }
  }, [user]);
  return (
    <div>
      <h1>hello</h1>
      <h1>{profile?.name}</h1>
      <h1>{profile?.email}</h1>
      <img src={profile?.image} alt="" />
    </div>
  );
};

export default Profile;
