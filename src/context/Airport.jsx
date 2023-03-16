const airportCodes = ["EWR", "YYC", "LAX", "JFK"]; // Replace with the airport codes you need to fetch coordinates for
const geocodingBaseUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYXlvdXNoMjUiLCJhIjoiY2xmYTQydHBiMDcxNTNvcWR6dmhsdWl2diJ9.giU52fojHWmUvgGCEvHfmA";

const airportCoordinates = {};

Promise.all(
  airportCodes.map((airportCode) => {
    const geocodingUrl = `${geocodingBaseUrl}${airportCode}.json?access_token=${MAPBOX_TOKEN}`;
    return fetch(geocodingUrl)
      .then((response) => response.json())
      .then((data) => {
        const airportFeature = data.features.find((feature) =>
          feature.place_type.includes("airport")
        );
        airportCoordinates[airportCode] = airportFeature.geometry.coordinates;
      })
      .catch((error) => console.log(error));
  })
)
  .then(() => {
    // Use the airportCoordinates object to draw the lines on the map
    console.log(airportCoordinates);
  })
  .catch((error) => console.log(error));
