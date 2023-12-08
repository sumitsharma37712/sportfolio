import React, {useState} from "react";
import Carousel from "./carousel";
// import boolean from '../asset/src/booleanai.png'
import { FaArrowRight } from "react-icons/fa";
import projectapi from './API/projectapi'
const Project =()=>{

    const [projectData,setProjectData]=useState(projectapi)


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
                            <a href="project" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
                        </div>
                        </li>
                        
                    </ol>
                </nav>
            </div>
            <div className="text-white bg-black">
                <div className="container py-3 ">
                    <Carousel/>
                </div>

                {/* projects details  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto py-4 gap-3">
                {
                    Object.values(projectData).map((user) => {
                        // console.log(user) 
                        const {id,a,name,discription,image,button}=user;

                        return(
                            <div className="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto"id={id}>
                                
                                <a href={a}>
                                    <img className="rounded-t-lg" src={image} alt="webpage" />
                                </a>
                                <div className="py-5 px-2">
                                    <a href={a} target="blank">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {discription} </p>
                                    <div href="#" className="inline-flex items-center px-3 py-2 cursor-pointer text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        {button} <div className="px-1"></div> <FaArrowRight/>
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

export default Project