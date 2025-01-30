import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Internships from "./pages/Internships";
import ContactUs from "./pages/ContactUs";
import DataScience from "./pages/internships/DataScience";
import Design from "./pages/internships/Design";
import CourseDetails from "./pages/CoursePage";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import SignUp from "./pages/SignUp";
import Blog from "./pages/Blogs";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/course/:courseid" element={<CourseDetails />} />
        <Route path="/internships/data-science" element={<DataScience />} />
        <Route path="/internships/design" element={<Design />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
