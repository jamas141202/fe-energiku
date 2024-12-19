import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "../assets/detail_berita4.png";
import Image1 from "../assets/detail_berita1.png";
import Image2 from "../assets/detail_berita3.png";
import Image3 from "../assets/detail_berita6.png";
import Image4 from "../assets/detail_berita5.png";
import Image6 from "../assets/news6.png";


const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideInFromBottom = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const NewsComponent = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false); // State to control "Selengkapnya"

  const newsCategories = [
    {
      id: 1,
      imageUrl: Image,
      title: "Pemanfaatan Biomassa di Indonesia",
      description:
        "Sumber alternatif pembangkit listrik yang ramah lingkungan.",
      link: "/Energiku/Detailberita2",
      type: "utama",
    },
    {
      id: 2,
      imageUrl: Image1,
      title: "ESDM Sebut Hanya 2 dari 13 Industri Bioetanol",
      description: "Masa depan industri bioenergi di pasar internasional.",
      link: "/Energiku/Detailberita",
      type: "utama",
    },
    {
      id: 3,
      imageUrl: Image2,
      title:
        "Potensi Bioenergi Indonesia Melimpah, Sumber Alternatif Pembangkit Listrik",
      description:
        "Indonesia memiliki potensi bioenergi sebagai salah satu sumber energi terbarukan yang melimpah ruah.",
      link: "/Energiku/Detailberita3",
      type: "utama",
    },
    {
      id: 4,
      imageUrl: Image3,
      title: "Pengembangan Bioenergi Masih Berjalan Lambat",
      description: "Apa penyebab utama dari keterlambatan ini?",
      link: "/Energiku/Detailberita4",
      type: "utama",
    },
    {
      id: 5,
      imageUrl: Image4,
      title: "Biomassa Jadi Jembatan Penting Menuju Percepatan Transisi Energi",
      description:
        "Pemenuhan energi fuel menjadi tantangan terbesar bagi Indonesia.",
      link: "/Energiku/Detailberita5",
      type: "utama",
    },
    {
      id: 6,
      imageUrl: Image6,
      title: "Percepatan Sukses Ekspor Bioavtur ke Australia",
      description: "Penyaluran Bioavtur Pertama di Indonesia.",
      link: "/Energiku/Detailberita6",
      type: "tambahan",
    },
    
  ];

  const videoSections = [
    {
      title: "Energi Terbarukan",
      videos: [
        { title: "ENERGI BIOMASSA", url: "https://youtu.be/QWaqWD-brKs" },
        {
          title: "KENALAN DENGAN BIOENERGI",
          url: "https://youtu.be/f3xMVRqBsSo",
        },
        {
          title: "Energi Air - PLTA CIRATA",
          url: "https://youtu.be/x-NPJYcrt84",
        },
      ],
    },
    // Additional video sections if needed...
  ];

  const getVideoId = (url) => {
    const match = url.match(
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  return (
    <div className="rounded-lg mx-4 md:mx-[150px] mt-[100px] md:mt-[200px]">
      {/* Button Back untuk Mobile */}
      <div className="w-full mb-2 md:hidden">
        <button
          onClick={() => navigate('/Energiku/news')}
          className="text-[#EE9F26] text-xl hover:text-[#e57d2b] transition duration-300"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>

      {/* Button Back untuk Desktop */}
      <button
        onClick={() => navigate('/Energiku/news')}
        className="hidden md:block text-[#EE9F26] text-3xl hover:text-[#e57d2b] transition duration-300 mb-6"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* Temukan Berita dan Artikel */}
      <motion.h2
        className="text-xl md:text-2xl font-semibold mb-4 text-[#EE9F26] px-2 md:px-0"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 2 }}
      >
        Temukan Berita dan Artikel seputar Bio Energi disini
      </motion.h2>
      <motion.p
        className="text-gray-600 mb-4 px-2 md:px-0 text-sm md:text-base"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 2 }}
      >
        Semua Artikel dan Berita Situs Telah Diperbarui Hari Ini dan Anda Dapat
        Menemukan Artikel dan Berita Anda dengan Cepat dan Tanpa Masalah
      </motion.p>

      {/* News Categories */}
      <motion.div
        className={`grid gap-4 ${
          showMore 
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" 
            : "grid-cols-1 sm:grid-cols-2"
        } justify-items-center`}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 2 }}
      >
        {newsCategories.map((category, index) => (
          <motion.div
            key={category.id}
            className="w-full px-4 md:px-2 hover:opacity-80 rounded-lg cursor-pointer"
            variants={slideInFromBottom}
            transition={{ duration: 2, delay: index * 0.3 }}
          >
            <Link to={category.link}>
              <img
                src={category.imageUrl}
                alt={category.title}
                className="w-full h-[250px] md:h-[400px] object-cover rounded-lg"
              />
              <h3 className="text-lg md:text-xl font-bold mt-2 text-gray-800">
                {category.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {category.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default NewsComponent;
