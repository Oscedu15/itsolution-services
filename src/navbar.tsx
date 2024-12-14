import { Link } from "react-router-dom";

import logo from "./assets/logoC.png";
import { useState } from "react";

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState<boolean>(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    //first prevent the default behavior
    e.preventDefault();

    //get the href and remove everything before the hash (*)
    //obtienes el href y eliminas todo antes del hash (*)
    const href = e.currentTarget.href;

    const targetId = href.replace(/.*#/, "");
    console.log(targetId);

    //get the element by id and use ScrollIntoView
    //Obtener el elemento por id y usar ScrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      className="bg-white px-[24px] lg:px-[80px] z-50 py-[25.5px] flex justify-between w-full top-[0px] left-0 fixed  mx-auto"
      id="navbar"
    >
      <Link
        to="#hero"
        onClick={handleScroll}
        className="flex items-center gap-2.5 cursor-pointer"
      >
        <img src={logo} alt="logo" className="w-[50%]" />
      </Link>
      {/* Desktop Nav */}
      <div className="md:flex items-center justify-center gap-8 hidden be-vietnam-pro-medium pr-[28px] md:pr-0 md:pl-[50px] lg:pr-[28px] lg:pl-0">
        <Link
          to="#benefite"
          onClick={handleScroll}
          className="text-[16px] font-medium text-[#343f52] cursor-pointer transition-all hover:text-[#878787]"
        >
          Benefits
        </Link>
        <Link
          to="#product"
          onClick={handleScroll}
          className="text-[16px] font-medium text-[#343f52] cursor-pointer transition-all hover:text-[#878787]"
        >
          Products
        </Link>
        <Link
          onClick={handleScroll}
          to="#testimonials"
          className="text-[16px] font-medium text-[#343f52] cursor-pointer transition-all hover:text-[#878787]"
        >
          Testimonials
        </Link>
        <Link
          onClick={handleScroll}
          to="#faqs"
          className="text-[16px] font-medium text-[#343f52] cursor-pointer transition-all hover:text-[#878787]"
        >
          Faqs
        </Link>
      </div>
      {/* Desktop Nav */}
      {/* Mobile Nav */}
      {navbarVisible ? (
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setNavbarVisible(!navbarVisible)}
          className="md:hidden cursor-pointer"
        >
          <path
            d="M12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H12Z"
            fill="#000000"
          />
          <path
            d="M7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12Z"
            fill="#000000"
          />
          <path
            d="M3 18C3 17.4477 3.44772 17 4 17H12C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19H4C3.44772 19 3 18.5523 3 18Z"
            fill="#000000"
          />
        </svg>
      ) : (
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="md:hidden cursor-pointer"
          onClick={() => setNavbarVisible(!navbarVisible)}
        >
          <path
            d="M4 18L20 18"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 12L20 12"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 6L20 6"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
      <div
        className={`pb-[40px] ${
          navbarVisible ? "open-nav" : "close-nav"
        } transition-all top-[99px] flex flex-col items-center justify-center w-full gap-10 left-0 absolute px-8 md:hidden pt-4`}
      >
        <div
          className={`absolute w-full  shadow-[0px_23px_30px_0px_rgba(0,0,0,0.1)] transition-all duration-500 ${
            navbarVisible ? "h-full" : "h-0"
          } -top-0 -z-10 bg-white`}
        />
        <div
          className={`max-w-max transition delay-[900ms] ${
            navbarVisible ? "open-nav-items" : "close-nav-items"
          } flex flex-col items-center justify-center gap-[33px] be-vietnam-pro-medium`}
        >
          <Link
            onClick={handleScroll}
            to="#benefits"
            className="text-[26px] leading-[27px] tracking-[-0.4] font-medium text-[#000] cursor-pointer transition-all hover:text-[#878787]"
          >
            Benefits
          </Link>
          <Link
            onClick={handleScroll}
            to="#products"
            className="text-[26px] leading-[27px] tracking-[-0.4] font-medium text-[#000] cursor-pointer transition-all hover:text-[#878787]"
          >
            Products
          </Link>
          <Link
            onClick={handleScroll}
            to="#testimonials"
            className="text-[26px] leading-[27px] tracking-[-0.4] font-medium text-[#000] cursor-pointer transition-all hover:text-[#878787]"
          >
            Testimonials
          </Link>
          <Link
            onClick={handleScroll}
            to="#faqs"
            className="text-[26px] leading-[27px] tracking-[-0.4] font-medium text-[#000] cursor-pointer transition-all hover:text-[#878787]"
          >
            Faqs
          </Link>
        </div>
        <Link
          to="/"
          className={`text-base transition-all leading-[21.6px] tracking-[-0.48px] be-vietnam-pro-medium text-[#854dff]
            hover:bg-[#854dff] hover:text-white duration-200 ${
              navbarVisible ? "open-nav-items" : "close-nav-items"
            } border border-[#854dff] bg-transparent rounded-lg px-[18px] flex items-center justify-center w-full py-[14px]`}
        >
          Get Template
        </Link>
      </div>

      {/* Mobile Nav */}
    </nav>
  );
};

export default Navbar;
