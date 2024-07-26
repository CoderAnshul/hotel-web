import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <div className='min-h-[50vh] w-full bg-[#000416] flex justify-center pb-16 xl:h-[25vh]'>
      <div className='w-[85%] flex flex-wrap justify-between gap-10 text-white pt-8'>
        <div className="box1 min-w-[250px] mr-8 flex-1  max-w-[300px]">
          <h2 className='text-5xl md:text-3xl font-primaryBold mb-4'>AVENA</h2>
          <p className='opacity-[0.6] text-sm'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, eligendi! Id, maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quae quibusdam cupiditate.
          </p>
          <button className="p-3 pl-10 pr-10 mt-8 bg-[#5D0E41] text-white transition-all hover:bg-[#fff] hover:text-black font-Barlow rounded-md">
            Explore More
          </button>
        </div>

        <div className="box2 min-w-[150px] flex-1 md:ml-24 md:-mr-8">
          <h4 className='text-lg mb-4 font-Barlow'>Product</h4>
          <ul className='opacity-[0.6]'>
            <Link to={"/"}><li className='mb-2'>Home</li></Link>
            <Link to={"/find-hotel"}><li className='mb-2'>Find Hotel</li></Link>
            <Link to={"/about"}><li className='mb-2'>About</li></Link>
          </ul>
        </div>

        <div className="box3 min-w-[150px] flex-1">
          <h4 className='text-lg mb-4 font-Barlow'>Company</h4>
          <ul className='opacity-[0.6]'>
            <Link to={"/terms-of-use"}><li className='mb-2'>Term of Use</li></Link>
            <Link to={"/privacy-policy"}><li className='mb-2'>Privacy Policy</li></Link>
          </ul>
        </div>

        <div className="box4 min-w-[250px] flex-1 max-w-[300px]">
          <h4 className='text-lg mb-4 font-Barlow'>Contact</h4>
          <ul className='opacity-[0.6]'>
            <Link to={"mailto:avena@gmail.com"}><li className='mb-2'>Avena@gmail.com</li></Link>
            <Link to={"tel:07510359575"}><li className='mb-2'>0751-0359575</li></Link>
            <li className='mb-2 max-w-[300px]'>Apt. 911 15223 Heathcote Via, South Jalisahaven, LA 77256-2799</li>
            <div className='flex gap-3 mt-6'>
              <Link to={"https://instagram.com"}><InstagramIcon/></Link>
              <Link to={"https://facebook.com"}><FacebookIcon/></Link>
              <Link to={"https://x.com"}><XIcon/></Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;
