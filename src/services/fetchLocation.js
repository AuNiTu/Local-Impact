export const fetchAddress = async (address) => {
  if (address !== undefined) { 
    const res = await fetch(
      `https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?address=${address}&maxLocations=1&f=json&token=${process.env.ARCGIS_API_KEY}`
    );
    const json = await res.json();
    return await json.candidates[0].location;
  } else {
    return {};
  }
};
