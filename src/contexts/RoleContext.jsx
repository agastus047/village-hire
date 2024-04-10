import React,{useState, createContext} from "react";

export const RoleContext = createContext();

export const RoleContextProvider = (props) => {
  const [role, setRole] = useState(null);
  return (
    <RoleContext.Provider
      value={{
        roleState:[role, setRole]
      }}
    >
      {props.children}
    </RoleContext.Provider>
  );
};