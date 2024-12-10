import { Link } from "react-router-dom";

import logo from './assets/logoC.png';
import { useState } from "react";

const Navbar = () => {

    const [navbarVisible, setNavbarVisible] = useState<boolean>(false);

    const handleScroll = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      //first prevent the default behavior 
      e.preventDefault();

      //get the href and remove everything before the hash (*)
      const href = e.currentTarget.href;

      const targetId = href.replace(/.*#/, '');

      //get the element by id and use ScrollIntoView
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
        behavior:'smooth'
      })
    }

  return (
<nav className="bg-white px-[24px] lg:px-[80px] z-50 py-[25.5px] flex justify-between w-full top-[0px] left-0 fixed" id="navbar">
  <Link to='#hero' onClick={handleScroll} className="flex items-center gap-2.5 cursor-pointer">
  <img src={logo} alt="logo" className="w-[50%]" />
  </Link>
  {/* Desktop Nav */}
  <div className="md:flex items-center justify-center gap-8 hidden be-vietnam-pro-medium pr-[28px] md:pr-0 md:pl-[50px] lg:pr-[28px] lg:pl-0">
     <Link to='#benefite' onClick={handleScroll} className="text-[16px] font-medium text-[#343f52] cursor-pointer transition-all hover:text-[#878787]">
    Benefits
  </Link>
     <Link to='#product' onClick={handleScroll} className="text-[16px] font-medium text-[#343f52] cursor-pointer transition-all hover:text-[#878787]">
    Products
  </Link>
     <Link onClick={handleScroll} to='#testimonials' className="text-[16px] font-medium text-[#343f52] cursor-pointer transition-all hover:text-[#878787]">
    Testimonials
  </Link>
     <Link onClick={handleScroll} to='#faqs' className="text-[16px] font-medium text-[#343f52] cursor-pointer transition-all hover:text-[#878787]">
    Faqs
  </Link>
  </div>
  {/* Mobile Nav */}
  {/* {navbarVisible ? () : () } */}
 
</nav>
  );
};

export default Navbar;
