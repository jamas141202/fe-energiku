import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setDropdownOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setDropdownOpen(false);
  };

  return (
    <>
      <div className="absolute w-full z-10">
        <div
          className={`flex justify-between items-center p-4 lg:px-32 fixed top-0 left-0 w-full transition-all duration-300 ${
            scrolling ? "bg-white shadow-lg" : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <div className="w-[160px] md:w-[210px] h-auto cursor-pointer">
            <img src={logo} alt="Logo" className="w-full h-full" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-x-3 text-sm lg:text-lg font-medium">
            <NavLink
              to="/Energiku"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#EE9F26] text-white rounded-full p-2"
                  : "hover:bg-[#EE9F26] hover:text-white rounded-full p-2"
              }
              onClick={scrollToTop}
              end
            >
              Beranda
            </NavLink>
            <NavLink
              to="/Energiku/about"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#EE9F26] text-white rounded-full p-2"
                  : "hover:bg-[#EE9F26] hover:text-white rounded-full p-2"
              }
              onClick={scrollToTop}
            >
              Tentang Kami
            </NavLink>
            <NavLink
              to="/Energiku/client"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#EE9F26] text-white rounded-full p-2"
                  : "hover:bg-[#EE9F26] hover:text-white rounded-full p-2"
              }
              onClick={scrollToTop}
            >
              Mitra
            </NavLink>
            <NavLink
              to="/Energiku/news"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#EE9F26] text-white rounded-full p-2"
                  : "hover:bg-[#EE9F26] hover:text-white rounded-full p-2"
              }
              onClick={scrollToTop}
            >
              Berita & Edukasi
            </NavLink>
            <NavLink
              to="/Energiku/contact"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#EE9F26] text-white rounded-full p-2"
                  : "hover:bg-[#EE9F26] hover:text-white rounded-full p-2"
              }
              onClick={scrollToTop}
            >
              Kontak
            </NavLink>
          </nav>

          {/* Profile Icon */}
          <div className="relative text-[30px] md:text-[25px] hidden lg:flex cursor-pointer">
            <VscAccount onClick={toggleDropdown} />
            {dropdownOpen && (
              <div className="absolute right-0 mt-10 w-50 bg-white bg-opacity-50 rounded-lg shadow-lg z-10 p-5">
                {isLoggedIn ? (
                  <>
                    <NavLink
                      to="/Energiku/detailprofile"
                      className="block bg-[#D9D9D9] px-4 py-2 text-gray-700 hover:bg-[#EE9F26] hover:text-white rounded-t-lg"
                      onClick={() => {
                        setDropdownOpen(false);
                        scrollToTop();
                      }}
                    >
                      Detail Profil
                    </NavLink>
                    <button
                      className="block w-full bg-[#D9D9D9] px-4 py-2 text-gray-700 hover:bg-[#EE9F26] hover:text-white rounded-b-lg"
                      onClick={handleLogout}
                    >
                      Keluar
                    </button>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/Energiku/login"
                      className="block bg-[#D9D9D9] px-4 py-1 text-gray-700 hover:bg-[#EE9F26] hover:text-white rounded-t-lg"
                      onClick={handleLogin}
                    >
                      Masuk
                    </NavLink>
                    <NavLink
                      to="/Energiku/register"
                      className="block bg-[#D9D9D9] px-4 py-2 text-gray-700 hover:bg-[#EE9F26] hover:text-white rounded-b-lg"
                      onClick={() => {
                        setDropdownOpen(false);
                        scrollToTop();
                      }}
                    >
                      Daftar
                    </NavLink>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden items-center cursor-pointer">
            {menu ? (
              <AiOutlineClose
                className="text-black"
                size={25}
                onClick={handleChange}
              />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col bg-slate-700 text-white fixed left-0 top-0 w-full h-screen overflow-y-auto transition-transform duration-300`}
        >
          <div className="absolute top-4 right-4 cursor-pointer">
            <AiOutlineClose
              className="text-white"
              size={25}
              onClick={closeMenu}
            />
          </div>
          <NavLink
            to="/Energiku"
            className="p-4 border-gray-300 hover:bg-gray-200"
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
          >
            Beranda
          </NavLink>
          <NavLink
            to="/Energiku/about"
            className="p-4 border-gray-300 hover:bg-gray-200"
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
          >
            Tentang Kami
          </NavLink>
          <NavLink
            to="/Energiku/client"
            className="p-4 border-gray-300 hover:bg-gray-200"
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
          >
            Mitra
          </NavLink>
          <NavLink
            to="/Energiku/news"
            className="p-4 border-gray-300 hover:bg-gray-200"
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
          >
            Berita & Edukasi
          </NavLink>
          <NavLink
            to="/Energiku/contact"
            className="p-4 border-gray-300 hover:bg-gray-200"
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
          >
            Kontak
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavLink
                to="/Energiku/detailprofile"
                className="p-4 bg-[#EE9F26] hover:bg-gray-200 text-black transition rounded-full mx-4 mt-4 focus:outline-none text-center"
                onClick={() => {
                  handleLogout();
                  closeMenu();
                  scrollToTop();
                }}
              >
                Detail Profil
              </NavLink>
              <button
                className="p-4 bg-[#EE9F26] hover:bg-gray-200 text-black transition rounded-full mx-4 mt-4 focus:outline-none text-center"
                onClick={() => {
                  handleLogout();
                  closeMenu();
                  scrollToTop();
                }}
              >
                Keluar
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/Energiku/login"
                className="p-4 bg-[#EE9F26] hover:bg-gray-200 text-black transition rounded-full mx-4 mt-4 focus:outline-none text-center"
                onClick={() => {
                  handleLogin();
                  closeMenu();
                  scrollToTop();
                }}
              >
                Masuk
              </NavLink>
              <NavLink
                to="/Energiku/register"
                className="p-4 bg-[#EE9F26] hover:bg-gray-200 text-black transition rounded-full mx-4 mt-4 focus:outline-none text-center"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                Daftar
              </NavLink>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
