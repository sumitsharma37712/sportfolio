import {React,useRef, useState } from "react";
import {Link} from 'react-router-dom'
import {FaWhatsapp,FaEnvelope,FaInstagram,FaFacebookF,FaLinkedin} from 'react-icons/fa'
import {RiTwitterXFill} from 'react-icons/ri'
import {CiLocationArrow1} from 'react-icons/ci'
import {FaPhone } from 'react-icons/fa6'
import emailjs from '@emailjs/browser'


const Contact=()=>{
    const form =useRef()
    const [sendername, setSendername] = useState("");
    const [senderemail, setSenderemail] = useState("");
    const [senderphone, setsenderphone] = useState("");
    const [sendermessage, setsendermessage] = useState("");
    const sendEmail=(e)=>{
        e.preventDefault();
        if(sendername.length==0){
            alert(';name field require')
        }
        if(senderemail.length==0){
            alert('email field require')
        }
        if(senderphone.length==0){
            alert('senderphone filed require')
        }
        if(sendermessage.length==0){
            alert(';name filed require')
        }

        emailjs.sendForm('service_9j0x1gh', 'template_7dicmcx', form.current, '2Yptrb7kQmx5x-blX')
        .then((result) => {
            console.log(result.text);

        }, (error) => {
            console.log(error.text);
        });   
        e.target.reset()
    }



    return(
        <div>
            <div className="h-[100px]">
                <nav className="flex align-middle py-4 justify-center" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1  md:space-x-2 rtl:space-x-reverse">
                        <li class="inline-flex items-center">
                            <svg class="w-3 h-3 me-2.5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                            </svg>
                            <a href="/" class=" inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white ">
                                Home
                            </a>
                        </li>
                        <li>
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <a href="contact" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Contact Me</a>
                        </div>
                        </li>
                        
                    </ol>
                </nav>
            </div>
            <div className=" bg-black text-white">
                {/* google Maps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 ">
                    <div className="flex flex-col gap-3 px-10 py-10 ">
                        {/* google Maps */}
                        <p>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-gray-600 text-2xl inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path></svg>
                            Get In Touch
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-gray-600 text-2xl inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path></svg>
                        </p>
                        
                        <div className="flex gap-3 ">
                            <div className="py-2"><FaPhone className="text-2xl"/></div>
                            <div className="flex flex-col">
                               <span className="">Call Me</span>
                               <span className="break-normal text-sm"><Link className="nav-link" to='tel:+91 9125479651'>+91 9125479651</Link></span>
                            </div>
                        </div>
                        <div className="flex gap-3 ">
                            <div className="py-2"><CiLocationArrow1 className="text-2xl"/></div>
                            <div className="flex flex-col">
                               <span className="">Address</span>
                               <span className="break-normal text-sm">Lucknow, Uttar Pradesh</span>
                            </div>
                        </div>
                        <div className="flex gap-3 ">
                            <div className="py-2"><FaEnvelope className="text-2xl"/></div>
                            <div className="flex flex-col">
                               <span className="">Email Address</span>
                               <span className="break-normal text-sm">sumitsharma37712@gmail.com</span>
                            </div>
                        </div>
                        
                        <div className=" flex  gap-2 py-5">
                                <Link  className='nav-link border rounded-circle p-2 social-icon' to='https://www.facebook.com/profile.php?id=100025966956280' target={"__blank"}><FaFacebookF className="text-2xl " /></Link>
                                <Link  className='nav-link border rounded-circle p-2 social-icon' to='https://wa.me/9125479651' target={"__blank"}><FaWhatsapp className="text-2xl" /></Link>
                                <Link  className='nav-link border rounded-circle p-2 social-icon' to='https://www.instagram.com/sumitsharma3344/?next=%2F' target={"__blank"}><FaInstagram className="text-2xl " /></Link>
                                <Link  className='nav-link border rounded-circle p-2 social-icon' to='https://www.twitter.com/'target={"__blank"}><RiTwitterXFill className="text-2xl " /></Link>
                                <Link  className='nav-link border rounded-circle p-2 social-icon' to='https://www.linkedin.com/in/sumit-sharma-57303a230/' target={"__blank"}><FaLinkedin className="text-2xl  " /></Link>


                                {/* <a className='nav-link' href="https://www.facebook.com/profile.php?id=100025966956280" target="_blank"><FaFacebookF className="mx-4" /></a>
                                <a className='nav-link' href="https://wa.me/9125479651" target="_blank"><FaWhatsapp className="mx-4" /></a>
                                <a className='nav-link' href="https://www.instagram.com/sumitsharma3344/?next=%2F" target="_blank"><FaInstagram className="mx-4" /></a>
                                <a className='nav-link' href="https://www.twitter.com/" target="_blank"><RiTwitterXFill className="mx-4" /></a>
                                <a className='nav-link' href="https://www.linkedin.com/in/sumit-sharma-57303a230/" target="_blank"><FaLinkedin className="mx-4" /></a> */}
                            </div>
                        
                    </div>
                    <div className="">
                        {/* contact details */}
                        <div className='max-w-[500px] w-100 py-10 mx-auto px-3' >
                            <p>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-gray-600 text-2xl inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path></svg>
                                Message me
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-gray-600 text-2xl inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path></svg>
                            </p>
                            <form ref={form} onSubmit={sendEmail}className=' grid grid-rows-4  mx-auto gap-5'>
                                <input type="text" className='h-[50px] border rounded-3 text-black p-2 ' name="sendername"  placeholder="Enter Name"/>
                                <input type="email" className='h-[50px] border rounded-3 text-black p-2 ' name="senderemail" placeholder="Enter email id" />
                                <input type="number" className='h-[50px] border rounded-3 text-black p-2 ' name="senderphone" placeholder="Enter contact number" />
                                <input type="text" className='h-[50px] border rounded-3 text-black p-2 ' name="sendermessage" placeholder="Enter Massages" />
                                <button className='max-w-[150px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-4 p-2 ' type="submit" >Contact Me</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Contact