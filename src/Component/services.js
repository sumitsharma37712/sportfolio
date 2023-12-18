import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa"

import Serviceapi from './API/serviceapi'

const Service = () =>{

    const [serviceData,setserviceData]=useState(Serviceapi)

    return(

        <div>
            <div className='bg-dark text-white'>
                <div className="h-[100px] bg-dark">
                    <nav className="flex align-middle py-4 justify-center" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center  rtl:space-x-reverse ol">
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
                            <svg className="rtl:rotate-180 w-3 h-2 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <a href="service" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Services</a>
                        </div>
                        </li>
                        
                    </ol>
                    </nav>
                </div>
                <div className="h-100 grid grid-cols-1 py-5  xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4 px-2">
                    {
                        Object.values(serviceData).map((services,index) => {
                            // console.log(user) 
                            const {servicename,discriptions}=services;

                            return(
                                <div className="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
                                {/* <a href="#">
                                    <img className="rounded-t-lg" src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" alt="" />
                                </a> */}
                                <div className="card border-0 bg-black "id={index+1}>
                                    <div className='card-header'>
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{servicename}</h5>
                                        </a>
                                    </div>
                                    <div className='card-body'>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{discriptions}</p>
                                    </div>
                                    <div className='card-footer'>
                                        <div href="#" className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Read more <div className="px-1"></div> <FaArrowRight/>
                                        </div>
                                    </div>                                   
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>


    )

}

export default Service