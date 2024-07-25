import React, { useState, useEffect } from "react";
import img1 from "../assets/Images/slide1.jpg";
import img2 from "../assets/Images/slide2.jpg";
import img3 from "../assets/Images/slide3.jpg";
import svg1 from "../assets/Images/location.png";
import svg2 from "../assets/Images/calender.png";
import svg3 from "../assets/Images/room.png";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  const setSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrapper relative flex flex-col items-center">
      <div className="relative flex justify-center w-full !lg:w-[100%] h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
        <div className="heading absolute z-50 text-[42px] sm:text-[58px] md:text-[66px] lg:text-[78px] w-[65%] leading-10 sm:leading-[50px] md:leading-[60px] font-fatFace text-white -mt-16 text-center top-1/2 left-1/2 translate-x-[-50%]">
          More than Just a Stay
        </div>
        <div className="darkoverlay absolute h-full w-full bg-[#00000069] z-20"></div>

        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="w-full flex-shrink-0">
            <img
              src={img1}
              alt="Slide 1"
              className="w-full object-cover object-center h-full"
            />
          </div>
          <div className="w-full flex-shrink-0">
            <img
              src={img2}
              alt="Slide 2"
              className="w-full object-cover object-center h-full"
            />
          </div>
          <div className="w-full flex-shrink-0">
            <img
              src={img3}
              alt="Slide 3"
              className="w-full object-cover object-center h-full"
            />
          </div>
        </div>
        <button
          className="absolute transition-all hover:scale-90 hover:text-opacity-90 scale-[0.85] hover:pr-4 z-50 p-3 pl-6 pr-4 md:pl-4 md:p-2 md:pr-3 text-opacity-60 top-1/2 mt-4 left-4 lg:left-16 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-2xl rounded-md"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="absolute transition-all hover:scale-90 hover:text-opacity-90 hover:pl-4 scale-[0.85] z-50 p-3 pl-6 pr-4 md:pr-4 md:pl-3 md:p-2 top-1/2 right-4 text-opacity-60 mt-4 lg:right-16 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-2xl rounded-md"
          onClick={nextSlide}
        >
          &#10095;
        </button>
        <div className="absolute bottom-4 z-50 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <span
            className={`h-3 w-3 rounded-full cursor-pointer ${currentIndex === 0 ? "bg-white" : "bg-black bg-opacity-50"}`}
            onClick={() => setSlide(0)}
          ></span>
          <span
            className={`h-3 w-3 rounded-full cursor-pointer ${currentIndex === 1 ? "bg-white" : "bg-black bg-opacity-50"}`}
            onClick={() => setSlide(1)}
          ></span>
          <span
            className={`h-3 w-3 rounded-full cursor-pointer ${currentIndex === 2 ? "bg-white" : "bg-black bg-opacity-50"}`}
            onClick={() => setSlide(2)}
          ></span>
        </div>
      </div>

      {/* Search Field */}
      <div className="searchBox h-32 w-[84%] pl-6 bg-red-50 absolute z-50 -bottom-16 rounded-2xl shadow-xl gap-5 items-center p-2 hidden lg:flex">
        <div className="search h-36 w-[20%] pt-6">
          <h5 className="mb-4 font-primaryMedium text-xs">Destination</h5>
          <div className="input flex relative h-12 w-[90%] bg-white rounded-lg p-4 font-primaryMedium items-center overflow-hidden">
            <input
              type="text"
              placeholder="Choose City"
              className="ml-5 p-4 outline-none text-sm w-[90%]"
            />
            <img className="h-20 absolute -ml-8" src={svg1} alt="" />
          </div>
        </div>
        <div className="search h-36 w-[20%] pt-6">
          <h5 className="mb-4 font-primaryMedium text-xs">Check-In</h5>
          <div className="input flex items-center relative h-12 w-[90%] bg-white rounded-lg p-4 font-primaryMedium">
            <input type="date" className="ml-5 text-sm opacity-65 pl-2 outline-none w-[90%]" />
            <img className="h-20 absolute -ml-8" src={svg2} alt="" />
          </div>
        </div>
        <div className="search h-36 w-[20%] pt-6">
          <h5 className="mb-4 font-primaryMedium text-xs">Check-out</h5>
          <div className="input flex items-center relative h-12 w-[90%] bg-white rounded-lg p-4 font-primaryMedium">
            <input type="date" className="ml-5 pl-2 text-sm opacity-65 outline-none w-[90%]" />
            <img className="h-20 absolute -ml-8" src={svg2} alt="" />
          </div>
        </div>
        <div className="search h-36 w-[20%] pt-6">
          <h5 className="mb-4 font-primaryMedium text-xs">Rooms</h5>
          <div className="input flex items-center text-sm opacity-65 relative h-12 w-[90%] bg-white rounded-lg p-4 font-primaryMedium">
            <img className="h-20 w-24 -ml-8" src={svg3} alt="" /> Rooms
          </div>
        </div>
        <button className="search h-12 mt-8 w-[12%] bg-[#702B58] rounded-3xl text-white">
          Search
        </button>
      </div>

      {/* Search for small devices */}
      <div className="search h-20 w-[94%] absolute z-50 -bottom-[90px] lg:hidden">
        <input placeholder="Search For our destination" type="text" className="w-full shadow-xl pl-20 text-xl h-16 rounded-full" />
        <SearchOutlinedIcon className="absolute scale-125 opacity-75 z-50 left-0 mt-6 ml-8" />
      </div>
    </div>
  );
};

export default HomeSlider;
