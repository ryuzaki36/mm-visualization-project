

import React, { useState, useEffect } from "react";
import DeckGL from "@deck.gl/react";
import { GeoJsonLayer } from "@deck.gl/layers";
import Map from "react-map-gl";

export const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiYXlvdXNoMjUiLCJhIjoiY2xmYTQydHBiMDcxNTNvcWR6dmhsdWl2diJ9.giU52fojHWmUvgGCEvHfmA"; // replace with your Mapbox access token

function FlightPath() {
  const [viewport, setViewport] = useState({
    width: 800,
    height: 600,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 5
  });
  const [route, setRoute] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const yycCoords = [-114.0107, 51.1207]; // YYC airport coordinates
      const laxCoords = [-118.4079, 33.9434]; // LAX airport coordinates
      const routeData = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: [yycCoords, laxCoords]
            }
          }
        ]
      };
      setRoute(routeData);
      setViewport((viewport) => ({
        ...viewport,
        latitude: (yycCoords[1] + laxCoords[1]) / 2,
        longitude: (yycCoords[0] + laxCoords[0]) / 2,
        zoom: 6
      }));
    }
    fetchData();
  }, []);

  return (
    <DeckGL
      {...viewport}
      layers={[
        new GeoJsonLayer({
          id: "flight-path",
          data: route,
          lineWidthScale: 20,
          lineWidthMinPixels: 2,
          getLineWidth: 1,
          getLineColor: [255, 0, 0]
        })
      ]}
      controller={true}
    >
      <Map   
        reuseMaps   
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxApiAccessToken="pk.eyJ1IjoiYXlvdXNoMjUiLCJhIjoiY2xmYTQydHBiMDcxNTNvcWR6dmhsdWl2diJ9.giU52fojHWmUvgGCEvHfmA"
        {...viewport}
      />
    </DeckGL>
  );
}

export default FlightPath;

