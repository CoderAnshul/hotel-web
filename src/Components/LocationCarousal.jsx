import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../assets/Css/Location.css";

const LocationCarousal = ({ data, boxTitle }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const locations = ["Delhi", "Mumbai", "Jaipur", "Hyderabad", "Kolkata", "Explore More"];

  const handleClick = (index) => setActiveIndex(index);

  const filteredData =
    activeIndex === 0 ? data : data.filter((item) => item.location === locations[activeIndex - 1]);

  return (
    <div className="carousal flex justify-center min-h-[69vh] pt-28">
      <div className="content-wrapper h-full w-[85%] p-2 overflow-hidden">
        <h1 className="text font-Barlow text-lg">{boxTitle}</h1>

        <div>
          <ul className="flex mt-4 flex-nowrap overflow-x-scroll cursor-pointer">
            <li
              key="all"
              onClick={() => handleClick(0)}
              className={`mr-3 p-1 pl-4 pr-4 border-2 border-opacity-75 text-sm ${
                activeIndex === 0 ? "active" : ""
              }`}
            >
              All
            </li>
            {locations.map((item, index) => (
              <li
                key={item}
                onClick={() => handleClick(index + 1)}
                className={`p-1 mr-3 pl-3 pr-3 border-2 border-opacity-75 text-sm ${
                  activeIndex === index + 1 ? "active" : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="sliderBox mt-8 w-full h-[340px] mb-12 swiper1">
          <Swiper
            ref={swiperRef}
            slidesPerView={"auto"}
            spaceBetween={15}
            modules={[Pagination]}
            mousewheel={{ releaseOnEdges: true }}
            className="mySwiper"
            touchEventsTarget="container"
          >
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <SwiperSlide key={item.id} className="p-1 relative cursor-pointer">
                  <Link to={`/home-des/${item.id}`}>
                    <div className="imageDiv h-1/2 w-full bg-red-50 rounded-[18px] overflow-hidden">
                      <img src={item.img} alt="" />
                    </div>

                    <h4 className="font-Barlow text-xl ml-2">{item.heading}</h4>

                    <div className="location text-xs font-primaryRegular">
                      <LocationOnIcon className="opacity-65 scale-[0.65]" />
                      {item.location}
                    </div>

                    <p className="text-sm opacity-75 ml-2">{item.para}</p>

                    <button className="flex-nowrap absolute bottom-1 p-3 pl-8 pr-8 rounded-xl bg-[#702B58] text-white font-primaryRegular transition-all text-xs hover:bg-[#000]">
                      Book Now
                    </button>
                    <button className="h-10 w-10 absolute bottom-1 right-1 rounded-full flex justify-center items-center border-2 transition-all border-[#000] border-opacity-35 hover:bg-black hover:text-white">
                      <ArrowForwardIosIcon />
                    </button>
                  </Link>
                </SwiperSlide>
              ))
            ) : (
              <div>No data available</div>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LocationCarousal;
