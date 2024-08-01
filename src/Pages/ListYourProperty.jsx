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
      <div className="min-h-[820px] max-h-[850px] h-[700px]  lg:max-h-[600px] w-full relative overflow-hidden mb-14">
        <div className="darkoverlay absolute h-full w-full bg-[#00000069] z-20"></div>
        <div className="wrapper h-full w-full object-center flex justify-center items-center lg:block">
          <form
            // className="absolute bg-white py-4 min-h-[70vh] rounded-lg z-50 right-[12%] sm:min-w-[480px] flex flex-col lg:min-w-[480px] justify-center items-center bottom-4"
            className="min-h-[400px] py-4  w-[310px] max-h-[800px] lg:min-w-[480px] sm:min-w-[480px] lg:min-h-[500px] absolute z-50 bg-white md:bottom-[5%] md:right-[12%] bottom-6 rounded-lg flex flex-col items-center text-black "
            action=""
          >
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
          <img className="h-full w-full object-cover" src={slide} alt="" />
        </div>
      </div>

      <WhychooseUs />
      <AboutUS />
      <Testimonials />
      <Footer />
    </>
  );
};

export default ListYourProperty;
