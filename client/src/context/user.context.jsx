import { createContext, useState } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const user = useState(null);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
