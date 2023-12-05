import React from "react";
import {Link} from 'react-router-dom'
import Typewriter from 'typewriter-effect'

const About =()=>{


    return(
        <div>
            <div className="h-[100px]">
                <nav className="flex align-middle py-4 justify-center" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1  md:space-x-2 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <svg className="w-3 h-3 me-2.5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                            </svg>
                            <a href="/" className=" inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white ">
                                Home
                            </a>
                        </li>
                        <li>
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <a href="about" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">About Me</a>
                        </div>
                        </li>
                        
                    </ol>
                </nav>
            </div>
            <div className="flex flex-col-reverse md:flex-row dark:bg-black text-white">
                <div className="flex flex-col  col-sm-12 col-lg-8 col-md-6 justify-center px-5 items-start">  
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

                    <p>I am skilled for backend Developer and i build a web application for all i most using skills html, css, nodejs, reactjs,mongoDB for Database Management.</p>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-6 px-5">
                        <img src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="images" className="" />
                        
                </div>
            </div>

            {/* education and exprience details */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-100 bg-black text-white p-5">
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