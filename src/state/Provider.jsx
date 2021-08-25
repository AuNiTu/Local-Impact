/* eslint-disable react/prop-types */
import React, { useState, createContext, useContext } from 'react';
// import fetches here

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // state here
  const [selectedItem, setSelectedItem] = useState('');
  const [location, setLocation] = useState({});
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState('portland, or');


  // useEffect to trigger fetch here

  return (
    <UserContext.Provider
      value={{ selectedItem, setSelectedItem, location, setLocation, address, setAddress }}
    >
      {children}
    </UserContext.Provider>
  );
};

// custom hooks here
export const useInfo = () => {
  const { selectedItem, setSelectedItem } = useContext(UserContext);
  return { selectedItem, setSelectedItem };
};

export const useGeoLocation = () => {
  const { location, setLocation } = useContext(UserContext);
  return { location, setLocation };
};

export const useAddress = () => {
  const { address, setAddress } = useContext(UserContext);
  return { address, setAddress };
};
