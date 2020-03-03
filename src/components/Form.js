import React, { useState } from "react";

export default function Form() {
  const [firstName, set_firstName] = useState();
  const [lastName, set_lastName] = useState();
  const [email, set_email] = useState();
  const [phone, set_phone] = useState();
  const [gender, set_gender] = useState();
  const [birth, set_birth] = useState();

  const addFirstName = e => {
    console.log("new input .value:", e.target.value);
    set_firstName(e.target.value);
  };
  const addLastName = e => {
    console.log("new input .value:", e.target.value);
    set_lastName(e.target.value);
  };
  const addEmail = e => {
    console.log("new input .value:", e.target.value);
    set_email(e.target.value);
  };
  const addPhone = e => {
    console.log("new input .value:", e.target.value);
    set_phone(e.target.value);
  };
  const chooseGender = e => {
    console.log("new input .value:", e.target.value);
    set_gender(e.currentTarget.value);
  };
  const chooseBirth = e => {
    console.log("new input .value:", e.target.value);
    set_birth(e.target.value);
  };

  const clicked = e => {
    e.preventDefault();
    console.log(
      "New Patient:",
      firstName,
      lastName,
      email,
      phone,
      gender,
      birth
    );
    alert("Patient has been added!");
    set_firstName("");
    set_lastName("");
    set_email("");
    set_phone("");
    set_gender("Unknown");
  };

  return (
    <div>
      <form>
        <label>First Name:</label>
        <input value={firstName} onChange={addFirstName} /> <br />
        <label>Last Name:</label>
        <input value={lastName} onChange={addLastName} /> <br />
        <label>E-mail:</label>
        <input value={email} onChange={addEmail} /> <br />
        <label>Phone:</label>
        <input value={phone} onChange={addPhone} /> <br />
        <label>Gender:</label>
        <select value={gender} onChange={chooseGender} defaultValue={gender}>
          {" "}
          <br /> <br />
          <option value="Unknown">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>{" "}
        <br />
        <label>Date of Birth:</label>
        <input type="date" onChange={chooseBirth}></input>
      </form>
      <button onClick={clicked}>Submit</button>
    </div>
  );
}
