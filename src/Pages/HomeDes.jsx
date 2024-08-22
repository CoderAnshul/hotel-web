import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Footer from "../Components/Footer";
import Tick from "../assets/Images/available.png";

import { FreeMode, Pagination } from "swiper/modules";
import { Link, useParams } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DatePicker } from "antd";
import ReservationForm from "../Components/ReservationForm";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { BASE_URL } from "../../utils/utils";

const HomeDes = () => {
  const [value, setValue] = useState(4);
  const [setSelectedRoom] = useState("");
  // const [dateOpen, setdateOpen] = useState(false);
  const [age] = React.useState("");
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const [data, setData] = useState();
  const [imageArr, setImagesArr] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/v1/property/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        setImagesArr([
          ...data.data.entrancePicture,
          ...data.data.bedroomPicture,
          ...data.data.livingRoomPicture,
          ...data.data.kitchenPicture,
          ...data.data.bathroomPicture,
          ...data.data.gym,
          ...data.data.others,
        ]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params.id]);

  const BookingOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    setSelectedRoom(event.target.value);
  };

  function handleClick(event) {
    event.preventDefault();
  }
  console.log(data);

  return (
    <>
      <div role="presentation" onClick={handleClick} className="mt-24 lg:ml-11 ml-3">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
            Explore
          </Link>
          <Typography color="text.primary">Property</Typography>
        </Breadcrumbs>
      </div>

      <div className="min-h-[70vh] flex flex-col items-center w-full mt-4 ">
        <div className="wrapper  w-[95%]  overflow-hidden">
          <div className="image !h-[40vh] lg:!h-[70vh] w-[100%]  swiper3 overflow-hidden">
            <Swiper slidesPerView={"auto"} spaceBetween={15} freeMode={true} modules={[FreeMode, Pagination]} className="mySwiper">
              {imageArr.map((item) => (
                <SwiperSlide key={item.id}>
                  <img src={`${BASE_URL}/uploads/${item}`} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* <div className="heading w-full h-16 bg-[#F5F7FC] text-black flex items-center pl-4 md:pl-12">
            Description
          </div> */}

          <div className="content-wrapper justify-between relative w-[100%] min-h-[200vh] flex">
            <div className="left w-[100%] lg:w-[70%] bg-white p-3 pt-8 pl-4  md:pl-12">
              <div className="hotel-name text-3xl mb-6">{data?.propertyName}</div>
              <div className="flex gap-3">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
                <span>{"(4.1)"}</span>
              </div>
              <h4 className="text-sm">
                <LocationOnIcon className="scale-75 mb-1" />
                {data?.city}
              </h4>
              <div className="description">
                <div className="hotel-desc text-md mt-12 w-[100%] md:w-[95%] ">
                  <h4 className="text-xl font-primaryMedium mb-2">Description</h4>
                  <p>{data?.propertyDescription}</p>
                  <h4 className="text-md font-primaryMedium mb-2 mt-8">House Rules</h4>
                  <div className="">
                    <ul className="grid grid-cols-1 gap-4">
                      {data?.houseRules.map((item, index) => (
                        <li key={index} className="text-sm">
                          <ArrowForwardOutlinedIcon className="scale-[0.6] -mt-1" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="services">
                    <h4 className="text-xl font-primaryMedium mb-2 mt-10">Services</h4>
                    <div className="">
                      <ul className="grid grid-cols-3 gap-4">
                        {data?.services.map((item, index) => (
                          <li key={index} className="min-w-32 flex items-center gap-3 mb-4">
                            <img className="h-10" src={Tick} alt="" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="Amenities">
                    <h4 className="text-xl font-primaryMedium mb-2 mt-10">Amenities</h4>
                    <div className="">
                      <ul className="grid grid-cols-3 gap-4">
                        {data?.amenities.map((item, index) => (
                          <li key={index} className="min-w-32 flex items-center gap-3 mb-4">
                            <img className="h-10" src={Tick} alt="" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="map  overflow-hidden mt-14 mb-8">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28036.387018906134!2d77.0901998!3d28.5532914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b85fc2a2d89%3A0xbef376182c43ed9d!2sIndira%20Gandhi%20International%20Airport!5e0!3m2!1sen!2sin!4v1721858689923!5m2!1sen!2sin"
                      width="747"
                      height="439"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  <form className="review-section min-h-[90vh] w-full border-2 border-black border-opacity-10 outline-none rounded-lg p-5 shadow-lg">
                    <div className="heading flex items-center text-2xl font-primaryMedium h-16 w-full border-b-2 border-black border-opacity-10 ">Write a Review</div>
                    <div className="flex justify-evenly flex-wrap mt-8">
                      <Box
                        sx={{
                          "& > legend": { mt: 2 },
                        }}
                      >
                        <Typography component="legend">Service</Typography>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          "& > legend": { mt: 2 },
                        }}
                      >
                        <Typography component="legend">Location</Typography>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          "& > legend": { mt: 2 },
                        }}
                      >
                        <Typography component="legend">Value for Money</Typography>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          "& > legend": { mt: 2 },
                        }}
                      >
                        <Typography component="legend">Clenliness</Typography>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          "& > legend": { mt: 2 },
                        }}
                      >
                        <Typography component="legend">Facilities</Typography>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </Box>
                    </div>

                    <div className="input-details mt-10">
                      <div className="top sm:flex sm:w-full sm:justify-between gap-4">
                        <span className="w-full">
                          <h4>Name</h4>
                          <input type="text" className="border-2 w-full  border-black border-opacity-20 outline-none p-4 pl rounded-lg" />
                        </span>
                        <span className="w-full">
                          <h4>Email</h4>
                          <input type="email" className="border-2 w-full border-black border-opacity-20 outline-none p-4 pl rounded-lg" />
                        </span>
                      </div>
                      <div className="bottom w-full mt-12">
                        <h3>Message</h3>
                        <textarea name="postContent" rows={6} cols={40} className="w-full resize-none border-2  border-black border-opacity-20 outline-none p-4 pl rounded-lg" />
                      </div>
                    </div>

                    <Link>
                      {" "}
                      <button className="p-3 pl-10 pr-10  mt-14 text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] rounded-md font-primaryMedium">Check Availability</button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>

            <div className="right hidden lg:flex flex-col items-center mt-6 sticky top-20 max-h-[440px] w-[25%]">
              <ReservationForm />
              <button className="py-[18px] px-6 w-[86%] text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] mt-4 rounded-md font-primaryMedium">Book Now</button>
            </div>

            <div className="phone-checkOut h-16 w-[95%] lg:hidden pt-2 fixed z-50 bottom-0 bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.3)] rounded-lg">
              <div className="bottom h-1/2 w-full flex items-center justify-center gap-5 pr-2 mt-3">
                <div>
                  <button className="p-[10px] px-8 w-full text-sm border-2 border-black border-opacity-35 text-black transition-all hover:bg-[#000] rounded-md font-primaryMedium">Inquiry</button>
                </div>
                <div>
                  <button onClick={BookingOpen} className="p-[11px] px-6 w-full text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] rounded-md font-primaryMedium">
                    Book Now
                  </button>
                </div>

                <div
                  style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.4)" }}
                  className={`absolute min-h-[200px] w-full left-1/2 translate-x-[-50%] duration-300 transition-all  bg-white z-[60] p-4 ${
                    isOpen ? "opacity-100 bottom-[-1%]" : " opacity-0 bottom-[-500%]"
                  }`}
                >
                  <div className="top p-2 mt-8 h-1/2 max-h-44 w-full flex items-end ">
                    <CloseIcon onClick={BookingOpen} className="absolute top-3 right-3" />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        gap="15px"
                        width="100%"
                        // height="44px"
                      >
                        <DatePicker
                          style={{
                            height: "50px",
                            width: "100%",
                            backgroundColor: "transparent",
                            border: "1.5px solid rgba(0,0,0,0.3",
                          }}
                          label="Check in"
                          name="startDate"
                        />
                        <DatePicker
                          style={{
                            height: "50px",
                            width: "100%",
                            backgroundColor: "transparent",
                            border: "1.5px solid rgba(0,0,0,0.3",
                          }}
                          label="Check out"
                          name="endDate"
                        />
                      </Box>
                    </LocalizationProvider>
                  </div>
                  <div className="flex w-full mt-2 mb-8 xl:px-4">
                    <FormControl sx={{ m: 1, minWidth: 120, width: "95%" }}>
                      <InputLabel id="demo-select-small-label">Rooms</InputLabel>
                      <Select value={age} label="Rooms" onChange={handleChange}>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>1</MenuItem>
                        <MenuItem value={20}>2</MenuItem>
                        <MenuItem value={30}>3</MenuItem>
                        <MenuItem value={40}>4</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 120, width: "95%" }}>
                      <InputLabel id="demo-select-small-label-2">Guests</InputLabel>
                      <Select value={age} label="Rooms" onChange={handleChange}>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>1</MenuItem>
                        <MenuItem value={20}>2</MenuItem>
                        <MenuItem value={30}>3</MenuItem>
                        <MenuItem value={40}>4</MenuItem>
                        <MenuItem value={50}>5</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  <div className="h-16 w-full bg-transparent flex justify-between items-center px-2 rounded-md border-2 border-black border-opacity-25">
                    <span className="text-xl font-primaryMedium">₹150,000</span>
                    <span className="text-xl font-primaryMedium">
                      <Link to="/check-out">
                        <button className="py-[14px] px-10  text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] rounded-md font-primaryMedium">Book Now</button>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomeDes;
