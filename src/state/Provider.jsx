/* eslint-disable react/prop-types */
import React, { useState, createContext, useContext, useEffect } from 'react';
import { fetchAddress } from '../services/fetchLocation';
import { fetchNews } from '../services/newsApi';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // state here

  const [address, setAddress] = useState();
  const [location, setLocation] = useState({});
  const [value, setValue] = useState(0);
  const [locationSwitch, setLocationSwitch] = useState(false);
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState();
  const [searchTerm, setSearchTerm] = useState();
  // const [coordinates, setCoordinates] = useState();


  // useEffect to trigger fetch here

  useEffect(() => {
    fetchAddress(address)
      .then((res) => setLocation({ longitude: res.x, latitude: res.y }))
      .finally(() => setLoading(false));
  }, [address]);

  useEffect(() => {
    fetchNews(searchTerm)
      .then((res) => setNews(res))
      .finally(() => setLoading(false));
  }, [searchTerm]);


  return (
    <UserContext.Provider
      value={{
        location,
        setLocation,
        address,
        setAddress,
        value,
        setValue,
        locationSwitch,
        setLocationSwitch,
        loading,
        news,
        setNews,
        searchTerm,
        setSearchTerm,
        // coordinates,
        // setCoordinates
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// custom hooks here
export const useGeoLocation = () => {
  const { location, setLocation } = useContext(UserContext);
  return { location, setLocation };
};

export const useAddress = () => {
  const { address, setAddress } = useContext(UserContext);
  return { address, setAddress };
};

export const useValue = () => {
  const { value, setValue } = useContext(UserContext);
  return { value, setValue };
};

export const useSwitch = () => {
  const { locationSwitch, setLocationSwitch } = useContext(UserContext);
  return { locationSwitch, setLocationSwitch };
};

export const useNews = () => {
  const { news, setNews } = useContext(UserContext);
  return { news, setNews };
};

export const useSearchTerm = () => {
  const { searchTerm, setSearchTerm } = useContext(UserContext);
  return { searchTerm, setSearchTerm };
};

// export const useCoordinates = () => {
//   const { coordinates, setCoordinates } = useContext(UserContext);
//   return { coordinates, setCoordinates };
// };
