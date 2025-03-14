import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <div id="home" className="bg-[#FFFFFF]">
      <div className="max-w-[85%] mx-auto font-inter grid grid-cols-1 md:grid-cols-2 gap-8 items-center  min-h-screen">
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex flex-col items-center md:items-start justify-start space-y-5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            I'm <span className="text-[#a78bfa]">Madhavan S</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold flex gap-2">
            <span className="text-[#047857]">I'm a</span>
            <Typewriter
              options={{
                strings: [
                  "Front-end Developer.",
                  "Python Developer.",
                  "Designer.",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>
          {/* About Me */}
          <p className="text-lg md:text-xl text-gray-700 font-medium">
          As a front-end developer, I specialize in transforming ideas into interactive and visually appealing web applications. With expertise in HTML, CSS, JavaScript, and modern frameworks like React, I build user-friendly interfaces that are fast, accessible, and responsive across all devices.
          </p>

          {/* Contact Information */}
          <div className=" flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-3 text-lg md:text-lg font-semibold ">
            <div className="flex items-center gap-1.5">
              <FaLocationDot className="text-[#fe5617]" size={20} />
              <span>Kumbakonam</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FaPhoneAlt className="text-[#fe5617]" size={20} />
              <span>9677477005</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FaEnvelope className="text-[#fe5617]" size={20} />
              <span>madhavansenthil0204@gmail.com</span>
            </div>
          </div>
          {/* Button */}
          <div className="bg-[#713f12] text-[#ffffff] px-5 py-2 rounded-2xl font-bold ">
            <a href="/Madhavan-Resume.pdf" download="Madhavan-Resume.pdf">Download CV</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="order-1 lg:order-2 flex justify-end items-center">
          <img
            className="w-[85%] rounded-[30px]"
            src="/profile.jpg"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
