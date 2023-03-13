import React, { createContext, useState, useEffect } from "react";

export const FlightsContext = createContext();

const FlightsProvider = ({ children }) => {
  const [flights, setFlights] = useState([]);

  

  useEffect(() => {
    const fetchFlights = async () => {
      const response = await fetch(
        `https://rmsflightdata.yyc.com:8091/flights?t=${Date.now()}`
      );
      const data = await response.json();
      setFlights(data.flights);
    };

    fetchFlights();
  }, []);


  return (
    <FlightsContext.Provider value={{ flights }}>
      {children}
    </FlightsContext.Provider>
  );
};

export default FlightsProvider;
