import React, { useState, useEffect } from "react";
import slide from "../assets/Images/slide2.jpg";
import WhychooseUs from "../Components/WhychooseUs.jsx";
import AboutUS from "../Components/AboutUS";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
import axios from "axios";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";

const ListYourProperty = () => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countriesFetched, setCountriesFetched] = useState(false);
  const [citiesFetched, setCitiesFetched] = useState(false);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setCities([]);
    setCitiesFetched(false);
  };

  const fetchCountries = async () => {
    if (countriesFetched) return;
    try {
      const res = await axios.get("https://countriesnow.space/api/v0.1/countries/");
      if (res.data && res.data.data) {
        const countryList = res.data.data.map((item) => item.country);
        setCountries(countryList);
        setCountriesFetched(true);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchCities = async () => {
    if (citiesFetched || !selectedCountry) return;
    try {
      const res = await axios.post("https://countriesnow.space/api/v0.1/countries/cities", { country: selectedCountry });
      if (res.data && res.data.data) {
        setCities(res.data.data);
        setCitiesFetched(true);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="h-[100vh] md:h-[100vh] w-full relative overflow-hidden mb-14">
        <div className="darkoverlay absolute h-full w-full bg-[#00000069] z-20"></div>
        <div className="wrapper relative h-full w-full object-center flex justify-center items-center lg:block">
          <form
            className="min-h-[68vh] md:h-[68vh] w-[350px] absolute z-50 bg-white md:bottom-[5%] md:right-[12%] bottom-6 rounded-lg flex flex-col items-center text-black"
            action=""
          >
            <h1 className="text-2xl text-center font-primaryMedium font-bold mt-8">
              Create your Account
            </h1>
            <p className="w-[85%] text-center text-xs opacity-65 mt-2 mb-10">
              Let's start a hotel for your vacation with loved ones
            </p>

            <input
              className="w-[80%] bg-gray-100 p-2 border-none rounded-lg mb-2"
              type="text"
              placeholder="Name"
              name="name"
              required
              style={{ color: "black" }}
            />
            <input
              className="w-[80%] bg-gray-100 p-2 border-none rounded-lg mb-2"
              type="number"
              placeholder="Phone Number"
              name="age"
              required
              maxLength={13}
              minLength={12}
              style={{ color: "black" }}
            />
            <input
              className="w-[80%] bg-gray-100 p-2 border-none rounded-lg mb-2"
              type="text"
              placeholder="Address"
              name="name"
              required
              style={{ color: "black" }}
            />
            <input
              className="w-[80%] bg-gray-100 p-2 border-none rounded-lg mb-2"
              type="password"
              placeholder="Password"
              name="password"
              required
              maxLength={8}
              style={{ color: "black" }}
            />

            <div className="flex ml-14 gap-2 w-full">
              <div className="flex flex-col w-2/5 gap-2">
                <label htmlFor="country" className="text-xs opacity-[0.7]">
                  Country
                </label>
                <Select
                  labelId="country-select-label"
                  id="country-select"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  onOpen={fetchCountries}
                  className="w-full"
                  sx={{
                    color: "black",
                    "& .MuiSelect-select": {
                      color: "black",
                    },
                    "& .MuiMenuItem-root": {
                      color: "black",
                    },
                    "& .MuiInputLabel-root": {
                      color: "black",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "black",
                    },
                  }}
                >
                  {countries.map((item, index) => (
                    <MenuItem key={index} value={item} className="!max-h-52 text-black">
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <div className="flex flex-col w-2/5 gap-2">
                <label htmlFor="city" className="text-xs opacity-[0.7]">
                  City
                </label>
                <Select
                  labelId="city-select-label"
                  id="city-select"
                  value=""
                  onChange={() => {}}
                  onOpen={fetchCities}
                  className="w-full"
                  disabled={!selectedCountry}
                  sx={{
                    color: "black",
                    "& .MuiSelect-select": {
                      color: "black",
                    },
                    "& .MuiMenuItem-root": {
                      color: "black",
                    },
                    "& .MuiInputLabel-root": {
                      color: "black",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "black",
                    },
                  }}
                >
                  {cities.map((item, index) => (
                    <MenuItem key={index} value={item} className="!max-h-52 text-black">
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>
            <button className="p-3 pl-10 pr-10 mt-4 w-[85%] bg-[#5D0E41] text-white transition-all hover:bg-[#000] font-Barlow rounded-xl">Explore More</button>
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
