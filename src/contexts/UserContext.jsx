import React,{useState, createContext} from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [userDetails, setUserDetails] = useState(null);
  return (
    <UserContext.Provider
      value={{
        userState:[userDetails, setUserDetails]
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};