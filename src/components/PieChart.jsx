import React, { useContext } from "react";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import { FlightsContext } from "../context/Flights";

const FlightsByAirlineChart = () => {
  const { flightsByDay } = useContext(FlightsContext);

  // create an object to store the count of flights by airline
  const countsByAirline = flightsByDay?.today?.reduce((counts, flight) => {
    const airline = flight.Airline.Name;
    counts[airline] = (counts[airline] || 0) + 1;
    return counts;
  }, {});

  // format the data for the pie chart
  const data = Object.entries(countsByAirline).map(([airline, count]) => ({
    name: airline,
    value: count,
  }));

  // define the colors for the pie chart
  const colors = [
    "#2563EB",
    "#10B981",
    "#EF4444",
    "#F59E0B",
    "#3B82F6",
    "#8B5CF6",
    "#F87171",
    "#FFB8B8",
    "#FCD34D",
    "#FDE047",
    "#86EFAC",
    "#BBF7D0",
    "#FBB6CE",
    "#F9A8D4",
    "#C8D7F2",
    "#FCA5A5",
    "#FCD7D7",
    "#F9A8A8",
    "#F97316",
    "#FDBA74",
    "#FEEBC8",
    "#F9DBBD",
    "#FEF3C7",
    "#D1FAE5",
    "#A7F3D0",
    "#FBBF24",
    "#FCD34D",
    "#FDE047",
    "#FFF3C4",
    "#FCA5A5",
    "#FCD7D7",
    "#FDE8E8",
    "#FBCFE8",
    "#D1FAE5",
    "#A7F3D0",
    "#48BB78",
    "#81E6D9",
    "#A5B4FC",
    "#C6F6D5",
    "#FECACA",
    "#FEE2E2",
    "#EDE9FE",
    "#F9A8D4",
    "#D1FAE5",
    "#A7F3D0",
    "#F87171",
    "#FBBF24",
    "#FCD34D",
    "#FDE047",
    "#EDE9FE",
    "#8B5CF6",
    "#FBB6CE",
    "#F9A8D4",
    "#C8D7F2",
    "#FCA5A5",
    "#FCD7D7",
    "#F9A8A8",
    "#F97316",
    "#FDBA74",
    "#FEEBC8",
    "#F9DBBD",
    "#FEF3C7",
    "#D1FAE5",
    "#A7F3D0",
  ];

  return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={60}
            fill="#8884d8"
            labelLine={false}
            label={false}
            paddingAngle={5}
            startAngle={90}
            endAngle={450}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            wrapperStyle={{ paddingBottom: "20px" }}
          />
        </PieChart>
      </ResponsiveContainer>
  );
};

export default FlightsByAirlineChart;
