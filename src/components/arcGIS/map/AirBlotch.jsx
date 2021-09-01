import React from 'react';
import { useWebMap } from 'esri-loader-hooks';
import { useGeoLocation, useSearchTerm } from '../../../state/Provider';
import { fetchCoordinates } from '../../../services/fetchLocation';

function AirBlotchMap(locationFromDb) {

  const { location } = useGeoLocation();
  const { searchTerm, setSearchTerm } = useSearchTerm();

  let longitude;
  let latitude;

  
  locationFromDb.locationFromDb.latitudemap
    ? ((longitude = locationFromDb.locationFromDb.longitude),
    (latitude = locationFromDb.locationFromDb.latitude))
    : ((longitude = location.longitude), (latitude = location.latitude));
  

  const coordinates = longitude + ',' + latitude;

  const coordinatesToAddress = fetchCoordinates(coordinates).then((city) => setSearchTerm('air quality ' + city));
  
  const [ref] = useWebMap('92e772c4f65a4848a29bcc24c8f61bab', {
    view: {
      center: [longitude, latitude],
      zoom: 8,
    },
  });

  return <div style={{ height: '60vh' }} ref={ref}></div>;

};

export default AirBlotchMap;
