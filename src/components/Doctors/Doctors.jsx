import React from "react";
import doc from "../../assets/image/doc.jpg"
import female from "../../assets/image/female.jpg"
import male from "../../assets/image/male.jpg"

const doctors = [
    {
        name: "Dr. Naresh Trehan",
        specialty: "Cardiac Surgery",
        hospital: "Medanta, Gurgaon",
        image:doc,
    },
    {
        name: "Dr. Devi Shetty",
        specialty: "Cardiology",
        hospital: "Narayana Health, Bangalore",
        image: female,
    },
    {
        name: "Dr. Prathap C. Reddy",
        specialty: "Healthcare Leadership",
        hospital: "Apollo Hospitals",
        image: male,
    },
    {
        name: "Dr. Susmita S. Soin",
        specialty: "Liver Transplant",
        hospital: "Medanta, Gurgaon",
        image: female,
    },
    {
        name: "Dr. Subhash Gupta",
        specialty: "Hepato-Pancreato Surgery",
        hospital: "Max Healthcare, Delhi",
        image: male,
    },
    {
        name: "Dr. Abhishek Gupta",
        specialty: "Dentists",
        hospital: "Max Healthcare, Noida",
        image: doc,
    },
];

const Doctors = () => {
    return (
        <section className="bg-gray-50 py-12 px-6">
            <h2 className="text-3xl font-bold text-center mb-10">Top Doctors in India</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {doctors.map((doc, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img src={doc.image} alt={doc.name} className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{doc.name}</h3>
                            <p className="text-blue-600 font-medium">{doc.specialty}</p>
                            <p className="text-gray-600 mt-1">{doc.hospital}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Doctors;