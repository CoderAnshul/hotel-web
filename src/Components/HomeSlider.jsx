import React, { useState, useEffect } from "react";
import img1 from "../assets/Images/slide1.jpg";
import img2 from "../assets/Images/slide2.jpg";
import img3 from "../assets/Images/slide3.jpg";
import svg1 from "../assets/Images/location.png";
import svg2 from "../assets/Images/calender.png";
import svg3 from "../assets/Images/room.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const images = [img1, img2, img3];

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [open, setOpen] = useState(false);

  const openHandler = () => {
    setOpen(!open);
  };

  const increment = (setter) => setter((prev) => prev + 1);
  const decrement = (setter) => setter((prev) => (prev > 1 ? prev - 1 : prev));

  const formatNumber = (number) => number;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const setSlide = (index) => {
    setCurrentIndex(index);
  };

  const resetCounters = () => {
    setAdults(1);
    setChildren(0);
    setInfants(0);
    setRooms(1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrapper relative flex flex-col items-center">
      <div className="relative flex justify-center w-full !lg:w-[100%] h-[60vh] sm:h-[70vh] md:h-[85vh] overflow-hidden">
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
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-white" : "bg-black bg-opacity-50"
              }`}
              onClick={() => setSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Search Field */}
      <div className="searchBox lg:px-12 min-h-32 w-[95%] max-w-[550px] lg:max-w-[84%] md:pl-6 bg-white absolute z-50 lg:-bottom-16 -bottom-44 rounded-2xl shadow-xl gap-5 items-center p-2 flex flex-wrap justify-center lg:flex-nowrap">
        <div className="flex w-full justify-center flex-wrap lg:flex-nowrap">
          <div className="flex w-full gap-1">
            <div className="search h-24 lg:h-36 w-[50%] pt-6 ">
              <h5 className="mb-4 font-primaryMedium text-xs ml-8 sm:ml-0">
                Destination
              </h5>
              <div className="input flex relative h-12 w-[100%] bg-[#F8F8FA] rounded-lg p-4 font-primaryMedium items-center overflow-hidden">
                <input
                  type="text"
                  placeholder="Choose City"
                  className="ml-5 p-4 outline-none text-sm w-[90%] bg-[#F8F8FA]"
                />
                <img className="h-20 absolute -ml-8" src={svg1} alt="" />
              </div>
            </div>
            <div className="search h-24 lg:h-36 w-[50%] pt-6">
              <h5 className="mb-4 font-primaryMedium text-xs ml-8 sm:ml-0">
                Check-In
              </h5>
              <div className="input flex items-center relative h-12 w-[100%] bg-[#F8F8FA] rounded-lg p-4 font-primaryMedium">
                <input
                  type="date"
                  className="ml-5 text-xs opacity-65 pl-3 outline-none w-[90%]"
                />
                <img className="h-20 absolute -ml-8" src={svg2} alt="" />
              </div>
            </div>
          </div>
          <div className="flex w-full gap-1">
            <div className="search h-24 lg:h-36 w-[50%] pt-6 ">
              <h5 className="mb-4 font-primaryMedium text-xs">Check-out</h5>
              <div className="input flex items-center relative h-12 w-[100%] bg-[#F8F8FA] rounded-lg p-4 font-primaryMedium">
                <input
                  type="date"
                  className="ml-5 pl-3 text-xs opacity-65 outline-none w-[100%]"
                />
                <img className="h-20 absolute -ml-8" src={svg2} alt="" />
              </div>
            </div>
            <div className="search h-24 lg:h-36 w-[50%] pt-6">
              <h5 className="mb-4 font-primaryMedium text-xs">Guests</h5>
              <div onClick={openHandler} className="mainBox cursor-pointer input flex items-center text-sm relative h-12 w-[100%] bg-[#F8F8FA] rounded-lg py-1 px-2 font-primaryMedium">
                <img className="h-20 w-28 -ml-8 absolute" src={svg3} alt="" />
                <div className="text-xs ml-12 w-[90%] bg-[#F8F8FA] whitespace-nowrap">
                  {formatNumber(adults + children + infants)} Guest{(adults + children + infants) > 1 ? 's' : ''} , {formatNumber(rooms)} Room{rooms > 1 ? 's' : ''}
                </div>
                <div
                  className={`guest transition-transform duration-300 absolute h-[280px] min-w-[290px] bg-white rounded-lg shadow-lg top-[110%] w-[100%] right-0 md:-right-[26%]  overflow-auto ${open ? 'block translate-y-0' : 'hidden translate-y-5'}`}
                >
                  <div className="p-4">
                    <div className="flex justify-between text-xs items-center mb-4">
                      Adults
                      <div className="flex justify-between gap-1">
                        <span
                          className="p-2 px-3 rounded-md border-2 border-black border-opacity-15 text-opacity-50 text-black cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            decrement(setAdults);
                          }}
                        >
                          -
                        </span>
                        <span className="p-2 pl-4 pr-4 min-w-[42px] bg-[#f8f8f854] border-2 border-black border-opacity-15 text-opacity-50 text-black rounded-md">
                          {formatNumber(adults)}
                        </span>
                        <span
                          className="p-2 px-3 border-2 border-black border-opacity-15 text-opacity-50 text-black rounded-md cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            increment(setAdults);
                          }}
                        >
                          +
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs items-center mb-4">
                      Children
                      <div className="flex justify-between gap-1">
                        <span
                          className="p-2 px-3 rounded-md border-2 border-black border-opacity-15 text-opacity-50 text-black cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            decrement(setChildren);
                          }}
                        >
                          -
                        </span>
                        <span className="p-2 pl-4 pr-4 min-w-[42px] bg-[#f8f8f854] border-2 border-black border-opacity-15 text-opacity-50 text-black rounded-md">
                          {formatNumber(children)}
                        </span>
                        <span
                          className="p-2 px-3 border-2 border-black border-opacity-15 text-opacity-50 text-black rounded-md cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            increment(setChildren);
                          }}
                        >
                          +
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs items-center mb-4">
                      Infants
                      <div className="flex justify-between gap-1">
                        <span
                          className="p-2 px-3 rounded-md border-2 border-black border-opacity-15 text-opacity-50 text-black cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            decrement(setInfants);
                          }}
                        >
                          -
                        </span>
                        <span className="p-2 pl-4 pr-4 min-w-[42px] bg-[#f8f8f854] border-2 border-black border-opacity-15 text-opacity-50 text-black rounded-md">
                          {formatNumber(infants)}
                        </span>
                        <span
                          className="p-2 px-3 border-2 border-black border-opacity-15 text-opacity-50 text-black rounded-md cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            increment(setInfants);
                          }}
                        >
                          +
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs items-center mb-2">
                      No. of Rooms
                      <div className="flex justify-between gap-1">
                        <span
                          className="p-2 px-3 rounded-md border-2 border-black border-opacity-15 text-opacity-50 text-black cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            decrement(setRooms);
                          }}
                        >
                          -
                        </span>
                        <span className="p-2 pl-4 pr-4 min-w-[42px] bg-[#f8f8f854] border-2 border-black border-opacity-15 text-opacity-50 text-black rounded-md">
                          {formatNumber(rooms)}
                        </span>
                        <span
                          className="p-2 px-3 border-2 border-black border-opacity-15 text-opacity-50 text-black rounded-md cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            increment(setRooms);
                          }}
                        >
                          +
                        </span>
                      </div>
                    </div>

                    <div className="button flex justify-between mt-6">
                      <button
                        className="py-2 px-4 border-2 border-opacity-[0.4] border-black rounded-sm font-primaryRegular text-xs hover:bg-black hover:text-white transition-all"
                        onClick={resetCounters}
                      >
                        CLEAR
                      </button>
                      <button className="py-2 px-4 rounded-sm font-primaryRegular text-xs bg-[#702B58] text-white">
                        APPLY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="search h-12 mt-2 w-[100%] lg:w-[12%] bg-[#702B58] rounded-md text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;
