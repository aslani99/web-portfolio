import Navbar from "./Navbar";
import Earth from "./Earth";
// import StarBackground from "./StarBackground";
import {FaDownload} from "react-icons/fa";
import "./Header.css";



const Header = () => {
  return (
    <div
      className="w-auh-auto h-fill bg-cover bg-center border-b-2 border-b-[#4169E1]"
      style={{ backgroundImage: 'url(/2k_stars_milky_way.jpg)' }}

      id="hero"
      
    >
      <Navbar />


      <div className="h-16">

      </div>


      <div className="grid grid-cols-3 px-2 sm:h-auto 2xl:h-screen" >
        <div className="sm:h-auto 2xl:h-screen flex justify-between flex-col">
          <div className="flex shrink-0 items-center justify-end">
            <img
              alt="Moon"
              src="/quarter-moon.png"
              className="h-auto w-[clamp(25px,6vw,120px)]"
            />
          </div>
          <img src="/mohammad.png" alt="Image mmd" className="sm:h-auto 2xl:h-screen " />
        </div>

        <div className="sm:h-auto 2xl:h-screen flex items-center justify-center text-white text-center">
          <div className="w-full max-w-[90vw]">
            <h1 className="font-extrabold mb-[clamp(6px,1vw,16px)] text-[clamp(12px,3vw,48px)] text-nowrap">
              Hi, I'm Mohammad 👋
            </h1>
            <h2 className="font-semibold mb-[clamp(16px,3vw,24px)] text-indigo-300 text-[clamp(10px,2vw,32px)]">
              Front-End Developer
            </h2>
            <p className="mb-[clamp(8px,2vw,32px)] text-gray-300 text-[clamp(7px,2vw,20px)] px-2">
              I build modern, responsive, and accessible web applications using
              React, Tailwind CSS, and JavaScript. Let's create something
              exceptional — together.
            </p>

            <div className="flex flex-col sm:flex-row flex-nowrap gap-[clamp(4px,1vw,16px)] justify-center text-[clamp(6px,1vw,16px)] px-[clamp(4px,1vw,16px)]">
              <a
                href="#projects"
                className=" bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-[clamp(1px,1vw,8px)] px-[clamp(1px,1vw,16px)] rounded-lg transition duration-300 text-nowrap"
              >
                See My Projects
              </a>
              <a
                href="/Mohammad Aslani Resume.pdf"
                target="_blank"
                className="inline-flex justify-center items-center border border-white hover:bg-white hover:text-black text-white font-semibold px-[clamp(1px,1vw,16px)] py-[clamp(1px,1vw,8px)] rounded-lg transition duration-300 w-[clamp(auto,100vw,180px)] gap-2 "
              >
                <FaDownload />Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className=" sm:h-auto 2xl:h-screen flex items-center">
          <Earth />
        </div>
      </div>
    </div>
  );
};

export default Header;
