import React, { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Link } from "react-router-dom";
import slide from "../assets/Images/slide3.jpg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import wifi from "../assets/Images/wifi.png";
import sofa from "../assets/Images/sofa.png";
import ac from "../assets/Images/ac.png";
import bathtub from "../assets/Images/bathtub.png";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function valuetext(value) {
  return `${value}°C`;
}

const Explore = () => {
  const [open, setOpen] = useState(false);

  const toggleOptions = () => {
    setOpen(!open);
  };

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

  
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [rooms, setRooms] = useState(0);

  const incrementRooms = () => {
    setRooms((prevRooms) => prevRooms + 1);
  };

  const decrementRooms = () => {
    setRooms((prevRooms) => (prevRooms > 1 ? prevRooms - 1 : 1));
  };

  return (
    <div className="min-h-[100vh] flex flex-col lg:flex-row lg:gap-6  w-full mt-16 pt-10 md:p-3">
      <div className="filter-section h-20 max-w-2xl  overflow-hidden flex items-center gap-4 pl-2 lg:hidden !text-black ">
        <div className="p-1 bg-white  shadow-lg rounded-md hover:bg-black text-[#702B58]  transition-all">
          <TuneIcon onClick={toggleOptions} className="scale-[1.05] " />
          {open === true && (
            <div className="options z-[999]  fixed flex flex-col items-center top-0 left-0 sm:top-[50%] overscroll-y-scroll sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] min-h-[100vh] w-screen lg:min-w-[540px] xl:hidden max-w-[700px] bg-white">
              <div
                onClick={toggleOptions}
                className="opt-top flex items-center h-14 w-full "
              >
                <ArrowBackIosNewOutlinedIcon className="text-black ml-2" />
              </div>
              <div className="w-[85%] flex flex-col items-center ">
          <div className="range flex flex-col items-center w-[100%]  mt-6">
            <h3 className="text-2xl font-fontMedium text-black lg:self-start lg:ml-2 lg:text-[16px]">
              Price Range
            </h3>
            <Box sx={{ width: 230 }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </Box>
            <div className="flex gap-5 w-full justify-center mt-2">
              <div className="min-amount p-2 pl-8 pr-8 border-2 bg-gray-300 border-black border-opacity-40 text-opacity-50 text-black rounded-md">
                ₹ Min
              </div>
              <div className="max-amount p-2 pl-8 pr-8 border-2 bg-gray-300 border-black border-opacity-40 text-opacity-50 text-black  rounded-md">
                ₹ Max
              </div>
            </div>
            <button className="flex-nowrap p-3 pl-8 pr-8 mt-4 w-[95%] rounded-md border-[1.5px] border-opacity-50 text-black border-black hover:text-white font-primaryRegular transition-all text-xs hover:bg-[#000]">
              Apply
            </button>
          </div>

          <div className="rooms w-[100%] mt-5">
            <h3 className="text-2xl font-fontMedium -mb-2 text-black lg:self-start lg:ml-2 lg:text-[16px]">
              Rooms
            </h3>
            <div className="flex justify-between text-sm items-center mt-4">
              No. of Rooms
              <div className="flex justify-between gap-1">
                <span
                  className="p-2 pl-4 pr-4 rounded-md bg-gray-300 cursor-pointer"
                  onClick={decrementRooms}
                >
                  -
                </span>
                <span className="p-2 pl-6 pr-6 bg-[#5d0e4154]">
                  {rooms.toString().padStart(2, "0")}
                </span>
                <span
                  className="p-2 pl-4 pr-4 rounded-md bg-gray-300 cursor-pointer"
                  onClick={incrementRooms}
                >
                  +
                </span>
              </div>
            </div>
          </div>
          <div className="CheckBox w-[100%] mt-8">
            <h3 className="text-2xl font-fontMedium -mb-2 text-black lg:self-start lg:ml-2 lg:text-[16px]">
              Top Filters
            </h3>
            <FormGroup className="ml-3 mt-4">
              <FormControlLabel
                className="-mb-3 "
                control={<Checkbox  />}
                label="Pool/Jacuzzi"
              />
              <FormControlLabel
                className="-mb-3 "
                control={<Checkbox  />}
                label="Wifi"
              />
              <FormControlLabel
                className="-mb-3 "
                control={<Checkbox  />}
                label="Best Rated"
              />
              <FormControlLabel
                className="-mb-3 "
                control={<Checkbox  />}
                label="Pet Friendly"
              />
              <FormControlLabel
                className="-mb-3 "
                control={<Checkbox  />}
                label="Veg Only"
              />
              <FormControlLabel
                className="-mb-3 "
                control={<Checkbox  />}
                label="Great for kids"
              />
            </FormGroup>
          </div>

          <div className="CheckBox w-[100%] mt-8 overscroll-y-scroll">
            <h3 className="text-2xl font-fontMedium -mb-2 text-black lg:self-start lg:ml-2 lg:text-[16px]">
              Top Filters
            </h3>
            <FormControl >
              <RadioGroup
              className="!flex-col"
                row
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                defaultValue="top"
              >
                <FormControlLabel className="!-mb-3 !ml-1" value="end" control={<Radio />} label="Under ₹ 10,000" />
                <FormControlLabel className="!-mb-3 !ml-1" value="end" control={<Radio />} label="₹ 10,000 - ₹ 20,000" />
                <FormControlLabel className="!-mb-3 !ml-1" value="end" control={<Radio />} label="₹ 20,000 - ₹ 35,000" />
                <FormControlLabel className="!-mb-3 !ml-1" value="end" control={<Radio />} label="₹ 35,000 - ₹ 50,000" />
                <FormControlLabel className="!-mb-3 !ml-1" value="end" control={<Radio />} label="More than ₹ 50,000" />
              </RadioGroup>
            </FormControl>
          </div>
          <button className="flex-nowrap p-3 pl-8 pr-8 mt-4 w-[95%] rounded-md border-[1.5px] border-opacity-50 text-black border-black hover:text-white font-primaryRegular transition-all text-xs hover:bg-[#000]">
              Apply
            </button>
        </div>
            </div>
          )}
        </div>

        <div className=" overflow-hidden overflow-x-scroll border-l-2 border-black border-opacity-45">
          <ul className="flex ml-2 gap-2 items-center">
            <Link className="flex-nowrap">
              <li className="p-1 pl-2 pr-2 border-[1.5px] border-black opacity-70 rounded-md text-md font-Barlow shrink-0 flex whitespace-nowrap">
                Sort By <ArrowDropDownOutlinedIcon />
              </li>
            </Link>

            <Link>
              <li className="p-1 pl-1 pr-1 border-[1.5px] border-black opacity-70 rounded-md text-md font-Barlow flex whitespace-nowrap">
                Price <ArrowDropDownOutlinedIcon />
              </li>
            </Link>

            <Link>
              <li className="p-1 pl-1 pr-1 border-[1.5px] border-black opacity-70 rounded-md text-md font-Barlow flex whitespace-nowrap">
                Best Rated
              </li>
            </Link>
            <Link>
              <li className="p-1 pl-1 pr-1 border-[1.5px] border-black opacity-70 rounded-md text-md font-Barlow flex whitespace-nowrap">
                Luxury
              </li>
            </Link>
          </ul>
          
        </div>
      </div>

      <div className="filter-section h-[110vh] w-[380px] bg-white xl:flex justify-center mt-4 hidden ">
        <div className="w-[85%] flex flex-col items-center ">
          <div className="range flex flex-col items-center w-[100%]  mt-6">
            <h3 className="text-2xl font-fontMedium text-black lg:self-start lg:ml-2 lg:text-[16px]">
              Price Range
            </h3>
            <Box sx={{ width: 230 }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </Box>
            <div className="flex gap-5 w-full justify-center mt-2">
              <div className="min-amount p-2 pl-8 pr-8 border-2 bg-gray-300 border-black border-opacity-40 text-opacity-50 text-black rounded-md">
                ₹ Min
              </div>
              <div className="max-amount p-2 pl-8 pr-8 border-2 bg-gray-300 border-black border-opacity-40 text-opacity-50 text-black  rounded-md">
                ₹ Max
              </div>
            </div>
            <button className="flex-nowrap p-3 pl-8 pr-8 mt-4 w-[95%] rounded-md border-[1.5px] border-opacity-50 text-black border-black hover:text-white font-primaryRegular transition-all text-xs hover:bg-[#000]">
              Book Now
            </button>
          </div>

          <div className="rooms w-[100%] mt-3">
            <h3 className="text-2xl font-fontMedium -mb-2 text-black lg:self-start lg:ml-2 lg:text-[16px]">
              Rooms
            </h3>
            <div className="flex justify-between text-sm items-center pl-2">
              No. of Rooms
              <div className="flex justify-between gap-1">
                <span
                  className="p-2 pl-4 pr-4 rounded-md bg-gray-300 cursor-pointer"
                  onClick={decrementRooms}
                >
                  -
                </span>
                <span className="p-2 pl-6 pr-6 bg-[#5d0e4154]">
                  {rooms.toString().padStart(2, "0")}
                </span>
                <span
                  className="p-2 pl-4 pr-4 rounded-md bg-gray-300 cursor-pointer"
                  onClick={incrementRooms}
                >
                  +
                </span>
              </div>
            </div>
          </div>
          <div className="CheckBox w-[100%] mt-3">
            <h3 className="text-2xl font-fontMedium -mb-2 text-black lg:self-start lg:ml-2 lg:text-[16px]">
              Top Filters
            </h3>
            <FormGroup className="ml-3">
              <FormControlLabel
                className="-mb-3 "
                control={<Checkbox  />}
                label="Pool/Jacuzzi"
              />
              <FormControlLabel
                className="-mb-3 "
                control={<Checkbox  />}
                label="Wifi"
              />
              <FormControlLabel
                className="-mb-3 "
                control={<Checkbox  />}
                label="Best Rated"
              />
              <FormControlLabel
                className="-mb-3 "
                control={<Checkbox  />}
                label="Pet Friendly"
              />
              <FormControlLabel
                className="-mb-3 "
                control={<Checkbox  />}
                label="Veg Only"
              />
              <FormControlLabel
                className="-mb-3 "
                control={<Checkbox  />}
                label="Great for kids"
              />
            </FormGroup>
          </div>

          <div className="CheckBox w-[100%] mt-3">
            <h3 className="text-2xl font-fontMedium -mb-2 text-black lg:self-start lg:ml-2 lg:text-[16px]">
              Top Filters
            </h3>
            <FormControl >
              <RadioGroup
              className="!flex-col"
                row
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                defaultValue="top"
              >
                <FormControlLabel className="!-mb-3 !ml-1" value="end" control={<Radio />} label="Under ₹ 10,000" />
                <FormControlLabel className="!-mb-3 !ml-1" value="end" control={<Radio />} label="₹ 10,000 - ₹ 20,000" />
                <FormControlLabel className="!-mb-3 !ml-1" value="end" control={<Radio />} label="₹ 20,000 - ₹ 35,000" />
                <FormControlLabel className="!-mb-3 !ml-1" value="end" control={<Radio />} label="₹ 35,000 - ₹ 50,000" />
                <FormControlLabel className="!-mb-3 !ml-1" value="end" control={<Radio />} label="More than ₹ 50,000" />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </div>

      <div className="main-content flex gap-4 md:flex-col flex-wrap items-center  h-full w-[100%] pt-6 p-4 border-l-2 mt-4 border-black border-opacity-35 bg-white">
        {data.map((item) => (
            <div key={item.id} className=" w-full items-start lg:ml-6">
            <Link to={`/home-des/${item.id}`}   className="box h-[700px] flex flex-col items-center  min-w-[330px] md:w-full max-w-[1000px] md:flex-row md:h-[280px] border-2 border-black border-opacity-20 outline-none pl rounded-lg">
         
            <div className="image md:h-[95%] md:ml-2 md:-mt-1 w-[95%] md:w-[55%] mt-2 rounded-xl overflow-hidden h-[50%]">
              <img className="h-full w-full object-cover" src={slide} alt="" />
            </div>
            <div className="detail w-[95%] md:h-[80%] md:pl-3 md:flex md:justify-between">
              <div className="md:mt-2">
                <h2 className="text-xl font-primaryMedium">{item.name}</h2>
                <p className="text-sm font-primaryMedium opacity-75 -ml-1">
                  <LocationOnOutlinedIcon className="scale-[0.7]" />
                  {item.location}
                </p>
                <div className="mt-2 lg:mt-8 w-full h-14 items-center gap-4 flex gap pl-1">
                  <h3 className="text-sm font-primaryMedium">
                    {" "}
                    ◉ Upto {item.guests} Guests
                  </h3>
                  <h3 className="text-sm font-primaryMedium">
                    {" "}
                    ◉ {item.room} Rooms
                  </h3>
                  <h3 className="text-sm font-primaryMedium">
                    {" "}
                    ◉ {item.baths} Baths
                  </h3>
                </div>
                <div className=" w-full min-h-14 items-center gap-4 flex gap  border-b-2 border-black border-opacity-20 outline-none p-1 rounded-lg -mt-4">
                  <h3 className="text-md font-primaryMedium opacity-65">
                    <span  className="text-sm font-primaryMedium">Greate for: </span> 
                    Food
                  </h3>
                  <h3 className="text-md font-primaryMedium opacity-65">
                    {" "}
                    Senior Citizen
                  </h3>
                </div>

                <div className="amenities-section w-full mt-2">
                  <ul className="flex w-full justify-start gap-3  items-center">
                    <li>
                      <img className="h-10" src={sofa} alt="sitting" />
                    </li>
                    <li>
                      <img className="h-10" src={wifi} alt="wifi" />
                    </li>
                    <li>
                      <img className="h-10" src={ac} alt="air" />
                    </li>
                    <li>
                      <img className="h-10" src={bathtub} alt="bathtub" />
                    </li>
                    <li className="text-xl font-primaryBold">18+</li>
                  </ul>
                </div>
              </div>

              <div className="price-section w-full md:w-[250px] md:h-full mt-2  md:p-4 md:border-l-2 border-black border-opacity-20 md:text-center">
                <div className=" md:mt-6">
                  <p className="text-md font-primaryRegular">Best Price</p>
                  <div className="old-price text-xl mt-2 line-through opacity-65">
                    ₹{item.oldprice}
                  </div>
                  <div className="new-price text-3xl mt-2">
                    ₹{item.newprice}
                  </div>
                </div>

                <div className="checkout font-primaryLight p-3 pl-5 pr-5  ">
                  <button className="p-3 pl-10 pr-10 md:p-3 md:mt-[12px] md:text-lg w-full mt-3 text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000]  rounded-xl font-primaryMedium">
                    View
                    <ArrowForwardIcon className="ml-3" />
                  </button>
                </div>
              </div>
            </div>
          
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
