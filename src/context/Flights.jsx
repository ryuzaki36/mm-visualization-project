import React, { createContext, useState, useEffect } from "react";

export const FlightsContext = createContext();

const FlightsProvider = ({ children }) => {
  const [flights, setFlights] = useState([]);
  const [flightsByDay, setFlightsByDay] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [menu, setMenu] = useState("dashboard");

  useEffect(() => {
    const fetchFlights = async () => {
      setLoading(true)
      const response = await fetch(
        `https://rmsflightdata.yyc.com:8091/flights?t=${Date.now()}`
      );
      const data = await response.json();
      const todayFlights = [];
      const tomorrowFlights = [];
      const yesterdayFlights = [];
      
      const now = new Date();
      
      data.flights.forEach(flight => {
        // parse the scheduled time
        const scheduledTime = new Date(flight.ScheduledTime);
      
        const diff = scheduledTime.getTime() - now.getTime();
      
        // calculate the difference in days
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
      console.log(todayFlights)
      setFlightsByDay({
        today: todayFlights,
        tomorrow: tomorrowFlights,
        yesterday: yesterdayFlights
      })
      setLoading(false)
    };

    fetchFlights();
  }, []);




  return (
    <FlightsContext.Provider value={{ flights, menu, isLoading, flightsByDay ,setMenu }}>
      {children}
    </FlightsContext.Provider>
  );
};

export default FlightsProvider;
