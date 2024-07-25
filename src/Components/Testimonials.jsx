import React from "react";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";


const label = { inputProps: { 'aria-label': 'Helpful' } };



const Testimonials = () => {

  const quotes = [
    {
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iste quasi molestias culpa perferendis et expedita rem! Perferendis aspernatur expedita minus beatae, vero id!",
      img: 'src/assets/Images/person.png',
      name:"Jay shah"
    },
    {
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iste quasi molestias culpa perferendis et expedita rem! Perferendis aspernatur expedita minus beatae, vero id!",
      img: 'src/assets/Images/person.png',
      name:"Amit shah"
    },
    {
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iste quasi molestias culpa perferendis et expedita rem! Perferendis aspernatur expedita minus beatae, vero id!",
      img: 'src/assets/Images/person.png',
      name:"Bhuvan"
    },
    {
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iste quasi molestias culpa perferendis et expedita rem! Perferendis aspernatur expedita minus beatae, vero id!",
      img: 'src/assets/Images/person.png',
      name:"Suyash"
    },
    {
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iste quasi molestias culpa perferendis et expedita rem! Perferendis aspernatur expedita minus beatae, vero id!",
      img: 'src/assets/Images/person.png',
      name:"Rahil"
    },
    {
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iste quasi molestias culpa perferendis et expedita rem! Perferendis aspernatur expedita minus beatae, vero id!",
      img: 'src/assets/Images/person.png',
      name:"Harsh Desai"
    },
  ]

    let data = [...quotes];
  return (
    <div className="testimonial-section flex justify-center text-white mt-12 pt-12 min-h-[80vh] w-full bg-[#1C2534]">
      <div className="w-[85%]">
        <h1 className="text-[64px] font-primaryMedium tracking-tighter mb-4">
          What Our Customers Say
        </h1>
        <div className="customers min-h-[60%] flex items-center border-r-2 border-opacity-75]">
          <div className="wrapper flex gap-10 swiper2">
          <Swiper
            slidesPerView={'auto'}
            navigation={true}
            spaceBetween={30}
            modules={[Navigation]}
            mousewheel={{ releaseOnEdges: true }}
            className="mySwiper"
            touchEventsTarget="container"
          >


{
    data.map((item,index) => (
        <SwiperSlide key={index} >
            <div className="box border h-72 w- p-4 bg-[#5294ff] ">
              <div className="text h-[75%] w-full border-b-[0.7px] border-solid border-gray-300 pt-14 ">
                <p className=" text-sm opacity-[0.8]">
                 {item.text}
                </p>
              </div>

              <div className="text h-[25%] flex items-center justify-between">
                <div className="flex gap-4 items-center">
                <div className="image h-8 w-8 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={item.img}
                    alt=""
                  />
                </div>
                  <p className="name text-xs font-primaryLight">{item.name}</p>
                </div>
                <div className="flex items-center">
                <Checkbox {...label} icon={<FavoriteBorder className="text-white opacity-[0.8]" />} checkedIcon={<Favorite />} />
                <p className="text-xs opacity-[0.7]">Helpful</p>
                </div>
              </div>
            </div>
        </SwiperSlide>
        
    ))
}
</Swiper>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
