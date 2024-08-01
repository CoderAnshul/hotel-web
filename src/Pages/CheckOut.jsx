import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import slide from "../assets/Images/slide3.jpg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Footer from "../Components/Footer";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const CheckOut = () => {
  const [image1, setImage1] = useState(null);
  const [progress1, setProgress1] = useState(0);
  const [isImage1Uploaded, setIsImage1Uploaded] = useState(false);

  const [image2, setImage2] = useState(null);
  const [progress2, setProgress2] = useState(0);
  const [isImage2Uploaded, setIsImage2Uploaded] = useState(false);

  const [typeOfId, setTypeOfID] = useState("");

  const handlePropertyTypeChange = (event) => {
    setTypeOfID(event.target.value);
  };

  const handleImageUpload1 = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);

      reader.onloadstart = () => {
        setProgress1(0); // Reset progress
      };

      reader.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = (event.loaded / event.total) * 100;
          setProgress1(percentComplete);
        }
      };

      reader.onloadend = () => {
        setImage1(reader.result);
        setProgress1(100); // Complete progress
        setIsImage1Uploaded(true); // Set image uploaded status to true
      };
    }
  };

  const handleRemoveImage1 = () => {
    setImage1(null);
    setIsImage1Uploaded(false);
    setProgress1(0);
  };

  const handleImageUpload2 = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);

      reader.onloadstart = () => {
        setProgress2(0); // Reset progress
      };

      reader.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = (event.loaded / event.total) * 100;
          setProgress2(percentComplete);
        }
      };

      reader.onloadend = () => {
        setImage2(reader.result);
        setProgress2(100); // Complete progress
        setIsImage2Uploaded(true); // Set image uploaded status to true
      };
    }
  };

  const handleRemoveImage2 = () => {
    setImage2(null);
    setIsImage2Uploaded(false);
    setProgress2(0);
  };

  return (
    <>
      <div className="checkout h-full w-full flex justify-center items-center pt-24">
        <div className="content-wrapper w-[90%] lg:w-[85%] min-h-[100vh] bg-gray-50 relative flex flex-col lg:flex-row">
          <div className="left w-full lg:w-[75%] bg-white p-3 pt-8 lg:pl-12 mb-8">
            <div className="hotel-name text-3xl">
              <Link className="box flex flex-col sm:flex-row items-center lg:flex-row h-auto md:h-[240px] outline-none rounded-lg">
                <div className="image h-[250px] w-[300px] lg:w-[300px]  sm:h-[250px] sm:w-[350px]  lg:h-[250px] rounded-xl overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={slide}
                    alt=""
                  />
                </div>
                <div className="detail ml-0 sm:ml-3 w-full md:w-[75%] mt-4 lg:mt-0 md:pl-3 flex flex-col md:flex-row md:justify-between">
                  <div className=" mt-5">
                    <h2 className="text-xl font-primaryMedium">Vistara</h2>
                    <p className="text-sm font-primaryMedium opacity-75">
                      <LocationOnOutlinedIcon className="scale-[0.7]" />
                      Lucknow
                    </p>
                    <div className="date-of-booking flex  md:flex-row w-full mt-6 md:gap-6">
                      <div className="min-w-[150px] pt-4 sm:pt-4 md:pt-0">
                        <h4 className="text-sm font-primaryRegular tracking-tight">
                          Check-in
                        </h4>
                        <h4 className="text-lg -mb-1 font-primaryMedium tracking-tight">
                          Sat 13 Jul 2024
                        </h4>
                        <h4 className="text-lg -mb-1 font-primaryRegular tracking-tight">
                          <span className="text-sm">From</span> 02:00
                        </h4>
                      </div>
                      <div className="border-l-2 min-w-[150px] whitespace-nowrap border-black pl-6 mt-4 md:mt-0">
                        <h4 className="text-sm font-primaryRegular tracking-tight">
                          Check-out
                        </h4>
                        <h4 className="text-lg -mb-1 font-primaryMedium tracking-tight">
                          Sun 14 Jul 2024
                        </h4>
                        <h4 className="text-lg -mb-1 font-primaryRegular tracking-tight">
                          <span className="text-sm">Until</span> 11:00
                        </h4>
                      </div>
                    </div>
                    <div className="mt-2 lg:mt-4 w-full h-14 items-center gap-4 flex">
                      <h3 className="text-sm font-primaryMedium">◉ 2 Bedrooms</h3>
                      <h3 className="text-sm font-primaryMedium">◉ 4 Bathrooms</h3>
                      <h3 className="text-sm font-primaryMedium">◉ 2 Guests</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <form className="review-section mt-10 min-h-[90vh] w-full border-2 border-black border-opacity-10 outline-none p-4 rounded-lg shadow-lg">
              <div className="heading flex items-center text-2xl font-primaryMedium h-16 w-full border-b-2 border-black border-opacity-10">
                Enter Your Details
              </div>
              <div className="radio mt-4">
                <p>I'm Looking for</p>
                <div className="flex gap-3">
                  <FormControl required>
                    <RadioGroup row>
                      <FormControlLabel
                        value="mySelf"
                        control={<Radio />}
                        label="Myself"
                      />
                      <FormControlLabel
                        value="someoneElse"
                        control={<Radio />}
                        label="Someone else"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>

              <div className="input-details mt-10">
                <div className="top flex flex-col sm:flex-row sm:gap-4">
                  <span className="w-full mb-4 sm:mb-0">
                    <h4>Name</h4>
                    <input
                      type="text"
                      className="border-2 w-full border-black border-opacity-20 outline-none p-4 rounded-lg"
                    />
                  </span>
                  <span className="w-full">
                    <h4>Email</h4>
                    <input
                      type="email"
                      className="border-2 w-full border-black border-opacity-20 outline-none p-4 rounded-lg"
                    />
                  </span>
                </div>
                <div className="top flex flex-col sm:flex-row sm:gap-4 mt-4">
                  <span className="w-full mb-4 sm:mb-0">
                    <h4>Contact Number</h4>
                    <input
                      type="number"
                      className="border-2 w-full border-black border-opacity-20 outline-none p-4 rounded-lg"
                    />
                  </span>
                  <span className="w-full">
                    <h4>Residential City</h4>
                    <input
                      type="text"
                      className="border-2 w-full border-black border-opacity-20 outline-none p-4 rounded-lg"
                    />
                  </span>
                </div>

                <Box sx={{ minWidth: "49%"}} className="mt-4 b">
                <FormControl fullWidth sx={{ height: "48px" }}>
                  <InputLabel
                    id="id-type-label"
                    sx={{ fontSize: "16px" }}
                  >
                    Select Your ID
                  </InputLabel>
                  <Select
                    labelId="id-type-label"
                    id="id-type"
                    value={typeOfId}
                    label="Select Your ID"
                    onChange={handlePropertyTypeChange}
                    sx={{ fontSize: "12px" }}
                  >
                    
                    <MenuItem value={10}>Aadhaar Card</MenuItem>
                    <MenuItem value={20}>Pan Car</MenuItem>
                    <MenuItem value={30}>Driving Licence</MenuItem>
                    <MenuItem value={40}>Passport</MenuItem>
                  </Select>
                </FormControl>
              </Box>

                <div className="sm:flex  gap-6">
                <div className="flex h-44 mt-4 flex-col justify-center">
                  <div className="relative w-[220px] h-[150px] border-2 border-gray-300 rounded-md overflow-hidden bg-white">
                    {image1 && (
                      <img
                        src={image1}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-200">
                      <div
                        className="h-full bg-green-500 transition-width duration-300"
                        style={{ width: `${progress1}%` }}
                      ></div>
                    </div>
                  </div>
                  {isImage1Uploaded ? (
                    <button
                      type="button"
                      className="p-3 pl-10 pr-10 whitespace-nowrap mt-4 max-w-[220px] text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] cursor-pointer rounded-md font-primaryMedium"
                      onClick={handleRemoveImage1}
                    >
                      Remove ID
                    </button>
                  ) : (
                    <label
                      htmlFor="upload1"
                      className="p-3 pl-12 pr-10 whitespace-nowrap mt-4 max-w-[220px] text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] cursor-pointer rounded-md font-primaryMedium"
                    >
                      Front of Your ID
                      <input
                        type="file"
                        id="upload1"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload1}
                      />
                    </label>
                  )}
                </div>

                <div className="flex h-44 mt-4 flex-col justify-center">
                  <div className="relative w-[220px] h-[150px] border-2 border-gray-300 rounded-md overflow-hidden bg-white">
                    {image2 && (
                      <img
                        src={image2}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-200">
                      <div
                        className="h-full bg-green-500 transition-width duration-300"
                        style={{ width: `${progress2}%` }}
                      ></div>
                    </div>
                  </div>
                  {isImage2Uploaded ? (
                    <button
                      type="button"
                      className="p-3 pl-10 pr-10 whitespace-nowrap mt-4 max-w-[220px] text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] cursor-pointer rounded-md font-primaryMedium"
                      onClick={handleRemoveImage2}
                    >
                      Remove ID
                    </button>
                  ) : (
                    <label
                      htmlFor="upload2"
                      className="p-3 pl-14 pr-10 whitespace-nowrap mt-4 max-w-[220px] text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] cursor-pointer rounded-md font-primaryMedium"
                    >
                      Back of Your Id
                      <input
                        type="file"
                        id="upload2"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload2}
                      />
                    </label>
                  )}
                </div>
                </div>

                <div className="bottom w-full mt-12">
                  <h3 className="text-xl font-primaryMedium mb-2">
                    Any Special requests?
                  </h3>
                  <textarea
                    name="postContent"
                    rows={6}
                    cols={40}
                    className="w-full resize-none border-2 border-black border-opacity-20 outline-none p-4 rounded-lg"
                  />
                </div>

                <p className="text-sm font-primaryRegular mt-2 mb-4">
                  Share your special requests with us and we’ll do our best to
                  accommodate them!
                </p>
              </div>
            </form>
          </div>

          <div className="right hidden lg:flex flex-col items-center sticky top-20 mb-12 min-h-[60vh] p-3 max-h-[50vh] min-w-[320px] w-full lg:w-[25%] bg-gray-300 mt-6 lg:ml-2 border-2 border-opacity-20 border-black rounded-xl shadow-xl">
            <div className="date-of-booking flex bg-white rounded-lg mt-6 md:gap-2">
              <div className="w-[140px] h-[90px] pt-4 pl-2 rounded-md">
                <h4 className="text-xs font-primaryRegular tracking-tight">
                  Check-in
                </h4>
                <h4 className="text-md -mb-1 font-primaryMedium tracking-tight">
                  Sat 13 Jul 2024
                </h4>
                <h4 className="text-md -mb-1 font-primaryRegular tracking-tight">
                  <span className="text-xs">From</span> 02:00
                </h4>
              </div>
              <div className="w-[140px] border-l-2 h-[90px] pt-4 pl-2">
                <h4 className="text-xs font-primaryRegular tracking-tight">
                  Check-out
                </h4>
                <h4 className="text-md -mb-1 font-primaryMedium tracking-tight">
                  Sun 14 Jul 2024
                </h4>
                <h4 className="text-md -mb-1 font-primaryRegular tracking-tight">
                  <span className="text-xs">Until</span> 11:00
                </h4>
              </div>
            </div>

            <div className="date-of-booking flex rounded-lg mt-6 md:gap-2">
              <div className="w-[140px] h-16 py-3 pl-2 bg-white rounded-md">
                <h4 className="text-xs font-primaryRegular tracking-tight">
                  Guests
                </h4>
                <h4 className="text-sm -mb-1 font-primaryMedium tracking-tight">
                  2 Adults, 0 child
                </h4>
              </div>
              <div className="w-[140px] h-16 py-3 pl-2 bg-white rounded-md">
                <h4 className="text-xs font-primaryRegular tracking-tight">
                  Rooms
                </h4>
                <h4 className="text-sm -mb-1 font-primaryMedium tracking-tight">
                  2 Rooms
                </h4>
              </div>
            </div>

            <div className="py-4 pl-2 pr-2 w-full mt-14 flex justify-between text-sm rounded-md border-t-2 border-black border-opacity-25 font-primaryMedium">
              <h4 className="font-primaryMedium text-lg">Total</h4>
              <h4 className="font-primaryMedium text-xl">₹209,432</h4>
            </div>

            <button className="p-3 pl-10 pr-10 mt-2 w-full bg-[#5D0E41] text-white transition-all hover:bg-[#fff] hover:text-black font-Barlow rounded-md">
              Request to Book
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CheckOut;
