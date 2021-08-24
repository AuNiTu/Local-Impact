/* eslint-disable max-len */
import React from 'react';
import { WebMap, MapView } from '@esri/react-arcgis';
import * as ReactDOM from 'react-dom';
import { setDefaultOptions, loadModules } from 'esri-loader';

setDefaultOptions({ css: true });

loadModules(['esri/WebMap, esri/views/MapView'])
  .then((WebMap) => {
    const Webmap = new WebMap({
      portalItem: { // autocasts as new PortalItem()
        id: '20b24a7f3a7d41768ddd5f4aae911bc9',
    
      }  
      
    });

    const view = new WebScene({
      container: 'viewDiv', // Reference to the view div created in step 5
      Webmap, // Reference to the map object created before the view
      // zoom: 4, // Sets zoom level based on level of detail (LOD)
      // center: [15, 65] // Sets center point of view using longitude,latitude
    });

  });

const MapDisplay = () => {
  return (
    <div height="500" width="100%">
      <WebMap />
    </div>
  );
};



export default MapDisplay;


