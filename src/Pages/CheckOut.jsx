import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import slide from "../assets/Images/slide3.jpg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Footer from "../Components/Footer";

const CheckOut = () => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);

      reader.onloadstart = () => {
        setProgress(0); // Reset progress
      };

      reader.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = (event.loaded / event.total) * 100;
          setProgress(percentComplete);
        }
      };

      reader.onloadend = () => {
        setImage(reader.result);
        setProgress(100); // Complete progress
        setIsImageUploaded(true); // Set image uploaded status to true
      };
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setIsImageUploaded(false);
    setProgress(0);
  };

  return (
    <>
      <div className="checkout h-full w-full bg-red-50 flex justify-center items-center pt-24">
        <div className="content-wrapper w-[85%] min-h-[100vh] bg-gray-50 relative flex">
          <div className="left w-[100%] lg:w-[75%] bg-white p-3 pt-8 pl-12 mb-8">
            <div className="hotel-name text-3xl">
              <Link className="box h-[600px] flex flex-col items-center w-[400px] md:w-[700px] max-w-[700px] md:flex-row md:h-[240px] outline-none pl rounded-lg">
                <div className="image md:h-[95%] md:ml-2 md:-mt-1 w-[95%] md:w-[75%] mt-2 rounded-xl overflow-hidden h-[50%]">
                  <img
                    className="h-full w-full object-cover"
                    src={slide}
                    alt=""
                  />
                </div>
                <div className="detail ml-3 w-[95%] md:h-[80%] md:pl-3 md:flex md:justify-between">
                  <div className="">
                    <h2 className="text-xl font-primaryMedium">Vistara</h2>
                    <p className="text-sm font-primaryMedium opacity-75 -ml-1">
                      <LocationOnOutlinedIcon className="scale-[0.7]" />
                      Lucknow
                    </p>
                    <div className="date-of-booking flex w-full mt-6 md:gap-6">
                      <div>
                        <h4 className="text-sm font-primaryRegular tracking-tight">
                          Check-in
                        </h4>
                        <h4 className="text-lg -mb-1 font-primaryMedium tracking-tight ">
                          Sat 13 Jul 2024
                        </h4>
                        <h4 className="text-lg -mb-1 font-primaryRegular tracking-tight">
                          <span className="text-sm">From</span> 02:00
                        </h4>
                      </div>
                      <div className="border-l-2 border-black pl-6">
                        <h4 className="text-sm font-primaryRegular tracking-tight ">
                          Check-in
                        </h4>
                        <h4 className="text-lg -mb-1 font-primaryMedium tracking-tight ">
                          Sat 13 Jul 2024
                        </h4>
                        <h4 className="text-lg -mb-1 font-primaryRegular tracking-tight">
                          <span className="text-sm">From</span> 02:00
                        </h4>
                      </div>
                    </div>
                    <div className="mt-2 lg:mt-4 w-full h-14 items-center gap-4 flex gap pl-1">
                      <h3 className="text-sm font-primaryMedium">
                        ◉ 2 Bedrooms
                      </h3>
                      <h3 className="text-sm font-primaryMedium">
                        ◉ 4 Bathrooms
                      </h3>
                      <h3 className="text-sm font-primaryMedium">
                        ◉ 2 Guests
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <form className="review-section mt-10 min-h-[90vh] w-full border-2 border-black border-opacity-10 outline-none p-4 pl rounded-lg p-5 shadow-lg">
              <div className="heading flex items-center text-2xl font-primaryMedium h-16 w-full border-b-2 border-black border-opacity-10 ">
                Enter Your Details
              </div>
              <div className="radio">
                <p className="mt-2">I'm Looking for</p>
                <div className="flex gap-3">
                  <FormControl>
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
                <div className="top sm:flex sm:w-full sm:justify-between gap-4">
                  <span className="w-full">
                    <h4>Name</h4>
                    <input
                      type="text"
                      className="border-2 w-full border-black border-opacity-20 outline-none p-4 pl rounded-lg"
                    />
                  </span>
                  <span className="w-full">
                    <h4>Email</h4>
                    <input
                      type="email"
                      className="border-2 w-full border-black border-opacity-20 outline-none p-4 pl rounded-lg"
                    />
                  </span>
                </div>
                <div className="top sm:flex sm:w-full sm:justify-between gap-4 mt-4">
                  <span className="w-full">
                    <h4>Contact Number</h4>
                    <input
                      type="Number"
                      className="border-2 w-full border-black border-opacity-20 outline-none p-4 pl rounded-lg"
                    />
                  </span>
                  <span className="w-full">
                    <h4>Residential City</h4>
                    <input
                      type="text"
                      className="border-2 w-full border-black border-opacity-20 outline-none p-4 pl rounded-lg"
                    />
                  </span>
                </div>

                <div className="flex h-44 w-[220px] mt-4 flex-col items-center justify-center">
                  <div className="relative w-[230px] h-[100px] border-2 border-gray-300 rounded-md overflow-hidden bg-white">
                    {image && (
                      <img
                        src={image}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-200">
                      <div
                        className="h-full bg-green-500 transition-width duration-300"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                  {isImageUploaded ? (
                    <button
                      type="button"
                      className="p-3 pl-10 pr-10 whitespace-nowrap mt-4 text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] cursor-pointer rounded-md font-primaryMedium"
                      onClick={handleRemoveImage}
                    >
                      Remove File
                    </button>
                  ) : (
                    <label
                      htmlFor="upload"
                      className="p-3 pl-10 pr-10 whitespace-nowrap mt-4 text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] cursor-pointer rounded-md font-primaryMedium"
                    >
                      Upload Your Aadhaar
                      <input
                        type="file"
                        id="upload"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </label>
                  )}
                </div>

                <div className="bottom w-full mt-12">
                  <h3 className="text-xl font-primaryMedium mb-2">
                    Any Special requests?
                  </h3>
                  <textarea
                    name="postContent"
                    rows={6}
                    cols={40}
                    className="w-full resize-none border-2 border-black border-opacity-20 outline-none p-4 pl rounded-lg"
                  />
                </div>

                <p className="text-sm font-primaryRegular mt-2 mb-4">
                  Share your special requests with us and we’ll do our best to
                  accommodate them!
                </p>
              </div>
            </form>
          </div>

          <div className="right hidden lg:flex flex-col items-center sticky top-20 mb-12 min-h-[60vh] p-3 max-h-[50vh] w-[25%] bg-gray-300 mt-6 ml-2 border-2 border-opacity-20 border-black rounded-xl shadow-xl">
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
                  Check-in
                </h4>
                <h4 className="text-md -mb-1 font-primaryMedium tracking-tight">
                  Sat 13 Jul 2024
                </h4>
                <h4 className="text-md -mb-1 font-primaryRegular tracking-tight">
                  <span className="text-xs">From</span> 02:00
                </h4>
              </div>
            </div>

            <div className="date-of-booking flex rounded-lg mt-6 md:gap-2">
              <div className="w-[140px] h-16 py-3 pl-2 bg-white rounded-md">
                <h4 className="text-xs font-primaryRegular tracking-tight">
                  Check-in
                </h4>
                <h4 className="text-sm -mb-1 font-primaryMedium tracking-tight">
                  2 Adults, 0 child
                </h4>
              </div>
              <div className="w-[140px] h-16 py-3 pl-2 bg-white rounded-md">
                <h4 className="text-xs font-primaryRegular tracking-tight">
                  Check-in
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
