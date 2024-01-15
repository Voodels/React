import UserContextPRovider from "../../context/UserContextPRovider";
import Login from "./Login";
import Profile from "./Profile";

const ContextAPI = () => {
  return (
    <UserContextPRovider>
      <center>
        <h1>ContextAPI</h1>
      </center>
      <Login />
      <Profile />
    </UserContextPRovider>
  );
};
export default ContextAPI;
