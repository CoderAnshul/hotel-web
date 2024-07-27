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
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const label = { inputProps: { 'aria-label': 'Helpful' } };

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
          <ul className="flex mt-4 overflow-x-auto whitespace-nowrap cursor-pointer">
            <li
              onClick={() => handleClick(0)}
              className={`mr-3 py-1 px-4 border-2 border-opacity-75 text-sm rounded ${activeIndex === 0 ? "active" : "bg-white"}`}
            >
              All
            </li>
            {locations.map((item, index) => (
              <li
                key={item}
                onClick={() => handleClick(index + 1)}
                className={`mr-3 py-1 px-4 border-2 border-opacity-75 text-sm rounded ${activeIndex === index + 1 ? "active" : "bg-white"}`}
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
                    <div className="imageDiv relative h-[55%] w-full bg-red-50 rounded-[18px] overflow-hidden">
                      <img src={item.img} alt="" />
                      {/* <div className="absolute z-40 top-0 right-1 bg-white bg-opacity-44 rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur border-none"><Checkbox {...label} icon={<FavoriteBorder className="text-white opacity-[0.8]" />} checkedIcon={<Favorite />} /></div> */}
                    </div>

                    <h4 className="font-Barlow text-xl ml-2">{item.name}</h4>

                    <div className="location text-xs font-primaryRegular ">
                      <LocationOnIcon className="opacity-65 scale-[0.65]" />
                      {item.location}
                    </div>

                    <p className="text-sm opacity-75 ml-2 mt-4">{item.para}</p>

                    <button className="flex-nowrap ml-1 absolute bottom-[6px] p-3 pl-8 pr-8 rounded-xl bg-[#702B58] text-white font-primaryRegular transition-all text-xs hover:bg-[#000]">
                      Book Now
                    </button>
                    <button className="h-10 w-10 absolute bottom-[6px] right-1 rounded-full flex justify-center items-center border-2 transition-all border-[#000] border-opacity-35 hover:bg-black hover:text-white">
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
