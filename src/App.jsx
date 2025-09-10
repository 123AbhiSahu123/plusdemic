

import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import HowItHelps from "./components/About/HowItHelps";
import Services from "./components/Services/Services";
import Treatments from "./components/Treatments/Treatments";
import Hospitals from "./components/Hospitals/Hospitals"
import Footer from "./components/Footer/Footer";
import  Doctors  from "./components/Doctors/Doctors";
import  Blogs  from "./components/Blogs/Blogs";
import  Contacts  from "./components/Contacts/Contacts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <main className="overflow-x-hidden ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<HowItHelps />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/treatments" element={<Treatments />}/>
          <Route path="/hospitals" element={<Hospitals />}/>
          <Route path="/doctors" element={<Doctors />}/>
          <Route path="/blogs" element={<Blogs />}/>
          <Route path="/contacts" element={<Contacts />}/>
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;




















// import React from "react";
// import Navbar from "./components/Navbar/Navbar";
// import Home from "./components/Home/Home";
// import HowItHelps from "./components/About/HowItHelps";
// import Services from "./components/Services/Services";
// import Treatments from "./components/Treatments/Treatments";
// import Hospitals from "./components/Hospitals/Hospitals"
// import Footer from "./components/Footer/Footer";

// const App = () => {
//   return (
//     <main className="overflow-x-hidden ">
//       <Navbar />
//       <Home />
//       <HowItHelps />
//       <Services/>
//       <Treatments />
//       <Hospitals/>
//       <Footer />
//     </main>
//   );
// };

// export default App;
