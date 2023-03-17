// import React, { useState, useEffect } from 'react';
// import DeckGL from '@deck.gl/react';
// import { StaticMap } from 'react-map-gl';

// const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYXlvdXNoMjUiLCJhIjoiY2xmYTQydHBiMDcxNTNvcWR6dmhsdWl2diJ9.giU52fojHWmUvgGCEvHfmA';

// function Map() {
//   const [viewport, setViewport] = useState({
//     width: 800,
//     height: 600,
//     latitude: 37.7577,
//     longitude: -122.4376,
//     zoom: 8
//   });

//   useEffect(() => {
//     const resizeListener = () => {
//       setViewport({
//         ...viewport,
//         width: window.innerWidth,
//         height: window.innerHeight
//       });
//     };
//     window.addEventListener('resize', resizeListener);
//     return () => {
//       window.removeEventListener('resize', resizeListener);
//     };
//   }, [viewport]);

//   return (
//     <DeckGL
//       {...viewport}
//       layers={[]}
//       controller={true}
//     >
//       <StaticMap
//         mapStyle="mapbox://styles/mapbox/light-v10"
//         mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
//       />
//     </DeckGL>
//   );
// }

// export default Map;



