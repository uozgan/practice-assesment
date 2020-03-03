import React from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import DoctorSchedule from "./components/DoctorSchedule";
import PatientDatabase from "./components/PatientDatabase";
import PatientSignup from "./components/PatientSignup";

function App() {
  return (
    <div className="App">
      <nav
        style={{
          textAlign: "center"
        }}
      >
        <NavLink
          to="/home"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
        >
          Home
        </NavLink>
        {" | "}
        <NavLink
          to="/schedule"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
        >
          Doctor Schedule
        </NavLink>
        {" | "}
        <NavLink
          to="/signup"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
        >
          Patient Signup
        </NavLink>
        {" | "}
        <NavLink
          to="/database"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
        >
          Patient Database
        </NavLink>
      </nav>
      <Switch>
        <Route path="/database" component={PatientDatabase} />
        <Route path="/signup" component={PatientSignup} />
        <Route path="/schedule" component={DoctorSchedule} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
