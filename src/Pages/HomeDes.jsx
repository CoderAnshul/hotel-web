import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sofa from "../assets/Images/sofa.png";
import wifi from "../assets/Images/wifi.png";
import ac from "../assets/Images/ac.png";
import alltime from "../assets/Images/alltime.png";
import bathtub from "../assets/Images/bathtub.png";
import TV from "../assets/Images/TV.png";
import pool from "../assets/Images/pool.png";
import butler from "../assets/Images/butler.png";
import luggage from "../assets/Images/luggage.png";
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

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { Breadcrumbs } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const HomeDes = () => {
  const [value, setValue] = useState(4);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [dateOpen, setdateOpen] = useState(false);
  const [age, setAge] = React.useState("");

  const handleSelectChange = (event) => {
    setAge(event.target.value);
  };

  const handleOpen = () => {
    setdateOpen(!dateOpen);
  };

  const handleChange = (event) => {
    setSelectedRoom(event.target.value);
  };
  const urlId = useParams();
  const data = [
    {
      id: 1,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Goa",
      para: "Starting from ₹2243",
      description:
        "helloooo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repudiandae. Rerum eum eos magni itaque doloremque autem voluptatibus architecto explicabo ut pariatur maxime inventore laboriosam porro illo adipisci, ipsa nostrum, nobis expedita incidunt sit tempore dignissimos nulla illum vero. Dicta asperiores exercitationem necessitatibus qui, iusto modi tempora at impedit nulla, odio quaerat nisi sint ullam dolore porro facilis? Pariatur fugit atque voluptates odit illum, a voluptas quae cum vel aspernatur sunt animi, ratione sed deserunt magni illo saepe. Ducimus aliquid, earum dolorum soluta animi velit quas maxime autem nam repudiandae? Maiores neque eius, non perferendis, voluptas consequatur maxime sapiente repudiandae ad ut labore enim adipisci accusamus animi. Rerum atque ab enim, rem facere nihil. Fugiat eum ipsum voluptate!",
      name: "Santorini ",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 2,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Mumbai",
      para: "Starting from ₹2540",
      description:
        " bhaggg    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repudiandae. Rerum eum eos magni itaque doloremque autem voluptatibus architecto explicabo ut pariatur maxime inventore laboriosam porro illo adipisci, ipsa nostrum, nobis expedita incidunt sit tempore dignissimos nulla illum vero. Dicta asperiores exercitationem necessitatibus qui, iusto modi tempora at impedit nulla, odio quaerat nisi sint ullam dolore porro facilis? Pariatur fugit atque voluptates odit illum, a voluptas quae cum vel aspernatur sunt animi, ratione sed deserunt magni illo saepe. Ducimus aliquid, earum dolorum soluta animi velit quas maxime autem nam repudiandae? Maiores neque eius, non perferendis, voluptas consequatur maxime sapiente repudiandae ad ut labore enim adipisci accusamus animi. Rerum atque ab enim, rem facere nihil. Fugiat eum ipsum voluptate blanditiis illo doloribus odit fuga placeat corrupti! Optio porro aspernatur ab iusto saepe tempore, delectus tenetur eveniet aliquam iur",
      name: "Escape",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 3,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Mumbai",
      para: "Starting from ₹2540",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repudiandae. Rerum eum eos magni itaque doloremque autem voluptatibus architecto explicabo ut pariatur maxime inventore laboriosam porro illo adipisci, ipsa nostrum, nobis expedita incatur inventore similique molestias enim corporis, unde vel et illo officia! Praesentium ea, aliquid doloremque laudantium provident velit voluptas dolor quos commodi modi odit atque quisquam accusantium dolore tempore earum culpa inventore harum quia. Adipisci cumque dignissimos perferendis nostrum porro! Doloribus quisquam adipisci dicta quia! Animi inventore alias, ipsum, id iusto assumenda voluptatem quisquam quod voluptate accusantium officia? Id est quae adipisci quam sit hic animi voluptate dicta accusantium! Adipisci quod officiis ut fugit!",
      name: "Landmark",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 4,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Mumbai",
      para: "Starting from ₹2540",
      description:
        "Lorem ipsum dolor sit, aihil. Fugiat eum ipsum voluptate blanditiis illo doloribus odit fuga placeat corrupti! Optio porro aspernatur ab iusto saepe tempore, delectus tenetur eveniet aliquam iure aut ullam totam quo voluptatibus! Dicta, beatae itaque hic animi recusandae ipsum magni odit fugiat eius voluptates qui non corrupti autem eum, temporibus eaque dolore? Quia beatae modi, magnam nisi voluptas nobis reiciendis enim fugit. Eaque ipsum voluptas fugiat blanditiis consequatur odio ex hic necessitatibus minima officiis doloremque pariatur magnam debitis, minus natus aspernatur inventore similique molestias enim corporis, unde vel et illo officia! Praesentium ea, aliquid doloremque laudantium provident velit voluptas dolor quos commodi modi odit atque quisquam accusantium dolore tempore earum culpa inventore harum quia. Adipisci cumque dignissimos perferendis nostrum porro! Doloribus quisquam adipisci dicta quia! Animi inventore alias, ipsum, id iusto assumenda voluptatem quisquam quod voluptate accusantium officia? Id est quae adipisci quam sit hic animi voluptate dicta accusantium! Adipisci quod officiis ut fugit!",
      name: "Radission",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 5,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Lonavala",
      para: "Starting from ₹6754",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repudiandae. Rerum eum eos magni itaque doloremque autem voluptatibus architecto explicabo ut pariatur maxime inventore laboriosam porro illo adipisci, ipsa nostrum, nobis expedita incidunt sit tempore dignissimos nuore earum culpa inventore harum quia. Adipisci cumque dignissimos perferendis nostrum porro! Doloribus quisquam adipisci dicta quia! Animi inventore alias, ipsum, id iusto assumenda voluptatem quisquam quod voluptate accusantium officia? Id est quae adipisci quam sit hic animi voluptate dicta accusantium! Adipisci quod officiis ut fugit!",
      name: "OKbook",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 6,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Jaipur",
      para: "Starting from ₹1560",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repudiandae. Rerum eum eos magni itaque doloremque autem voluptatibus architecto explicabo ut pariatur maxime inventore laboriosam porro illo adipisci, ipsa nostrum, nobis expeditatempore earum culpa inventore harum quia. Adipisci cumque dignissimos perferendis nostrum porro! Doloribus quisquam adipisci dicta quia! Animi inventore alias, ipsum, id iusto assumenda voluptatem quisquam quod voluptate accusantium officia? Id est quae adipisci quam sit hic animi voluptate dicta accusantium! Adipisci quod officiis ut fugit!",
      name: "Live24",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 7,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Hyderabad",
      para: "Starting from ₹15500",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repudiandae. Rerum eendis enim fugit. Eaque ipsum voluptas fugiat blanditiis consequatur odio ex hic necessitatibus minima officiis doloremque pariatur magnam debitis, minus natus aspernatur inventore similique molestias enim corporis, unde vel et illo officia! Praesentium ea, aliquid doloremque laudantium provident velit voluptas dolor quos commodi modi odit atque quisquam accusantium dolore tempore earum culpa inventore harum quia. Adipisci cumque dignissimos perferendis nostrum porro! Doloribus quisquam adipisci dicta quia! Animi inventore alias, ipsum, id iusto assumenda voluptatem quisquam quod voluptate accusantium officia? Id est quae adipisci quam sit hic animi voluptate dicta accusantium! Adipisci quod officiis ut fugit!",
      name: "LandMark",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 8,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Hyderabad",
      para: "Starting from ₹15500",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repue tempore earum culpa inventore harum quia. Adipisci cumque dignissimos perferendis nostrum porro! Doloribus quisquam adipisci dicta quia! Animi inventore alias, ipsum, id iusto assumenda voluptatem quisquam quod voluptate accusantium officia? Id est quae adipisci quam sit hic animi voluptate dicta accusantium! Adipisci quod officiis ut fugit!",
      name: "Cotage",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 9,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Hyderabad",
      para: "Starting from ₹15500",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repudiauptatem quisquam quod voluptate accusantium officia? Id est quae adipisci quam sit hic animi voluptate dicta accusantium! Adipisci quod officiis ut fugit!",
      name: "Santorini Escape",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 10,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Kolkata",
      para: "Starting from ₹1500",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repudida voluptatem quisquam quod voluptate accusantium officia? Id est quae adipisci quam sit hic animi voluptate dicta accusantium! Adipisci quod officiis ut fugit!",
      name: "Santorini Escape",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 11,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Delhi",
      para: "Starting from ₹1220",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repudiandae. Rerum eum eos magni itaque doloremque autem voluptatibus architecto explicabo ut pariatur maxime inventore laboriosam porro illo adipisci, ipsa nostrum, nobis expedita incidunt sit tempore dignissimos nulla illum vero. Dicta asperiores exercitationem necessitatibus qui, iusto modi tempora at impedit nulla, odio quaerat nisi sint ullam dolore porro facilis? Pariatur fugit atque voluptates rum culpa inventore harum quia. Adipisci cumque dignissimos perferendis nostrum porro! Doloribus quisquam adipisci dicta quia! Animi inventore alias, ipsum, id iusto assumenda voluptatem quisquam quod voluptate accusantium officia? Id est quae adipisci quam sit hic animi voluptate dicta accusantium! Adipisci quod officiis ut fugit!",
      name: "Santorini Escape",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 12,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Delhi",
      para: "Starting from ₹1220",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repudiandae. Rerum eum eos magni itaque doloremque autem voluptatibus architecto explicabo ut pariatur maxime inventore laboriosam porro illo adipisci, ipsa nostrum, nobis expedita incidunt sit tempore dignissimos nullquam quod voluptate accusantium officia? Id est quae adipisci quam sit hic animi voluptate dicta accusantium! Adipisci quod officiis ut fugit!",
      name: "Santorini Escape",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 13,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Ranchi",
      para: "Starting from ₹1020",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repudiandae. Rerum eum eos magni itaque doloremque autem voluptatibus architecto explicabo ut pariatur maxime inventore laboriosam porro illo adipisci, ipsa nostrum, nobis expedita incidunt sit temporea voluptatem quisquam quod voluptate accusantium officia? Id est quae adipisci quam sit hic animi voluptate dicta accusantium! Adipisci quod officiis ut fugit!",
      name: "Santorini Escape",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 14,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Nagaland",
      para: "Starting from ₹2430",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repudiandae. Rerum eum eos magni itaque doloremque autem voluptatibus architecto explicabo ut pariatur maxime inventore laboriosam porro illo adipisci, ipsa nostrum, nobis expedita incidunt sit tempore a voluptatem quisquam quod voluptate accusantium officia? Id est quae adipisci quam sit hic animi voluptate dicta accusantium! Adipisci quod officiis ut fugit!",
      name: "Santorini Escape",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
  ];

  const filteredData = data.filter((item) => item.id == urlId.id);

  const [state, setState] = useState({
    selection: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  });

  const handleSelect = (ranges) => {
    console.log(ranges);
    setState({
      ...state,
      selection: {
        startDate: ranges.selection.startDate,
        endDate: ranges.selection.endDate,
        key: "selection",
      },
    });
  };

  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <>
      <div role="presentation" onClick={handleClick} className="mt-24 ml-11">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Explore
          </Link>
          <Typography color="text.primary">Property</Typography>
        </Breadcrumbs>
      </div>

      <div className="min-h-[70vh] flex flex-col items-center w-full mt-4 ">
        <div className="wrapper  w-[95%]  overflow-hidden">
          <div className="image !h-[40vh] lg:!h-[70vh] w-[100%]  swiper3 overflow-hidden">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={15}
              freeMode={true}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {filteredData[0].img.map((item) => (
                <SwiperSlide key={item.id}>
                  <img src={item} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="heading w-full h-16 bg-[#F5F7FC] text-black flex items-center pl-4 md:pl-12">
            Description
          </div>

          <div className="content-wrapper relative w-[100%] min-h-[200vh] flex">
            <div className="left w-[100%] lg:w-[75%] bg-white p-3 pt-8 pl-4  md:pl-12">
              <div className="hotel-name text-3xl">{filteredData[0].name}</div>
              <div className="description">
                <div className="hotel-desc text-md mt-12 w-[100%] md:w-[95%] ">
                  <h4 className="text-xl font-primaryMedium mb-2">
                    Description
                  </h4>
                  <p>{filteredData[0].description}</p>
                  <div>
                    <h4 className="text-md font-primaryMedium mb-2 mt-8">
                      House Rules
                    </h4>
                    <ul>
                      <li className="text-sm">
                        <ArrowForwardOutlinedIcon className="scale-[0.6] -mt-1" />
                        No smoking , parties or events.
                      </li>
                      <li className="text-sm">
                        <ArrowForwardOutlinedIcon className="scale-[0.6] -mt-1" />
                        Check-in time is 2 PM - 4 PM and check-out by 10 AM.
                      </li>
                    </ul>
                  </div>

                  <div className="services">
                    <h4 className="text-xl font-primaryMedium mb-2 mt-10">
                      Services
                    </h4>
                    <div className="flex flex-wrap gap-[8vw]">
                      <ul>
                        <li className="min-w-32 flex items-center gap-3 mb-4">
                          <img className="h-10" src={Tick} alt="" />
                          Bicycle Hire
                        </li>
                        <li className="min-w-32 flex items-center gap-3 mb-4">
                          <img className="h-10" src={Tick} alt="" />
                          Massage
                        </li>
                        <li className="min-w-32 flex items-center gap-3 mb-4">
                          <img className="h-10" src={Tick} alt="" />
                          Fitness Center
                        </li>
                        <li className="min-w-32 flex items-center gap-3 mb-4">
                          <img className="h-10" src={Tick} alt="" />
                          Wake-up Call
                        </li>
                      </ul>
                      <ul>
                        <li className="min-w-32 flex items-center gap-3 mb-4">
                          <img className="h-10" src={Tick} alt="" />
                          Conference Rooms
                        </li>
                        <li className="min-w-32 flex items-center gap-3 mb-4">
                          <img className="h-10" src={Tick} alt="" />
                          Sightseeing
                        </li>
                        <li className="min-w-32 flex items-center gap-3 mb-4">
                          <img className="h-10" src={Tick} alt="" />
                          Laundry
                        </li>
                      </ul>
                      <ul>
                        <li className="min-w-32 flex items-center gap-3 mb-4">
                          <img className="h-10" src={Tick} alt="" />
                          Fruit Basket
                        </li>
                        <li className="min-w-32 flex items-center gap-3 mb-4">
                          <img className="h-10" src={Tick} alt="" />
                          Car Hire
                        </li>
                        <li className="min-w-32 flex items-center gap-3 mb-4">
                          <img className="h-10" src={Tick} alt="" />
                          Own Parking Space
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="Amenities">
                    <h4 className="text-xl font-primaryMedium mb-2 mt-10">
                      Amenities
                    </h4>
                    <div className="flex flex-wrap gap-[8vw]">
                      <ul>
                        <li className="min-w-32 flex items-center gap-3 mb-4">
                          <img className="h-10" src={sofa} alt="sitting" />
                          Sitting Area
                        </li>
                        <li className="min-w-32 flex items-center gap-3 mb-4">
                          <img className="h-10" src={wifi} alt="wifi" />
                          Free Wifi
                        </li>
                        <li className="min-w-32 flex items-center gap-3 mb-4">
                          <img className="h-10" src={ac} alt="air" />
                          Air Conditioning
                        </li>
                        <li className="min-w-32 flex items-center gap-3 mb-4">
                          <img className="h-10" src={bathtub} alt="bathtub" />
                          Bathtub
                        </li>
                      </ul>
                      <ul>
                        <li className="min-w-32 flex items-center gap-3 mb-4">
                          <img className="h-10" src={TV} alt="tv" />
                          Television
                        </li>
                        <li className="min-w-32 flex items-center gap-3 mb-4">
                          <img className="h-10" src={pool} alt="pool" />
                          Priavte Pool
                        </li>
                        <li className="min-w-32 flex items-center gap-3 mb-4">
                          <img className="h-10" src={butler} alt="" />
                          Direct Dial Phone
                        </li>
                      </ul>
                      <ul>
                        <li className="min-w-32 flex items-center gap-3 mb-4">
                          <img className="h-10" src={butler} alt="butler" />
                          Butler Service
                        </li>
                        <li className="min-w-32 flex items-center gap-3 mb-4">
                          <img className="h-10" src={alltime} alt="alltime" />
                          C24/7 Room Service
                        </li>
                        <li className="min-w-32 flex items-center gap-3 mb-4">
                          <img className="h-10" src={luggage} alt="luggage" />
                          Luggage Storage
                        </li>
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

                  <form className="review-section min-h-[90vh] w-full border-2 border-black border-opacity-10 outline-none p-4 pl rounded-lg p-5 shadow-lg">
                    <div className="heading flex items-center text-2xl font-primaryMedium h-16 w-full border-b-2 border-black border-opacity-10 ">
                      Write a Review
                    </div>
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
                        <Typography component="legend">
                          Value for Money
                        </Typography>
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
                          <input
                            type="text"
                            className="border-2 w-full  border-black border-opacity-20 outline-none p-4 pl rounded-lg"
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
                      <div className="bottom w-full mt-12">
                        <h3>Message</h3>
                        <textarea
                          name="postContent"
                          rows={6}
                          cols={40}
                          className="w-full resize-none border-2  border-black border-opacity-20 outline-none p-4 pl rounded-lg"
                        />
                      </div>
                    </div>

                    <Link>
                      {" "}
                      <button className="p-3 pl-10 pr-10  mt-14 text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] rounded-md font-primaryMedium">
                        Check Availability
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>

            <div className="right hidden lg:flex flex-col items-center sticky top-20 min-h-[50vh] p-3 max-h-[60vh] w-[25%] bg-white mt-6 border-2 border-opacity-10 border-black rounded-md shadow-xl">
              <h4>Your Reservation</h4>

              <div className="date w-full mt-6">
                <div className="mb-4 w-full">
                  <p className="text-sm font-primaryMedium">check-in</p>
                  <input
                    type="date"
                    name="date"
                    id=""
                    className="p-3 w-full pl-4 pr-4 text-xs border-2  border-black border-opacity-20 outline-none pl rounded-lg mt-2"
                  />
                </div>
                <div className="mb-4 w-full">
                  <p className="text-sm font-primaryMedium">check-out</p>
                  <input
                    type="date"
                    name="date"
                    id=""
                    className="p-3 w-full pl-4 pr-4 text-xs border-2  border-black border-opacity-20 outline-none pl rounded-lg mt-2"
                  />
                </div>
              </div>

              <div className="room w-full">
                <label htmlFor="room-select" className="block mb-2 text-md ">
                  Choose a room:
                </label>
                <select
                  id="room-select"
                  value={selectedRoom}
                  onChange={handleChange}
                  className="block w-full p-2 text-md rounded-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select...</option>
                  <option value="1">1 room</option>
                  <option value="2">2 rooms</option>
                  <option value="3">3 rooms</option>
                  <option value="4">4 rooms</option>
                </select>
              </div>

              {/* <Link onClick={handleOpen}> */}
              <Link to={"/check-out"}>
                <button className="p-3 pl-10 pr-10 w-full mt-8 text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] rounded-md font-primaryMedium">
                  Check Availability
                </button>
              </Link>

              {/* {dateOpen && (
        <DateRangePicker
          ranges={[{
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
          }]}
          onChange={handleSelect}
        />
      )} */}
            </div>

            <div className="phone-checkOut h-16 w-[95%] lg:hidden pt-2 fixed z-50 bottom-0 bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.3)] rounded-lg">
              {/* <div className="top p-2 h-1/2 w-full flex justify-between">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    gap="25px"
                    width="100%"
                  >
                    <DatePicker label="Check in" name="startDate" />
                    <DatePicker label="Check out" name="endDate" />
                  </Box>
                </LocalizationProvider>
              </div> */}
              <div className="bottom h-1/2 w-full flex items-center justify-center gap-5 pr-2 mt-3">
                {/* <div>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Rooms
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>1</MenuItem>
                      <MenuItem value={20}>2</MenuItem>
                      <MenuItem value={30}>3</MenuItem>
                      <MenuItem value={30}>4</MenuItem>
                    </Select>
                  </FormControl>
                </div> */}

                <div>
                  <button className="p-[10px] px-8 w-full text-sm border-2 border-black border-opacity-35 text-black transition-all hover:bg-[#000] rounded-md font-primaryMedium">
                    Inquiry
                  </button>
                </div>
                <div>
                  <button className="p-[11px] px-6 w-full text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] rounded-md font-primaryMedium">
                    Book Now
                  </button>
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
