import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100">
      {/* Hero Section */}
      <section className="relative text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
            PlusDemic Hospital Recommended by Abhi Coder
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Compassionate Care 🏥 | Advanced Technology ⚡ | Trusted Doctors 👨‍⚕️
          Your health, our priority.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105 hover:shadow-lg transform transition">
            Book Appointment →
          </button>
          <button className="px-6 py-3 rounded-xl border border-gray-300 bg-white text-gray-700 font-semibold hover:bg-gray-100 hover:scale-105 transform transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Why Choose{" "}
          <span className="text-blue-600">PlusDemic Hospital?</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              🩺 Expert Doctors
            </h3>
            <p className="text-gray-600">
              Our team of certified specialists provides top-notch medical
              treatment with compassion and care.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              🏥 Modern Facilities
            </h3>
            <p className="text-gray-600">
              Equipped with state-of-the-art technology to ensure accurate
              diagnosis and effective treatment.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              💙 Patient-Centered Care
            </h3>
            <p className="text-gray-600">
              We focus on your well-being with personalized healthcare services
              tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Our <span className="text-blue-600">Specialized Services</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
          <div className="bg-gradient-to-r from-blue-100 to-white rounded-2xl p-6 text-center shadow hover:scale-105 transition">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">👩‍⚕️ General Medicine</h3>
            <p className="text-gray-600">Complete primary healthcare for all age groups.</p>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-white rounded-2xl p-6 text-center shadow hover:scale-105 transition">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">❤️ Cardiology</h3>
            <p className="text-gray-600">Advanced heart care and preventive treatments.</p>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-white rounded-2xl p-6 text-center shadow hover:scale-105 transition">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🦴 Orthopedics</h3>
            <p className="text-gray-600">Expert bone, joint, and spine care solutions.</p>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-white rounded-2xl p-6 text-center shadow hover:scale-105 transition">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🧠 Neurology</h3>
            <p className="text-gray-600">Comprehensive treatment for brain and nerves.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center bg-info from-blue-600 to-indigo-700 text-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Your Health is Our Mission
        </h2>
        <p className="text-lg text-black-100 mb-8 max-w-2xl mx-auto">
          Book an appointment with our specialists today and experience the
          future of healthcare at PlusDemic Hospital.
        </p>
        <button className="px-8 py-3 rounded-xl font-semibold bg-white text-blue-700 hover:bg-gray-100 hover:scale-105 transform transition shadow-lg">
          Book Appointment 🩺
        </button>
      </section>
    </div>
  );
};

export default Home;
