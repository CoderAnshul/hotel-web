import React, { useState, useEffect, useRef } from "react";
import aboutus from "../assets/Images/aboutUS.png";
import hotel from "../assets/Images/hotel.png";
import person from "../assets/Images/person.png";
import map from "../assets/Images/map.png";

const WhychooseUs = () => {
  const [hotels, setHotels] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [cities, setCities] = useState(0);
  const headingRef = useRef(null);

  const animateValue = (start, end, duration, setValue) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setValue(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateValue(0, 900, 2000, setHotels);
          animateValue(0, 2300, 2000, setCustomers);
          animateValue(0, 300, 2000, setCities);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
  }, []);

  return (
    <div className="min-h-[50vh] pt-8 flex justify-center items-center mb-24">
      <div className="wrapper h-1/2 w-[90%] md:flex">
        <div className="left md:w-[70%] md:pt-20 lg:pt-32">
          <h1 ref={headingRef} className="text-4xl font-primaryBold mb-4">
            Welcome to <span className="text-[#5D0E41] text-[38px]">AVENA</span>
          </h1>
          <p className="opacity-[0.8] mb-4 lg:w-[85%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            dignissimos necessitatibus officiis corporis blanditiis optio modi
            natus beatae ipsum fugit vel maxime consequatur quidem voluptas
            libero, ipsam sit, at recusandae?{" "}
          </p>
          <div className="flex md:mt-14 justify-center items-center flex-wrap md:justify-start gap-8">

            <div className="stat-box h-40 w-40 md:h-32 md:w-32 border-black border-opacity-[0.16] rounded-xl flex justify-center items-center flex-col border-double border-[4px]">
              <img src={hotel} alt="" />
              <h3 className="count text-4xl md:text-3xl font-primaryMedium">
                {hotels}+
              </h3>
              <p className="opacity-[0.8] font-primaryRegular md:text-xs">
                Total Hotels
              </p>
            </div>

            <div className="stat-box h-40 w-40 md:h-32 md:w-32 border-black rounded-xl flex justify-center border-opacity-[0.16] items-center flex-col border-double border-[4px]">
              <img src={person} alt="" />
              <h3 className="count text-4xl md:text-3xl font-primaryMedium">
                {customers}+
              </h3>
              <p className="opacity-[0.8] font-primaryRegular md:text-xs">
                Total Customers
              </p>
            </div>

            <div className="stat-box h-40 w-40 md:h-32 md:w-32 border-black rounded-xl flex justify-center border-opacity-[0.16] items-center flex-col border-double border-[4px]">
              <img src={map} alt="" />
              <h3 className="count text-4xl md:text-3xl font-primaryMedium">
                {cities}+
              </h3>
              <p className="opacity-[0.8] font-primaryRegular md:text-xs">
                Total Cities
              </p>
            </div>
          </div>

          <button className="p-3 pl-10 pr-10 mt-6 bg-[#5D0E41] text-white transition-all hover:bg-[#000] font-Barlow rounded-md">Explore More</button>
        </div>

        <div className="right mt-14 flex shrink-0 justify-center md:w-[40%]">
          <img
            className="max-h-[400px] object-cover shrink-0 lg:max-h-[700px]"
            src={aboutus}
            alt="resort"
          />
        </div>
      </div>
    </div>
  );
};

export default WhychooseUs;
