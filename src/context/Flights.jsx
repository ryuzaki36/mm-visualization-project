import { createContext, useState, useEffect } from "react";
import { format } from 'date-fns';

export const FlightsContext = createContext();

const FlightsProvider = ({ children }) => {
  const [flights, setFlights] = useState([]);
  const [flightsByDay, setFlightsByDay] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [menu, setMenu] = useState("dashboard");
  const [status, setStatus] = useState("Arrivals");
  const [selectedDay, setSelectedDay] = useState("today");

  useEffect(() => {
    const fetchFlights = async () => {
      setLoading(true);
      const response = await fetch(
        `https://rmsflightdata.yyc.com:8091/flights?t=${Date.now()}`
      );
      const data = await response.json();
      const todayFlights = [];
      const tomorrowFlights = [];
      const yesterdayFlights = [];

      const now = new Date();

      data.flights.forEach(flight => {
        const scheduledTime = new Date(flight.ScheduledTime);

        const canadaScheduledTime = format(scheduledTime, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", {
          timeZone: "America/Edmonton"
        });

        const diff = new Date(canadaScheduledTime).getTime() - now.getTime();

        const diffInDays = diff / (1000 * 3600 * 24);

        if (diffInDays < 0) {
          yesterdayFlights.push(flight);
        } else if (diffInDays < 1) {
          todayFlights.push(flight);
        } else {
          tomorrowFlights.push(flight);
        }
      });

      setFlights(data.flights);
      setFlightsByDay({
        today: todayFlights,
        tomorrow: tomorrowFlights,
        yesterday: yesterdayFlights
      });
      setLoading(false);
    };

    fetchFlights();
  }, []);

  return (
    <FlightsContext.Provider value={{ flights, menu, isLoading, flightsByDay, status, selectedDay, setMenu, setSelectedDay , setStatus }}>
      {children}
    </FlightsContext.Provider>
  );
};

export default FlightsProvider;
