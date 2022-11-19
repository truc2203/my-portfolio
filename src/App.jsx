import { useState } from "react";
import Spline from "@splinetool/react-spline";
import {  IoLogoGithub, IoLogoGoogle, IoLogoLinkedin, IoMenu } from "react-icons/io5";
import {FaUniversity} from 'react-icons/fa'
import Animation from "./img/Animation.jpg";
import Fiverr from './img/fiverr.png'
import Movies from './img/movies.png'
import Nike from './img/nike.png'
import Mobile from './img/mobile.png'
import Studious from './img/studious.png'
import Avatar from './img/avatar.jpg'
import { AnimatePresence,motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <AnimatePresence initial={false}>
    <div className="flex w-screen min-h-screen flex-col justify-center items-center relative bg-primary pb-20">
      <nav className="w-full px-6 fixed inset-x-0 top-2 flex justify-center items-center z-50">
        <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
          <p className="text-lg text-slate-200 font-medium">Truc2203</p>
          <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
            <a
              href="#home"
              className="text-base text-textBase font-medium hover:text-slate-200 cursor-pointer duration-100 ease-in-out"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-base text-textBase font-medium hover:text-slate-200 cursor-pointer duration-100 ease-in-out"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-base text-textBase font-medium hover:text-slate-200 cursor-pointer duration-100 ease-in-out"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-base text-textBase font-medium hover:text-slate-200 cursor-pointer duration-100 ease-in-out"
            >
              Contact
            </a>
            <a
              href="#"
              className="px-2 py-1 rounded-xl ml-auto text-base  hover:border-orange-400 text-textBase font-medium hover:text-slate-100 duration-100 cursor-pointer border border-textBase "
            >
              Download
            </a>
          </div>

          <div
            whileTap={{scale:0.5}}
            onClick={() => setIsActive(!isActive)}
            className="block md:hidden ml-auto cursor-pointer "
          >
            <IoMenu className="text-slate-200 text-2xl" />
          </div>

          {isActive && (
            <div
            initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1.1}}
            exit={{opacity:0,scale:0.5}}
            transition={{delay:'0.1s',type:'spring'}}
            className=" p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6">
              <a
                onClick={() => setIsActive(!isActive)}
                href="#home"
                className="text-base text-textBase font-medium hover:text-slate-200 cursor-pointer duration-100 ease-in-out"
              >
                Home
              </a>
              <a
                onClick={() => setIsActive(!isActive)}
                href="#about"
                className="text-base text-textBase font-medium hover:text-slate-200 cursor-pointer duration-100 ease-in-out"
              >
                About
              </a>
              <a
                onClick={() => setIsActive(!isActive)}
                href="#projects"
                className="text-base text-textBase font-medium hover:text-slate-200 cursor-pointer duration-100 ease-in-out"
              >
                Projects
              </a>
              <a
                onClick={() => setIsActive(!isActive)}
                href="#contact"
                className="text-base text-textBase font-medium hover:text-slate-200 cursor-pointer duration-100 ease-in-out"
              >
                Contact
              </a>
              <a
                href="#"
                className="px-2 py-1 rounded-xl text-base  hover:border-orange-400 text-textBase font-medium hover:text-slate-100 duration-100 cursor-pointer border border-textBase "
              >
                Download
              </a>
            </div>
          )}
        </div>
      </nav>

      <div className="relative w-full h-screen top-[100px]" id="home">
      <Spline scene="https://prod.spline.design/9dIgHfrEP2J3byUl/scene.splinecode" />
        <div className="absolute bottom-10 w-full flex justify-center items-center ">
          <div className="shadow-md p-4 flex items-center justify-center rounded-3xl bg-zinc-900">
            <p className="text-textBase">Press and drag to orbit</p>
          </div>
        </div>
      </div>

      {/* Main */}
      <main className="w-[80%] mt-5">
        <section
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
          id="about"
        >
          <div className="w-full h-420 flex items-center justify-center">
            <div className="w-275 h-340 bg-green-400 rounded-md relative">
              <img
                className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg"
                src={Avatar}
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-420 flex flex-col items-center justify-center">
            <p className="text-textBase text-lg text-center">
            I'm a front-end web developer seeking an entry-level position. Passionate about learning and development with a desire to apply skil s on a larger development . Eager to tackle more complex problems and continue to ﬁnd ways to maximize user efﬁciency.I hope to share my skil s, expertise, and experience with your organization and clients
            </p>
            <motion.button
            whileTap={{scale:0.8}}
            class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
              <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Download
              </span>
            </motion.button>
          </div>
        </section>

        <section className="w-full flex items-center justify-center">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(21,24,32)", color: "#ffffff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(21,24,32)",
              }}
              date="2016 - 2021"
              iconStyle={{ background: "rgb(21,24,32)", color: "#ffffff" }}
              icon={<FaUniversity />}
            >
              <h3 className="vertical-timeline-element-title text-xl">
                Industrial University of HCM City
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Computer Electronics</h4>
    
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(21,24,32)", color: "#ffffff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(21,24,32)",
              }}
              date="March 2022 - Septmeber 2022"
              iconStyle={{ background: "rgb(21,24,32)", color: "#ffffff" }}
              icon={<FaUniversity />}
            >
              <h3 className="vertical-timeline-element-title text-xl">
                CyberSoft Academy
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Frontend Development</h4>
             
            </VerticalTimelineElement>
          </VerticalTimeline>
        </section>

        <section id="projects" className="flex flex-wrap items-center justify-evenly my-24 gap-4">
              <div className="border border-slate-200 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-slate-300 duration-200">
                <p className="text-xl pb-1 text-textBase font-medium uppercase">
                  Fiverr Clone
                </p>
                <a href="https://bc27-final-fiver.vercel.app/">
                <img className="w-full object-cover h-full rounded-sm" src={Fiverr} alt="" />
                </a>
                <div className="flex flex-1 items-center justify-between ">
                  <p className="text-lg text-gray-300 font-semibold">Technologies 
                  <span className="h-[60px] block text-sm to-gray-500">
                  ReactJs, React Hook Form, React Router, Redux toolkits, Ant Design, Axios
                  </span></p>
                  <motion.a whileTap={{scale:0.8}} href="https://github.com/truc2203/bc27-final-fiver">
                    <div>
                      <IoLogoGithub className="text-textBase text-3xl cursor-pointer"/>
                    </div>
                  </motion.a>
                </div>
              </div>

              <div className="border border-slate-200 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-slate-300 duration-200">
                <p className="text-xl pb-1 text-textBase font-medium uppercase">
                  Movies
                </p>
                <a href="https://bc27-capstone-react-movies.vercel.app/">
                <img className="w-full object-cover h-full rounded-sm" src={Movies} alt="" />
                </a>
                <div className="flex flex-1 items-center justify-between ">
                  <p className="text-lg text-gray-300 font-semibold">Technologies 
                  <span className="h-[60px] block text-sm to-gray-500">
                  ReactJs, React Hook Form, React Router, Redux toolkits, Ant Design, Axios
                  </span></p>
                  <motion.a whileTap={{scale:0.8}} href="https://github.com/truc2203/bc27-capstone-react-movies">
                    <div>
                      <IoLogoGithub className="text-textBase text-3xl cursor-pointer"/>
                    </div>
                  </motion.a>
                </div>
              </div>

              <div className="border border-slate-200 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-slate-300 duration-200">
                <p className="text-xl pb-1 text-textBase font-medium uppercase">
                  Nike Store
                </p>
                <a href="https://nike-store-tau.vercel.app/">
                <img className="w-full object-cover h-full rounded-sm" src={Nike} alt="" />

                </a>
                <div className="flex flex-1 items-center justify-between ">
                  <p className="text-lg text-gray-300 font-semibold">Technologies 
                  <span className="h-[60px] block text-sm to-gray-500">
                  ReactJs, Redux, TailwindCss, React-Hot-Toast
                  </span></p>
                  <motion.a whileTap={{scale:0.8}} href="https://github.com/truc2203/nike-store">
                    <div>
                      <IoLogoGithub className="text-textBase text-3xl cursor-pointer"/>
                    </div>
                  </motion.a>
                </div>
              </div>

              <div className="border border-slate-200 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-slate-300 duration-200">
                <p className="text-xl pb-1 text-textBase font-medium uppercase">
                  Mobile Store
                </p>
                <a href="https://capstone-js-two.vercel.app/">
                <img className="w-full object-cover h-full rounded-sm" src={Mobile} alt="" />
                </a>
                <div className="flex flex-1 items-center justify-between ">
                  <p className="text-lg text-gray-300 font-semibold">Technologies 
                  <span className="h-[60px] block text-sm to-gray-500">
                    ES6, HTML5/CSS3, Bootstrap5
                  </span></p>
                  <motion.a whileTap={{scale:0.8}} href="https://github.com/truc2203/capstone_js">
                    <div>
                      <IoLogoGithub className="text-textBase text-3xl cursor-pointer"/>
                    </div>
                  </motion.a>
                </div>
              </div>

              <div className="border border-slate-200 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-slate-300 duration-200">
                <p className="text-xl pb-1 text-textBase font-medium uppercase">
                  Studious
                </p>
                <a href="https://capstone-bootstrap-team7.vercel.app/">
                <img className="w-full object-cover h-full rounded-sm" src={Studious} alt="" />

                </a>
                <div className="flex flex-1 items-center justify-between ">
                  <p className="text-lg text-gray-300 font-semibold">Technologies 
                  <span className="h-[60px] block text-sm to-gray-500">
                  HTML5/CSS3, Bootstrap5
                  </span></p>
                  <motion.a whileTap={{scale:0.8}} href="https://github.com/truc2203/capstone_bootstrap">
                    <div>
                      <IoLogoGithub className="text-textBase text-3xl cursor-pointer"/>
                    </div>
                  </motion.a>
                </div>
              </div>
        </section>

        <section id="contact" className="flex flex-col items-center justify-center w-full my-24">
          <p className="text-2xl text-gray-400 capitalize">
              Follow me on 
          </p>
          <div className="flex items-center justify-center w-full my-2 flex-wrap gap-4 ">
            <motion.a whileTap={{scale:0.8}} href="https://github.com/truc2203" className=" w-full md:w-508 px-3 md:px-8 py-5 border border-zinc-800 rounded-xl hover:border-zinc-600 duration-200 cursor-pointer flex items-center justify-center gap-3">
              <IoLogoGithub className="text-textBase text-3xl cursor-pointer"/>
              <p className="text-lg text-textBase">Github</p>
            </motion.a>
          </div>
          <div className="flex items-center justify-center w-full my-2 flex-wrap gap-4 ">
            <motion.a whileTap={{scale:0.8}} href="https://www.linkedin.com/in/truc-tran-031535250/" className=" w-full md:w-508 px-3 md:px-8 py-5 border border-zinc-800 rounded-xl hover:border-zinc-600 duration-200 cursor-pointer flex items-center justify-center gap-3">
              <IoLogoLinkedin className="text-textBase text-3xl cursor-pointer"/>
              <p className="text-lg text-textBase">LinkedIn</p>
            </motion.a>
          </div>
          <div className="flex items-center justify-center w-full my-2 flex-wrap gap-4 ">
            <motion.a whileTap={{scale:0.8}} href="#" className=" w-full md:w-508 px-3 md:px-8 py-5 border border-zinc-800 rounded-xl hover:border-zinc-600 duration-200 cursor-pointer flex items-center justify-center gap-3">
              <IoLogoGoogle className="text-textBase text-3xl cursor-pointer"/>
              <p className="text-lg text-textBase">tructt220398@gmail.com</p>
            </motion.a>
          </div>
        </section>
      </main>
    </div>
    </AnimatePresence>
  );
}

export default App;
