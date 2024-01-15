import { useContext } from "react";
import UserContext from "../../context/userContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <center>
      {user ? (
        <>
          <h1>Profile : {user.username}</h1>
        </>
      ) : (
        <>
          <h1>Profile : No user</h1>
        </>
      )}
      <b>More</b>
    </center>
  );
};
export default Profile;
