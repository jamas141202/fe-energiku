import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Client from "./pages/Client";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Detailhome from "./pages/Detailhome";
import Detailvisimisi from "./pages/Detailvisimisi";
import Detailmitra from "./pages/Detailmitra";
import DetailBerita from "./pages/Detailberita";
import DetailBerita2 from "./pages/Detailberita2";
import DetailBerita3 from "./pages/Detailberita3";
import DetailBerita4 from "./pages/Detailberita4";
import DetailBerita5 from "./pages/Detailberita5"
import DetailBerita6 from "./pages/Detailberita6";
import Semuaberita from "./pages/Semuaberita";
import Detailprofile from "./pages/Detailprofile";
import ScrollToTop from "./components/ScrollToTop";



export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Energiku" element={<Home />} />
        <Route path="/Energiku/about" element={<About />} />
        <Route path="/Energiku/client" element={<Client />} />
        <Route path="/Energiku/news" element={<News />} />
        <Route path="/Energiku/contact" element={<Contact />} />
        <Route path="/Energiku/login" element={<Login />} />
        <Route path="/Energiku/register" element={<Register />} />
        <Route path="/Energiku/detailhome" element={<Detailhome />} />
        <Route path="/Energiku/about/detailvisimisi" element={<Detailvisimisi />} />
        <Route path="/Energiku/client/detailmitra" element={<Detailmitra />} />
        <Route path="/Energiku/Detailberita" Component={DetailBerita}/>
        <Route path="/Energiku/Detailberita2" Component={DetailBerita2}/>
        <Route path="/Energiku/Detailberita3" Component={DetailBerita3}/>
        <Route path="/Energiku/Detailberita4" Component={DetailBerita4}/>
        <Route path="/Energiku/Detailberita5" Component={DetailBerita5}/>
        <Route path="/Energiku/Detailberita6" Component={DetailBerita6}/>
        <Route path="/Energiku/news/semuaberita" Component={Semuaberita}/>
        <Route path="/Energiku/news/semuaberita" Component={Semuaberita}/>
        <Route path="/Energiku/detailprofile" Component={Detailprofile}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
