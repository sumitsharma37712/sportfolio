import { React, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { FaWhatsapp, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import emailjs from "@emailjs/browser";
import self from "../asset/src/imageself.png";
import Projectapi from "./API/projectapi";
import serviceapi from "./API/serviceapi";
const Home = () => {
  const [projectData, setProjectData] = useState(Projectapi);
  const [serviceData, setserviceData] = useState(serviceapi);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs .sendForm( "service_9j0x1gh", "template_7dicmcx", form.current, "2Yptrb7kQmx5x-blX" )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
      <div className="row bg-black dark:bg-dark m-0 text-white">
        {/* <div className="hero-main" style={{height:'100vh',backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}> */}
        <div
          className="hero-main aligntop bg-dark"
          style={{
            height: "100vh",
            background: "black",
            backgroundImage: `url()`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "fixed",
          }}
        >
          <div className="">
            <div className="col-lg-6 col-md-8 col-sm-12 mx-auto text-center" data-aos="zoom-in"  data-aos-anchor-placement="center-bottom"  data-aos-easing="ease-in-back"
     data-aos-delay="300">
              <h2 data-aos="fade-in"  data-aos-anchor-placement="center-bottom"  data-aos-easing="ease-in">Hello,</h2>
              <h2 >I am Sumit Sharma</h2>
              <h2 className="block px-2 mx-auto sm:flex gap-2">
                And I am a{" "}
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "<span class='text-red-500'>Backend Developer</span>"
                      )
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString(
                        "<span class='text-red-500'>Frontend Developer</span>"
                      )
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString(
                        "<span class='text-red-500'>Software Developer</span>"
                      )
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString(
                        "<span class='text-red-500'>Database Management</span>"
                      )
                      .start();
                  }}
                />
              </h2>

              <p>
                I am skilled for backend Developer and i build a web application
                for all i most using skills html, css, nodejs, reactjs,mongoDB
                for Database Management.
              </p>
              <button
                type="button"
                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 rounded-2xl dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                <a
                  href="../asset/CV/sumitresume1.pdf"
                  target={"blank"}
                  className="nav-link"
                >
                  GET CV{" "}
                </a>
              </button>
              <button
                type="button"
                className="focus:outline-none mx-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 rounded-2xl dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                <Link to="/contact" className="nav-link">
                  Let's Talk
                </Link>
              </button>
            </div>
            {/* <div className="col-lg-6 col-md-6 col-sm-12 px-5"style={{height:'100vh',backgroundImage: `url(${self})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",backgroundPosition:"fixed"}}>
                            <img src={self} className="w-100 overflow-hidden "  alt=""/>
                        </div> */}
          </div>
        </div>
        {/*About Me */}

        <div className="w-100 bg-black text-white mx-auto " id="about" data-aos="fade-up">
          <h1 className="text-2xxl py-3 font-semibold text-center hidden md:block ">
            About Me{" "}
          </h1>
          <div className="flex mx-auto flex-col md:flex-row">
            <div className="col-lg-4 col-md-6 mx-auto" data-aos="zoom-in-down">
              <img src={self} className="" alt="" />
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="col-lg-9 py-3 mx-auto">
                <h1 className="text-2xxl font-semibold md:hidden  ">
                  About Me{" "}
                </h1>
                <p data-aos="zoom-out-up">
                  1 years experienced Back End Developer with hands-on
                  experience in identifying web-based user interactions along
                  with designing and implementing highly-responsive user
                  interface components by deploying React concepts. Proficient
                  in translating designs and wireframes into high-quality code,
                  and writing application interface code via JavaScript and Node
                  JS workflows. Adept at monitoring and maintaining frontend
                  performance and troubleshooting and debugging the same to
                  bolster overall performance.
                </p>

                <button
                  type="button"
                  className="focus:outline-none  text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 rounded-2xl dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  <Link to="/contact" className="nav-link">
                    Let's Talk
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <h2 className="text-center bg-black py-5">My Skills </h2>
        <div className=" w-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  bg-black" data-aos="fade-up" data-aos-delay="1000">
          <div className="border-3 bg-stone-950 rounded-lg p-4 buttondark my-4" data-aos="zoom-in" data-aos-delay="1000">
            <h2 className="pb-4">Basic Language</h2>
            <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4" data-aos="zoom-in-left" data-aos-delay="1000">
              <div className="border-2 border-lg rounded-2xl bg-slate-800 group-hover:bg-opacity-0 buttonshade ">
                <h5 className="text-center py-2 buttonshadetext">HTML</h5>
              </div>
              <div className="border-2 border-lg rounded-2xl bg-slate-800 group-hover:bg-opacity-0 buttonshade ">
                <h5 className="text-center py-2 buttonshadetext">CSS</h5>
              </div>
              <div className="border-2 border-lg rounded-2xl bg-slate-800 group-hover:bg-opacity-0 buttonshade ">
                <h5 className="text-center py-2 buttonshadetext">JavaScript</h5>
              </div>
            </div>
          </div>
          <div className="border-3 bg-stone-950 rounded-lg p-4 buttondark my-4" data-aos="zoom-in" data-aos-delay="1000">
            <h2 className="pb-4">Frontend UI</h2>
            <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 " data-aos="zoom-in-left" data-aos-delay="1000">
              <div className="border-2 border-lg rounded-2xl bg-slate-800 group-hover:bg-opacity-0 buttonshade ">
                <h5 className="text-center py-2 buttonshadetext">React JS</h5>
              </div>
              <div className="border-2 border-lg rounded-2xl bg-slate-800 group-hover:bg-opacity-0 buttonshade ">
                <h5 className="text-center py-2 buttonshadetext">Express JS</h5>
              </div>
            </div>
          </div>
          <div className="border-3 bg-stone-950 rounded-lg p-4 buttondark my-4" data-aos="zoom-in" data-aos-delay="1000">
            <h2 className="pb-4">UI FrameWorks Design</h2>
            <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 " data-aos="zoom-in-left" data-aos-delay="1000">
              <div className="border-2 border-lg rounded-2xl bg-slate-800 group-hover:bg-opacity-0 buttonshade ">
                <h5 className="text-center py-2 buttonshadetext">BootStrap</h5>
              </div>
              <div className="border-2 border-lg rounded-2xl bg-slate-800 group-hover:bg-opacity-0 buttonshade ">
                <h5 className="text-center py-2 buttonshadetext">Tailwind</h5>
              </div>
            </div>
          </div>
          <div className="border-3 bg-stone-950 rounded-lg p-4 buttondark my-4" data-aos="zoom-in" data-aos-delay="1000">
            <h2 className="pb-4">Backend </h2>
            <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 " data-aos="zoom-in-left" data-aos-delay="1000">
              <div className="border-2 border-lg rounded-2xl bg-slate-800 group-hover:bg-opacity-0 buttonshade ">
                <h5 className="text-center py-2 buttonshadetext">Nodejs</h5>
              </div>
              <div className="border-2 border-lg rounded-2xl bg-slate-800 group-hover:bg-opacity-0 buttonshade ">
                <h5 className="text-center py-2 buttonshadetext">PHP</h5>
              </div>
            </div>
          </div>
          <div className="border-3 bg-stone-950 rounded-lg p-4 buttondark my-4"data-aos="zoom-in" data-aos-delay="1000">
            <h2 className="pb-4">Database Language</h2>
            <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              <div className="border-2 border-lg rounded-2xl bg-slate-800 group-hover:bg-opacity-0 buttonshade ">
                <h5 className="text-center py-2 buttonshadetext">mongoDB</h5>
              </div>
              <div className="border-2 border-lg rounded-2xl bg-slate-800 group-hover:bg-opacity-0 buttonshade ">
                <h5 className="text-center py-2 buttonshadetext">MySQL</h5>
              </div>
            </div>
          </div>
        </div>

        {/* What I Do */}
        <div className="w-100 bg-dark text-white mx-auto" data-aos="fade-up" data-aos-delay="1000">
          <h2 className="text-center py-3">What I Do</h2>
          <div className="grid grid-cols-1 py-5  xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4 px-2"data-aos="zoom-in" data-aos-delay="1000">
            {Object.values(serviceData).map((services,i) => {
              // console.log(user)
              const { id, servicename, discriptions } = services;

              return (
                <div className="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto" key={i}>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {servicename}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {discriptions}
                    </p>
                    <div
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more <div className="px-1"></div> <FaArrowRight />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/*build production  */}
        <h2 className="text-center py-3">My Recent Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto py-4 gap-3" data-aos="zoom-in" data-aos-delay="1000">
          {Object.values(projectData).map((user,i) => {
            return (
              <div key={i} className="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src={user.image}
                    alt="webpage"
                  />
                </a>
                <div className="py-5 px-2">
                  <a href={user.a} target="blank">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {user.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {user.discription}
                  </p>
                  <div
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more <div className="px-1"></div> <FaArrowRight />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* contact us here  */}
        <h2 id="contact" className="text-center py-3">
          Contact us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 "data-aos="zoom-in" data-aos-delay="1000">
          <div className="flex flex-col gap-3 p-10">
            {/* google Maps */}
            <p>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="text-gray-600 text-2xl inline-block"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path>
              </svg>
              Get In Touch
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="text-gray-600 text-2xl inline-block"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path>
              </svg>
            </p>

            <div className="flex gap-3 ">
              <div className="py-2">
                <FaWhatsapp className="text-2xl" />
              </div>
              <div className="flex flex-col">
                <span className="">Whatsapp Number</span>
                <span className="break-normal text-sm">+91 9125479651</span>
              </div>
            </div>
            <div className="flex gap-3 ">
              <div className="py-2">
                <CiLocationArrow1 className="text-2xl" />
              </div>
              <div className="flex flex-col">
                <span className="">Address</span>
                <span className="break-normal text-sm">
                  Lucknow, Uttar Pradesh
                </span>
              </div>
            </div>
            <div className="flex gap-3 ">
              <div className="py-2">
                <FaEnvelope className="text-2xl" />
              </div>
              <div className="flex flex-col">
                <span className="">Email Address</span>
                <span className="break-normal text-sm">
                  sumitsharma37712@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="">
            {/* contact details */}
            <div className="max-w-[500px] w-100 py-10 mx-auto">
              <p>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="text-gray-600 text-2xl inline-block"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path>
                </svg>
                Message me
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="text-gray-600 text-2xl inline-block"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path>
                </svg>
              </p>
              <form
                ref={form}
                onSubmit={sendEmail}
                className=" grid grid-rows-4  mx-auto gap-5"
              >
                <input
                  type="text"
                  className="h-[50px] border border-3 text-black border-gray-400 p-2"
                  name="sendername"
                  placeholder="Enter Name"
                />
                <input
                  type="email"
                  className="h-[50px] border border-3 text-black border-gray-400 p-2"
                  name="senderemail"
                  placeholder="Enter email id"
                />
                <input
                  type="number"
                  className="h-[50px] border border-3 text-black border-gray-400 p-2"
                  name="senderphone"
                  placeholder="Enter contact number"
                />
                <input
                  type="text"
                  className="h-[50px] border border-3 text-black border-gray-400 p-2"
                  name="sendermessage"
                  placeholder="Enter Massages"
                />
                <button
                  className="max-w-[150px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-4 p-2"
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;
