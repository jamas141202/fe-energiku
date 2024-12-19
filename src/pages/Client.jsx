import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "../assets/bgmitra.png";
import Image1 from "../assets/mitra.png";
import Image2 from "../assets/dummy10.png";
import Image3 from "../assets/joinimg.png";
import Image4 from "../assets/panah.png";
import Image5 from "../assets/dummy11.png";
import Image6 from "../assets/dummy12.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideInFromLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const slideInFromRight = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

// MitraComponent
const Client = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <FontAwesomeIcon icon={faChevronRight} />,
    prevArrow: <FontAwesomeIcon icon={faChevronLeft} />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  };

  const partners = [
    { name: "PT. SATYA NUSANTARA", logo: Image5 },
    { name: "PT. SEMEN TONASA", logo: Image2 },
    { name: "PT. PLN NUSANTARA", logo: Image6 },
  ];

  return (
    <>
      {/* Hero Section with Background Image */}
      {/* Background Section */}
      <div
        className="relative bg-cover bg-center text-black p-4 md:p-8 lg:p-12 rounded-lg shadow-lg"
        style={{
          backgroundImage: `url(${Image})`,
          height: "200px",
          '@media (min-width: 640px)': {
            height: "300px",
          },
          '@media (min-width: 1024px)': {
            height: "500px",
          }
        }}
      ></div>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4 md:p-6 lg:p-12">
        {/* Header */}
        <motion.h2
          className="text-2xl md:text-3xl lg:text-5xl font-bold mt-8 md:mt-12 lg:mt-[100px] text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 2 }}
        >
          PROFIL MITRA
        </motion.h2>

        <motion.div
          className="w-16 sm:w-20 lg:w-[200px] h-1 bg-[#EE9F26] mx-auto mb-6 sm:mb-8 lg:mb-10 mt-3 sm:mt-5"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 2 }}
        ></motion.div>

        {/* Main Content Box */}
        <motion.div
          className="bg-white border-2 border-[#EE9F26] rounded-lg p-4 md:p-8 lg:p-12 w-[95%] md:max-w-[90%] lg:max-w-[1200px] relative shadow-[-3px_3px_0_#EE9F26] md:shadow-[-7px_7px_0_#EE9F26] lg:shadow-[-10px_10px_0_#EE9F26] mt-6 md:mt-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 2 }}
        >
          {/* Content Row */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 2 }}
          >
            {/* Text Section */}
            <motion.div
              className="text-lg md:text-2xl lg:text-5xl font-semibold text-left md:w-1/2"
              variants={slideInFromLeft}
              transition={{ duration: 2 }}
            >
              <p className="leading-tight mb-2">Mari berkontribusi</p>
              <p className="leading-tight mb-2">terhadap isu</p>
              <p className="leading-tight mb-2">lingkungan kita</p>
              <p className="leading-tight mb-2">dengan bergabung</p>
              <p className="leading-tight">bersama kami</p>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="flex flex-col items-center md:items-end w-full md:w-[40%] mt-6 md:mt-0"
              variants={slideInFromRight}
              transition={{ duration: 2 }}
            >
              <img
                src={Image3}
                alt="join"
                className="w-full md:w-[80%] lg:w-full max-h-[250px] md:max-h-[300px] lg:max-h-[450px] object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>

          {/* Arrow Image */}
          <motion.img
            className="panah w-[30px] md:w-[50px] lg:w-[100px]"
            src={Image4}
            alt="panah"
            style={{
              position: "absolute",
              right: "1%",
              bottom: "1%",
              cursor: "pointer",
            }}
            onClick={() => navigate("/Energiku/client/detailmitra")}
          />
        </motion.div>

        {/* Slider Section */}
        <motion.div
          className="w-full max-w-screen-lg mx-auto p-4 md:p-6 my-12 md:my-[200px] relative"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 2 }}
        >
          {/* Horizontal Line and Heading */}
          <motion.div
            className="w-[200px] md:w-[400px] h-1 bg-[#EE9F26] mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 2 }}
          ></motion.div>

          <motion.h2
            className="text-xl md:text-2xl font-bold mt-8 md:mt-[70px] text-center mb-8 md:mb-[100px] px-4"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 2 }}
          >
            Perusahaan-perusahaan yang telah mempercayakan dan bekerjasama
            dengan kami
          </motion.h2>

          {/* Card 1: Background Image */}
          <div className="shadow-lg rounded-lg overflow-hidden">
            <img
              src={Image1}
              alt="Partners"
              className="w-full h-[300px] md:h-[600px] object-cover"
            />
          </div>

          {/* Card 2: Slider (Floating on Top of Card 1) */}
          <div className="w-full md:w-[120%] md:ml-[-10%] mt-[-280px] md:mt-[-450px] z-10">
            <Slider {...settings}>
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md flex flex-col justify-center items-center h-[150px] md:h-[200px] mx-2 bg-white border border-[#EE9F26]"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ duration: 2, delay: index * 0.3 }}
                >
                  <div className="flex justify-center items-center h-12 md:h-16 mb-2 md:mb-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-sm md:text-lg font-semibold text-center">{partner.name}</h3>
                </motion.div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>

      {/* Add custom styles for dots */}
      <style>
        {`
          .slick-dots li button:before {
            color: white; /* Change dot color to white */
          }

          .slick-dots li.slick-active button:before {
            color: #EE9F26; /* Change active dot color to match theme */
          }
        `}
        
      </style>
    </>
  );
};

export default Client;
