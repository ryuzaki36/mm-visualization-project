import React, { createContext, useState, useEffect } from "react";

export const FlightsContext = createContext();

const FlightsProvider = ({ children }) => {
  const [flights, setFlights] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFlights = async () => {
      setLoading(true)
      const response = await fetch(
        `https://rmsflightdata.yyc.com:8091/flights?t=${Date.now()}`
      );
      const data = await response.json();
      setFlights(data.flights);
      setLoading(false)
    };

    fetchFlights();
  }, []);


  return (
    <FlightsContext.Provider value={{ flights, isLoading }}>
      {children}
    </FlightsContext.Provider>
  );
};

export default FlightsProvider;
