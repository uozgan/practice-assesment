import React, { useState } from "react";

export default function PatientsInfo(props) {
  const [showDetails, set_ShowDetails] = useState(false);

  const clicked = () => {
    set_ShowDetails(!showDetails);
  };
  const buttonText = !showDetails ? "Show Details" : "Hide Details";
  return (
    <div style={{ border: "solid 1px" }}>
      Name: {props.firstName} {props.lastName} <br />
      Id: {props.id} <br />
      Date Of Birth: {props.dateOfBirth} <br />
      {showDetails && (
        <div>
          Email: {props.email} <br />
          Phone: {props.phone} <br />
          Gender: {props.gender} <br />
          Presciptions: {props.prescriptions} <br />
        </div>
      )}
      <button onClick={clicked}>{buttonText}</button>
    </div>
  );
}
