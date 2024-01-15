import { useContext } from "react";
import UserContext from "./userContext";
import { useState } from "react";

const UserContextPRovider = ({ children }) => {
  // const {} = useContext(UserContext);
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextPRovider;
