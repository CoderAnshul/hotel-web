import React, { useState } from "react";
import slide from "../assets/Images/slide2.jpg";
import WhychooseUs from "../Components/WhychooseUs.jsx";
import AboutUS from "../Components/AboutUS";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import slide2 from "../assets/Images/steps.jpg"
import dashboard from "../assets/Images/dashboard.png"
import rent from "../assets/Images/rent.png"
import tracker from "../assets/Images/tracker.png"
import rate from "../assets/Images/Rate.png"
import emailNot from "../assets/Images/emailNot.png"
import user from "../assets/Images/user.png"
import dashImg from "../assets/Images/dashboardImg.png"
import listPhoto from "../assets/Images/listPhoto.jpg"

const ListYourProperty = () => {
  const [propertyLocation, setPropertyLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [roomCount, setRoomCount] = useState("");
  const [heardAboutUs, setHeardAboutUs] = useState("");

  const handlePropertyLocationChange = (event) => {
    setPropertyLocation(event.target.value);
  };

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handleRoomCountChange = (event) => {
    setRoomCount(event.target.value);
  };

  const handleHeardAboutUsChange = (event) => {
    setHeardAboutUs(event.target.value);
  };

  return (
    <>


    <div className="min-h-[600px] w-full flex items-center justify-center flex-col relative z-[22] overflow-hidden">
    <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold md:w-[90%] lg:w-[80%] xl:w-[90%] max-w-[1000px] text-center leading-10 relative z-[22] text-white">
  List your property for free with 
  <span className="text-[#5D0E41] ml-2 mr-2 text-[44px] font-bold relative" style={{ textShadow: '2px 2px 0 #fff, -2px -2px 0 #FFF , 2px -2px 0 #fff, -2px 2px 0 #fff' }}>
     AVENA
  </span>
  and maximize online bookings.
</h2>

      <h4 className="mt-6 md:text-[22px] font-semibold relative z-[22] text-white text-center">Hotel, Villa, Resort, Lodge, Guest house</h4>
      <div className="overlay z-[2] absolute h-full w-full bg-[#00000054]"></div>
      <img className="absolute z-[1] h-full w-full object-cover" src={listPhoto} alt="" />
    </div>

    <div className="steps h-[300px] md:min-h-[500px] max-h-[600px] w-full bg-white flex items-center justify-center mb-4">
      <img className="h-full w-full object-contain scale-[1] md:scale-[0.7] lg:scale-[0.8]" src={slide2} alt="steps image" />
    </div>


    <div className="min-h-[500px] bg-[#f1f1f1] w-full flex flex-col items-center mb-8 p-[2vw]">
      <h2 className="text-[35px] font-primaryBold uppercase text-center">why choose <span className="text-[#5D0E41] text-[42px] ">Avena?</span></h2>
      <div className="w-[90%] flex flex-col items-center md:flex-row md:justify-center md:items-start flex-wrap  min-h-[400px] mt-3 p-2">

        <div className="features min-w-[300px] w-full md:max-w-[310px]  h-[200px]  mb-2 flex flex-col justify-center items-center relaive">
            <img className="h-[50px] w-full object-contain mb-4 opacity-75" src={dashboard} alt="" />
            <h4 className="text-[20px] font-primaryBold opacity-85">DASHBOARD</h4>
            <p className="text-center w-[80%] ">A comprehensive interface for managing multiple items</p>
        </div>
        <div className="features min-w-[300px] w-full md:max-w-[310px]  h-[200px]  mb-2 flex flex-col justify-center items-center relaive">
            <img className="h-[50px] w-full object-contain mb-4 opacity-75" src={rate} alt="" />
            <h4 className="text-[20px] font-primaryBold opacity-85">COMPETITIVE RATE</h4>
            <p className="text-center w-[80%] ">Set your prices to be ahead of your competition</p>
        </div>
        <div className="features min-w-[300px] w-full md:max-w-[310px]  h-[200px]  mb-2 flex flex-col justify-center items-center relaive">
            <img className="h-[50px] w-full object-contain mb-4 opacity-75" src={tracker} alt="" />
            <h4 className="text-[20px] font-primaryBold opacity-85">AVAILABILITY TRACKER</h4>
            <p className="text-center w-[80%] ">Monitor real-time inventory status with our comprehensive availability tracker tool.</p>
        </div>
        <div className="features min-w-[300px] w-full md:max-w-[310px]  h-[200px]  mb-2 flex flex-col justify-center items-center relaive">
            <img className="h-[50px] w-full object-contain mb-4 opacity-75" src={rent} alt="" />
            <h4 className="text-[20px] font-primaryBold opacity-85">MONTHLY RENT</h4>
            <p className="text-center w-[80%] ">Get a set amount of monthly income </p>
        </div>
        <div className="features min-w-[300px] w-full md:max-w-[310px]  h-[200px]  mb-2 flex flex-col justify-center items-center relaive">
            <img className="h-[50px] w-full object-contain mb-4 opacity-75" src={emailNot} alt="" />
            <h4 className="text-[20px] font-primaryBold opacity-85">EMAIL NOTIFICATION</h4>
            <p className="text-center w-[80%] ">Receive email notifications for all bookings, transactions, and important events.</p>
        </div>
        <div className="features min-w-[300px] w-full md:max-w-[310px]  h-[200px]  mb-2 flex flex-col justify-center items-center relaive">
            <img className="h-[50px] w-full object-contain mb-4 opacity-75" src={user} alt="" />
            <h4 className="text-[20px] font-primaryBold opacity-85">USER ACTIVITY</h4>
            <p className="text-center w-[80%] ">View all your customer’s activities, including bookings, reviews, and ratings.</p>
        </div>
      </div>
    </div>

    <div className="min-h-[300px] w-full p-10 flex flex-col md:flex-row justify-center items-center">
  <img 
    className="h-auto w-full md:w-1/2 object-contain scale-100 md:scale-[0.9] lg:scale-[0.8]" 
    src={dashImg} 
    alt="steps image" 
  />
  
  <h2 className="text-[22px] md:text-[26px] lg:text-[32px] font-semibold text-center md:text-left md:w-[90%] lg:w-[80%] xl:w-[60%] max-w-[800px] leading-6 md:leading-10 text-black mt-8 md:mt-0 md:ml-10">
    From desktop to mobile phones to tablets, update inventory, rates, last-minute offers anytime, anywhere.
  </h2>
</div>




      <div className="min-h-[820px]  md:h-[700px] pb-14 md:pb-0 lg:min-h-[720px]  lg:max-h-[600px] w-full relative overflow-hidden">
        <div className="darkoverlay absolute h-full w-full bg-[#00000069] z-20"></div>
        <div className="wrapper h-full w-full object-center md:flex-row flex justify-center sm:justify-evenly items-center flex-wrap lg:pt-12">

          <div className="text font-fatFace relative z-50 max-w-[600px] mt-[200px] mb-[100px]">
              <h1 className="text-white text-[30px]  leading-[45px] md:leading-[55px] md:text-[40px] lg:text-[50px]">Elevate Your Property's <br /> Potential – Partner with <br /> Us for Success!</h1>
          </div>

          <form
            // className="absolute bg-white py-4 min-h-[70vh] rounded-lg z-50 right-[12%] sm:min-w-[480px] flex flex-col lg:min-w-[480px] justify-center items-center bottom-4"
            className="min-h-[400px] py-4  w-[370px] max-h-[800px] lg:min-w-[480px] sm:min-w-[480px] lg:min-h-[500px] relative z-50 bg-white  rounded-lg flex flex-col items-center text-black "
            action=""
          >
          {/* <form
            // className="absolute bg-white py-4 min-h-[70vh] rounded-lg z-50 right-[12%] sm:min-w-[480px] flex flex-col lg:min-w-[480px] justify-center items-center bottom-4"
            className="min-h-[400px] py-4  w-[370px] max-h-[800px] lg:min-w-[480px] sm:min-w-[480px] lg:min-h-[500px] relative z-50 bg-white md:bottom-[5%] md:right-[12%] bottom-6 rounded-lg flex flex-col items-center text-black "
            action=""
          > */}
            <h1 className="text-sm text-center font-primaryRegular font-bold mt-6 mb-4">
              Tell us more about your house
            </h1>

            <input
              className="w-[88%] text-sm p-3 rounded-sm border-2 border-black border-opacity-15 mb-4"
              type="text"
              placeholder="Name"
              name="name"
              required
              style={{ color: "black" }}
            />

            <div className="w-[88%] mb-1 lg:flex md:gap-2">
              <input
                className="w-[100%] text-sm p-3 rounded-sm border-2 border-black border-opacity-15 mb-2"
                type="email"
                placeholder="Email ID"
                name="email"
                required
                style={{ color: "black" }}
              />
              <input
                className="w-[100%] text-sm p-3 rounded-sm border-2 border-black border-opacity-15 mb-2"
                type="number"
                placeholder="Mobile Number"
                name="mobile"
                required
                style={{ color: "black" }}
              />
            </div>

            <div className="w-[88%] lg:flex md:gap-2 mb-4 lg:mb-0">
              <Box sx={{ minWidth: "49%" , marginBottom:"15px" }}>
                <FormControl fullWidth sx={{ height: "48px" }}>
                  <InputLabel
                    id="property-location-label"
                    sx={{ fontSize: "12px" }}
                  >
                    Your property location
                  </InputLabel>
                  <Select
                    labelId="property-location-label"
                    id="property-location"
                    value={propertyLocation}
                    label="Your property location"
                    onChange={handlePropertyLocationChange}
                    sx={{ fontSize: "12px" }}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ minWidth: "49%" }}>
                <FormControl fullWidth sx={{ height: "48px" }}>
                  <InputLabel
                    id="property-type-label"
                    sx={{ fontSize: "12px" }}
                  >
                    What type of property is it?
                  </InputLabel>
                  <Select
                    labelId="property-type-label"
                    id="property-type"
                    value={propertyType}
                    label="What type of property is it?"
                    onChange={handlePropertyTypeChange}
                    sx={{ fontSize: "12px" }}
                  >
                    <MenuItem value={10}>Villa</MenuItem>
                    <MenuItem value={20}>Cottage</MenuItem>
                    <MenuItem value={30}>Bungalow</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>

            <div className="w-[88%] lg:flex md:gap-2 ">
              <Box sx={{ minWidth: "49%" }}>
                <FormControl fullWidth sx={{ height: "48px" ,marginBottom:"15px" }}>
                  <InputLabel id="room-count-label" sx={{ fontSize: "12px" }}>
                    How Many Rooms
                  </InputLabel>
                  <Select
                    labelId="room-count-label"
                    id="room-count"
                    value={roomCount}
                    label="How many rooms"
                    onChange={handleRoomCountChange}
                    sx={{ fontSize: "12px" }}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={"12+"}>12+</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ minWidth: "49%" }}>
                <FormControl fullWidth sx={{ height: "48px" }}>
                  <InputLabel
                    id="heard-about-us-label"
                    sx={{ fontSize: "12px" }}
                  >
                    Where did you hear about us?
                  </InputLabel>
                  <Select
                    labelId="heard-about-us-label"
                    id="heard-about-us"
                    value={heardAboutUs}
                    label="Where did you hear about us?"
                    onChange={handleHeardAboutUsChange}
                    sx={{ fontSize: "12px" }}
                  >
                    <MenuItem value={"Facebook"}>Facebook</MenuItem>
                    <MenuItem value={"Instagram"}>Instagram</MenuItem>
                    <MenuItem value={"Google Search"}>Google Search</MenuItem>
                    <MenuItem value={"Blogs"}>Blogs</MenuItem>
                    <MenuItem value={"Guests"}>Guests</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>

           <textarea name="textarea" id="" className="w-[88%] h-20 mt-4 md:mt-0 border-2 border-black border-opacity-15 rounded-sm resize-none outline-none"></textarea>

            <button className="p-3 pl-10 pr-10 mt-4 w-[85%] bg-[#5D0E41] text-white transition-all hover:bg-[#000] font-Barlow rounded-md">
              Send a Request
            </button>
          </form>
          
          <img className="h-full w-full absolute z-10 top-0 object-cover" src={slide} alt="" />
        </div>
      </div>

      
      <Testimonials />
      <Footer />
    </>
  );
};

export default ListYourProperty;
