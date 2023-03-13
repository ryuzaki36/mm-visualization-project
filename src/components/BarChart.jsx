// import React, { useState, useEffect } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { useSpring, animated } from 'react-spring';
// import tw from 'twin.macro';

// const AnimatedBar = animated(Bar);

// const Chart = ({ data }) => {
//   const [showChart, setShowChart] = useState(false);

//   const arrivalsByHour = {};

//   data.forEach((entry) => {
//     const scheduledTime = new Date(entry.ScheduledTime);
//     const hour = scheduledTime.getHours();
//     if (!arrivalsByHour[hour]) {
//       arrivalsByHour[hour] = 0;
//     }
//     arrivalsByHour[hour]++;
//   });

//   const hourlyArrivalsData = Object.keys(arrivalsByHour).map((hour) => {
//     return {
//       hour: parseInt(hour),
//       arrivals: arrivalsByHour[hour],
//     };
//   });

//   const chartAnimation = useSpring({
//     from: { opacity: 0, width: 0 },
//     to: {
//       opacity: showChart ? 1 : 0,
//       width: showChart ? '100%' : 0,
//     },
//     delay: 500, // Delay the animation to allow time for data to load
//   });

//   useEffect(() => {
//     setShowChart(true);
//   }, []);

//   return (
//     <div css={tw`w-full h-full relative`}>
//       <animated.div style={chartAnimation} css={tw`w-full h-full absolute top-0 left-0`}>
//         <BarChart
//           width={800}
//           height={400}
//           data={hourlyArrivalsData}
//           margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="hour" label={{ value: 'Hour of day', position: 'insideBottomRight', offset: 0 }} />
//           <YAxis label={{ value: 'Total arrivals', angle: -90, position: 'insideLeft' }} />
//           <Tooltip />
//           <Legend />
//           <AnimatedBar
//             dataKey="arrivals"
//             fill="#8884d8"
//             barSize={30}
//             radius={[15, 15, 15, 15]}
//           />
//         </BarChart>
//       </animated.div>
//     </div>
//   );
// };

// export default Chart;
