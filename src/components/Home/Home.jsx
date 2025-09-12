import React from "react";
import { FaHospital, FaUserMd, FaCalendarAlt, FaStethoscope, FaCheckSquare } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // icons
import  pic1  from "../../assets/image/front1.png";
import  pic2  from "../../assets/image/front2.png";
import  pic3  from "../../assets/image/front3.png";
import  pic4  from "../../assets/image/front4.png";
import  pic5  from "../../assets/image/front5.png";
import  pic6  from "../../assets/image/A.png";
import  pic7  from "../../assets/image/B.png";
import  pic8  from "../../assets/image/C.png";
import  pic9  from "../../assets/image/D.png";
import  pic10  from "../../assets/image/E.png";
import  pic11  from "../../assets/image/F.png";
import  pic12  from "../../assets/image/G.png";
import  pic13  from "../../assets/image/H.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// ================= HOME PAGE =================
const HomePage = () => {
  const slides = [
    {
      title: "Best Brain Cancer",
      subtitle: "Treatments in India",
      desc: "We Care you.",
      img: pic1, // your uploaded doctor image
    },
    {
      title: "World-Class",
      subtitle: "Medical Facilities",
      desc: "Get treatment from top hospitals in India.",
      img: pic2,
    },
    {
      title: "Trusted by Patients",
      subtitle: "Across the Globe",
      desc: "Safe, reliable, and affordable healthcare solutions.",
      img: pic3,
    },
  ];


  // const services = [
  //   { title: "Atherectomy Surgery", img: pic6 },
  //   { title: "Hemangioblastoma", img: "https://via.placeholder.com/400x250/cc33cc/ffffff?text=Hemangioblastoma" },
  //   { title: "Multiple Myeloma", img: "https://via.placeholder.com/400x250/ff9933/ffffff?text=Multiple+Myeloma" },
  //   { title: "Astrocytoma Treatment", img: "https://via.placeholder.com/400x250/3333cc/ffffff?text=Astrocytoma" },
  //   { title: "Neurology & Neurosurgery", img: "https://via.placeholder.com/400x250/3399ff/ffffff?text=Neurology" },
  //   { title: "Orthopedics", img: "https://via.placeholder.com/400x250/9999cc/ffffff?text=Orthopedics" },
  //   { title: "Hematology", img: "https://via.placeholder.com/400x250/990000/ffffff?text=Hematology" },
  //   { title: "Cancer And Cancer Surgery", img: "https://via.placeholder.com/400x250/666666/ffffff?text=Cancer+Surgery" },
  // ];

  const testimonials = [
    {
      text: "Recently, my husband had kidney transplant surgery. I am extremely grateful to God for putting us in contact with IHA. Despite the difficulties involved, the procedure was completed successfully thanks to skillful hands. The doctors here are incredibly kind and helpful people. For caring for my husband, IHA and their medical staff have my husband’s lifelong gratitude.",
      name: "Lilian Jones",
    },
    {
      text: "I had an excellent experience with IHA. They made the entire medical journey stress-free and guided me at every step. The doctors and staff were very professional and caring. I highly recommend them!",
      name: "Rahul Mehta",
    },
    {
      text: "Thanks to IHA, my father received world-class treatment at one of India’s top hospitals. The support and transparency throughout the process were exceptional.",
      name: "Sophia Brown",
    },
  ];

  const whyChoose = [
    "Comprehensive Services",
    "Accredited Medical Facilities",
    "Expertise and Experience",
    "Personalized Care",
    "Cost-Effective Solutions",
    "Multilingual Support",
    "High Patient Satisfaction",
    "Safety and Compliance",
  ];
  const cards = [
    {
      title: "Atherectomy Surgery",
      img: pic6,
    },
    {
      title: "Hemangioblastoma",
      img: pic7,
    },
    {
      title: "Multiple Myeloma",
      img: pic8,
    },
    {
      title: "Astrocytoma Treatment",
      img: pic9,
    },
    {
      title: "Neurology & Neurosurgery",
      img: pic10,
    },
    {
      title: "Orthopedics",
      img: pic11,
    },
    {
      title: "Hematology",
      img: pic12,
    },
    {
      title: "Cancer And Cancer Surgery",
      img: pic13,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100">
      {/* ================= HERO CAROUSEL ================= */}
      <section className="w-full relative">
        {/* Custom Arrows */}
        <div className="swiper-button-prev 
          !text-gray-800 !bg-gray-200 hover:!bg-gray-300 
          !rounded-full !w-9 !h-9 flex items-center justify-center 
          shadow-md absolute left-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer">
          <FaChevronLeft size={16} />
        </div>

        <div className="swiper-button-next 
          !text-gray-800 !bg-gray-200 hover:!bg-gray-300 
          !rounded-full !w-9 !h-9 flex items-center justify-center 
          shadow-md absolute right-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer">
          <FaChevronRight size={16} />
        </div>




        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="w-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="relative min-h-screen bg-gray-50 overflow-hidden">
                {/* Background Image */}
                <img
                  src={slide.img}
                  alt="Doctor"
                  className="absolute w-full h-full object-cover"
                />

                {/* Content */}
                <div className="relative z-10 container mx-auto px-6 py-12 space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold leading-snug">
                    <span className="text-blue-600">{slide.title}</span>
                    <br />
                    <span>{slide.subtitle}</span>
                  </h2>
                  <p className="text-gray-700 text-lg">{slide.desc}</p>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">
                    Learn More →
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>




      {/* ================= ICONS SECTION ================= */}
      <section className="container mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col items-center">
          <FaStethoscope className="text-blue-600 text-5xl mb-3" />
          <h3 className="text-lg font-semibold text-blue-700">Treatments</h3>
        </div>
        <div className="flex flex-col items-center">
          <FaHospital className="text-red-600 text-5xl mb-3" />
          <h3 className="text-lg font-semibold text-blue-700">Top Hospitals</h3>
        </div>
        <div className="flex flex-col items-center">
          <FaUserMd className="text-green-600 text-5xl mb-3" />
          <h3 className="text-lg font-semibold text-blue-700">Top Doctors</h3>
        </div>
        <div className="flex flex-col items-center">
          <FaCalendarAlt className="text-pink-600 text-5xl mb-3" />
          <h3 className="text-lg font-semibold text-blue-700">Request An Appointment</h3>
        </div>
      </section>

      {/* ================= WELCOME SECTION ================= */}
      <div className="bg-blue-50 min-h-screen py-12 px-6 md:px-20 font-sans text-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

          {/* Left: Text Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              Welcome to Indian Health Adviser
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Indian Health Adviser (IHA) is one of the most reputable medical travel facilitators in India. Our primary goal is to provide our patients with the highest quality, specialized, and affordable medical care in India.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We focus on patient needs by coordinating with top Indian hospitals to ensure the most advanced and cost-effective treatment experience. We offer the perfect blend of high quality, excellent value for money, patient satisfaction, and a welcoming environment.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Indian Health Adviser is dedicated to delivering outstanding care that is both affordable and exceptional. Our vision is to be recognized as the world’s most trustworthy and empathetic healthcare management company.
            </p>

            {/* Core Values */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">Our Core Values</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Compassion */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                             2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5
                             2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22
                             5.42 22 8.5c0 3.78-3.4 6.86-8.55
                             11.54L12 21.35z"/>
                    </svg>
                  </div>
                  <p className="mt-2 font-semibold text-blue-800">Compassion</p>
                </div>

                {/* Responsibility */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4M12 22C6.48 22 2 17.52 2
                             12S6.48 2 12 2s10 4.48 10 10-4.48
                             10-10 10z"/>
                    </svg>
                  </div>
                  <p className="mt-2 font-semibold text-blue-800">Responsibility</p>
                </div>

                {/* Trustworthiness */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 11c0-1.1.9-2 2-2s2 .9
                             2 2-.9 2-2 2-2-.9-2-2zm0
                             6c0-1.1.9-2 2-2s2 .9 2
                             2-.9 2-2 2-2-.9-2-2zm0-12c0-1.1.9-2
                             2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/>
                    </svg>
                  </div>
                  <p className="mt-2 font-semibold text-blue-800">Trustworthiness</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="md:w-1/2">
            <img
              src={pic4}
              alt="Doctor and Patient Illustration"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
      </div>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-blue-700 py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-white">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose us</h2>
            <p className="mb-6 text-gray-100 leading-relaxed">
              Choosing IHA as your preferred medical travel agency guarantees a reliable, efficient, and patient-centric journey...
            </p>
            <ul className="space-y-3">
              {whyChoose.map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <FaCheckSquare className="text-white text-xl" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 bg-white text-blue-700 px-5 py-2 rounded shadow hover:bg-gray-200 transition">
              Read More
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src={pic5}
              alt="Doctor Consultation"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img src={card.img} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= TESTIMONIALS ================= */}

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
            What Our Clients Say
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Left Arrow */}
            <div className="swiper-button-prev 
            !text-gray-700 !bg-gray-200 hover:!bg-gray-300 
            !rounded-full !w-8 !h-8 flex items-center justify-center 
            shadow-md absolute -left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
              <FaChevronLeft size={14} />
            </div>

            {/* Right Arrow */}
            <div className="swiper-button-next 
            !text-gray-700 !bg-gray-200 hover:!bg-gray-300 
            !rounded-full !w-8 !h-8 flex items-center justify-center 
            shadow-md absolute -right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
              <FaChevronRight size={14} />
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              className="rounded-lg"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gray-50 shadow-md rounded-lg p-8 text-center relative">
                    <p className="text-gray-700 leading-relaxed mb-6">{item.text}</p>
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rotate-45 bg-gray-50"></div>
                    <h4 className="mt-6 font-semibold text-gray-800">{item.name}</h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
