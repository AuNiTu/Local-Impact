/* eslint-disable react/prop-types */
import React, { useState, createContext, useContext, useEffect } from 'react';
import { fetchAddress } from '../components/arcGIS/services/fetchLocation';

// import fetches here

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // state here
  const [selectedItem, setSelectedItem] = useState('');
  const [location, setLocation] = useState({});
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState('');
  const [layer, setLayer] = useState('');

  // useEffect to trigger fetch here

  useEffect(() => {
    fetchAddress(address)
      .then((res) => setLocation({ longitude: res.x, latitude: res.y }))
      .finally(() => setLoading(false));
  }, [address]);

  return (
    <UserContext.Provider
      value={{
        selectedItem,
        setSelectedItem,
        location,
        setLocation,
        address,
        setAddress,
        layer,
        setLayer,
      }}
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

export const useLayer = () => {
  const { layer, setLayer } = useContext(UserContext);
  return { layer, setLayer };
};
