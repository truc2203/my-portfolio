import { useState } from "react";
import Spline from "@splinetool/react-spline";
import {IoMenu} from 'react-icons/io5'
function App() {
  const [count, setCount] = useState(0);
  const [isActive,setIsActive] = useState(false)
  return (
    <div className="flex w-screen h-screen min-h-screen flex-col justify-center items-center relative bg-primary pb-20">
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

          <div onClick={() => setIsActive(!isActive)} className="block md:hidden ml-auto cursor-pointer ">
            <IoMenu className='text-slate-200 text-2xl'/>
          </div>

          {isActive && (
            <div className=" p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6">
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

      <div className="relative w-full h-full top-[100px]" id="home">
        <Spline scene="https://prod.spline.design/oo6IxFu8UDjFUmjD/scene.spline" />
        <div className="absolute bottom-10 w-full flex justify-center items-center ">
          <div className="shadow-md p-4 flex items-center justify-center rounded-3xl bg-zinc-900">
            <p className="text-textBase">Press and drag to orbit</p>
          </div>
        </div>
      </div>

      {/* Main */}
    </div>
  );
}

export default App;
