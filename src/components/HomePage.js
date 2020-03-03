import React from "react";

export const displayStatus = () => {
  const currentDay = new Date();
  const hours = currentDay.getHours();
  return hours >= 8 && hours < 17 ? "Open" : "Closed";
};

export default function HomePage() {
  const goToSchedule = () => {
    window.location = "/schedule";
  };
  const goToSignup = () => {
    window.location = "/signup";
  };

  return (
    <div>
      <h1>Welcome to ABC Hospital</h1>
      <div>
        <p>We are: {displayStatus()}</p>
        <button onClick={goToSchedule}>Who is on duty?</button>
        <button onClick={goToSignup}>I am a new patient.</button>
      </div>
      Phone Number: 020-5555555
    </div>
  );
}
