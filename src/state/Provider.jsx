/* eslint-disable react/prop-types */
import React, { useState, useEffect, createContext, useContext } from 'react';
// import fetches here

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // state here
  const [selectedItem, setSelectedItem] = useState('');

  // useEffect to trigger fetch here

  return (
    <UserContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </UserContext.Provider>
  );
};

// custom hooks here
export const useInfo = () => {
  const { selectedItem, setSelectedItem } = useContext(UserContext);
  return { selectedItem, setSelectedItem };
};
