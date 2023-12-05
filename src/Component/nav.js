import{ React, useState} from 'react';
import { Link } from 'react-router-dom';
// import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai';

import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedin, FaBars } from 'react-icons/fa'
import { RiTwitterXFill } from "react-icons/ri";
const Nav = () =>{
    
    const [showNavbar, setShowNavbar] = useState(false)

  const handleNav = () => {
    setShowNavbar(!showNavbar)
  }
        return(
            <div>
                <div className=" top-0  h-[50px] sm:h-[70px] flex w-full flex-wrap items-center justify-between bg-[black] py-2 text-white shadow-lg hover:text-white focus:text-white dark:bg-black-600 lg:py-4">
                    <div className='flex justify-beetween'>
                        <h2 className=' ps-4 hidden sm:block'>SUMIT SHARMA</h2>
                    </div>
                    <div className='hidden lg:block py-2'>
                        <ul className='flex align-middle justify-center'>
                            <li className="nav-item mt-2">
                                <Link className="nav-link" to="./">Home</Link>
                            </li>
                            <li className="nav-item mt-2">
                                <Link className="nav-link" to="./about">About Me</Link>
                            </li>
                            <li className="nav-item mt-2">
                                <Link className="nav-link" to="./service">Services</Link>
                            </li>
                            <li className="nav-item mt-2">
                                <Link className="nav-link" to="./project">Projects</Link>
                            </li>
                            <li className="nav-item mt-2">
                                <Link className="nav-link" to="./contact">Contact Me</Link>
                            </li>
                        </ul>
                    </div>



                
                    
                    <div className=" flex justify-between ">
                        <Link  className='nav-link' to='https://www.facebook.com/profile.php?id=100025966956280' target={"__blank"}><FaFacebookF className="mx-4 " /></Link>
                        <Link  className='nav-link' to='https://wa.me/9125479651' target={"__blank"}><FaWhatsapp className="mx-4 " /></Link>
                        <Link  className='nav-link' to='https://www.instagram.com/sumitsharma3344/?next=%2F' target={"__blank"}><FaInstagram className="mx-4 " /></Link>
                        <Link  className='nav-link' to='https://www.twitter.com/'target={"__blank"}><RiTwitterXFill className="mx-4 hidden sm:block" /></Link>
                        <Link  className='nav-link' to='https://www.linkedin.com/in/sumit-sharma-57303a230/' target={"__blank"}><FaLinkedin className="mx-4 " /></Link>


                        {/* <a className='nav-link' href="https://www.facebook.com/profile.php?id=100025966956280" target="_blank"><FaFacebookF className="mx-4" /></a>
                        <a className='nav-link' href="https://wa.me/9125479651" target="_blank"><FaWhatsapp className="mx-4" /></a>
                        <a className='nav-link' href="https://www.instagram.com/sumitsharma3344/?next=%2F" target="_blank"><FaInstagram className="mx-4" /></a>
                        <a className='nav-link' href="https://www.twitter.com/" target="_blank"><RiTwitterXFill className="mx-4" /></a>
                        <a className='nav-link' href="https://www.linkedin.com/in/sumit-sharma-57303a230/" target="_blank"><FaLinkedin className="mx-4" /></a> */}
                    </div>
                    <div className="lg:hidden z-50 text-white" onClick={handleNav} >
                        <FaBars size={20} className=" mr-4 cursor-pointer" />
                    </div>
                    <div className={showNavbar ?'overflow-hidden h-screen w-full  ease-in duration-500 bg-black/90 text-white lg:hidden   absolute left-0 top-[-100%]  ' : 'overflow-hidden hidden absolute left-0 top-[-100%] w-full h-screen ease-in-out duration-500'}>
                            <ul className="h-screen  text-center py-48 flex flex-col gap-10 ">
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="./">Home</a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="./about">About Me</a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="./service">Services</a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="./project">Projects</a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="./contact">Contact Me</a>
                                </li>

                            </ul>
                        </div>
                    
                </div>

            </div>



        )


}

export default Nav; 