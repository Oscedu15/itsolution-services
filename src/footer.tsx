import { Link } from "react-router-dom";
import logo from './assets/logoC.png'

const Footer = () => {
  return (
   <footer className='px-[24] lg:px-[80px] z40 py-[32px] flex flex-col lg:flex-row gap-[42px] items-center justify-between w-full bg-white max-w-screen-2xl mx-auto'>
    <Link to='/' className="flex items-center gap-2.5 cursor-pointer">
    <img src={logo} alt="logo" className="h-[18px] w-[115px]" />
    </Link>
    <div className="w-full text-center sm:flex items-center justify-center gap-[5px] be-vietnam-pro-regular md:text-[14px] md:leading-[18.9px] md:tracking-[-0.28px] text-[16px] leading-[23.2px] tracking-[0.32px]">
      <p>Copyright 2024. Developed by: Oscar Garcia</p>
    </div>
    <Link to='' target="_blank" className="text-base leading-[21.6px] tracking-[-0.48px] bg-[#333] text-[#fff] rounded-full px-[18px] py-2.5 md:flex items-center justify-center min-w-max">
      Connect Us
    </Link>
   </footer>
  );
};

export default Footer;
