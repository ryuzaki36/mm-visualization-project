// import React, { useState } from 'react';
// import DeckGL from '@deck.gl/react';
// import { LineLayer } from '@deck.gl/layers';
// import { StaticMap } from 'react-map-gl';

// const MAPBOX_TOKEN = 'your_mapbox_token_here';

// function AirplaneRoutesMap({ data }) {
//   const [viewport, setViewport] = useState({
//     latitude: 51.1314,
//     longitude: -114.0103,
//     zoom: 10,
//   });

//   const lineLayer = new LineLayer({
//     id: 'line-layer',
//     data: data,
//     pickable: true,
//     getWidth: 5,
//     getColor: (d) => (d.Leg === 'A' ? [255, 0, 0] : [0, 255, 0]),
//     getSourcePosition: (d) => [d.Airport.Longitude, d.Airport.Latitude],
//     getTargetPosition: (d) => [d.Gate.Longitude, d.Gate.Latitude],
//   });

//   return (
//     <DeckGL
//       initialViewState={viewport}
//       controller={true}
//       layers={[lineLayer]}
//       width="100%"
//       height="500px"
//     >
//       <StaticMap mapboxApiAccessToken={MAPBOX_TOKEN} />
//     </DeckGL>
//   );
// }

// export default AirplaneRoutesMap;
