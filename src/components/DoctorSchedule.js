import React, { useState, useEffect } from "react";
import { displayStatus } from "./HomePage";
import axios from "axios";

export default function DoctorSchedule() {
  const [docs, set_Docs] = useState([]);
  const [status, set_Status] = useState("Ready");

  useEffect(() => {
    const lookDoctors = async () => {
      set_Status("Looking for doctors");
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors`
      );
      console.log("Success!", response);

      const allDoctors = response.data;
      console.log("All doctors:", allDoctors);
      console.log("Doctor:", allDoctors[0].doctor);
      set_Docs(allDoctors);
      set_Status("");
    };
    lookDoctors();
  }, []);

  return !docs ? (
    "Loading!"
  ) : (
    <div>
      <h1>Doctor Schedule</h1>
      <div>
        <table align="center" border="1px solid black">
          <tr>
            <th>Doctor</th>
            <th>Availability</th>
          </tr>
          {docs.map((doctorInfo, index) => {
            const { doctor, onDuty } = doctorInfo;
            if (onDuty === true) {
              return (
                <tr key={index}>
                  <th>{doctor}</th>
                  <th>On Duty</th>
                </tr>
              );
            } else {
              return (
                <tr key={index}>
                  <th>{doctor}</th>
                  <th>Off Duty</th>
                </tr>
              );
            }
          })}
        </table>
      </div>
      <p>{status}</p>
      <p>We are: {displayStatus()}</p>
      <p>To make an appointment</p>
      <p>Call: 020-5555555</p>
    </div>
  );
}
