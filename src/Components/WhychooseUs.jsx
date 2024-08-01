import React from "react";
import img1 from "../assets/Images/mobile.png"
import img2 from "../assets/Images/setting.png"
import img3 from "../assets/Images/money.png"
import img4 from "../assets/Images/wallet.png"
import whyUS from "../assets/Images/whyUs.png"

const WhychooseUs = () => {
  return (
    <div className="min-h-[50vh] lg:h-[75vh] mb-12 flex justify-center flex-col md:flex-row-reverse items-center gap-9 lg:gap-0">
      <div className="left h-1/2 lg:h-[80vh] w-[90%] lg:w-[45%] lg:pt-32 p-2 sm:flex sm:flex-col items-center lg:inline-block">
        <h1 className="text-4xl lg:text-[40px] font-primaryBold mb-8 text-[#5D0E41]">Why you should <br /> Choose us</h1>
        <ul className="sm:flex sm:flex-col items-center lg:inline-block">
            <li className="w-[95%] sm:w-[70%] md:w-[85%] lg:max-w-[65%] font-primaryMedium text-md lg:text-md leading-6 mb-4 flex items-center  gap-3"><img className="scale-90" src={img1} alt="img" />We have many choices of comfortable accommodation</li>
            <li className="w-[95%] sm:w-[70%] md:w-[85%] lg:max-w-[60%] font-primaryMedium text-md lg:text-md leading-6 mb-4 flex items-center  gap-3"><img className="scale-90" src={img2} alt="img" />We are committed to providing the best service</li>
            <li className="w-[95%] sm:w-[70%] md:w-[85%] lg:max-w-[60%] font-primaryMedium text-md lg:text-md leading-6 mb-4 flex items-center  gap-3"><img className="scale-90" src={img3} alt="img" />We provide the best prices to our customers</li>
            <li className="w-[95%] sm:w-[70%] md:w-[85%] lg:max-w-[60%] font-primaryMedium text-md lg:text-md leading-6 mb-4 flex items-center  gap-3"><img className="scale-90" src={img4} alt="img" />We provide the best prices to our customers</li>
        </ul>
      </div>
      <div className="Right h-1/2 lg:h-full w-[85%] lg:w-[55%] p-2 ">
        <img className="h-full w-full lg:object-contain object-cover " src={whyUS} alt="main" />
      </div>
    </div>
  );
};

export default WhychooseUs;
