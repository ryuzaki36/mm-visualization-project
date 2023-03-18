import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FlightsProvider from "./context/Flights";
import Dashboard from "./pages/Dashboard";
import { Landing } from "./pages/Landing";

const AppRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route
        path="/dashboard"
        render={() => (
          <FlightsProvider>
            <Dashboard />
          </FlightsProvider>
        )}
      />
    </div>
  </Router>
);

export default AppRouter;
