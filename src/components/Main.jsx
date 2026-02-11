import React from "react";
import { images, socialIcons } from "../data";

const Main = () => {
  return (
    <main className="flex flex-col-reverse md:flex-row max-w-7xl mx-auto">
      <div className="left px-2 md:pl-[25px] md:pr-0">
        <div className="w-full md:w-[600px] h-auto md:h-[376px] pt-8 md:pt-[110px]">
          <h1 className="text-[24px] md:text-[36px]">
            Hello I'm{" "}
            <span className="font-extrabold text-[32px] md:text-5xl">
              Hemal Varsani.
            </span>
            <br />
            <span className="font-extrabold text-[32px] md:text-5xl leading-[40px] md:leading-[65px]">
              Full Stack Developer
            </span>
            <br />
            Based in <span className="text-extrabold">Winnipeg, Canada.</span>
          </h1>
          <p className="text-gray-500 mt-5 md:mt-[32px] text-sm md:text-base leading-relaxed">
            I'm a passionate Full Stack Developer specializing in React and Node.js, 
            with hands-on experience building real-world applications at a startup. 
            I love crafting seamless user experiences and writing clean, maintainable code. 
            Currently expanding my skill set with Java and DSA while dreaming of one day 
            building an indie game.
          </p>
        </div>
        <div>
          <ul className="flex gap-3 mt-8 md:mt-[80px] mb-8 md:mb-0">
            <li className="list-none">
              <a
                href="https://github.com/varsanihemal"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 w-12 h-12 md:w-[53px] md:h-[52px] flex justify-center items-center rounded-lg cursor-pointer hover:border-blue-500 transition-colors duration-200"
              >
                <img src={socialIcons.icon1} alt="GitHub" className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </li>
            <li className="list-none">
              <a
                href="https://www.reddit.com/user/varsanihemal/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 w-12 h-12 md:w-[53px] md:h-[52px] flex justify-center items-center rounded-lg cursor-pointer hover:border-blue-500 transition-colors duration-200"
              >
                <img src={socialIcons.icon2} alt="Reddit" className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </li>
            <li className="list-none">
              <a
                href="https://discord.com/channels/@me"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 w-12 h-12 md:w-[53px] md:h-[52px] flex justify-center items-center rounded-lg cursor-pointer hover:border-blue-500 transition-colors duration-200"
              >
                <img src={socialIcons.icon3} alt="Discord" className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-auto px-2 md:px-0">
        <img src={images.mainImg} alt="" className="w-full md:w-auto mt-6 md:mt-10" />
      </div>
    </main>
  );
};

export default Main;