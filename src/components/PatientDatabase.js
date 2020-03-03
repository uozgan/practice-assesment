import React, { useState, useEffect } from "react";
import axios from "axios";
import PatientsInfo from "./PatientsInfo";

function compare_patientName(patient_a, patient_b) {
  return (
    patient_a.lastName.localeCompare(patient_b.lastName) -
    patient_b.lastName.localeCompare(patient_a.lastName)
  );
}

export default function PatientDatabase() {
  const [doc, set_doc] = useState();
  const [selectedDoctorId, set_selectedDoctorId] = useState(0);
  const [patients, set_patients] = useState();

  useEffect(() => {
    const getPatient = async () => {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
      );
      const patList = response.data;
      set_patients(patList);
    };
    getPatient();
  }, []);

  useEffect(() => {
    const getDoctor = async () => {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
      );
      const docList = response.data;
      set_doc(docList);
    };
    getDoctor();
  }, []);

  const sortedPatients = patients ? patients.sort(compare_patientName) : [];

  const chooseDoctor = e => {
    set_selectedDoctorId(e.target.value);
  };

  const filteredPatients = sortedPatients
    ? sortedPatients.filter(pat => {
        if (pat.doctorId == selectedDoctorId) {
          return true;
        } else if (selectedDoctorId == 0) {
          return true;
        } else {
          return false;
        }
      })
    : [];

  return !doc || !patients ? (
    "Loading!"
  ) : (
    <div>
      <h1>Patient Database</h1>
      <div>
        <select onChange={chooseDoctor}>
          <option value={0}>All Doctors</option>
          {doc.map(doctorInfo => {
            const { doctor } = doctorInfo;
            if (doctor !== "") {
              return <option value={doctorInfo.id}>{doctor}</option>;
            }
          })}
        </select>
      </div>
      <br />
      <div style={{ width: "400px", margin: "0 auto" }}>
        {filteredPatients.map(patInfo => {
          return (
            <PatientsInfo
              key={patInfo.id}
              id={patInfo.id}
              firstName={patInfo.firstName}
              lastName={patInfo.lastName}
              id={patInfo.id}
              dateOfBirth={patInfo.dateOfBirth}
              email={patInfo.email}
              phone={patInfo.phoneNumber}
              gender={patInfo.gender}
              prescriptions={patInfo.prescriptions}
              doctorInCharge={patInfo.doctorId}
            />
          );
        })}
      </div>
    </div>
  );
}
