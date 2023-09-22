import * as React from "react";

import { StudentType, AdminType, UserContextType } from "../types/types";

export const UserContext = React.createContext<UserContextType | null>(null);

const UserProvider: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = React.useState<
    StudentType | AdminType | null
  >(null);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
