import React from 'react'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <div className='min-h-[50vh] w-full bg-[#000416] flex justify-center '>
        <div className='w-[85%]  flex justify-between gap-10 flex-wrap text-white pt-8'>
            <div className="box1 w-[25%]">
                <h2 className='text-3xl font-primaryBold mb-4'>AVENA</h2>
                <p className='w-[80%] opacity-[0.6] text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, eligendi! Id, maiores.</p>
                <button className="p-3 pl-10 pr-10 mt-14 bg-[#5D0E41] text-white transition-all hover:bg-[#fff] hover:text-black font-Barlow rounded-xl">Explore More</button>
            </div>
            <div className="box2">
                <h4 className='text-lg mb-4 font-Barlow'>Product</h4>
                <ul className='opacity-[0.6]'>
                    <Link to={"/"}><li className='mb-2 '>Home</li></Link>
                    <Link><li className=''>Find Hotel</li></Link>
                    <Link><li className=''>About</li></Link>
                </ul>
            </div>
            <div  className="box3">
                <h4 className='text-lg mb-4 font-Barlow'>Company</h4>
                <ul className='opacity-[0.6]'>
                    <Link><li className='mb-2 '>Term of Use</li></Link>
                    <Link><li className='mb-2'>Privacy Policy</li></Link>
                </ul>
            </div>
            <div className="box4 w-[25%]">
                <h4 className='text-lg mb-4 font-Barlow'>Contact</h4>
                <ul className='opacity-[0.6]'>
                    <Link><li className='mb-2'>Avena@gmail.com</li></Link>
                    <Link><li className='mb-2'>0751-0359575</li></Link>
                    <Link><li className='mb-2'>Apt. 911 15223 Heathcote Via, South Jalisahaven, LA 77256-2799</li></Link>
                    <div className='flex gap-3 mt-6'>
                       <Link><InstagramIcon/></Link> 
                       <Link><FacebookIcon/></Link> 
                       <Link><XIcon/></Link> 
                        
                        
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer