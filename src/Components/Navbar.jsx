import React, { useRef, useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { BrowserRouter, Link, NavLink } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const slide = useRef();

    const hamOpen = () => {
    if (isOpen) {
      slide.current.style.right = "-100%";
    } else {
      slide.current.style.right = "0";
    }
    setIsOpen(!isOpen);
  };

  return (
      <div className="navbar fixed top-0 z-[99] h-20 w-full bg-white shadow-lg  flex items-center justify-between pl-4 pr-4 md:pl-24 xl:pl-44 xl:pr-44">
        <div className="nav-right">
          <Link to="/">
            <div className="logo">
              <h1 className="text-4xl lg:text-3xll font-primaryBold text-[#6279BE]">
                AVENA
              </h1>
            </div>
          </Link>
        </div>

        <div className="left">
          <div
            onClick={ hamOpen}
            className="smallDevices -mt-5 sm:mt-0 absolute z-10 right-6 md:flex lg:hidden xl:hidden  h-12 w-12 flex items-center justify-center"
          >
            <MenuOutlinedIcon className="scale-[1.5]" />
          </div>

          
            <div ref={slide} className="hamburger lg:hidden transition-all h-screen w-[280px] absolute top-0 right-[-100%] bg-[#fff] shadow-xl z-50 ">
              <div className="top h-[150px] w-full bg-[#702b58] relative">
                <div onClick={hamOpen} className="hamclose text-white scale-[1.8] absolute right-[30px] top-7">
                  <CloseOutlinedIcon />
                </div>
                <h1 className="absolute bottom-6 font-PrimaryBold left-7 text-2xl text-white leading-6"><span className="text-sm font-primaryMedium">Welcome</span> <br />Username</h1>
              </div>

              <div className="hamcontent p-8 leading-10">
                <ul>
                  <Link to="/"><li className="text-lg font-medium font-primaryMedium pl-6 pt-2 mb-2 pb-2 hover:bg-[#702b58] hover:text-white rounded-lg">Home</li></Link>
                  <Link><li className="text-lg font-medium font-primaryMedium pl-6 pt-2 mb-2 pb-2 hover:bg-[#702b58] hover:text-white rounded-lg">Bookings</li></Link>
                  <Link><li className="text-lg font-medium font-primaryMedium pl-6 pt-2 mb-2 pb-2 hover:bg-[#702b58] hover:text-white rounded-lg">Service</li></Link>
                  <Link><li className="text-lg font-medium font-primaryMedium pl-6 pt-2 mb-2 pb-2 hover:bg-[#702b58] hover:text-white rounded-lg">Contact Us</li></Link>
                  <Link to="/explore"><li className="text-lg font-medium font-primaryMedium pl-6 pt-2 mb-2 pb-2 hover:bg-[#702b58] hover:text-white rounded-lg">Explore</li></Link>
                  <Link to="/listyourproperty"><li className="text-lg font-medium font-primaryMedium pl-6 pt-2 mb-2 pb-2 hover:bg-[#702b58] hover:text-white rounded-lg">List Your Property</li></Link>
                  <Link><li className="text-lg font-medium font-primaryMedium pl-6 pt-2 mb-2 pb-2 hover:bg-[#702b58] hover:text-white rounded-lg">Logout</li></Link>
                </ul>
              </div>
            </div>

            <div className="nav-center flex items-center  lg:flex md:mr-24 sm:mr-16 lg:mr-0">
              <ul className="hidden xl-flex gap-8 lg:flex">
                <Link to="/"><li className="text-black text-sm">Home</li></Link>
                <Link><li className="text-black text-sm">Booking</li></Link>
                <Link><li className="text-black text-sm">Service</li></Link>
                <Link><li className="text-black text-sm">Contact</li></Link>
                <Link to="/explore"><li className="text-black text-sm">Explore</li></Link>
              </ul>

              <Link><div className="ml-[12vw] hidden sm:flex text-black text-sm">Sign In</div></Link>
              <Link to="/listyourproperty"><div className="pt-2 pb-2 pl-6 pr-6 ml-8 border-2 hidden sm:flex rounded-full border-[#702b58] border-opacity-75 hover:text-white hover:bg-[#702b58] transition-all hover:text-sm text-[#702b58] bg-white text-xs font-Barlow uppercase ">List your Property</div></Link>

            </div>
          
        </div>
      </div>
  );
};

export default Navbar;
