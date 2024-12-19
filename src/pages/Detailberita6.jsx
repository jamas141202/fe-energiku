import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImage from "../assets/logo.png"; // Path ke logo Energiku
import beritaImage1 from "../assets/news6.png";
import beritaImage2 from "../assets/pertamina.jpeg";
import beritaLain1 from "../assets/detail_berita3.png";
import beritaLain2 from "../assets/detail_berita1.png";
import beritaLain3 from "../assets/detail_berita5.png";
import logokembali from "../assets/leftarrow.png";

function DetailBerita6() {
  const navigate = useNavigate(); // Hook untuk navigasi kembali
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk menu responsif

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center  mt-[100px]">
      

      {/* Tombol Kembali */}
      {!isMenuOpen && (
        <button
          className="absolute left-4 md:left-16 -mt-12 md:mt-0 md:top-36 text-orange-500 text-2xl hover:text-orange-600 p-2 touch-manipulation"
          onClick={() => navigate(-1)}
        >
          <img src={logokembali} alt="Kembali" className="w-10 md:w-10 h-10 md:h-10 text-orange-400" />
        </button>
      )}

      {/* Main Content */}
      <main className="bg-white rounded-lg shadow-lg mt-8 p-6 w-4/5">
        <article>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 leading-snug">
          Pertamina Sukses Ekspor Bioavtur ke Virgin Australia
          </h2>
          <p className="text-sm text-gray-500 mb-6">15 September 2023</p>
          <img
            src={beritaImage1}
            alt="Berita Utama"
            className="rounded-lg w-full mb-6 object-cover"
          />
          <p className="text-gray-700 mb-6 leading-relaxed">
          PT Pertamina (Persero) terus mengukuhkan posisinya di kancah global dengan memperluas pasar produk bioavtur mereka, Sustainable Aviation Fuel (SAF). Perusahaan energi pelat merah ini berhasil menjual SAF ke Virgin Australia Airlines. Airlines ini menjadi maskapai internasional pertama yang menggunakan SAF dari Aviation Fuel Terminal (AFT) di Bandara I Gusti Ngurah Rai, Bali. Sekitar 160 kiloliter (KL) SAF disalurkan Pertamina. SAF disalurkan ke dua penerbangan pesawat Boeing 737 milik Virgin Australia. Dilakukan pada 18-19 September 2024, dalam rangkaian Bali International Airshow.
          </p>
          <img
            src={beritaImage2}
            alt="Fuel Grade"
            className="rounded-lg w-full mb-6 object-cover"
          />
          <p className="text-gray-700 leading-relaxed">
          Penyaluran SAF ini menandai tonggak penting bagi Indonesia dalam industri penerbangan global. Direktur Pemasaran Pusat dan Niaga PT Pertamina Patra Niaga, Maya Kusmaya, mengatakan bahwa langkah ini menunjukkan kemampuan Indonesia untuk beradaptasi dengan tuntutan bauran energi yang lebih ramah lingkungan di sektor penerbangan internasional. Ini juga mencerminkan komitmen Pertamina untuk mendukung penerbangan yang lebih berkelanjutan. Mengingat SAF merupakan salah satu solusi untuk mengurangi jejak karbon dalam jangka menengah. 
          </p>
          <div className="flex justify-between items-center mt-8">
            <div className="flex space-x-6 text-gray-500">
              <button className="hover:text-orange-600">✉️ Share</button>
              <button className="hover:text-orange-600">❤️ Suka</button>
            </div>
            <p className="text-sm text-gray-500">Komentar: 5</p>
          </div>
        </article>
      </main>

      {/* Postingan Lainnya */}
      <section className="mt-12 w-4/5">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Postingan Lainnya</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={beritaLain1}
              alt="Berita Lain 1"
              className="w-full rounded-md object-cover"
            />
            <h4 className="mt-4 font-semibold"> Potensi Bioenergi Indonesia Melimpah, Sumber Alternatif Pembangkit Listrik</h4>
            <p className="text-gray-500 text-sm">Singkat deskripsi berita.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={beritaLain2}
              alt="Berita Lain 2"
              className="w-full rounded-md object-cover"
            />
            <h4 className="mt-4 font-semibold">ESDM Sebut Hanya 2 dari 13 Industri Bioetanol yang Penuhi Kriteria Fuel Grade </h4>
            <p className="text-gray-500 text-sm">Singkat deskripsi berita.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={beritaLain3}
              alt="Berita Lain 3"
              className="w-full rounded-md object-cover"
            />
            <h4 className="mt-4 font-semibold">Biomassa Jadi Jembatan Penting Menuju Percepatan Transisi Energi</h4>
            <p className="text-gray-500 text-sm">Singkat deskripsi berita.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 mt-12 w-full flex justify-center">
        <div className="text-center">
          <p>&copy; 2024 Energiku. Semua Hak Dilindungi.</p>
          <p>Email: support@energiku.com</p>
        </div>
      </footer>
    </div>
  );
}

export default DetailBerita6;
