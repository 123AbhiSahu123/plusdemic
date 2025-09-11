import React from "react";
import pic from "../../assets/image/pic.jpg"
import pic1 from "../../assets/image/pic1.jpg"
import pic2 from "../../assets/image/pic2.jpg"
const Hospitals = () => {
  const hospitals = [
    {
      id: 1,
      name: "AIIMS Delhi",
      location: "New Delhi",
      image:pic2,
      desc: "Leading government hospital with advanced medical facilities.",
    },
    {
      id: 2,
      name: "Apollo Hospitals",
      location: "Chennai",
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",
      desc: "Top private hospital chain in India with world-class services.",
    },
    {
      id: 3,
      name: "Fortis Hospital",
      location: "Gurgaon",
      image:pic1,
      desc: "Multi-specialty hospital known for quality healthcare.",
    },
    {
      id: 4,
      name: "Narayana Health",
      location: "Bangalore",
      image:pic,
      desc: "Affordable and quality treatment for all age groups.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-10">
          Top Hospitals in India
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {hospitals.map((hospital) => (
            <div
              key={hospital.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={hospital.image}
                alt={hospital.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col justify-between h-[220px]">
                <h3 className="text-xl font-semibold text-gray-800">
                  {hospital.name}
                </h3>
                <p className="text-sm text-gray-500">{hospital.location}</p>
                <p className="text-gray-600 text-sm mt-2">{hospital.desc}</p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hospitals;
