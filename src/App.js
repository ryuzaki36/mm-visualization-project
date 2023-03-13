import axios from "axios";
import { useEffect, useState } from "react";
import FlightsProvider from "./context/flights";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <FlightsProvider>
      <Dashboard />
    </FlightsProvider>
  );
}

export default App;
