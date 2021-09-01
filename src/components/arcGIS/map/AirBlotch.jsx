import React from 'react';
import { useWebMap } from 'esri-loader-hooks';
import { useGeoLocation, useSearchTerm } from '../../../state/Provider';
// import { reverseGeocode } from '@esri/arcgis-rest-geocoding';
import { fetchCoordinates } from '../../../services/fetchLocation';

export const AirBlotchMap = async (locationFromDb) => {
  const { location } = useGeoLocation();
  const { searchTerm, setSearchTerm  } = useSearchTerm();

  // reverseGeocode([40.7128, 74.0060])
  //   .then((response) => {
  //     console.log(response.address.PlaceName);

  //   });


  let longitude;
  let latitude;

  {
    locationFromDb.locationFromDb.latitude
      ? ((longitude = locationFromDb.locationFromDb.longitude),
      (latitude = locationFromDb.locationFromDb.latitude))
      : ((longitude = location.longitude), (latitude = location.latitude));
  }
  const coordinates = longitude + ',' + latitude;


  const coordinatesToAddress = await fetchCoordinates(coordinates);

  
  setSearchTerm('Air Quality' + coordinatesToAddress);
  const [ref] = useWebMap('92e772c4f65a4848a29bcc24c8f61bab', {
    view: {
      center: [longitude, latitude],
      zoom: 8,
    },
  });


  return <div style={{ height: '60vh' }} ref={ref}></div>;
};

export default AirBlotchMap;
