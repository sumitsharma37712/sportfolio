import React from "react";
import {Link} from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import {FaHtml5,FaBootstrap,FaReact,FaNodeJs,FaPhp,FaWordpress,FaGithub } from 'react-icons/fa'
import {IoLogoCss3,IoLogoJavascript} from "react-icons/io"
import { BiLogoTailwindCss, BiLogoMongodb } from "react-icons/bi";
import { SiMysql } from "react-icons/si";

const About =()=>{


    return(
        <div>
            <div className="h-[100px] bg-dark">
                <nav className="flex align-middle py-4 justify-center" aria-label="Breadcrumb">
                <ol class="inline-flex items-center  rtl:space-x-reverse ol">
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
                            <svg class="rtl:rotate-180 w-3 h-2 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <a href="/about" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">About Me</a>
                        </div>
                        </li>
                        
                    </ol>
                </nav>
            </div>
            <div className="flex flex-col-reverse md:flex-row  dark:bg-black text-white sm:gap-0">
                <div className="flex flex-col col-sm-12 col-lg-8 col-md-6 justify-center items-start px-4">  
                    <h2>My Name is Sumit Sharma and I  am a </h2>
                    <h2 className="block sm:flex gap-2"><Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("<span class='text-red-500'>Backend Developer</span>")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("<span class='text-red-500'>Frontend Developer</span>")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("<span class='text-red-500'>Software Developer</span>")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("<span class='text-red-500'>Database Management</span>")
                                .start()
                        }}
                    /></h2>
                    <p>1 years experienced Back End Developer with hands-on experience in identifying web-based user interactions along with designing and implementing highly-responsive user interface components by deploying React concepts. Proficient in translating designs and wireframes into high-quality code, and writing application interface code via JavaScript and Node JS workflows. Adept at monitoring and maintaining frontend performance and troubleshooting and debugging the same to bolster overall performance.</p>

                    <p>I am skilled for backend Developer and i build a web application for all i most using skills html, css, nodejs, reactjs,mongoDB for Database Management.</p>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-6  px-4 py-3">
                        <img src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="images" className="" />
                        
                </div>
            </div>

            {/* skills design */}

            <div className="grid grid-cols-1 md:grid-cols-2 bg-dark text-white p-4 gap-5 sm:p-0 sm:gap-0">
                <div className="grid grid-cols-1  bg-dark">
                    <div className="bg-dark text-white py-2 md:p-5">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-blue-700 dark:text-white">FrontEnd Design</span>
                            <span className="text-sm font-medium text-blue-700 dark:text-white">80%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{width:'80%'}}></div>
                        </div>
                    </div>

                    <div className="bg-dark text-white py-2 md:p-5">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-blue-700 dark:text-white">Backend Develop</span>
                            <span className="text-sm font-medium text-blue-700 dark:text-white">77%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{width:'77%'}}></div>
                        </div>
                    </div>

                    <div className="bg-dark text-white py-2 md:p-5">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-blue-700 dark:text-white">Programming</span>
                            <span className="text-sm font-medium text-blue-700 dark:text-white">70%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{width:'70%'}}></div>
                        </div>
                    </div>

                    <div className="bg-dark text-white py-2 md:p-5">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-blue-700 dark:text-white">Web Development</span>
                            <span className="text-sm font-medium text-blue-700 dark:text-white">70%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{width:'70%'}}></div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 justify-items-center items-center gap-3  bg-dark">
                    <FaHtml5 className="skill" />
                    <IoLogoCss3 className="skill" />
                    <IoLogoJavascript className="skill" />
                    <FaBootstrap className="skill" />
                    <BiLogoTailwindCss className="skill" />
                    <FaReact className="skill" />
                    <FaNodeJs className="skill" />
                    <FaPhp className="skill" />
                    < BiLogoMongodb className="skill" />
                    <SiMysql className="skill" />
                    <FaWordpress className="skill" />
                    <FaGithub className="skill" />
                </div>
            </div>


            {/* education and exprience details */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-100 bg-black text-white p-4 gap-5 sm:gap-0">
                <div  className="md:p-8">
                    {/* exprience details */}
                    <h3 className="">Experience </h3>
                    <hr className="bg-gradient-to-r from-indigo-500 h-[5px]"/>

                    {/* <div className="flex justify-between text-sm py-2">
                        <div className="">
                            <h6>BTEUP Board</h6>
                            <p>Diploma (Computer Science & Engineering)</p>
                        </div>
                        <div>
                            <p>2019-2022</p>
                        </div>
                    </div> */}
                    <div className="flex justify-between text-sm py-2">
                        <div className="">
                            <h6>Boolean ai Pvt. Ltd.</h6>
                            <p>Backend Developer</p>
                        </div>
                        <div>
                            <p>2023-present</p>
                        </div>
                    </div>
                    <div className="flex justify-between text-sm py-2">
                        <div className="">
                            <h6>Softpro India Pvt. Ltd.</h6>
                            <p>Appernticeship Traning</p>
                        </div>
                        <div>
                            <p>2022-2023</p>
                        </div>
                    </div>



                </div>
                <div className="md:p-8">
                    {/* education details */}
                    <h3 className="">Education </h3>
                    <hr className="bg-gradient-to-r from-indigo-500 h-[5px]"/>
                    <div className="flex justify-between text-sm py-2">
                        <div className="">
                            <h6>BTEUP Board</h6>
                            <p>Diploma (Computer Science & Engineering)</p>
                        </div>
                        <div>
                            <p>2019-2022</p>
                        </div>
                    </div>
                    <div className="flex justify-between text-sm py-2">
                        <div className="">
                            <h6>UP Board</h6>
                            <p>Intermediate</p>
                        </div>
                        <div>
                            <p>2018-2019</p>
                        </div>
                    </div>
                    <div className="flex justify-between text-sm py-2">
                        <div className="">
                            <h6>UP Board</h6>
                            <p>High School</p>
                        </div>
                        <div>
                            <p>2016-2017</p>
                        </div>
                    </div>
                    



                </div>

            </div>


        </div>
    )

}
export default About;