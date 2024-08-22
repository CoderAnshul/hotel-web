import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import slide1 from "../assets/Images/slide2.jpg";
import facebook from "../assets/Images/facebook.png";
import twitter from "../assets/Images/twitter.png";
import email from "../assets/Images/email.png";

const SignIn = () => {
  return (
    <>
        <div className="form  min-h-[70vh]  p-14 pt-32  mb-12 overflow-hidden">
            
            <div className="wrapper min-h-[75vh] md:h-[75vh] mb w-full flex justify-center items-center">
                <div className="content h-full w-[1050px] rounded-xl flex border-2 border-black border-opacity-20 shadow-lg">
                    <div className="left relative hidden md:flex h-full w-1/2 rounded-xl overflow-hidden">
                        <img src={slide1} className='h-full  w-full object-cover ' alt="" />
                        <div className="text w-[80%]">
                            <h1 className='uppercase text-[50px] absolute z-50 top-24 left-9 font-fatFace text-white w-[80%] leading-[55px]'>Find your perfect <span className='text-[#43ffa1]'>hotel</span> now</h1>
                        </div>
                    </div>
                    <div className="right flex flex-col items-center w-full p-10 md:w-1/2">
                    <h1 className='text-3xl font-primaryBold mb-2'>Welcome Back</h1>
                        <form action="" className='min-w-[290px] max-w-[380px] flex flex-col items-center mt-2'>

                        <div className="options flex gap-4 h-10 mt-4">
                            <Link id='facebook'><img className='h-8' src={facebook} alt="" /></Link>
                            <Link id='twitter'><img className='h-8' src={twitter} alt="" /></Link>
                            <Link id='gmail'><img className='h-8' src={email} alt="" /></Link>
                        </div>


                            <p className='mb-8'>or</p>

                        
                        <input
                            className="w-[290px] max-w-[380px] p-2 border-none rounded-lg mb-4 bg-gray-100"
                            type="text"
                            placeholder="Email"
                            name="name"
                            required
                        />
                        <input
                            className="min-w-[290px] max-w-[380px] p-2 border-none rounded-lg bg-gray-100"
                            type="password"
                            placeholder="password"
                            name="name"
                            required
                        />
                        <Link className='text-sm w-full mt-2 pl-1 opacity-65' ><p >Forgot Pasword?</p></Link>
                        
                        <button className="flex-nowrap mt-8 p-2 pl-8 pr-8 rounded-md bg-[#702B58] text-white  font-primaryRegular transition-all text-md hover:bg-[#000]">
                      Log In
                    </button>
                        </form>

                        <p className='font-primaryRegular text-sm mt-14'>Don&apos;t have an acount? <Link to="/sign-up" className='text-[#5D0E41] font-primaryMedium'>Register Now</Link> </p>

                    </div>
                </div>

            </div>
        </div>
        <Testimonials/>
        <Footer/>
    </>
  )
}

export default SignIn