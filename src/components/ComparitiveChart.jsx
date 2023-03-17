import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

const CustomDot = ({ cx, cy, fill }) => {
  return (
    <FontAwesomeIcon icon={faPlane} x={cx -10} y={cy - 10} width={20} height={20} />
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-md rounded-lg">
        <p className="font-semibold">{`Hour ${label}`}</p>
        <p className="text-blue-500">{`Arrivals: ${payload[0].value}`}</p>
        <p className="text-red-500">{`Departures: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const ComparitiveChart = ({ data }) => {
  return (
    <div className="w-full h-full p-4 rounded-lg">
      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="gradientArrivals" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.2} />
            </linearGradient>
            <linearGradient id="gradientDepartures" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#EF4444" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            height={36}
            formatter={(value, entry) => {
              const { color } = entry;
              return <span style={{ color }}>{value}</span>;
            }}
          />

          <Line
            type="monotone"
            dataKey="arrivals"
            stroke="url(#gradientArrivals)"
            strokeWidth={2}
            name="Arrivals"
            dot={<CustomDot fill="#EFf444"/>}
            label={{ value: "Arrivals", position: "top", fill: "#3B82F6" }}
          />
          <Line
            type="monotone"
            dataKey="departures"
            stroke="url(#gradientDepartures)"
            strokeWidth={2}
            name="Departures"
            dot={<CustomDot  fill="#E90428"/>}
            label={{
              value: "Departures",
              position: "bottom",
              fill: "#EF4444",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparitiveChart
