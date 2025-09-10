import React from "react";

const hospitals = [
  { name: "Apollo Hospitals", location: "Delhi", specialty: "Cardiology" },
  { name: "Fortis Healthcare", location: "Mumbai", specialty: "Neurology" },
  { name: "AIIMS", location: "Delhi", specialty: "Multi-specialty" },
];

const Tophospitals = () => (
  <section className="p-10 bg-white">
    <h2 className="text-2xl font-bold mb-6 text-center">Top Hospitals in India</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {hospitals.map((hospital, index) => (
        <div key={index} className="border p-4 rounded shadow">
          <h3 className="text-xl font-semibold">{hospital.name}</h3>
          <p>{hospital.location}</p>
          <p className="italic">{hospital.specialty}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Tophospitals;